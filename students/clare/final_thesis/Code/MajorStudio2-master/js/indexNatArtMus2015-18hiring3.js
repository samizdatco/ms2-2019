////National Art Museum 2018 staff data from 2018 staff survey report
// intellectual leadership positions new hiring since 2014 percentages
////parallel lines comparing new hiring by curators / educators and by museum leadership incl exec / conservators

             
                    
            d3.json("data/2018artmus_newhiring2014CurEd_Leader_comparison.json").then((data) => {
                                 svgPlot27(data);
                    });
                
   
            let svgPlot27 = (data) => { ////need to call a different svgPlot 
                console.log(data); ////with each chart for multiple charts
                
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number 2015 and 2018 from 2018 report survey
////Race/Ethnicity 


	let margin = {top: 90, right: 95, bottom: 255, left: 190};
		
			let width = 1100 - margin.left - margin.right; // Use the window's width 
			let height = 485 - margin.top - margin.bottom; // Use the window's height

	

			var svg = d3.select('#svg27') 
    				.append('svg') ////then append an svg 
      				.attr('width', width + margin.left + margin.right)
      				.attr('height', height + margin.top + margin.bottom);

			var g = svg.append('g')
				////then append to global g - so now the div svg is appended - see further down
				    .attr("transform", "translate(" + margin.left*1.3 + "," + margin.top/1.1 + ")");
			

/////// parallel lines comparing new hiring by curators / educators and by museum leadership incl exec / conservators
////National Art Museum Staff Survey Intellectual Leadership Positions 
////percent
var n = 10;

	// for horizontal
				
			
				let xScale = d3.scaleLinear()
    					.domain([0, 88+15])
    					.range([0, width]);

				let yScale = d3.scaleLinear()
    					.domain([0, 88]) 
    					.range([height, 0]);
					
					/////bars ascending
				// let ySc = d3.scaleLinear()
				// 	.domain([0, 220]) ////using just the numbers here
				// 	.range([height, 0]);
// var line = d3.line()

		let bars1 = g.selectAll("line")
					.data(data)
  					.enter()
  					.append("g")
  					.attr('class', 'thinline2')
			
				console.log(data);

			
////draw percentage lines, color every 2 bars differently

			bars1.append("line")
					.attr("fill", "none")
					// .attr("stroke", "none")
					.attr("stroke", function(d,i){
						if(i % 2 == 0){
								var color = "SILVER"
								 var color = "#c5e216"
								return color
						} else {
								// var color = "#98af11"
								// var color = "#c5e216"
								var color="#9bdaf7"
								return color
						}
						})
					.attr("opacity", function(d,i){
						if(i === 8){
							var opacity = 1
								return opacity
						} else if (i === 9){
						// if (i >=5) {
								var opacity = 1
								return opacity
						} else  {
								var opacity = 0  ////////======
								return opacity
						}
						})
					.style("stroke-dasharray", function(d,i){
							if(i % 2 == 0){
								var dash = ("2,2")
										return dash
						} else {
								var dash = ("2,2")
										return dash
						}
						})
						.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
								if(i % 2 == 0){
									var strokewidth = 2.2
									return strokewidth
						} else{
									var strokewidth = 2.2
									return strokewidth
						}
						})
		
					.attr('x1', function(d,i) {
										return 0;
							})
					.attr('y1', (d, i) => {   /////change line spacing
							if(i === 8){
							return i *21
					} else if (i === 9) {
							return i *25;
					} else if  (i <=7){ 
								return i * 1;
					}
					})
					.attr('x2', function(d,i) { 
						var linestart = xScale(d.percent)
						var lineend = xScale(d.percent)
							if(i % 2 == 0){
								var linedouble = linestart
								return linedouble 
						} else  {
						    var linedouble = lineend 
						    return linedouble
					}
					})
					.attr('y2', (d, i) => {  ////change spacing of lines
							if(i === 8){
							return i *21
					} else if (i === 9) {
							return i *25;
					} else if  (i <= 7){ 
								return i * 1;
					}
					})

