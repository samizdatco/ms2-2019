  
        ////NYC DCLA data select 
        ////look at Has More Recent Hiring at NYC Museums - Curators - Seen an Increase 
        ////in Diversity in Race/Ethnicity?
             
            d3.json("data/ADP18-DemographicTables_edpopvisitedmus.json").then((data) => {
                                 svgPlot2(data);
                    });

            
            let svgPlot2 = (data) => { ////need to call a different svgPlot 
                console.log(data); ////with each chart for multiple charts
                
        	var margin = {top: 80, right: 90, bottom: 60, left: 90}; ////this works outside the svgPlot
	
	var width = 800 - margin.left - margin.right; // specify the width and give space around the chart
	var height = 550 - margin.top - margin.bottom; // specify the width and give space around the chart
	console.log(margin.top)
 
	
			var svg = d3.select('#svg0')		  
                .append('svg')  ////then append an svg 
                    .attr("width", width + margin.left + margin.right) ///attribute width is width(above) with the margins back on
        			      .attr("height", height + margin.top + margin.bottom)
            
             var g = svg.append('g')    ////then append to global g - so now the div svg is appended
             ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc

            	.attr("transform", "translate(" + margin.left + "," + margin.top*1.25 + ")");
        ////the above transform moves the whole chart away from the left and top of the browser
                

          	const museum12 = data[0].museums2012
          	console.log(museum12)
          	
        	const museum17 = data[0].museums2017
          	console.log(museum17)

// //////make new array with just the SAME two numbers

let museumaudience = [museum12, museum17];

console.log(museumaudience)

// /////find max of the max of the 2 variables and use that for scale


let max = d3.max(museumaudience) ////max number in the array
console.log(max);

// // The number of datapoints for paired lines
	var n = 2;


var xScale = d3.scaleLinear()
				.domain([0, n-1])
				.range([0, width]); ////note don't add margins here
                

console.log(max)
var yScale = d3.scaleLinear()
				.domain([0, max+77]) ///to give axis height 100% 
				.range([height, 0]);  ////note don't add margins here
                
                
var line = d3.line()
	.x(function(d,i) { 
		console.log(xScale(i));
		return xScale(i);
	})
	.y(function(d, i) { 
		return yScale(d);
	});
	
	
var area = d3.area()  //////can use this twice just call in each of the 2 lines
	.x(function(d,i) { 
		console.log(xScale(i))
		return xScale(i); 
	})
	.y1(function(d, i) { 
		return yScale(d);
	})
	.y0(yScale(0));
	

// // // 9. Append the path, bind the data, and call the line generator - Example
// // svg.append("path")
// //     .datum(dataset) // 10. Binds data to the line 
// //     .attr("class", "line") // Assign a class for styling 
// //     .attr("d", line); // 11. Calls the line generator 
    
// ///////\\\\\\\\\\\\\\\showing one line only

/////just the line
let line1 = g.append("path")
    			.datum(museumaudience)
    			// .attr("class", "line") // Assign a class for styling
    			.attr('d', function(d,i) {
    				return line(d,i)    ////\\here add function in the line generator 
    			})
    			.attr('stroke', 'blue')
    			.attr('stroke-width', 0.1)
    				.on('mouseenter', function(d){
                        console.log('hover');
                        console.log(d)
                        d3.select(this)
                            .transition()
				   		          .duration(100)
                        attr.ytext2.text('art museum audience 2012: '+ d[0] + '% of US adult population; art museum audience 2017: ' + d[1] + '%')
    				})
                 .on('mouseout', function(d) {
                		console.log(d)
                		d3.select(this)
                		    .transition()
                		    .ease(Math.sqrt)
                		    .delay(1000)
				   		    .duration(1000)
                        // ytext2.text(d[0]  + ' art museum audience 2012: 21% of US adult population; '+ d[1] + ' art museum audience 2017: 23.7%')
                         .attr.ytext2.text('museum audience 2012-2017: 57.5 million adults')
                    });
                     
	
    // add the X gridlines
  let gridx = g.append("g")
    .attr("class", "gridx")
    // .style('font-size', "80%")
    .attr("transform", "translate(0," + height/0.99 + ")")
    .call(d3.axisTop(xScale)
      .tickSize(height)
      .ticks("6")
      .tickFormat("")
      // .tickFormat("[years]")  /////returns the word years at the ticks on the top
    );

  // add the Y gridlines
  let gridy = g.append("g")
    .attr("class", "gridy")
    // .style('font-size', "70%")
    .call(d3.axisRight(yScale)
      .tickSize(height + margin.left + margin.right*1.34)
      .tickFormat("")
    );	
			   		
 ////just the area below the line
 let line1area = g.append("path")
    			.datum(museumaudience)
              .style('stroke-width', 0.2)
            	.attr('d', area(museumaudience))     
      				.style('fill', '#7bb5fc')
              .attr('opacity', 0.4)
					.on('mouseenter', function(d){
                        console.log('hover');
                        console.log(d)
                        ytext2.text('Audience 2012:  '+ d[0] + '% of US adult population........Audience 2017:  ' + d[1] + '%')
    				})
                 .on('mouseout', function(d) {
                		console.log(d)
                        // ytext2.text(d[0]  + ' art museum audience 2012: 21% of US adult population; '+ d[1] + ' art museum audience 2017: 23.7%')
                         ytext2.text('Audience 2012-2017: 57.5 million adults')
                        // .attr("class", "line"); 
                    });
  
 ////circles on line
  let linedots = g.append("g")
    .selectAll("#dot")
    .data(museumaudience)
      .enter().append("circle") // Uses the enter().append() method
        .attr("id", "dot") // Assign a class for styling
        .attr("cx", function (d, i) { return xScale(i) })
        .attr("cy", function (d, i) { return yScale(d) })
        .attr("r", 5)
        .style("fill", "#acaeaf")
        .attr("opacity", 0.6)

console.log(museumaudience)
  ////larger circles on line for tooltips
  let linedotstr = g.append("g")
    .selectAll("#dot")
    .data(museumaudience)
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
              .style("top", (yPosition + margin.top/4) + "px")
              .select("#value")
              .text(d)
            
          d3.select("#tooltipNEA").classed("hidden", false);  //Show the tooltip
          })
          .on("mouseout", function () {
            d3.select(this).style("fill", "");
            d3.select("#tooltipNEA").classed("hidden", true);
        });
   

    let yAxis = g.append("g")  // just append axis to global space
        .attr("class", "yaxisnea")
        .style('fill', 'none')
        .style('stroke', 'darkslategrey')
        .style("color",'darkslategrey')
        .style('stroke-width', 0.2)
        .attr("transform", `translate(0.19 , 0 )`) 
        // .call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
        // 	.tickSize(3)
        //     .ticks(5)
        // );

    let yaxisRight = g.append("g")
        .attr("class", "yaxisnea")
          .style('fill', 'none')
          .style('stroke-width', 0.2)
          .style("color", "darkslategrey")
           .attr("transform", `translate(${width*0.9995} , 0 )`)  //////move it to right hand side
          .call(d3.axisRight(yScale)///.above move the axis to place that the chart ends - within the margins
          	.tickSize(3)
          	.ticks(5)
              // .ticks(5)
          );
  
    console.log(data[0].years[0])
    
     let xaxisbottom = g.append("g")
        .attr("class", "xaxisnea")
        .style('fill', 'none')
        .style('stroke', 'darkslategrey')
        .style("color",'darkslategrey')
        .style('stroke-width', 0.2)
         .attr("transform", `translate(0, ${height*0.9995} )`)  //////move it to right hand side
        .datum(data.years)
        .call(d3.axisBottom(xScale)///.above move the axis to place that the chart ends - within the margins
        	.tickSize(3)
        // 	.ticks("1")
        	.ticks("")
        	.tickPadding(10)
        //     .tickFormat(function(e,i) {
        //   console.log(data[0].years)
        //   var s = data[0].years[0];
        //   return   s + " ";
        // })
        );
        

 let chartxaxistick2 = g.append('g')
				.append('text')
    				.attr("class", "xaxisnea2")
                    .text('2017')
                    .attr('x', width-margin.left/4)
                    .attr('y', height*1.05)
                    .attr('font-size', '60%');
                    
