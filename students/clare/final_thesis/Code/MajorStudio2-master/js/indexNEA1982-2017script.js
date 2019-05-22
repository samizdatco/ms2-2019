// NEA AUDIENCE DATA 1982-2017 art museum visits
// one line to show trend of museum audience 1982 - 2017

// //////NEA data art museum audience years 1982, 1992, 2002, 2008, 2012, 2017 


d3.json("data/SPPA_NEA_2017UStrends_2008Part_1982-17edpopvisitedmusyr.json").then((dataall) => {
  dataWrangling(dataall);
});

// ---------------------------- Data ----------------------------
const dataWrangling = (dataall) => {
  console.log(dataall[0].years);
 
  let datayears = dataall[0].years;
  console.log(datayears)
  
  let data = dataall[0].percentall;
  svgPlot(data);
  console.log(data)
}


let svgPlot = (data) => { 
  console.log(data);

  var margin = {top: 100, right: 90, bottom: 40, left: 90}; ////this works outside the svgPlot

  
	var width = 900 - margin.left - margin.right; // specify the width and give space around the chart
	var height = 550 - margin.top - margin.bottom; // specify the width and give space around the chart
	console.log(margin.top)

  var svg = d3.select('#svg1') 
    .append('svg') ////then append an svg 
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .style("background", "#726a64");
      // .style("background", "#877c74");


  var g = svg.append('g') ////then append to global g - so now the div svg is appended
    ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  // console.log(width);  ////the above transform gives the space around the chart

  let subhead1 = g.append('g') /////to site text you can always do negative values to be outside the chart
    .append('text')
    .attr("class", "NEAsub")
    .text('What Percent of Adults Visit Art Museums or Galleries?')
    .attr('x', margin.left/45)
    .attr('y', -margin.top / 1.8)
    .attr('font-size', '1.7em')


  let ytext1 = g.append('g')
    .append('text')
    .attr("class", "NEApercent")
    // .text('percent')
    .attr('x', -340)
    .attr('y', -37)
    .attr("transform", "rotate(-90)")
    .attr('font-size', '18px'); // or can do .25in or %

  let ytext2 = g.append('g')
    .append('text')
    .attr("class", "NEApercent")
    .text('percent')
    .attr('x', -310)
    .attr('y', 270)
    .attr("transform", `translate(${height-margin.left/3}, ${margin.left*1.12})rotate(-90)`)
    .attr('font-size', '100%') 

  let dataset1 = g.append('g')
                .append("text")
                		// .attr("class", "axislabel")
                		.attr("text-anchor", "end")
                		.text('Data: ADP18-DemographicTables, 2008 SPPA')
                		.attr("transform", "rotate(-90.3)")
                		 .attr('x', -margin.top*1.4)
                    .attr('y', -width/22)
	 									.attr('font-size', '85%')
                    .style("color", "#f5f4f9")
                    .style("fill", "#f5f4f9")
                    .style("opacity", 0.9);


  function getSmoothInterpolation() {
    var interpolate = d3.scale.linear()
      .domain([0, 1])
      .range([1, indexSeries.length + 1]);

    return function (t) {
      var flooredX = Math.floor(interpolate(t));
      var interpolatedLine = indexSeries.slice(0, flooredX);

      if (flooredX > 0 && flooredX < indexSeries.length) {
        var weight = interpolate(t) - flooredX;
        var weightedLineAverage = indexSeries[flooredX].y * weight + indexSeries[flooredX - 1].y * (1 - weight);
        interpolatedLine.push({ "x": interpolate(t) - 1, "y": weightedLineAverage });
      }

      return lineFunction(interpolatedLine);
    }
  }
  // // The number of datapoints for line
  var n = 6;
  //////

  var xScale = d3.scaleLinear()
    .domain([0, n - 1])
    .range([0, 600]);


  var yScale = d3.scaleLinear()
    // .domain([0, (26.7) + 73.3]) /////add height to axis
    .domain([0, (26.7) + 8.3]) /////add height to axis
    // .range([0, height]);
    .range([height, 0]);

  // d3's line generator
  var line = d3.line()
    .x(function (d, i) { // to use “i” in xScale 
      // console.log(xScale(i))
      return xScale(i);
    })
    .y(function (d, i) {
      // console.log("y:", i, yScale(d));
      return yScale(d);
      // 		return yScale(d.y);
    })


  //  to fill below line   
    var area = d3.area() 
          .x(function (d, i) {
              console.log(xScale(i)) 
              return xScale(i);
          }).y1(function (d, i) {
              return yScale(d);
          }).y0(yScale(0));

  // fill above line
  var areaabove = d3.area()
    .x(function (d, i) {
      console.log(xScale(i))
      return xScale(i);
    }).y1(function (d, i) {
      return yScale(d);
    }).y0(yScale(height-310))


  // console.log(line) 
  console.log(data)
  console.log(data[0])

  // /////draw line for audience
  ///unrolling line http://big-elephants.com/2014-06/unrolling-line-charts-d3js/
  ///http://jsfiddle.net/nrabinowitz/XytnD/

  let line1 = g.append("g")
    .append("path")
    .datum(data)
    .attr("class", "lineNEA") // Assign a class for styling
    .attr('d', function (d, i) {
      console.log(d)
      return line(d) ////\\here add function in the line generator 
    })
    .attr('fill', 'none')
    .style("opacity", 1)
    .style('stroke', "#3161d8")
    .attr('stroke-width', 0.8)
    .transition()
    .duration(5000)
    .attrTween('d', pathTween)

  function pathTween() {
    var interpolate = d3.scaleQuantile()
      .domain([0, 1])
      .range(d3.range(1, data.length + 1));
    return function (t) {
      return line(data.slice(0, interpolate(t)));
    }
  }

  // add the X gridlines
  let gridx = g.append("g")
    .attr("class", "gridx")
    // .style('font-size', "80%")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisTop(xScale)
      .tickSize(height)
      .ticks("6")
      .tickFormat("")
      // .tickFormat("[years]")  /////returns the word years at the ticks on the top
    )

  // add the Y gridlines
  let gridy = g.append("g")
    .attr("class", "gridy")
    // .style('font-size', "70%")
    .call(d3.axisRight(yScale)
      .tickSize(height + margin.left + margin.right*1.13)
      .tickFormat("")
    )
    
  // let area1 = g.append("path")
  let area1 = g.append("g")
    .append("path")
    .data(data)
    .attr("class", "areaNEA")
    .attr("d", area(data))
    .style('fill', '#63a7f9')
    .attr('opacity', 0.18)


  ////circles on line
  let linedots = g.append("g")
    .selectAll("#dot")
    .data(data)
    .enter().append("circle") // Uses the enter().append() method
    .attr("id", "dot") // Assign a class for styling
    .attr("cx", function (d, i) { return xScale(i) })
    .attr("cy", function (d, i) { return yScale(d) })
    .attr("r", 5)
    .style("fill", "#acaeaf")
    .attr("opacity", 0.6)