////vertical line 2015 to show national percentage

// let natpercentage = bars1.append("line")
// // let natpercentage = g.append("line")
// 							.attr("fill", "none")
// 							.attr("stroke", "#f5f4f9")
// 							.attr("opacity", 0.9)
// 							// .style("stroke-dasharray", 3,3)
// 							.attr("stroke-width", 0.2)
// 							.attr('x1', function(d,i) {
// 												return xScale(62);
// 									})
// 							.attr('x2', function(d,i) {
// 												return xScale(62);
// 									})
// 							.attr('y1', height/2)
// 							.attr('y2', height*1.7)
							
////vertical line 2018 to show national percentage

let natpercentage2018 = bars1.append("line")
// let natpercentage = g.append("line")
							.attr("fill", "none")
							.attr("stroke", "#f5f4f9")
							.attr("opacity", 0.9)
							// .style("stroke-dasharray", 3,3)
							.attr("stroke-width", 0.2)
							.attr('x1', function(d,i) {
												return xScale(60.7);
									})
							.attr('x2', function(d,i) {
												return xScale(60.7);
									})
							.attr('y1', height*1.08)
							.attr('y2', height*1.7)
							
////line to 2015 label vertical percent

// let natpercentlabel =	g.append("path")
// 						.data(data)
// 							.attr("fill", "none")
// 							.attr("stroke", "#f5f4f9")
// 							.attr("opacity", 0.9)
// 							.attr("stroke-width", 0.3)
							
// 							.attr("d", "M "+xScale(62)+ ",140, L 500,90 L 670,90 ")  
							
					
// 				g.append("text")   ////text on line label
// 						.text('62% white, total U.S. population 2015')
// 						.style("fill", "#f5f4f9")
// 						.attr('font-size', '0.8em')
// 						.attr('x', 505)
// 						.attr('y', 85)


////line to 2018 label vertical percent

let natpercentlabel2018 =	g.append("path")
						.data(data)
							.attr("fill", "none")
							.attr("stroke", "#f5f4f9")
							.attr("opacity", 0.9)
							.attr("stroke-width", 0.3)
							
							.attr("d", "M "+xScale(60.7)+ ",147, L 500,80 L 715,80 ")   
					
				g.append("text")   ////text on line label
						.text('60.7% white, total U.S. population, 2018')
						.style("fill", "#f5f4f9")
						.attr('font-size', '0.8em')
						.attr('x', 505)
						.attr('y', 72) 					
		

//////circles at end of lines

		bars1.append("circle")
		  			.data(data)
					  .attr("r", 5)
					 // .attr("stroke", "sienna")
					 ////.attr('x', function(d,i) { 
					 // // .attr("fill", "#513c2f")
					  .style("opacity", function(d,i){
							if(i === 8){
								var opacity = 0.65
								return opacity
						} else if (i === 9){
						// if (i >=5) {
								var opacity = 0.65
								return opacity
						} else  {
								var opacity = 0  ////////======
								return opacity
						}
						})
					  .attr("fill", function(d,i) {
					  		if(i % 2 == 0){
// 							var color = "darkseagreen";
							var color ="#d13825";
							return color; 
						} else {
// 							var color = "purple";
							// var color = "#bf3928";
							var color ="#d13825";
							return color; 							
						}
						})
						.attr('cy', (d, i) => {   /////change line spacing
								if(i === 8){
									return i *21 -1
							} else if (i === 9) {
									return i *25 -1;
							} else if  (i <=7){ 
										return i * 1;
							}
							})
						.attr('cx', function(d,i) { 
							var linestart = xScale(d.percent)
							var lineend = xScale(d.percent)
								if(i % 2 == 0){
									var linedouble = linestart
									return linedouble 
							} else  {
							    var linedouble = lineend 
								    return linedouble
							}
							})
              .attr('transform', 'translate(0,1)')
		

