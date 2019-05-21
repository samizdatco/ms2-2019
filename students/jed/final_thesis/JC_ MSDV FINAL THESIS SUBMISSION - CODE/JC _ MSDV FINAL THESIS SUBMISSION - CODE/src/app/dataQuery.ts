import { Injectable } from '@angular/core'; // injectable required for including in constructor

import {Observable, defer, pipe, of, empty} from 'rxjs'; // rxjs is allowing for the repeated data query in getItems
import {map, concat, mergeMap} from 'rxjs/operators'; 
import {ajax} from 'rxjs/ajax';

import * as parser from 'fast-xml-parser'; // parsing xml from aapb to json
import * as querystring from 'querystring'; // querystring makes the url to query the api
import * as moment from 'moment'; // parsing and resolving date issues

import {PbItem} from './pbItem'; // model for the aapb data


// model to retreive the aapb data

interface RawPbInstantiation {
  instantiationDate: string,
  instantiationMediaType: string
}

interface RawPbCreator {
  creator: string
}

// is the pbcore instantiation a single thing or an array
interface RawPbItem {
  id: string,
  title: string,
  xml2json: {
    pbcoreDescriptionDocument: {
      pbcoreAssetDate: string,
      pbcoreDescription: string[],
      pbcoreInstantiation: RawPbInstantiation|RawPbInstantiation[],
      pbcoreAnnotation: string[],
      pbcoreGenre: string[]|undefined,
      pbcoreCreator: RawPbCreator|RawPbCreator[]|undefined
    }
  }
}

// annotation to tell angular we can inject the class DataQuery
@Injectable()
export class DataQuery {

  private readonly baseUrl = 'http://americanarchive.org/api.json';
  private readonly queryParams = {
    fl: 'id,title,xml,access_types',
    rows: 100,
    start: 0
  };

  // repeats the searchterm in order user set number set number of responses
  search(searchTerm: string, pageSize: number = 50): Observable<PbItem[]> {
    
    const getItems: ((start?: number) => Observable<PbItem[]>) = (start: number = undefined) => { // observable is a promise that keeps promising to get more than 1 result
      return defer(() => this.getBatch(searchTerm, pageSize, start)).pipe( // defer doesn't do the work until you ask it to 
        mergeMap(({items, nextStart}, idx) => {
          const filteredItems = items
            .filter(x => this.hasInstatiations(x))
            .filter(x => this.hasInstantiationDate(x))
            .map(x => this.entryToPbItem(x));
          const items$ = of(filteredItems);
          const isFinished = nextStart >= 0;
          const next$ = isFinished ? getItems(nextStart) : empty();
          return items$.pipe(concat(next$));
        })
      );
    };

    return getItems();
  }

  getById(id: string): Promise<PbItem> {
    const queryParams = {
      ...this.queryParams,
      q: `id:${id}`,
      start: 0,
      rows: 1,
    }
    const url = this.baseUrl + '?' + querystring.stringify(queryParams);
    return fetch(url).then(x => x.json())
      .then(res => {
        const pbItems = this.rawDataToRawPbItem(res.response.docs);
        return this.entryToPbItem(pbItems[0]);
      })
  }

  // function within DataQuery
  private makeQuery(searchTerm: string): string {
    return `${searchTerm} AND access_types:online`;
  }

  // helper used in getItems
  private getBatch(searchTerm: string, pageSize: number, start: number = 0): Observable<{items: RawPbItem[], nextStart: number}> {
    const queryParams = {
      ...this.queryParams,
      q: this.makeQuery(searchTerm),
      start: start,
      rows: pageSize
    };
    //console.log('query params', queryParams);
    const url = this.baseUrl + '?' + querystring.stringify(queryParams);
    return ajax.getJSON(url).pipe(
      map((json: any) => {
        //console.log('json len', json.response.docs.length, pageSize)
        return {       
          items: this.rawDataToRawPbItem(json.response.docs),
          nextStart: json.response.docs.length === pageSize ? (start + pageSize) : -1
        }
      })
    );
  }

  // transforms each element in the RawPbItems and adds xml2json info
  private rawDataToRawPbItem(docs: any[]): RawPbItem[] {
    const docsWithParsedXml: RawPbItem[] = docs.map((doc: any) => {
      return {
        ...doc,
        xml2json: parser.parse(doc.xml)
      }
    });
    //console.log('doc with parsed xml is', docsWithParsedXml);
    return docsWithParsedXml;
  }

  // checks to see if each item have the pbScoreInstantiation 
  private hasInstatiations(raw: RawPbItem): boolean {
    return raw.xml2json.pbcoreDescriptionDocument
      && raw.xml2json.pbcoreDescriptionDocument.pbcoreInstantiation !== undefined;
  }

  private hasInstantiationDate(raw: RawPbItem): boolean {
    const instantiations = this.getInstantiations(raw);
    for (let i = 0; i < instantiations.length; i++) {
      if (instantiations[i].instantiationDate) {
        return true;
      }
    }
    if (raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate) {
      return true;
    }
    return false;
  }

