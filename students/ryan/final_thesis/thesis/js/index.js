Promise.all([
  d3.json('data/boroughs.geojson'),
  d3.json('data/HOLC_All_Years.geojson'),
]).then((json) => {
  ////////////// LOAD DATA ////////////////
  var boroughs = json[0];
  var holc = json[1];
  /////////////////////////////////////////

  //// GET MAX VALUES FOR KEY COLUMNS /////
  let max = (() => {
    let pctWhiteMax = [],
        pctHomeownershipMax = [],
        medianHomeValueMax = [],
        medianHomeValue2010Max = [];
    holc.features.forEach((holcZone) => { // for each holc zone
      holcZone.properties.census_match_data.forEach((censusYear) => { // for every year I have data
        let coverageThreshold = 0.6 // set the minimum threshold for coverage % to include
        if (censusYear.metric_coverage_pct.pct_white >= coverageThreshold) {
          pctWhiteMax.push(censusYear.pct_white);
        };
        if (censusYear.metric_coverage_pct.pct_homeownership >= coverageThreshold) {
          pctHomeownershipMax.push(censusYear.pct_homeownership);
        };
        if (censusYear.metric_coverage_pct.median_home_value >= coverageThreshold) {
          medianHomeValueMax.push(censusYear.median_home_value);
          medianHomeValue2010Max.push(censusYear.median_home_value_2010);
        };
      })
    });
    return {
      "pctWhite":d3.max(d3.values(pctWhiteMax)),
      "pctHomeownership":d3.max(d3.values(pctHomeownershipMax)),
      "medianHomeValue":d3.max(d3.values(medianHomeValueMax)),
      "medianHomeValue2010":d3.max(d3.values(medianHomeValue2010Max))
    }
  })(); // invoke immediately
  /////////////////////////////////////////

  ////////////// SCROLLAMA ////////////////
  // initialize the scrollama
  var scroller = scrollama();
  init();


  function init() { // everything inside this function happens once on start-up
    ///// DATA STUFF /////
    // console.log(loadExplore);

    // i. DRAW THE MAPS
    drawHolc();
    drawBoroughs();

    // ii. DRAW SPARK LINES FOR COMPARISONS
    drawSparkLinesComparisons('manhattan',upperEastSide,harlem);
    drawSparkLinesComparisons('queens',littleNeck,brookvilleRosedale);
    drawSparkLinesComparisons('staten',todtHill,newBrighton);
    drawSparkLinesComparisons('brooklyn',brightonBeach,crownHeights);
    drawSparkLinesComparisons('bronx',countryClub,fordham);

    // iii. DRAW MAP DOTS FOR INDIVIDUAL HOUSES
    drawHouseMarks(houseLatLngList);

    // iii. DRAW GRID AND AXES FOR INTERACTIVITY
    // note: lines for interactivity (on hover and click) will be drawn/removed in event handlers
    drawExploreAxesAndGrid('explore');

    ///// SCROLLAMA STUFF /////
  	// 1. force a resize on load to ensure proper dimensions are sent to scrollama
  	handleResize();

  	// 2. setup the scroller passing options
  	// 		this will also initialize trigger observations
  	scroller.setup({
  		step: '#scrolly article .step',
  		offset: 0.8, // % of vertical page where the scroll events will fire
  		// debug: true, // show horizontal line where scroll events should fire?
  	})
  	// 3. bind scrollama event handlers
  	.onStepEnter(handleStepEnter)

  	// setup resize event
  	window.addEventListener('resize', handleResize);

    if (loadExplore) {
      showExplore(); // DELETE THIS NEPHEW
    } else {
      // hideExplore();
    }

    d3.select('#sticky-button-toggle').on('click',handleToggleClick);
    d3.select('#sticky-button-explore').on('click',showExplore);
    d3.select('#sticky-button-no-explore').on('click',hideExplore);
    d3.selectAll('.jump-to-explore').on('click',showExplore);

  }
  /////////////////////////////////////////

  ////////// SIDE PANEL EXPLORE ///////////
  function handleToggleClick() {
    let stickyButton = d3.select('#sticky-button');
    // console.log(stickyButton.attr('class'));
    if (stickyButton.attr('class') === 'sticky-button-toggle') {
      stickyButton.attr('class','sticky-button-show');
      d3.select('#sticky-button-toggle').html('&lsaquo;');
    } else {
      stickyButton.attr('class','sticky-button-toggle');
      d3.select('#sticky-button-toggle').html('&rsaquo;');
    };
  }
  /////////////////////////////////////////

  ////// SCROLLAMA EVENT HANDLERS /////////
  function handleStepEnter(response) {
  	// response = { element, direction, index }
    let dataStep = d3.select(response.element).attr('data-step');

  	// add color to scrolly rext for current step only
    // THIS SHOULD ONLY BE USED DURING DEBUG MODE
  	step.classed('is-active', function (d, i) {
  		return i === response.index;
  	})

  	// update graphic based on step
    if (dataStep == 0) {
      resizeMapAllZones(1500,0.6,1,0.3,0.5);
      opacityHolcGrade('A','hide');
  		opacityHolcGrade('B','hide');
  		opacityHolcGrade('C','hide');
  		opacityHolcGrade('D','hide');
      d3.select('#sticky-button').attr('class','sticky-button-hide');
    }
  	else if (dataStep == 1) {
      // REDLINING EXPLAINER STEP I: REDLINED ZONES
      resizeMapAllZones(0,0.6,1,0.3,0.5);
  		opacityHolcGrade('A','hide');
  		opacityHolcGrade('B','hide');
  		opacityHolcGrade('C','hide');
  		opacityHolcGrade('D','show');
      d3.select('#sticky-button').attr('class','sticky-button-hide');
  	} else if (dataStep == 2) {
      // REDLINING EXPLAINER STEP II: GREENLINED ZONES
      resizeMapAllZones(0,0.6,1,0.3,0.5);
  		opacityHolcGrade('A','show');
  		opacityHolcGrade('B','hide');
  		opacityHolcGrade('C','hide');
  		opacityHolcGrade('D','fade');
      d3.select('#sticky-button').attr('class','sticky-button-hide');
  	} else if (dataStep == 3) {
      // REDLINING EXPLAINER STEP III: BLUE AND YELLOW ZONES
      resizeMapAllZones(0,0.6,1,0.3,0.5);
  		opacityHolcGrade('A','fade');
  		opacityHolcGrade('B','show');
  		opacityHolcGrade('C','show');
  		opacityHolcGrade('D','fade');
      d3.select('#sticky-button').attr('class','sticky-button-hide');
  	} else if (dataStep == 4) {
      // REDLINING EXPLAINER STEP IV: TRANSITION TO COMPARISONS
      resizeMapAllZones(1500,0.6,1,0.3,0.5);
  		opacityHolcGrade('A','show');
  		opacityHolcGrade('B','show');
  		opacityHolcGrade('C','show');
  		opacityHolcGrade('D','show');
      // THESE WERE USED IN CREATING SCREENSHOTS FOR THE PRESENTATION
      // d3.select('#Brooklyn_D8').classed('fade',false).classed('show',true);
      // d3.select('#StatenIsland_A4').classed('fade',false).classed('show',true);
      // d3.select('#Bronx_B10').classed('fade',false).classed('show',true);
      // d3.select('#Manhattan_C5').classed('fade',false).classed('show',true);
      d3.select('article').classed('gradient-background',false);
      d3.select('#sticky-button').attr('class','sticky-button-toggle')
  	} else if (dataStep == 5) {
      // COMPARISON I: MANHATTAN
      resizeMapComparisons(1500,upperEastSide,harlem);
      d3.selectAll('circle.house').classed('house-hide',true);
      d3.select('article').classed('gradient-background',true);
  	} else if (dataStep == '5a') {
      // MANHATTAN HOUSE MARKERS
      resizeMapComparisons(1500,upperEastSide,harlem);
      d3.selectAll('circle.house').classed('house-hide',true);
      d3.selectAll('circle.house-Manhattan').classed('house-hide',false);
  	} else if (dataStep == 6) {
      // COMPARISON II: QUEENS
      resizeMapComparisons(1500,littleNeck,brookvilleRosedale);
      d3.selectAll('circle.house').classed('house-hide',true);
  	} else if (dataStep == '6a') {
      // QUEENS HOUSE MARKERS
      resizeMapComparisons(1500,littleNeck,brookvilleRosedale);
      d3.selectAll('circle.house').classed('house-hide',true);
      d3.selectAll('circle.house-Queens').classed('house-hide',false);
  	} else if (dataStep == 7) {
      // COMPARISON III: STATEN ISLAND
      resizeMapComparisons(1500,todtHill,newBrighton);
      d3.selectAll('.house').classed('house-hide',true);
    } else if (dataStep == '7a') {
      // STATEN ISLAND HOUSE MARKERS
      resizeMapComparisons(1500,todtHill,newBrighton);
      d3.selectAll('.house').classed('house-hide',true);
      d3.selectAll('.house-StatenIsland').classed('house-hide',false);
    } else if (dataStep == 8) {
      // COMPARISON IV: BROOKLYN
      resizeMapComparisons(1500,crownHeights,brightonBeach);
      d3.selectAll('.house').classed('house-hide',true);
    } else if (dataStep == '8a') {
      // BROOKLYN HOUSE MARKERS
      resizeMapComparisons(1500,crownHeights,brightonBeach);
      d3.selectAll('.house').classed('house-hide',true);
      d3.selectAll('.house-Brooklyn').classed('house-hide',false);
    } else if (dataStep == 9) {
      // COMPARISON V: BRONX
      resizeMapComparisons(1500,countryClub,fordham);
      d3.selectAll('.house').classed('house-hide',true);
    } else if (dataStep == '9a') {
      // BRONX HOUSE MARKERS
      resizeMapComparisons(1500,countryClub,fordham);
      d3.selectAll('.house').classed('house-hide',true);
      d3.selectAll('.house-Bronx').classed('house-hide',false);
    } else if (dataStep == 10) {
      resizeMapAllZones(1500,0.6,1,0.3,0.5);
      d3.select('article').classed('gradient-background',false);
      d3.selectAll('.house').classed('house-hide',true);
      opacityHolcGrade('A','light');
  		opacityHolcGrade('B','light');
  		opacityHolcGrade('C','light');
  		opacityHolcGrade('D','light');
    } else if (dataStep == 11) {
      resizeMapAllZones(1500,1,1,0.5,0.5);
      opacityHolcGrade('A','light');
  		opacityHolcGrade('B','light');
  		opacityHolcGrade('C','light');
  		opacityHolcGrade('D','light');
      d3.selectAll('.house').classed('house-hide',true);
    }
  }
  /////////////////////////////////////////

  /////////// SHOW/HIDE ZONES /////////////
  function opacityHolcGrade(grade,show) {
    d3.selectAll('.holc-'+grade).attr('class',show+' holc holc-'+grade)
  }
  function opacityHolcID(id,show) {
    let grade = id.split('_')[1].substring(0,1)
    d3.select('#'+id).attr('class',show+' holc holc-'+grade)
  }
  /////////////////////////////////////////

  ////////////// RESIZING /////////////////
  function handleResize() {
  	// update height of step elements
  	// var stepH = Math.floor(window.innerHeight * 0.95);
  	// step.style('height', stepH + 'px');

  	// update height of map container
  	var figureHeight = window.innerHeight * 1
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2

  	figure
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');

  	resizeMapAllZones(0,0.6,1,0.3,0.5); // fit map to bounding box of all holc zones
    resizeSparkLines(); // resize spark lines
    resizeExploreSparkLines(); // resize spark lines in explore section

  	// tell scrollama to update new element dimensions
  	scroller.resize();
  }

  function resizeSparkLines() {
    // spark lines
    let  sparkMargin = {top:10,right:30,bottom:50,left:60}
        ,sparkSVGWidth = parseInt(d3.select('.sparkSVG').style('width'))
        ,sparkSVGHeight = parseInt(d3.select('.sparkSVG').style('height'))
        ,sparkX      = d3.scaleLinear().domain([1940,2010]).range([sparkMargin.left,sparkSVGWidth-sparkMargin.right]) // x scale for year
        ,sparkYpctWhite = d3.scaleLinear().domain([max.pctWhite,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]) // Y scale for pctWhite
        ,sparkYpctHomeownership = d3.scaleLinear().domain([max.pctHomeownership,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]) // Y scale for homeownership
        ,sparkYmedianHomeValue2010 = d3.scaleLinear().domain([max.medianHomeValue2010,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]) // Y scale for median home value using overall max
        ,linePctWhite = d3.line()
                         .x((d) => {return sparkX(parseInt(d.year))})
                         .y((d) => {return sparkYpctWhite((pctWhiteVar.subFrom - d.pctWhite)*pctWhiteVar.multBy)})
                         .curve(d3.curveMonotoneX)
        ,linePctHomeownership = d3.line()
                       .x((d) => {return sparkX(parseInt(d.year))})
                       .y((d) => {return sparkYpctHomeownership(d.pctHomeownership)})
                       .curve(d3.curveMonotoneX)
        ,lineMedianHomeValue2010 = d3.line()
                       .x((d) => {return sparkX(parseInt(d.year))})
                       .y((d) => {
                         sparkYmedianHomeValue2010 = d3.scaleLinear().domain([d.maxMedianHomeValue2010,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]); // Y scale for median home value using zone comparison max
                         return sparkYmedianHomeValue2010(d.medianHomeValue2010);
                       })
                       .curve(d3.curveMonotoneX)
        ;

    sparkLines();
    axes();
    grids();
    hoverRects();

    function axes() {
      // d3.selectAll('.pctWhite-bottom-axis') // only add year axis on the median home value chart, which is the last one
      //   .attr('transform','translate(0,'+(sparkSVGHeight-sparkMargin.bottom+10)+')') // move the axis to the start of the bottom margin
      //   .call(d3.axisBottom(sparkX).ticks(8).tickFormat(d3.format("d"))) // one tick per year, remove commas from year
      //   .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
      //   // .call(g => g.selectAll('.tick line').remove()) // remove tick lines
      //   .call(g => g.selectAll('text').remove())
      //
      // d3.selectAll('.pctHomeownership-bottom-axis') // only add year axis on the median home value chart, which is the last one
      //   .attr('transform','translate(0,'+(sparkSVGHeight-sparkMargin.bottom+10)+')') // move the axis to the start of the bottom margin
      //   .call(d3.axisBottom(sparkX).ticks(8).tickFormat(d3.format("d"))) // one tick per year, remove commas from year
      //   .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
      //   // .call(g => g.selectAll('.tick line').remove()) // remove tick lines
      //   .call(g => g.selectAll('text').remove())

      d3.selectAll('.medianHomeValue2010-bottom-axis') // only add year axis on the median home value chart, which is the last one
        .attr('transform','translate(0,'+(sparkSVGHeight-sparkMargin.bottom+10)+')') // move the axis to the start of the bottom margin
        .call(d3.axisBottom(sparkX).ticks(8).tickFormat(d3.format("d"))) // one tick per year, remove commas from year
        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
        .call(g => g.selectAll('.tick line').remove()) // remove tick lines

      d3.selectAll('.pctWhite-axis') // add median home value left axis
        .attr('transform','translate('+(sparkMargin.left)+',0)') // move the axis to the start of the left margin
        .call(d3.axisLeft(sparkYpctWhite).tickValues([0,1]).tickFormat(d3.format(".0%"))) // ticks at 0 and 100%, format as rounded percentage
        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
        .call(g => g.selectAll('.tick line').remove()) // remove tick lines

      d3.selectAll('.pctHomeownership-axis') // add median home value left axis
        .attr('transform','translate('+(sparkMargin.left)+',0)') // move the axis to the start of the left margin
        .call(d3.axisLeft(sparkYpctHomeownership).tickValues([0,max.pctHomeownership]).tickFormat(d3.format(".0%"))) // ticks at 0 and 100%, format as rounded percentage
        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
        .call(g => g.selectAll('.tick line').remove()) // remove tick lines

      // DOES EACH MEDIAN HOME VALUE AXES SEPARATELY SINCE THE SCALE OF EACH GRAPH CAN CHANGE
      d3.selectAll('svg.medianHomeValue2010').filter('.sparkSVG').select('path.medianHomeValue2010') // first homeownership spark line in each spark line svg
        .each(function (d,i) {
          sparkYmedianHomeValue2010 = d3.scaleLinear().domain([d[0].maxMedianHomeValue2010,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]); // Y scale for median home value using zone comparison max
          let div = d3.select(this.parentNode).attr('class').split('-')[2]; // takes the borough name from the spark line's enclosing group class, which should be named 'sparkLine-g-borough'
          let axisG = d3.select('#'+div).select('.medianHomeValue2010-axis') // selects the div with an ID matching that borough (should be the step div) and then selects the median home value axis group within that div
                        .attr('transform','translate('+(sparkMargin.left)+',0)') // move the axis to the start of the left margin
                        .call(d3.axisLeft(sparkYmedianHomeValue2010).tickValues([0,d[0].maxMedianHomeValue2010]).tickFormat(d3.format('$,.2s'))) // SI-prefix with two significant digits, "42M"
                        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
                        .call(g => g.selectAll('.tick line').remove()) // remove tick lines;
        })
    }

    function sparkLines() {
      d3.selectAll('.sparkLine')
        .filter('.pctWhite')
        .attr('d',linePctWhite);

      d3.selectAll('.sparkLine')
        .filter('.pctHomeownership')
        .attr('d',linePctHomeownership);

      // let medianHomeValueLines = d3.selectAll('.sparkLine').filter('.medianHomeValue');
      d3.selectAll('.sparkLine')
        .filter('.medianHomeValue2010')
        .attr('d',lineMedianHomeValue2010);
    }


    function grids() {
      d3.selectAll('.grid-line')
        .each(function (d,i) {
          let yPos = d3.select(this).attr('class').split('-')[3]; // this is the int for which grid # we're on
          d3.select(this)
            .attr('x1',sparkMargin.left)
            .attr('x2',sparkSVGWidth-sparkMargin.right)
            .attr('y1',sparkMargin.top + ((sparkSVGHeight-sparkMargin.top-sparkMargin.bottom)*yPos/(gridLines-1))) // this moves the y position between sparkMargin.top and sparkSVGHeight - sparkMargin.bottom
            .attr('y2',sparkMargin.top + ((sparkSVGHeight-sparkMargin.top-sparkMargin.bottom)*yPos/(gridLines-1)));
        })
    }

    function hoverRects() {
      // RESIZE HOVER RECTS
      d3.selectAll('.hoverRect')
        .attr('y',sparkMargin.top)
        .attr('height',sparkSVGHeight-sparkMargin.bottom-sparkMargin.top)
        .attr('x',d=>sparkX(d-5)) // start the hover at 5 years behind the current year
        .attr('width',d=>sparkX(d+5)-sparkX(d-5)) // each hover rect should go half way between the current year and the next year
        .on('mouseover',handleHoverRectMouseOver)
        .on('mouseout',handleHoverRectMouseOut)

      // HANDLE HOVERS
      function handleHoverRectMouseOver(d) {
        // d is the year integer
        let borough = d3.select(this.parentNode).attr('class').split('-')[2];
        yearTextStyle();

        let sparkLines = d3.select('#'+borough).selectAll('.pctWhite-'+borough); // select the percent white spark lines, which should have data for all my metrics bound to it
        sparkLines.each(function(f,i) { // for each of the two sparklines
          let stroke = d3.select(this).attr('stroke'); // grab the color of the spark line (which I'll pass onto the color of the tooltip text)
          f.forEach((year) => { // for each year of data appended to that spark line,
            if (d==year.year) { // for the year I'm hovering over...
              let pctWhite = d3.format(",.0%")((pctWhiteVar.subFrom-year.pctWhite)*pctWhiteVar.multBy), // pctWhite formatted as a % with no decimals
                  pctHomeownership = d3.format(",.0%")(year.pctHomeownership), // pctHomeownership formatted as a % with no decimals
                  medianHomeValue2010 = d3.format('$,.2s')(year.medianHomeValue2010);

              tooltipText();
              hoverCircles();

              function tooltipText() { // for each metric, changes the text of html element with "tooltip" class to that year's metric
                // PERCENT WHITE TOOLTIPS
                let pctWhiteTooltips = d3.select('#'+borough).select('.col-pctWhite').selectAll('.tooltip')
                pctWhiteTooltips.each(function (td,ti) {
                  if (ti===i) { }
                  else { d3.select(this).text(pctWhite).style('color',stroke); }
                }); // closes each tooltip text loop

                // PERCENT HOMEOWNERSHIP TOOLTIPS
                let pctHomeownershipTooltips = d3.select('#'+borough).select('.col-pctHomeownership').selectAll('.tooltip')
                pctHomeownershipTooltips.each(function (td,ti) {
                  if (ti===i) { d3.select(this).text(pctHomeownership).style('color',stroke); }
                }); // closes each tooltip text loop

                // PERCENT HOMEOWNERSHIP TOOLTIPS
                let homeValueTooltips = d3.select('#'+borough).select('.col-medianHomeValue2010').selectAll('.tooltip')
                homeValueTooltips.each(function (td,ti) {
                  if (ti===i) { d3.select(this).text(medianHomeValue2010).style('color',stroke); }
                }); // closes each tooltip text loop
              }

              function hoverCircles() {
                // PERCENT WHITE CIRCLES
                let pctWhiteCircles = d3.select('#'+borough).select('.pctWhite').selectAll('.hoverCircle');
                pctWhiteCircles.each(function(cd,ci) {
                  if (ci===i) { d3.select(this).attr('cy',sparkYpctWhite((pctWhiteVar.subFrom-year.pctWhite)*pctWhiteVar.multBy)).attr('cx',sparkX(year.year)).style('display','inline').style('fill',stroke).style('stroke',stroke);}
                });

                // PERCENT HOMEOWNERSHIP CIRCLES
                let pctHomeownershipCircles = d3.select('#'+borough).select('.pctHomeownership').selectAll('.hoverCircle');
                pctHomeownershipCircles.each(function(cd,ci) {
                  if (ci===i) { d3.select(this).attr('cy',sparkYpctHomeownership(year.pctHomeownership)).attr('cx',sparkX(year.year)).style('display','inline').style('fill',stroke).style('stroke',stroke);}
                });

                // MEDIAN HOMEVALUE CIRCLES
                let homeValueCircles = d3.select('#'+borough).select('.medianHomeValue2010').selectAll('.hoverCircle');
                homeValueCircles.each(function(cd,ci) {
                  // we need to get the max home value for the lines in this section
                  let sparkYmedianHomeValue2010 = d3.scaleLinear().domain([year.maxMedianHomeValue2010,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]); // Y scale for median home value using zone comparison max
                  if (ci===i) { d3.select(this).attr('cy',sparkYmedianHomeValue2010(year.medianHomeValue2010)).attr('cx',sparkX(year.year)).style('display','inline').style('fill',stroke).style('stroke',stroke);}
                });
              }

            } // closes the if statement indicating the specific year we're hovering over
          }); // closes the for each year of data appended to the spark line
        }); // closes the each spark line

        function yearTextStyle() {
          let yearAxisTexts = d3.select('#'+borough).select('.medianHomeValue2010-bottom-axis').selectAll('text');
          yearAxisTexts.each(function() {
            if (d3.select(this).text() == d) { // for the current year
              d3.select(this).classed('hover-year',true);
              d3.select(this).classed('non-hover-year',false);
            } else {
              d3.select(this).classed('hover-year',false);
              d3.select(this).classed('non-hover-year',true);
            }
          })
        }
      } // closes handleHoverRectMouseOver

      function handleHoverRectMouseOut() {
        d3.selectAll('.tooltip').text(''); // remove tooltips text
        yearAxisTexts = d3.selectAll('.medianHomeValue2010-bottom-axis').selectAll('text').classed('non-hover-year',false).classed('hover-year',false); // set year text styles back to default
        d3.selectAll('.hoverCircle').style('display','none'); // hide all the hover circles
      }
    } // closes hoverRects()
  }

  function resizeExploreSparkLines() {
    // spark lines
    let  sparkMargin = {top:10,right:30,bottom:50,left:60}
        ,sparkSVGWidth = parseInt(d3.select('.exploreSparkSVG').style('width')) // TO-DO: This gives an error on load (esp. when it loads on explore view)
        ,sparkSVGHeight = parseInt(d3.select('.exploreSparkSVG').style('height'))
        ,sparkX      = d3.scaleLinear().domain([1940,2010]).range([sparkMargin.left,sparkSVGWidth-sparkMargin.right]) // x scale for year
        ,sparkYpctWhite = d3.scaleLinear().domain([max.pctWhite,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]) // Y scale for pctWhite
        ,sparkYpctHomeownership = d3.scaleLinear().domain([max.pctHomeownership,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]) // Y scale for homeownership
        ,sparkYmedianHomeValue2010 = d3.scaleLinear().domain([max.medianHomeValue2010,0]).range([sparkMargin.top,sparkSVGHeight-sparkMargin.bottom]) // Y scale for median home value
        ,linePctWhite = d3.line()
                         .x((d) => {return sparkX(parseInt(d.year));})
                         .y((d) => {return sparkYpctWhite((pctWhiteVar.subFrom-d.pctWhite)*pctWhiteVar.multBy);})
                         .curve(d3.curveMonotoneX)
        ,linePctHomeownership = d3.line()
                       .x((d) => {return sparkX(parseInt(d.year));})
                       .y((d) => {return sparkYpctHomeownership(d.pctHomeownership);})
                       .curve(d3.curveMonotoneX)
        ,lineMedianHomeValue2010 = d3.line()
                       .defined((d) => {return typeof(d.medianHomeValue2010) !== 'undefined'})
                       .x((d) => {return sparkX(parseInt(d.year));})
                       .y((d) => {return sparkYmedianHomeValue2010(d.medianHomeValue2010);})
                       .curve(d3.curveMonotoneX)
        ;

    sparkLines();
    axes();
    grids();
    hoverRects();

    function sparkLines() {
      d3.selectAll('.exploreSparkLine')
        .filter('.pctWhite')
        .attr('d',linePctWhite);

      d3.selectAll('.exploreSparkLine')
        .filter('.pctHomeownership')
        .attr('d',linePctHomeownership);

      d3.selectAll('.exploreSparkLine')
        .filter('.medianHomeValue2010')
        .attr('d',lineMedianHomeValue2010);
    }

    function axes() {
      d3.selectAll('.explore-medianHomeValue2010-bottom-axis') // only add year axis on the median home value chart, which is the last one
        .attr('transform','translate(0,'+(sparkSVGHeight-sparkMargin.bottom+10)+')') // move the axis to the start of the bottom margin
        .call(d3.axisBottom(sparkX).tickValues([1940,1950,1960,1970,1980,1990,2000,2010]).tickFormat(d3.format("d"))) // one tick per year, remove commas from year
        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
        .call(g => g.selectAll('.tick line').remove()) // remove tick lines

      d3.selectAll('.explore-pctWhite-axis') // add median home value left axis
        .attr('transform','translate('+(sparkMargin.left)+',0)') // move the axis to the start of the left margin
        .call(d3.axisLeft(sparkYpctWhite).tickValues([0,1]).tickFormat(d3.format(".0%"))) // ticks at 0 and 100%, format as rounded percentage
        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
        .call(g => g.selectAll('.tick line').remove()) // remove tick lines

      d3.selectAll('.explore-pctHomeownership-axis') // add median home value left axis
        .attr('transform','translate('+(sparkMargin.left)+',0)') // move the axis to the start of the left margin
        .call(d3.axisLeft(sparkYpctHomeownership).tickValues([0,max.pctHomeownership]).tickFormat(d3.format(".0%"))) // ticks at 0 and 100%, format as rounded percentage
        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
        .call(g => g.selectAll('.tick line').remove()) // remove tick lines

      d3.selectAll('.explore-medianHomeValue2010-axis') // add median home value left axis
        .attr('transform','translate('+(sparkMargin.left)+',0)') // move the axis to the start of the left margin
        .call(d3.axisLeft(sparkYmedianHomeValue2010).tickValues([0,max.medianHomeValue2010]).tickFormat(d3.format('$,.2s'))) // ticks at 0 and 100%, format as rounded percentage
        .call(g => g.selectAll('.domain').remove()) // remove horizontal axis line
        .call(g => g.selectAll('.tick line').remove()) // remove tick lines
    }

    function grids() {
      d3.selectAll('.explore-grid-line')
        .each(function (d,i) {
          let yPos = d3.select(this).attr('class').split('-')[5]; // this is the int for which grid # we're on
          d3.select(this)
            .attr('x1',sparkMargin.left)
            .attr('x2',sparkSVGWidth-sparkMargin.right)
            .attr('y1',sparkMargin.top + ((sparkSVGHeight-sparkMargin.top-sparkMargin.bottom)*yPos/(gridLines-1))) // this moves the y position between sparkMargin.top and sparkSVGHeight - sparkMargin.bottom
            .attr('y2',sparkMargin.top + ((sparkSVGHeight-sparkMargin.top-sparkMargin.bottom)*yPos/(gridLines-1)));
        })
    }

    function hoverRects() {
      d3.selectAll('.explore-hoverRect')
        .attr('y',sparkMargin.top)
        .attr('height',sparkSVGHeight-sparkMargin.bottom-sparkMargin.top)
        .attr('x',d=>sparkX(d-5)) // start the hover at 5 years behind the current year
        .attr('width',d=>sparkX(d+5)-sparkX(d-5)) // each hover rect should go half way between the current year and the next year
        .on('mouseover',handleExploreHoverRectMouseOver)
        .on('mouseout',handleExploreHoverRectMouseOut)
    }

    // HANDLE HOVERS
    function handleExploreHoverRectMouseOver(d) {
      // d is the year integer
      yearTextStyle();

      let sparkLines = d3.select('#explore').select('.pctWhite').select('.explore-sparkLine-g').selectAll('.exploreSparkLine'); // select the percent white spark lines, which should have data for all my metrics bound to it
      sparkLines.each(function(f,i) { // for each of the max two sparklines drawn
        let stroke = d3.select(this).attr('stroke'), // grab the color of the spark line (which I'll pass onto the color of the tooltip text)
            lineInteractivityType = d3.select(this).attr('class').split(' ')[0]; // delineates a click or hover line, since we're putting tooltip text in a specific place based on click or hover

        f.forEach((year) => { // for each year of data appended to that spark line...
          if (d==year.year) { // for the year I'm hovering over...
            let pctWhite = d3.format(",.0%")((pctWhiteVar.subFrom-year.pctWhite)*pctWhiteVar.multBy), // pctWhite formatted as a % with no decimals
                pctHomeownership = d3.format(",.0%")(year.pctHomeownership), // pctHomeownership formatted as a % with no decimals
                medianHomeValue2010 = d3.format('$,.2s')(year.medianHomeValue2010);

            tooltipText();
            hoverCircles();

            function tooltipText() { // for each metric, changes the text of html element with "tooltip" class to that year's metric
              // PERCENT WHITE TOOLTIPS
              let pctWhiteTooltips = d3.select('#explore').select('.col-pctWhite').selectAll('.tooltip')
              pctWhiteTooltips.each(function (td,ti) {
                tooltipInteractivityType = d3.select(this).attr('class').split(' ')[1]; // determine click or hover tooltip
                if (lineInteractivityType === tooltipInteractivityType) { d3.select(this).text(pctWhite).style('color',stroke); }
              }); // closes each tooltip text loop

              // PERCENT HOMEOWNERSHIP TOOLTIPS
              let pctHomeownershipTooltips = d3.select('#explore').select('.col-pctHomeownership').selectAll('.tooltip')
              pctHomeownershipTooltips.each(function (td,ti) {
                tooltipInteractivityType = d3.select(this).attr('class').split(' ')[1];
                if (lineInteractivityType === tooltipInteractivityType) { d3.select(this).text(pctHomeownership).style('color',stroke); }
              }); // closes each tooltip text loop

              // PERCENT HOMEOWNERSHIP TOOLTIPS
              let homeValueTooltips = d3.select('#explore').select('.col-medianHomeValue2010').selectAll('.tooltip')
              homeValueTooltips.each(function (td,ti) {
                tooltipInteractivityType = d3.select(this).attr('class').split(' ')[1];
                if (lineInteractivityType === tooltipInteractivityType) { d3.select(this).text(medianHomeValue2010).style('color',stroke); }
              }); // closes each tooltip text loop
            } // closes tooltipText function

            function hoverCircles() {
              // PERCENT WHITE CIRCLES
              let pctWhiteCircles = d3.select('#explore').select('.pctWhite').selectAll('.explore-hoverCircle');
              pctWhiteCircles.each(function(cd,ci) {
                if (ci===i) { d3.select(this).attr('cy',sparkYpctWhite((pctWhiteVar.subFrom-year.pctWhite)*pctWhiteVar.multBy)).attr('cx',sparkX(year.year)).style('display','inline').style('fill',stroke).style('stroke',stroke);}
              });

              // PERCENT HOMEOWNERSHIP CIRCLES
              let pctHomeownershipCircles = d3.select('#explore').select('.pctHomeownership').selectAll('.explore-hoverCircle');
              pctHomeownershipCircles.each(function(cd,ci) {
                if (ci===i) { d3.select(this).attr('cy',sparkYpctHomeownership(year.pctHomeownership)).attr('cx',sparkX(year.year)).style('display','inline').style('fill',stroke).style('stroke',stroke);}
              });

              // MEDIAN HOMEVALUE CIRCLES
              let homeValueCircles = d3.select('#explore').select('.medianHomeValue2010').selectAll('.explore-hoverCircle');
              homeValueCircles.each(function(cd,ci) {
                if (ci===i) { d3.select(this).attr('cy',sparkYmedianHomeValue2010(year.medianHomeValue2010)).attr('cx',sparkX(year.year)).style('display','inline').style('fill',stroke).style('stroke',stroke);}
              });
            } // closes hoverCircles function
          }
        })
      }); // closes the each spark line

      function yearTextStyle() {
        let yearAxisTexts = d3.select('#explore').select('.explore-medianHomeValue2010-bottom-axis').selectAll('text');
        yearAxisTexts.each(function() {
          if (d3.select(this).text() == d) { // for the current year
            d3.select(this).classed('hover-year',true);
            d3.select(this).classed('non-hover-year',false);
          } else {
            d3.select(this).classed('hover-year',false);
            d3.select(this).classed('non-hover-year',true);
          }
        })
      }
    } // closes EXPLORE handleHoverRectMouseOver

    function handleExploreHoverRectMouseOut() {
      d3.selectAll('.tooltip').text(''); // remove tooltips text
      yearAxisTexts = d3.selectAll('.explore-medianHomeValue2010-bottom-axis').selectAll('text').classed('non-hover-year',false).classed('hover-year',false); // set year text styles back to default
      d3.selectAll('.explore-hoverCircle').style('display','none'); // hide all the hover circles
    }
  }

  function resizeMapAllZones(time,screenSpaceHoriz,screenSpaceVert,centerpointHoriz,centerpointVert) {
    figureSvg.selectAll('path').attr('transform', null); // undo any zoom/pan from explore phase

    // SCALE THE MAP BASED ON BOUNDING BOX OF MY HOLC ZONES https://bl.ocks.org/mbostock/4707858
    figureSvgWidth  = parseInt(figureSvg.style('width'));
    figureSvgHeight = parseInt(figureSvg.style('height'));
    projection.scale(1).translate([0,0]); // Dummy data into scale so the bounding box returns coordinates

    // screenSpaceHoriz = 0.65
    // ,screenSpaceVert = 1
    // ,centerpointHoriz = 0.675

    let  b = geoGenerator.bounds(holc) // bounding box of all holc zones
        ,w = b[1][0] - b[0][0] // width of box
        ,h = b[1][1] - b[0][1] // height of box
        ,x = (b[0][0] + b[1][0]) / 2 // horizontal center point
        ,y = (b[0][1] + b[1][1]) / 2 // vertical center point
        ,sHoriz = (screenSpaceHoriz-0.05) / (w / figureSvgWidth) // SCALE: this ensuures that the bounding box for the selected zones takes up the specified portion of horizontal screen space provided (plus a slight buffer))
        ,sVert = (screenSpaceVert-0.05) / (h / figureSvgHeight)
        // ,s = 0.99 / Math.max(w / figureSvgWidth, h / figureSvgHeight) // scale formula taken from bl.ocks
        ,s = Math.min(sHoriz,sVert)
        ,t = [(figureSvgWidth*centerpointHoriz) - (s * x), (figureSvgHeight*centerpointVert) - (s * y)] // translate formula taken from bl.ocks
        ;

    projection.scale(s).translate(t); // feed bounding fox scale and translate functions into my formula
    figureSvg.selectAll('path').transition().ease(d3.easeExpInOut).duration(time).attr('d',geoGenerator); // update all drawn paths to the new projection – geoGenerator is defined in index.html and takes projection as an argument
    figureSvg.selectAll('circle').transition().ease(d3.easeExpInOut).duration(time).attr('cx',d=>projection(d.latLng)[0]).attr('cy',d=>projection(d.latLng)[1]) //.attr('r',.005/w)  house map markers
  }

  function resizeMapComparisons(time,list1,list2) {
    let  screenSpaceHoriz = 0.3
        ,screenSpaceVert = 0.5;

    opacityHolcGrade('A','fade');
    opacityHolcGrade('B','fade');
    opacityHolcGrade('C','fade');
    opacityHolcGrade('D','fade');

    // create subset of holc zones only for those in comparison lists
    let bounding = []
    holc.features.forEach((holcZone) => {
      let holcZoneId = holcZone.properties.borough + '_' + holcZone.properties.holc_id
      if (list1.includes(holcZoneId) || list2.includes(holcZoneId)) {
        bounding.push(holcZone);
        opacityHolcID(holcZoneId,'show');
      }
    });


    bounding = {"type":"FeatureCollection","features":bounding}

    figureSvgWidth  = parseInt(figureSvg.style('width'));
    figureSvgHeight = parseInt(figureSvg.style('height'));
    projection.scale(1).translate([0,0]); // Dummy data into scale so the bounding box returns coordinates

    let  b = geoGenerator.bounds(bounding) // bounding box of all holc zones
        ,w = b[1][0] - b[0][0] // width of box
        ,h = b[1][1] - b[0][1] // height of box
        ,x = (b[0][0] + b[1][0]) / 2 // horizontal center point
        ,y = (b[0][1] + b[1][1]) / 2 // vertical center point
        ,sHoriz = (screenSpaceHoriz-0.05) / (w / figureSvgWidth) // SCALE: this ensuures that the bounding box for the selected zones takes up the specified portion of horizontal screen space provided (plus a slight buffer))
        ,sVert = (screenSpaceVert-0.05) / (h / figureSvgHeight)
        ,s = Math.min(sHoriz,sVert)
        ,t = [(figureSvgWidth*((screenSpaceHoriz/2))) - (s * x), (figureSvgHeight*(screenSpaceVert/2)) - (s * y)] // TRANSLATE: this puts the horizontal center of the bounding box at the center mark of the screen space provided, making sure they fit into a left-hand column the size of the provided parameter
        ;
    projection.scale(s).translate(t); // feed bounding fox scale and translate functions into my formula
    figureSvg.selectAll('path').transition().ease(d3.easeExpInOut).duration(time).attr('d',geoGenerator); // update all drawn paths to the new projection – geoGenerator is defined in index.html and takes projection as an argument
    figureSvg.selectAll('circle').transition().ease(d3.easeExpInOut).duration(time).attr('cx',d=>projection(d.latLng)[0]).attr('cy',d=>projection(d.latLng)[1]) //.attr('r',.005/w)  house map markers
  }
  /////////////////////////////////////////

  ////////// HOUSE MAP DOTS ///////////////
  function drawHouseMarks(latLngList) {
    figureSvg.append('g').attr('class','g-houses')
             .selectAll('circle')
             .data(latLngList)
             .enter()
             .append('circle')
             .attr('class',d=>'house house-hide house-'+d.borough+' house-'+d.zone.substring(0,1).toLowerCase())
             .attr('id',d=>d.borough+'_'+d.zone)
  }
  /////////////////////////////////////////

  /////////// COMPARISONS /////////////////
  function drawSparkLinesComparisons(div,list1,list2) {
    // THIS FUNCTION SHOULD SHOULD CREATE THE SPARK LINES FOR MY COMPARISONS
    // FOR RESPONSIVENESS, THE SIZE AND POSITION OF THESE LINES SHOULD BE HANDLED INSIDE handleResize()

    let compDiv          = d3.select('#'+div),
        stroke           = {"A":"#8C9F5B","B":"#8AA1AB","C":"#D6B64C","D":"#CC6D7B"},
        stroke1          = stroke[list1[0].split('_')[1].substring(0,1)], // takes the grade from the first zone passed in list1 and returns the storke color for that grade
        stroke2          = stroke[list2[0].split('_')[1].substring(0,1)], // takes the grade from the second zone passed in list1 and returns the storke color for that grade
        sparkLineSVGs    = [{'metric':'pctWhite','svg':compDiv.select('.sparkSVG.pctWhite')},
                            {'metric':'pctHomeownership','svg':compDiv.select('.sparkSVG.pctHomeownership')},
                            {'metric':'medianHomeValue2010','svg':compDiv.select('.sparkSVG.medianHomeValue2010')}];


    // create subset of holc zones only for those in comparison lists
    let list1holc = [];
    let list2holc = [];
    holc.features.forEach((holcZone) => {
      let holcZoneId = holcZone.properties.borough + '_' + holcZone.properties.holc_id
      if (list1.includes(holcZoneId)) {
        list1holc.push(holcZone.properties);
      } else if (list2.includes(holcZoneId)) {
        list2holc.push(holcZone.properties);
      }
    });

    // get averages for each metric per year for each zone group
    let maxMedian = getMaxMedianHomeValue2010(list1holc,list2holc),
        avg1 = getAvg(list1holc,maxMedian),
        avg2 = getAvg(list2holc,maxMedian);



    sparkLineSVGs.forEach((sparkLineSVG) => { // THIS CREATES FOUR AXIS GROUPS: (1) LEFT AXIS, (2) BOTTOM AXIS, (3) GRID LINES, and (4) TWO SPARK LINES (ONE FOR EACH ZONE)
      // AXES
      sparkLineSVG.svg.append('g').attr('class','axis left-axis '+sparkLineSVG.metric+'-axis');
      sparkLineSVG.svg.append('g').attr('class','axis bottom-axis '+sparkLineSVG.metric+'-bottom-axis');

      // GRID
      let gridG = sparkLineSVG.svg.append('g').attr('class','grid '+sparkLineSVG.metric+'-grid '+div+'-'+sparkLineSVG.metric+'-grid');
      for (let g=0;g<gridLines;g++) {
        gridG.append('line').attr('class','grid-line grid-line-'+g);
      }

      // SPARK LINES
      let sparkLineG = sparkLineSVG.svg.append('g').attr('class','sparkLine-g-'+div);
      sparkLineG.append('path').datum(avg1).attr('class','sparkLine '+sparkLineSVG.metric+' '+sparkLineSVG.metric+'-'+div).attr('stroke',stroke1);
      sparkLineG.append('path').datum(avg2).attr('class','sparkLine '+sparkLineSVG.metric+' '+sparkLineSVG.metric+'-'+div).attr('stroke',stroke2);

      // HOVER RECTANGLES AND CIRCLES
      let years = [1940,1950,1960,1970,1980,1990,2000,2010],
          hoverG = sparkLineSVG.svg.append('g').attr('class','hover-g-'+div);

      hoverG.append('circle').attr('class','hoverCircle');
      hoverG.append('circle').attr('class','hoverCircle'); // append two circles that will be placed over my lines when I hover
      hoverG.selectAll('rect').data(years).enter().append('rect').attr('class',d=>'hoverRect hoverRect-'+d);
    });

    // DEFINING FUNCTIONS TO GET THE AVERAGE AND MAX HOME VALUES
    function getMaxMedianHomeValue2010(list1,list2) {
      let medianValues = [];
      list1.forEach((holcZone) => { // for each holc zone
        holcZone.census_match_data.forEach((censusYear) => { // for each census year
          let coverageThreshold = 0.6 // set the minimum threshold for coverage % to include
          if (censusYear.metric_coverage_pct.median_home_value >= coverageThreshold) {
            medianValues.push(censusYear.median_home_value_2010);
          }
        })
      });

      list2.forEach((holcZone) => { // for each holc zone
        holcZone.census_match_data.forEach((censusYear) => { // for each census year
          let coverageThreshold = 0.6 // set the minimum threshold for coverage % to include
          if (censusYear.metric_coverage_pct.median_home_value >= coverageThreshold) {
            medianValues.push(censusYear.median_home_value_2010);
          }
        })
      });

      return d3.max(d3.values(medianValues));
    }

    function getAvg(list,maxMedian) { // including maxMedian here to just retain the max Median Home Value 2010 since I want to draw spark lines compares to the max within that zone comparison
      let averages = [];
      for (let y=1940;y<=2010;y+=10) { // for every decade 1940 - 2010
        let pctWhiteAvg = [],
            pctHomeownershipAvg = [],
            medianHomeValueAvg = [],
            medianHomeValue2010Avg = [];

        list.forEach((holcZone) => { // for each holc zone
          holcZone.census_match_data.forEach((censusYear) => { // for each census year
            if (parseInt(censusYear.year) === y) {
              let coverageThreshold = 0.6 // set the minimum threshold for coverage % to include
              if (censusYear.metric_coverage_pct.pct_white >= coverageThreshold) {
                    pctWhiteAvg.push(censusYear.pct_white);
                  };
                  if (censusYear.metric_coverage_pct.pct_homeownership >= coverageThreshold) {
                    pctHomeownershipAvg.push(censusYear.pct_homeownership);
                  };
                  if (censusYear.metric_coverage_pct.median_home_value >= coverageThreshold) {
                    medianHomeValueAvg.push(censusYear.median_home_value);
                    medianHomeValue2010Avg.push(censusYear.median_home_value_2010);
                  };
            }
          }); // closes for each census year within each zone
        }); // closes each zone

        // add averages for years that have data
        let thisAverage = {};
        if (pctWhiteAvg.length > 0) {
          thisAverage.pctWhite = d3.mean(d3.values(pctWhiteAvg))
        }
        if (pctHomeownershipAvg.length > 0) {
          thisAverage.pctHomeownership = d3.mean(d3.values(pctHomeownershipAvg))
        }
        if (medianHomeValueAvg.length > 0) {
          thisAverage.medianHomeValue = d3.mean(d3.values(medianHomeValueAvg))
          thisAverage.medianHomeValue2010 = d3.mean(d3.values(medianHomeValue2010Avg))
          thisAverage.maxMedianHomeValue2010 =  maxMedian
        }
        if (pctWhiteAvg.length + pctHomeownershipAvg.length + medianHomeValueAvg.length > 0) {
          thisAverage.year = y
          averages.push(thisAverage)
        }
      } // closes year loop
      return averages;
    }
  }

  /////////////////////////////////////////

  ///////// PAN AND ZOOM MAP //////////////
  function loadPageNoExplore() {
    window.location.href='/thesis/'
  }

  function loadPageExplore() {
    window.location.href='/thesis/?explore=true'
  }

  function showExplore() {
    // remove any old hover/click lines and text
    d3.selectAll('path.hover').remove()
    d3.selectAll('path.click').remove()
    d3.select('.hover-label').text('').attr('class','bold hover-label')
    d3.select('.click-label').text('').attr('class','bold click-label')

    // show only the explore data step
    d3.select('#intro').classed('display-none',true);
    d3.select('#background').classed('display-none',true);
    d3.selectAll('.step').classed('display-none',true);
    d3.select('#footnote').classed('display-none',true);
    d3.select('#explore').classed('display-none',false);
    d3.select('figure').classed('hover',true);

    // remove any house circles
    d3.selectAll('circle.house').classed('house-hide',true);

    // Tell scrollama to stop observing for trigger changes.
    scroller.disable();

    handleResize();
    panAndZoomMap(); // enable pan and zoom on the map
    opacityHolcGrade('A','light'); // show all zones by default
    opacityHolcGrade('B','light');
    opacityHolcGrade('C','light');
    opacityHolcGrade('D','light');
    d3.select('#sticky-button-explore').classed('display-none',true);
    d3.select('#sticky-button-no-explore').classed('display-none',false);
    handleToggleClick();

    // handle the click and hover interactivity
    d3.selectAll('.holc') // all my redlining neighborhood zones
      .on('mouseover',handleMouseOver)
      .on('mouseout',handleMouseOut)
      .on('click',handleClick);
  }

  function hideExplore() {
    // hide the explore data step
    d3.select('#intro').classed('display-none',false);
    d3.select('#background').classed('display-none',false);
    d3.selectAll('.step').classed('display-none',false);
    d3.select('#footnote').classed('display-none',false);
    d3.select('#explore').classed('display-none',true);
    d3.select('figure').classed('hover',false);
    d3.select('#sticky-button-explore').classed('display-none',false);
    d3.select('#sticky-button-no-explore').classed('display-none',true);
    handleResize();
    handleToggleClick();

    // Tell scrollama to resume observing for trigger changes.
    scroller.enable();

    // handleResize();
    undoPanAndZoomMap(); // disable and undo pan and zoom on the map
    // opacityHolcGrade('A','show'); // show all zones by default
    // opacityHolcGrade('B','show');
    // opacityHolcGrade('C','show');
    // opacityHolcGrade('D','show');

    // WHEN I GO FROM EXPLORE TO NON-EXPLORE, SCROLLING SEEMS TO BE MESSED UP
    // WHEN I TRY TO SCROLL ON TOP OF THE MAP, NOTHING HAPPENS - IT SEEMS LIKE ITS TRYING TO ZOOM AND PAN WHICH IS DISABLED
  }

  function panAndZoomMap() {
    // d3.select('#scrolly').attr('class','scrolly-flex') // go to flex display so that the comparisons and map are side by side
    let zoom = d3.zoom().scaleExtent([1, 8]).on('zoom',zoomed); // enable zoom and pan
    figureSvg.call(zoom); // apply zoom and pan to map

    function zoomed() { // when the map is zoomed or panned
      figureSvg.selectAll('path').attr('transform', d3.event.transform); // transform all the paths on my map
    }
  }

  function undoPanAndZoomMap() {
    d3.select('#scrolly').attr('class','scrolly-block') // go to standard block display
    figureSvg.selectAll('path').attr('transform', null); // remove any transforms that came from the panning and zooming
    let zoom = d3.zoom().on('zoom',null); // configure zoom disabling
    figureSvg.call(zoom).on("wheel.zoom", null); // apply configuration to disable zoom
  }

  function handleMouseOver(d,i) {
    d3.selectAll('path').classed('hover-path',false);
    d3.select(this).classed('hover-path',true);

    // remove all spark lines
    d3.selectAll('path.hover').remove()
    let censusData = getZoneDataPastThreshold(d,0); // I am not setting any DQ threshold right now until I figure out the best way to draw my line with missing data

    drawSparkLinesHover('explore',censusData);
    resizeExploreSparkLines();

    function drawSparkLinesHover(div,censusData) {
    // THIS FUNCTION WILL DRAW A SPARK LINE FOR THE NEIGHBORHOOD YOU'RE HOVERING OVER
    // FOR RESPONSIVENESS, THE SIZE AND POSITION OF THESE LINES SHOULD BE HANDLED INSIDE handleResize()
      let exploreDiv    = d3.select('#'+div),
          holcGrade     = d.properties.holc_id.substring(0,1),
          areaCode      = renameWestchester(d.properties.borough) + ' ' + d.properties.holc_id,
          stroke        = {"A":"#8C9F5B","B":"#8AA1AB","C":"#D6B64C","D":"#CC6D7B"},
          stroke1       = stroke[holcGrade],
          sparkLineSVGs = [{'metric':'pctWhite','svg':exploreDiv.select('.exploreSparkSVG.pctWhite')},
                           {'metric':'pctHomeownership','svg':exploreDiv.select('.exploreSparkSVG.pctHomeownership')},
                           {'metric':'medianHomeValue2010','svg':exploreDiv.select('.exploreSparkSVG.medianHomeValue2010')}];

      d3.select('.hover-label').text(areaCode).attr('class','bold hover-label background-'+holcGrade.toLowerCase())
      sparkLineSVGs.forEach((sparkLineSVG) => { // THIS DRAWS ONE PATHS PER SPARK LINE SVG FOR HOVERED ZONE
        sparkLineSVG.svg.select('.explore-sparkLine-g').append('path').datum(censusData).attr('class','hover exploreSparkLine '+sparkLineSVG.metric).attr('stroke',stroke1);
      });
    }
  }

  function handleMouseOut(d,i) {
    // d3.select(this).classed('hover-path',false);
    // d3.selectAll('path.hover').remove();
    // d3.select('.hover-label').text('').attr('class','bold hover-label')
  }

  function handleClick(d,i) {
    // HIGHLIGHT ZONE
    opacityHolcGrade('A','light');
    opacityHolcGrade('B','light');
    opacityHolcGrade('C','light');
    opacityHolcGrade('D','light');
    d3.selectAll('.light').classed('click-path',false)
    // d3.select(this).classed('light',false);
    d3.select(this).classed('click-path',true);



    d3.selectAll('path.click').remove(); // REMOVE EXISTING LINE

    let censusData = getZoneDataPastThreshold(d,0); // I am not setting any DQ threshold right now until I figure out the best way to draw my line with missing data
    drawSparkLinesClick('explore',censusData);
    resizeExploreSparkLines();

    function drawSparkLinesClick(div,censusData) {
    // THIS FUNCTION WILL DRAW A SPARK LINE FOR THE NEIGHBORHOOD YOU'RE HOVERING OVER
    // FOR RESPONSIVENESS, THE SIZE AND POSITION OF THESE LINES SHOULD BE HANDLED INSIDE handleResize()
      let exploreDiv    = d3.select('#'+div),
          holcGrade     = d.properties.holc_id.substring(0,1),
          areaCode      = renameWestchester(d.properties.borough) + ' ' + d.properties.holc_id,
          stroke        = {"A":"#8C9F5B","B":"#8AA1AB","C":"#D6B64C","D":"#CC6D7B"},
          stroke1       = stroke[holcGrade],
          sparkLineSVGs = [{'metric':'pctWhite','svg':exploreDiv.select('.exploreSparkSVG.pctWhite')},
                           {'metric':'pctHomeownership','svg':exploreDiv.select('.exploreSparkSVG.pctHomeownership')},
                           {'metric':'medianHomeValue2010','svg':exploreDiv.select('.exploreSparkSVG.medianHomeValue2010')}];

      d3.select('.click-label').text(areaCode).attr('class','bold click-label background-'+holcGrade.toLowerCase())
      sparkLineSVGs.forEach((sparkLineSVG) => { // THIS DRAWS ONE PATHS PER SPARK LINE SVG FOR HOVERED ZONE
        sparkLineSVG.svg.select('.explore-sparkLine-g').append('path').datum(censusData).attr('class','click exploreSparkLine '+sparkLineSVG.metric).attr('stroke',stroke1);
      });
    }
  }

  function nozoom() { // this will be used to prevent click to zoom
    d3.event.preventDefault();
  }

  function getZoneDataPastThreshold(d,coverageThreshold) { // coverageThreshold sets the minimum threshold for coverage % to include
    let hoverZoneCensusData = d.properties.census_match_data;
    let dataPastThreshold = [];

    for (let y=1940;y<=2010;y+=10) { // for every decade 1940 - 2010
      let pctWhiteAvg = [],
          pctHomeownershipAvg = [],
          medianHomeValueAvg = [],
          medianHomeValue2010Avg = [];

      hoverZoneCensusData.forEach((censusYear) => { // for each census year
        if (parseInt(censusYear.year) === y) {
          if (censusYear.metric_coverage_pct.pct_white >= coverageThreshold) {
                pctWhiteAvg.push(censusYear.pct_white);
              };
              if (censusYear.metric_coverage_pct.pct_homeownership >= coverageThreshold) {
                pctHomeownershipAvg.push(censusYear.pct_homeownership);
              };
              if (censusYear.metric_coverage_pct.median_home_value >= coverageThreshold) {
                medianHomeValueAvg.push(censusYear.median_home_value);
                medianHomeValue2010Avg.push(censusYear.median_home_value_2010);
              };
        }
      }); // closes for each census year within each zone

      // add averages for years that have data
      let thisPastThreshold = {};
      if (pctWhiteAvg.length > 0) {
        thisPastThreshold.pctWhite = d3.mean(d3.values(pctWhiteAvg))
      }
      if (pctHomeownershipAvg.length > 0) {
        thisPastThreshold.pctHomeownership = d3.mean(d3.values(pctHomeownershipAvg))
      }
      if (medianHomeValueAvg.length > 0) {
        thisPastThreshold.medianHomeValue = d3.mean(d3.values(medianHomeValueAvg))
        thisPastThreshold.medianHomeValue2010 = d3.mean(d3.values(medianHomeValue2010Avg))
      }
      if (pctWhiteAvg.length + pctHomeownershipAvg.length + medianHomeValueAvg.length > 0) {
        thisPastThreshold.year = y
        dataPastThreshold.push(thisPastThreshold)
      }
    } // closes year loop
    return dataPastThreshold;
  }

  function drawExploreAxesAndGrid(div) {
    let exploreDiv    = d3.select('#'+div),
        sparkLineSVGs = [{'metric':'pctWhite','svg':exploreDiv.select('.exploreSparkSVG.pctWhite')},
                         {'metric':'pctHomeownership','svg':exploreDiv.select('.exploreSparkSVG.pctHomeownership')},
                         {'metric':'medianHomeValue2010','svg':exploreDiv.select('.exploreSparkSVG.medianHomeValue2010')}];

    sparkLineSVGs.forEach((sparkLineSVG) => { // THIS DRAWS ONE PATHS PER SPARK LINE SVG FOR HOVERED ZONE
      // AXES
      sparkLineSVG.svg.append('g').attr('class','axis left-axis explore-'+sparkLineSVG.metric+'-axis');
      sparkLineSVG.svg.append('g').attr('class','axis bottom-axis explore-'+sparkLineSVG.metric+'-bottom-axis');

      // GRID
      let gridG = sparkLineSVG.svg.append('g').attr('class','grid '+sparkLineSVG.metric+'-grid '+div+'-'+sparkLineSVG.metric+'-grid');
      for (let g=0;g<gridLines;g++) {
        gridG.append('line').attr('class','explore-grid-line explore-grid-line-'+g);
      }

      // SPARK LINE GROUP
      sparkLineSVG.svg.append('g').attr('class','explore-sparkLine-g');

      // HOVER RECTANGLES AND CIRCLES
      let years = [1940,1950,1960,1970,1980,1990,2000,2010],
          hoverG = sparkLineSVG.svg.append('g').attr('class','explore-hover-g explore-hover-g-'+div);

      hoverG.append('circle').attr('class','explore-hoverCircle');
      hoverG.append('circle').attr('class','explore-hoverCircle'); // append two circles that will be placed over my lines when I hover
      hoverG.selectAll('rect').data(years).enter().append('rect').attr('class',d=>'explore-hoverRect explore-hoverRect-'+d);
    });
  }

  /////////////////////////////////////////


  ///////// DRAW INITIAL MAP //////////////
  function drawBoroughs() {
    let g = figureSvg.append('g')
               .attr('class','g-boroughs')

    g.selectAll('path')
               .data(boroughs.features)
               .enter()
               .append('path')
               .attr('d',geoGenerator)
               .attr('class','borough')
  }

  function drawHolc() {
    let holcG = figureSvg.append('g')
               .attr('class','g-' + name)

    holcG.selectAll('path')
               .data(holc.features)
               .enter()
               .append('path')
               .attr('d',geoGenerator)
               .attr("class",(d) => { return "hide holc holc-" + d.properties.holc_grade })
               .attr("id",(d) => {return d.properties.borough + '_' + d.properties.holc_id});
  }
  /////////////////////////////////////////
  function renameWestchester(borough) { if (borough === 'LowerWestchesterCo') { return 'Westchester' } else { return borough } }
});
