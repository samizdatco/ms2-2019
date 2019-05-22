////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number 2015 and 2018 from 2018 report survey
////percent, numbers, race and ethnicity increased hiring 


    d3.json("data/2018artmus_intLeadershiprace_reord.json").then((data)=>{
    		svgPlot16(data);
			});
  

	let svgPlot16 = (data) => {

		console.log(data);

	let margin = { top: 50, right: 22, bottom: 60, left: 250 };
		
			let width = 990 - margin.left - margin.right; // Use the window's width 
			let height = 680 - margin.top - margin.bottom; // Use the window's height



//////for 2015 data
			var svg = d3.select('#svg16') ////here select named svg and put it into the var svg
				.append('svg') ////then append an svg 
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom);

			var g = svg.append('g')
				
				.attr("transform", "translate(" + margin.left/1.35 + "," + margin.top*3.5 + ")");
		

///////======parallel lines paired together 2015 data with 2018
////National Art Museum Staff Survey Intellectual Leadership Positions 
////by number
var n = 12;

		// for horizontal
				
				let xScale5 = d3.scaleLinear()
					.domain([0, 305])
					.range([0, width]);

				let yScale5 = d3.scaleLinear()
					.domain([0, 305]) 
					.range([height, 0]);
					

				let bars1 = g.selectAll("line")
					.data(data)
					.enter()
					.append("g")
					.attr('class', 'barthin')
			
// 				console.log(data);
	
	
	//////
	
		bars1.append("line")    /////first
					.attr("fill", "none")
					.attr("stroke", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								
					} else if (i % 2 !== 0){
							
							var color = "#222323"
									return color
					}
					})
					.style("stroke-dasharray", function(d,i){
								if(i % 2 == 0){
								var dash = ("3, 3")
									return dash
					} else{
									var dash = ("3, 3")  
									return dash
					}
					})
					.style("opacity", function(d,i){
								if(i % 2 == 0){
								var opacity = 1
									return opacity
					} else{
									var opacity = 0.45    ////for first part of 2018 line  
									return opacity
					}
					})
					.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								var strokewidth = 0.3
								return strokewidth
					} else{
								var strokewidth = 0.3
								return strokewidth
					}
					})
				
	
					.attr('x1', function(d,i) {
								if(i % 2 == 0){
										var start = 0
										return start
							} else{
										// var start = xScale5(d.year18-d.year15)
										var start = 0    ////////\\\\\\\\\  second green line
										return start
							}
							})
					
						.attr('y1', (d, i) => {   /////change line spacing
							if(i % 2 == 0){ 				/////group bars into twos
								return i *35;
					} else{
								return i *35-12;
					}
					})
						.attr('x2', function(d,i) { 
						var linestart = xScale5(d.year15)
						var lineend = xScale5(d.year18)
							if(i % 2 == 0){
								var linedouble = linestart
								return linedouble 
						} else  {
						    var linedouble = linestart  /////second green line goes to 2015 amount
						    return linedouble
					}
					})
					
					.attr('y2', (d, i) => {  ////change spacing of lines
							if(i % 2 == 0){
								return i *35;
					} else{
								return i *35-12;
					}
					})
			
		/////////
		
			bars1.append("line")   //////second set returns increase purple
					.attr("fill", "none")
					.attr("opacity", 0.85)
					.attr("stroke", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								var color = "#222323"
									return color
									
					} else {
							// var color = "lightgreen"  /////change this for 2018 line
							// var color = "khaki" 
								var color="#ddd57c"
							// var color="#fcc38a"
							// var color="#efc737"
									return color
					}
					})
					// .style("stroke-dasharray", function(d,i){
					// 			if(i % 2 == 0){
					// 			var dash = ("2,2")
					// 				return dash
					// } else{
					// 		var dash = ("2,2")
					// 				return dash
					// }
					// })
					.attr("stroke-width", function(d,i){    ///////set up different attributes to select bars before calling the lines
							if(i % 2 == 0){
								var strokewidth = 0.9  /////change to lessen opacity
								return strokewidth
					} else{
								var strokewidth = 1.4
								return strokewidth
					}
					})
				
					.attr("marker-end", function(d,i){    ///arrows on every second bar
							if(i % 2 == 0){
								var marker = 0
					} else{
								var marker = "url(#arrow)"
								return marker   
					}
					})
					
		
					.attr('x1', function(d,i) {
								if(i % 2 == 0){
										var start = 0
										return start
							} else{
										// var width = xScale5(d.year18-d.year15)
										var start = xScale5(d.year15)    ////////\\\\\\\\\
										return start
							}
							})
					
						.attr('y1', (d, i) => {   /////change line spacing
							if(i % 2 == 0){ 				/////group bars into twos
								return i *35;
					} else{
								return i *35-12;
					}
					})
						.attr('x2', function(d,i) { 
						var linestart = xScale5(d.year15)
						var lineend = xScale5(d.year18)
							if(i % 2 == 0){
								var linedouble = linestart
								return linedouble 
						} else  {
						    var linedouble = lineend 
						    return linedouble
					}
					})
					
					.attr('y2', (d, i) => {  ////change spacing of lines
							if(i % 2 == 0){
								return i *35;
					} else{
								return i *35-12;
					}
					})
					
					
				
	//////add arrows  https://codepen.io/zxhfighter/pen/wWKqqX