////percent label on each bar 

var numlabel = bars1.append('text')
					.text((d,i) => {
						if(i % 2 == 0){
							// return (d.percent + "% " + d.raceethnicity + " " + d.jobtype) 
							return (d.percent + "% " ) 
						} else {
							return (d.percent + "% " ) 							
						// return (d.percent + "% " + d.raceethnicity + " " + d.jobtype)
							}
							})
							.attr('y', (d, i) => {   /////change line spacing
							if(i === 8){
									return i *21 -1
							} else if (i === 9) {
									return i *25 -1;
							} else { 
										// return i * 1;
							}
							})
						.attr('x', function(d,i) { 
							var linestart = xScale(d.percent)
							var lineend = xScale(d.percent)
								if(i % 2 == 0){
									var linedouble = linestart
									return linedouble 
							} else  {
							    var linedouble = lineend 
								    return linedouble
							}
						})
						.style("opacity", function(d,i){
							if(i === 8){
								var opacity = 0.9
								return opacity
							} else if (i === 9){
							// if (i >=5) {
									var opacity = 0.9
									return opacity
							} else  {
									var opacity = 0  ////////======
									return opacity
							}
							})
							// .attr('transform', (d) => { return 'translate(' + 20 + ', ' + (500 - yScale(d) ); });
							.style("fill", "#f5f4f9")
							.style("font-size", "90%")
							.attr("text-anchor", "start")
							.attr("transform", "translate(15, 6)")

//// label bar axis

let jobtype = bars1.append('text')
					.data(data)
						.attr("class", "numlabel")
						.attr("text-anchor", "bottom")
						.attr("text-anchor","end")
						// .text((d,i)=> { 
						// 	if(i % 2 == 0){
						// 		return (d.jobtype)
						// 	} else {
						// 		return (d.raceethnicity)
						// 	}
						// })
						.text((d,i) => {
							return (d.jobtype)
						})
						.attr("x", -margin.left/2.2)
						.attr('y', (d, i) => {   /////change line spacing
							if(i === 8){
									return i *21 -1
							} else if (i === 9) {
									return i *25 -1;
							} else { 
										// return i * 1;
							}
							})
						.attr("transform", `translate(${margin.left/2.4}, 4)`)
						.style("opacity", function(d,i){
							if(i === 8){
								var opacity = 0.9
								return opacity
							} else if (i === 9){
							// if (i >=5) {
									var opacity = 0.9
									return opacity
							} else  {
									var opacity = 0  ////////======
									return opacity
							}
							})
						// .style("font-size", "100%")
						.style("fill", "#f5f4f9") 
						.style("font-weight", "bolder")
						.style("font-size", "0.95em")
						// .style("opacity", 0) ///////take this out for now

	
//////  left axis 
	let yAxispercent = g.append('g') // just append axis to global space
					.attr("class", "y18axis")
					.style('color', 'darkslategrey')
					.attr('stroke-width', 0.6)
					.attr("opacity", 0.9)
				// 	.attr("transform", `translate(0, ${-margin.top} )`)
					.attr("transform", `translate(0, ${margin.top*100})`)
					// .attr("transform", `translate(0, ${margin.top/155} )`)
					.style("fill", "#f5f4f9")
					.call(d3.axisLeft(xScale) //call axisLeft to use yScale for axis ticks and scale
						.tickSize(0)
						.ticks(0)
						.tickFormat("") ////empty no text
					)
					.selectAll("text")
					.style("fill", "#f5f4f9")
					.attr("transform", "rotate(-65)")
					.attr("text-anchor", "end");