console.log(data)
  ////larger circles on line for tooltips
  let linedotstr = g.append("g")
    .selectAll("#dot")
    .data(data)
    .enter().append("circle") // Uses the enter().append() method
        .attr("id", "dot") // Assign a class for styling
        .attr("cx", function (d, i) { return xScale(i) })
        .attr("cy", function (d, i) { return yScale(d) })
        .attr("r", 25)
        .attr("opacity", 0)
      .on("mouseover", function (d, i) {
        d3.select(this).style("fill", "blue")
        console.log("hover")
        var xPosition = parseFloat(d3.select(this).attr("cx"))
        var yPosition = parseFloat(d3.select(this).attr("cy"))
        
      d3.select("#tooltipNEA")  //Update the tooltip position and value
        .style("left", (xPosition + margin.right) + "px")
        .style("top", (yPosition + margin.top/2) + "px")
        .select("#value")
        .text(d)
        
      d3.select("#tooltipNEA").classed("hidden", false);  //Show the tooltip
      })
      .on("mouseout", function () {
        d3.select(this).style("fill", "");
        d3.select("#tooltipNEA").classed("hidden", true);
      });


  // Call the y axis in a group tag
  let axisLeft = g.append("g") // just append axis to global space
    .attr("class", "yaxis1")
    .style('fill', 'none')
    // .style("stroke", "grey")
    .style("stroke", "darkslategrey")
    .style('stroke-width', 0.2)
    // .call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
    //   .tickSize(3)
    //   .ticks(8)
    // );

  let axisRight = g.append("g") // just append axis to global space
    .attr("class", "yaxis1")
    .style('fill', 'none')
    .style('stroke-width', 0.08)
    .style("stroke", "darkslategrey")
    .style('color', '#e9e8ed')
    .style("font-size", "80%")
    .attr("transform", `translate(${height+margin.left*2.1}, 0)`)
    .call(d3.axisRight(yScale) //call axisLeft to use yScale for axis ticks and scale
      .tickSize(3)
      .ticks(5)
    );
	
    let years = [{
      "year": 1982,
      "percent": 22.1
    },
    {
      "year": 1992,
      "percent": 26.7
    },
    {
      "year": 2002,
      "percent": 26.5
    },
    {
      "year": 2008,
      "percent": 22.7
    },
    {
      "year": 2012,
      "percent": 21
    },
    {
      "year": 2017,
      "percent": 23.7
    }
  ];
    

  console.log(years[0].year)
  let data1 = (years)
  console.log(data1)
  
// var formatAsPercentage = d3.format("%Y") 
  // https://bl.ocks.org/mbostock/3371592
  // tickformat
  let yaxisTop = g.append("g")
    .attr("class", "xaxis1")
    .style('fill', 'none')
    .style('stroke-width', 0.2)
    .style("fill", "darkslategrey")
    .style('font-size', "80%")
    .style('color', '#faf9fc')
    .attr("transform", `translate(0, ${height})`)
    .datum(data1)  ////added
    .call(d3.axisBottom(xScale) ///.above move the axis to place that the chart ends - within the margins
      .tickSize(.1)
      .ticks("6")
      .tickPadding(10)
        .tickFormat(function(e,i) {
          console.log(data1[i])
          var s = data1[i].year;
           return   s + " ";
    })
);  
};    
