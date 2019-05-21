// normalized data structure for results

export interface PbItem {

  id: string;
  title: string;
  date: Date;
  transcriptUrl?: string;
  hasOnlineReadingRoom: boolean;
  description: string[];
  mediaType: string;
  hasNoDate: boolean;
  genres: string[]|undefined;
  creators: string[];
  raw?: any;
}