let linearrows = g.append("svg:defs").selectAll("marker")
							    .data(["arrow"])   
							    .data(data)
							  .enter().append("svg:marker")   
							    .attr("id", "arrow")
							    .attr("viewBox", "0 -5 10 10")
							    .attr("refX", 10)
							    .attr("refY", 0)
							    .attr("markerWidth", 10)
							    .attr("markerHeight", 10)
							    .attr("opacity", 0.9)
							    // .attr("orient", "auto")
							    .attr("orient", function(data,i){    ///arrows on every second bar
										console.log(data)
										if(i == 1){
												var direction = "auto" 
												return direction
										} else{
													var direction = "auto-start-reverse"   ////change arrow orientation
													return direction   
										}
										})
							  .append("svg:path")
							    .attr("d", "M0,-5L10,0L0,5")
							    .attr("fill", function(d,i){    ///////color negative arrow differently
											if(i == 1){
												var arrowneg = "red"
												return arrowneg
										} else{
													var arrowneg = "#ddd57c"
														// var arrowneg = "lightgreen"
												
													return arrowneg
										}
									})
									
									

////////============ circles at end of lines
		
// 	 bars1.append("circle")  ////first circles
//   			.data(data)
// 			  // .attr("r", 5)
// 			  .attr("r", function(d,i) {
// 			  		if (i === 0){
// 							var size = 3.5;
// 							return size; 
// 						}  if (i === 2){
// 							var size = 3.5;
// 							// var size = 0;
// 							return size; 
// 			  		}  if (i == 4){
// 							var size = 3.5;
// 							return size; 
// 						}  if (i == 6){
// 								var size = 3.5;
// 								return size; 
// 						} if (i == 8){
// 								var size = 3.5;
// 								return size;
// 						} if (i == 10){
// 								var size = 3.5;
// 								return size;
// 						} else {
// 							var size = 5
// 							return size;
// 						}
// 					  })
// 					  .attr("fill", function(d,i) { 
// 								if (i === 1){
// // 									var color = "purple";
// 									var color = "#bf3928";
// 									return color; 
// 								}  else if (i % 2) {
// 									// var color = "#f79a2a"
// 									var color ="#fcc38a"
// 									return color
// 									// var color = "#11593b"
// 								} else {
// 									var color = "#0f0a04"
// 									return color;
// 								}
// 					  })
// 						.attr('cy', (d, i) => {   /////changeline spacing
// 							if(i % 2 == 0){
// 								return i *35;
// 							} else{
// 										return i *35-12;
// 							}
// 							})
// 						.attr('cx', function(d,i) { 
// 								return xScale5(d.yearline);  ////change start  // x1 ////look at svg element line x1 y1 x2 y2
// 							})
				
				
	////////////
	
	 //bars1.append("circle")  ////second circles at end of second 2015
  // 			.data(data)
		// 	  // .attr("r", 5)
		// 	  .attr("r", function(d,i) {
		// 	  		if (i === 1){
		// 					var size = 0;
		// 					return size; 
		// 				}  if (i === 3){
		// 					// var size = 2;
		// 						var size = 0;
		// 					return size; 
		// 	  		}  if (i == 5){
		// 	  			var size = 0;
		// 					// var size = 2;
		// 					return size; 
		// 				}  if (i == 7){
		// 						var size = 0;
		// 						return size; 
		// 				} if (i == 9){
		// 						// var size = 2;
		// 						var size = 0;
		// 						return size;
		// 				} if (i == 11){
		// 						// var size = 2;
		// 						var size = 0;
		// 						return size;
		// 				} else {
		// 					var size = 0
		// 					return size;
		// 				}
		// 			  })
		// 			  .attr("fill", function(d,i) { 
		// 						// if (i === 1){
		// 						// 	// var color = "red";
		// 						// 	// return color; 
		// 						// }  else {
		// 						// 	// var color = "#11593b"
		// 							var color = "DARKSEAGREEN"
		// 							return color;
		// 						// }
		// 			  })
		// 				.attr('cy', (d, i) => {   /////changeline spacing
		// 					if(i % 2 == 0){
		// 						return i *35;
		// 					} else{
		// 								return i *35-12;
		// 					}
		// 					})
		// 				.attr('cx', function(d,i) { 
		// 						// return xScale5(d.yearline);  ////change start  // x1 ////look at svg element line x1 y1 x2 y2
		// 						return xScale5(d.year15)
		// 					})