let chartxaxistick1 = g.append('g')
				.append('text')
    				.attr("class", "xaxisnea2")
                    .text('2012')
                    .attr('x', -margin.left/6)
                    .attr('y', height*1.05)
                    .attr('font-size', '60%');
                    
let ytext2 = g.append('g')
				.append('text')
    				.attr("class", "ytext2")
                    .text('Audience 2012-2017: 57.5 million adults')
                    .attr('x', margin.left/4)
                    .attr('y', height/1.5)
                    .attr('font-size', '0.9em'); 
 
 let chart1 = g.append('g')
				.append('text')
    				.attr("class", "audtext")
                    .text('percent')
                    .attr('x', -width/1.99)
                    .attr('y', margin.top*4.4)
                      .attr("transform", `translate(${height-margin.left}, 0)rotate(-90)`)
                    .attr('font-size', '90%');
                  
                
 let heading = g.append('g')  //// append text to global
				.append('text')
    				.attr("class", "audheading")
    				        .style('color', '#f5f4f9')
                    .style('fill', 'currentColor')
                    .text('National Art Museum Audiences: focus on uptick from 2012 - 2017')
                    .attr('x', margin.left/35)
                    .attr('y', 0-margin.top)
                    .attr('font-size', '1.6em'); 

  let subhead1 = g.append('g')
				.append('text')  /////to site text you can always do negative values to be outside the chart
                    .attr("class", "audsubhead")
                    .text('% of U.S. adult population (2017 population was 246.7 million adults)')
                    .attr('x', margin.left/35)
                    .attr('y', 0-margin.top/1.9)
                    .attr('font-size', '1.5em'); 

// //     			.on('mouseenter', function(d){
// //                         console.log('hover');
// //                         console.log(d)
// //                         heading.text(d[0]  + ' American Indian or Alaskan Native & Native Hawaiian or Pacific Islander curators; ' + d[1] + ' hired 2010+')
// //                         .attr('font-size', '10px')
// //                         })                            ////// tspan
// //                 .on('mouseout', function(d) {
// //                 		console.log(d)
// //                 	// .transition()
// //                 	// 	.ease(Math.sqrt)
// //                  //       .delay(100)
// //                         heading.text((d) => { return "NYC DCLA Grantees 2015: Museum Curators"; })
// //                         .attr('font-size', '12px')
// //                         .attr("class", "line");
// //                     });

   }; 