// bottom axis percent numbers & line
	let xAxispercent = g.append("g")
					.attr("class", "xaxis1")
			    .style('fill', 'none')
			    // .style('stroke-width', 0.2)
			    .style('color', 'darkslategrey')
			    .style('font-size', "80%")
			    // .style("fill", "#f5f4f9")
					.attr('opacity', 1)
					.attr("transform", `translate(0, ${height+margin.bottom/1.7} )`)
					.call(d3.axisBottom(xScale)
						.tickSize(.2)
			      .ticks(5)
			      // .tickPadding(10)
			      .tickFormat(function(d,i) {
			          console.log(d)
			          var s = d;
			           return   s + "% ";
		    				})
						)
						.selectAll("text")
						.style("fill", "#f5f4f9")
			
////bottom line
// let yAxispercentline = g.append('g') // just append axis to global space
// 					.attr("class", "y18axis")
// 					.style('color', 'darkslategrey')
// 					.attr('stroke-width', 0.2)
// 					.attr("opacity", 0.8)
// 				  .attr("transform", `translate(0, ${height*2.05} )`)
// 					// .attr("transform", `translate(0, ${height*2.12} )`)
// 					.call(d3.axisBottom(xScale) //call axisLeft to use yScale for axis ticks and scale
// 						.tickSize(3)
// 						.ticks(10)
// 						.tickFormat("") ////empty no text
// 					)
					// .selectAll("text")
					// .style("fill", "#f5f4f9")
					// .attr("transform", "rotate(-65)")
					// .attr("text-anchor", "end");

 // add the X gridlines
  let gridxpercent = g.append("g")
          .attr("class", "gridx")
          .style('stroke', 'darkslategrey')
					.attr('stroke-width', 0.2)
          // .style('font-size', "80%")
          .attr("transform", `translate(0, ${+margin.bottom/1.75 } )`)
          .call(d3.axisBottom(xScale)
            // .tickSize(height*2.2)
            .tickSize(height/1.4)
            .ticks("1")
            .tickFormat("")
        )
          
          
          
// // add top line
//   let gridy = g.append("path")
//         .attr("class", "gridy")
//         .attr('x', 0)
// 					.attr('y', height*1.07)
//         // .style('font-size', "70%")
//         .attr("transform", `translate(0, ${5} )`)
        

let xlabel = g.append('text')
            .attr("class", "y18axis")
            .attr("transform", "translate(" + (width/2.8) + " ," + (height) + ")")
           //.attr("transform", "translate(" + (width/2.485) + " ," + (height*2.34) + ")")
            .style("font-size", "0.85em")
            .style("opacity", 0.95)
	    			.style("fill", "#f5f4f9")
            // .text("percent")
              

let headingpercent = g.append('text')
					.text('How Diversity Lags: Curators & Educators vs. Museum Leadership & Conservators')
					.attr('x', -margin.left*0.0001)
					.attr('y', -margin.top/1.4)
					.style("fill", "#f5f4f9")
					// .style("fill", "#000000")
					.attr('font-size', '1.5em');
					
	let headingpercent2 = g.append('text')
					// .text('excluding white,')
					.style("fill", "#f5f4f9")
					// .style("fill", "#000000")
					.text('White non-Hispanic Staff Hired Since 2014')
					.attr('x',  -margin.left*0.0001)
					.attr('y', -margin.top/3.5)
					.attr('font-size', '1.25em')
					.style("font-style", "italic");

					
	let titlepercent2 = g.append('text')
				// 	.text('')
					.attr('x', -margin.left*0.0001)
					.attr('y', -margin.top/1.61)
					.style("fill", "#f5f4f9")
					.attr('font-size', '0.95em');
		
					
		let datanote3 = g.append('text')
					.text('2018 U.S. Percent White: United States Census Bureau, Quick Facts')
					.attr('x', -margin.left*0.0001)
					.attr('y', height+margin.top*2.62)
					.style("fill", "#f5f4f9")
					.attr('font-size', '0.9em');	
					
			let datanote2 = g.append('text')
					.text('Data Graph from Art Museum Staff Demographic Survey Report 2018')
					.attr('x', -margin.left*0.0001)
					.attr('y', height+margin.top*2.87)
					.style("fill", "#f5f4f9")
					.attr('font-size', '0.9em');				
									
};