////====== label number end of each line 
var numlabelpercent =	bars1.append('text')
					.text((d,i) => {
							if(i % 2 == 0){
								return d.yearline;
							} else if (i === 1){
								return (d.percentdifference + "% ");
							} else{
									// return (d.yearline  + " ..... +" + d.percentdifference + "% ");
									return ( "+ " + d.percentdifference + "% ");
							}
					})
					.attr('y', (d, i) => {   /////try changing line spacing
							if(i % 2 == 0){
								return i *35;
							} else{
										return i *35-12;
							}
							})
					.attr('x', function(d,i) { 
							// return xScale5(d.yearline);
							if(i=== 1){
								return xScale5(d.yearline)+12;
							} else if(i % 2 == 0) {
										return xScale5(d.yearline)-12;
							} else  {
									return xScale5(d.yearline)
							}
						})
					.style("font-size", "0.9em")
					.attr('fill', (d,i) => {
						if(i % 2 == 0){
								// color = "#0f0a04"
								color = "#050505"
								return color
					} else{
									color = "#ddd57c"
										// color = "lightgreen"
										// color = "#67b705"
										// color = "#96bed1"
								  return color
							}
							})
					.attr("text-anchor", "start")
				  .attr("transform", "translate(15, 4)")
			
					
//////labels axis

var numlabel2015 =	bars1.append('text')
					.data(data)
						.attr("class", "numlabel")
						.attr("text-anchor", "bottom")
						.attr("text-anchor","end")
						.text((d, i) => {
							// return d.raceethnicity;
							if(i % 2 == 0){
									return ""
								} else{
									return d.raceethnicity;
								}
							})
							.attr("x", -margin.left/35)
							.attr('y', (d, i) => {   /////change line spacing
									if(i % 2 == 0){
										return i *35;
									} else{
										return i *35-20;
									}
							})
							.attr("transform", `translate(${margin.left/2.1}, -5)`)
							// .style("font-family", "sans-serif")
							.style("font-size", "99%")
							.style("fill", "#ede1ad")
							// .style("fill", "#e8ce5f")
							.attr("text-anchor", "end")
							.attr("transform", (d, i) => { 
									let a = 0;
									// let a = -35;
	                
	                // let x =  -margin.left/20;  ////height
	                // let y = i *35 - margin.left/6;  ///width
	                // return `rotate(${a}, ${x}, ${y})`;
	                let x =  -margin.left/3;  ////height  for horizontal 
	                let y = i *35 - margin.left/1.75;  ///width
	                return `rotate(${a}, ${x}, ${y})`;
							})

/////text on hover on end circles

// let transparentcircles = bars1.append("circle")  ////second circles at end of second 2015
//   			.data(data)
// 			  // .attr("r", 5)
// 			  .attr("r", function(d,i) {
// 			  		 if (i === 3){
// 							var size = 5;
// 							return size; 
// 			  		}  if (i == 5){
// 							var size = 5;
// 							return size; 
// 						} if (i == 9){
// 								var size = 5;
// 								return size;
// 						} if (i == 11){
// 								var size = 5;
// 								return size;
// 						} else {
// 							var size = 0
// 							return size;
// 						}
// 					  })
// 					  .style("fill", function(d,i) { 
// 									var color = "transparent"
// 									return color;
// 					  })
// 					  .attr("opacity", 0)
// 						.attr('cy', (d, i) => {   /////changeline spacing
// 							if(i % 2 == 0){
// 								return i *35;
// 							} else{
// 								return i *35-12;
// 							}
// 							})
// 						.attr('cx', function(d,i) { 
// 								// return xScale5(d.yearline);  ////change start  // x1 ////look at svg element line x1 y1 x2 y2
// 								return xScale5(d.year18)
// 							})
// 					  .on('mouseenter', (d,i,j) => {
// 					  	 //d3.select(this) 
// 					  	  // var _x = (d3.mouse(this)[0]);
//           // 			var _y = (d3.mouse(this)[1]);
          