  // makes each item return as an array
  private getInstantiations(raw: RawPbItem): RawPbInstantiation[] {
    return this.asArray(raw.xml2json.pbcoreDescriptionDocument.pbcoreInstantiation);
  }

  private readonly minimumDate = moment('1910-01-01');

  // gets the array and uses the first element as the date and returns in terms of PbItem (not rawpbitem)
  private entryToPbItem(raw: RawPbItem): PbItem {
    const instantiations = this.getInstantiations(raw);
    let firstInstantiationWithDate: RawPbInstantiation = undefined;
    for (let i = 0; i < instantiations.length; i++) {
      if (instantiations[i].instantiationDate
        && !Number.isNaN(moment(instantiations[i].instantiationDate, 'YYYY-MM-DD').toDate().getUTCFullYear())) {
        firstInstantiationWithDate = instantiations[i];
        break;
      }
    }
    let dateStr: string;
    if (firstInstantiationWithDate) {
      dateStr = firstInstantiationWithDate.instantiationDate;
    } else if (Array.isArray(raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate)) {
      dateStr = raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate[0];
    } else {
      dateStr = raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate;
    }
    // console.log('fucking date string is', dateStr);
    // if (typeof(dateStr) !== 'string') {
    //   dateStr = dateStr[0];
    //   console.log('fixed is ', dateStr);
    // }
    let date = moment(dateStr, 'YYYY-MM-DD').toDate();
    //console.log('date is ', raw, instantiations, firstInstantiationWithDate, dateStr, date)
    if (date.getTime() > Date.now()) {
      console.error('article is from the future!!', raw)
      date = new Date();
    }
    if (date.getTime() < moment('1900-01-01', 'YYYY-MM-DD').toDate().getTime()) {
      console.error('article is in the past!', dateStr, raw.title, raw);
      date = new Date();
    }

    let hasNoDate: boolean = false;
    if (date.getTime() < this.minimumDate.toDate().getTime()) {

      if (raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate) {
        let dateStr;
        if (Array.isArray(raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate)) {
          dateStr = raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate[0];
        } else {
          dateStr = raw.xml2json.pbcoreDescriptionDocument.pbcoreAssetDate;
        } 
        date = moment(dateStr, 'YYYY-MM-DD').toDate();
      } else {
        date = new Date();
        hasNoDate = true;
        //console.log('below minimum date and no asset date', raw)
      }

    }


    if (Number.isNaN(date.getUTCFullYear())) {
      //console.log('bad date', dateStr, raw)
      date = new Date();
      hasNoDate = true;
    }

    const mediaType = firstInstantiationWithDate
      ? firstInstantiationWithDate.instantiationMediaType
      : '';
    const description = this.asArray(raw.xml2json.pbcoreDescriptionDocument.pbcoreDescription);
    const genres = raw.xml2json.pbcoreDescriptionDocument.pbcoreGenre === undefined
      ? undefined
      : this.asArray(raw.xml2json.pbcoreDescriptionDocument.pbcoreGenre);
    return {
      id: raw.id,
      title: raw.title,
      date: date,
      transcriptUrl: this.getRawPbItemTranscript(raw),
      hasOnlineReadingRoom: this.getRawPbItemHasOnlineReadingRoom(raw),
      description: description,
      mediaType: mediaType,
      hasNoDate: hasNoDate,
      genres: genres,
      creators: this.getCreators(raw.xml2json.pbcoreDescriptionDocument.pbcoreCreator),
      raw: raw.xml2json  
    }
  }

  private getCreators(creators: RawPbCreator|RawPbCreator[]|undefined): string[] {
    if (! creators) {
      return [];
    }
    if (! Array.isArray(creators)) {
      return [(<RawPbCreator>creators).creator];
    }
    return (<RawPbCreator[]>creators).map(c => c.creator);
  }

// tests the annotation array for transcripts
  private readonly transcriptUrlRegex = /^http.*transcript.*$/;

  private getRawPbItemTranscript(raw: RawPbItem): string|undefined {
    if (raw.xml2json.pbcoreDescriptionDocument && raw.xml2json.pbcoreDescriptionDocument.pbcoreAnnotation) {
      const annotationArray = raw.xml2json.pbcoreDescriptionDocument.pbcoreAnnotation;
      for (let i = 0; i < annotationArray.length; i++) {
        //console.log('anno', annotationArray[i]);
        //annotationArray[i] = 'http://a-transcript.json';
        if (this.transcriptUrlRegex.test(annotationArray[i])) {
          return annotationArray[i];
        }
      }
    }
    return undefined;
  }

// checks to return if the online reading room attribute is true or false 
  private getRawPbItemHasOnlineReadingRoom(raw: RawPbItem): boolean {
    if (raw.xml2json.pbcoreDescriptionDocument && raw.xml2json.pbcoreDescriptionDocument.pbcoreAnnotation) {
      const annotationArray = raw.xml2json.pbcoreDescriptionDocument.pbcoreAnnotation;
      return annotationArray.indexOf('Online Reading Room') !== -1;
    }
    return false;
  }

  private asArray<T>(x: T|T[]): T[] {
    return Array.isArray(x) ? x : [x];
  }
}