// 										console.log("hover")
// 										console.log(d.difference)
// 							d3.select(j[i])
// 							 //d3.select(this) 
// 										numlabel2015.text(d.year15 + d.year15 + " number of intellectual leadership staff in 2015")
// 								  	numlabelpercent.text(d.yearline + " number of intellectual leadership staff in 2018")
// 							  	// .style('fill', 'lightgrey')
// 			              .style('opacity', '1');
// 									})
// 			        .on('mouseout', (d, i,j) => {
// 				           numlabel2015.text(d.year15)
// 				           if(i % 2 == 0){
// 								return numlabel2015.text(d.yearline)
// 							} else if (i === 1){
// 								 return numlabelpercent.text(d.yearline + " number of staff in 2018")
// 							} 
// 				      	 d3.select(j[i])
// 				      			.transition()	
// 		                .delay(50)
// 		                .duration(200)
// 							  	// .style('fill', 'sienna')
// 							  	// .style("font-size", "0.98em")
// 							  	// .style('opacity', '1');
// 			        })



// ////  axis 
	let yAxis = g.append('g') // just append axis to global space
					.attr("class", "axisside3")
					.style('stroke', 'darkslategrey')
					.attr('stroke-width', 0.3)
					.attr("transform", `translate(-2, ${-margin.top/1.4} )`)
					.call(d3.axisLeft(yScale5) //call axisLeft to use yScale for axis ticks and scale
						.tickSize(0)
						.ticks(0)
						.tickFormat("") ////empty no text
					)
					.selectAll("text")
					.attr("transform", "rotate(-65)")
					.attr("text-anchor", "end");

	
				// let xAxis = g.append("g")
				// 	.attr("class", "axisside3")
				// 	.style('stroke', 'darkslategrey')
				// 	.attr('stroke-width', 0.3)
				// 	.attr("transform", `translate(0, ${height-margin.bottom } )`)
				// 	.call(d3.axisBottom(xScale5)
				// 		////above move the axis to place that the chart ends - within the margins
				// 		.tickSize(3)
				// 		.ticks(5)
				// 	);
	
					
		let line18 = g.append("line")
						// .style("stroke", "lightgreen")
						.style("stroke", "#ddd57c")
						.style("fill", "none")
						.attr("stroke-width", 1)
						// .style("stroke-dasharray", "2,2")
						.attr("x1", 0)
						.attr("y1", -margin.top/0.73)
						.attr("x2",  margin.left/5.5)
						.attr("y2", -margin.top/0.73)
				
				
			let number18 = g.append('text')
							.text('2018')
							.attr('x', margin.left/4.2)
							.attr('y', -margin.top/0.79)
							.attr('font-size', '95%')
							.style("fill", "#ddd57c")
							// .style("fill",  "lightgreen")
	
		
			let number15 = g.append('text')
					  .text('2015')
						.attr('x', margin.left/4.2)
						.attr('y', -margin.top/0.58)
						.attr('font-size', '95%')
						.style("opacity", 1)
						// .style("fill", "#f5f4f9")
						.style("fill",  "#0f0a04")
						
			let line15 = g.append("line")
						.style("stroke", "#0f0a04")
						.style("fill", "none")
						.attr("opacity", 0.9)
						.attr("stroke-width", 1)
						// .style("stroke-dasharray", "2,2")
						.attr("x1", 0)
						.attr("y1", -margin.top/0.55)
						.attr("x2", margin.left/5.5)
						.attr("y2", -margin.top/0.55)
						// .attr("x1", width/1.24)
						// .attr("y1", -margin.top/0.405)
						// .attr("x2", width/1.312)
						// .attr("y2", -margin.top/0.405)
						

			let title = g.append('text')
					.text('Hires By Race and Ethnicity: "Intellectual Leadership" Positions')
					.attr('x', 0)
					.style("fill", "#f5f4f9")
					// .style("fill", #f5f9f4")
					// .attr('y', height+margin.top+margin.top/0.5)
					.attr('y', -margin.top/0.35)
					.attr('font-size', '1.65em')
					// .style('font-style', 'italic');
	
			 let titleend = g.append('text')
					.text('Percent Change 2015-2018' )
					// Excluding White Non-Hispanic Staff, National Art Museums')
		 			.style("fill", "#f5f4f9")
		 			// .style("fill", "#f5f9f4")
					// .attr('x', 0)
					.attr('x', 0)
					.attr('y', -margin.top/0.435)
					.attr('font-size', '1.05em')
					.style('font-weight', 600)
					.style('font-style', 'italic');
					
					
			let title2 = g.append('text')
					.text('Data Graph from Art Museum Staff Demographic Survey Report 2018')
					.attr('x', 5)
					.attr('y', height/1.14)
					.attr('font-size', '0.9em')
					.style("fill", "#f5f9f4");
					
	
		let titleend2 = g.append('text')
					.text('* AIAN = American Indian or Alaskan Native.  NHPI = Native Hawaiian or other Pacific Islander')
					.style("fill", "#f5f4f9")
					.attr('x', 5)
					.attr('y', height/1.2)
					.attr('font-size', '0.9em')
					
	};
	
