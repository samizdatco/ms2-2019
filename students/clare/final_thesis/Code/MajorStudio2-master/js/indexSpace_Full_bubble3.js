//////full Brooklyn Museum contemporary collection artworks dataset 
//////nationality count circles
///color by continent
/////tooltips modal


d3.json("data/nationalityCountdatacontinent.JSON").then((data)=>{
 	                svgPlot15(data);

      });

            const svgPlot15 = (data) => { ////need to call a different svgPlot 
                console.log(data);
                console.log(data.length);
                
   var margin = {top: 2, right: 120, bottom: 60, left: 120}; ////this works outside the svgPlot
	
	var width = 900 - margin.left - margin.right; // specify the width and give space around the chart
	var height = 820 - margin.top - margin.bottom; // specify the width and give space around the chart
// 	console.log(margin.top)


    var svg = d3.select('#svg15')		  
            .append('svg')  ////then append an svg 
              .attr("width", width + margin.left + margin.right) ///attribute width is width(above) with the margins back on
      			  .attr("height", height + margin.top + margin.bottom)
            
        var g = svg.append('g')    ////then append to global g - so now the div svg is appended
             ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
      
            	.attr("transform", "translate(" + margin.left*2 + "," + margin.top + ")");
        ////the above transform moves the whole chart away from the left and top of the browser
       
        var modal = svg.append('g').attr("id", "modal")      
    
              .attr("transform", "translate(" + margin.left*2 + "," + margin.top + ")");
              
//   //  nationalityCount = data.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
//  //   nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? 1 : -1); // small to large
                      // //   console.log(nationalityCount);   /////returns the count of each group in order      
                      ////    console.log(nationalityCount[0].count)
      nationalityCount = data.sort((a, b) => (a.nationality < b.nationality) ? 1 : -1); // small to large
                        console.log(nationalityCount);   /////returns the count of each group in order


    let radarea = d3.scaleSqrt()    ////to get area of circles need square root 
                      .domain([0, 6930])  
                      .range([0, 270]);
                  console.log(radarea(6930))
 

 //Initialize a simple force layout, using the nodes and edges in dataset

 let force = d3.forceSimulation(data)  /////gets concentric circles
  			  .force("charge", d3.forceManyBody().strength(15))
  				// .force("link", d3.forceLink(dataset.edges).distance(30))  
  			  .force("center", d3.forceCenter().x(width/2).y(height/2.25))
  				.force("collision", d3.forceCollide().radius(function(d, i) {
  				    return radarea(d.count) + 1;
  				}));


 //Create nodes as circles
console.log(data)

////13 groupings
// groupsort = data.sort((a, b) => (a.continentnum > b.continentnum) ? -1 : 1); // This is to sort the array large to small
// console.log(groupsort)
// groupsort = data.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
// console.log(groupsort)

 var nodes = g.selectAll("g")
              .data(data)
              .enter()
          .append("g")
            .on('mouseover', function(d,i) {
                console.log(i)
        d3.select(`#tooltip${i}`).style("display", "block").style("opacity", 0.9)
                  // d3.select("#modal").select(`#tooltip${i}`).select("rect").style("fill", "#fff")
                  })
//         			.on('mouseleave', function(d,i) {
//             		    console.log(i)
//             		d3.select(`#tooltip${i}`).style("display", "none").style("opacity", 0)
//           			   //d3.select("#modal").select(`#tooltip${i}`).select("rect").style("fill", "#fff")
//           		  });
// 		   .on('mouseover', function(d,i) {
//                			 console.log(i)
//         	     d3.select(`#tooltip${i}`).style("display", "block").style("opacity", 0.9)
                  // d3.select("#modal").select(`#tooltip${i}`).select("rect").style("fill", "#fff")
//                   })
        	.on('mouseleave', function(d,i) {
            		d3.select(`#tooltip${i}`)
            		       .transition()	
                        .delay(50)
                        .duration(200)
                        .style("opacity", 0)
                        .transition()	
                        .delay(50)
                        .duration(200)
                        .style("display", "none")
            		
           //d3.select("#modal").select(`#tooltip${i}`).select("rect").style("fill", "#fff")
          	 });
 
 /////create tooltip for each circle
 var newtooltips = modal.selectAll("g")
                .data(data)
                .enter()
              .append("g")
                .attr("class", "newtooltips")
                .attr("id", (d,i) => {   ////create id for each tooltip
                    return `tooltip${i}`
                  })
                  .style("opacity", 0)   ////hide
                  .style("display", "none")  //// change display on mouseover
                  
              
     newtooltips.append("rect")  
                  .attr("width", 310)
                  .attr("height", 32)
                  .attr("class", "toolrect")
                  .attr("x", -155)
                  .attr("y", -28)
                  .attr("rx", 3)
                  .attr("ry", 3)
                  // .attr("transform", "translate(-100,-15)")
                  .style("padding", 6)
                  // .style("fill", "#f7f7f7")
                  .style("fill", "#a8aa2e")
                  .style("opacity", 0.9)
                  .attr("text-anchor", "middle")

    
    newtooltips.append("text")       	      	
              	   .text(function(d) {
                  	  if (d.nationality != "") {
                              return (d.nationality + ': ' + d.count + ' artworks')
                            }
                              else {
                              return "not recorded"
                              }
                          })
                          .attr("x", 0)
                          .attr("y", -6)
                          .attr("class", "tiptext")
                            .attr("text-anchor", "middle")
                            .style("fill", "#2d2725")
                            .style("font-size", "18px")
                    
     
   var circles = nodes.append("circle")
          	.attr("r", (d,i) => { 
          		return radarea(d.count);
          	})
          	.style("opacity", 0.7)
          	.style("fill", (d,i) => { 
          	  console.log(data[i].continentnum)
          		// return colors(data[i].continentnum);
          		      	 if(d.continentnum == 1){
								var color = "KHAKI";
								return color; 
							} else if(d.continentnum == 2) {
								var color1 = "DARKKHAKI";
								return color1; 							
							} else if(d.continentnum == 3){
								var color2 = "PALEGOLDENROD";
								return color2;							
							} else if (d.continentnum == 4){
								var color3 = "gold";
								return color3;	
							} else if(d.continentnum == 6) {
								var color4 = "WHITESMOKE";
								return color4; 							
							} else if(d.continentnum == 7){
								var color5 = "TAN";
								return color5;							
							} else if (d.continentnum == 8){
								var color6 = "gray";
								return color6;		
							} else if(d.continentnum == 9) {
								var color7 = "DARKGOLDENROD";
								return color7; 							
							} else if(d.continentnumm == 10){
								var color8 = "lightgray";
								return color8;							
							} else if (d.continentnum == 11){
								var color9 = "sienna";
								return color9;	
							} else if (d.continentnum == 12){
								var color10 = "wheat";
								return color10;	
							} else if (d.continentnum == 13){
								var color11 = "BURLYWOOD";
								return color11;	
							} else if (d.continentnum == 14){
								var color12 = "THISTLE";
								return color12;	
							} else {
								  var color13 = "ROSYBROWN";
								  return color13;
								  }
              })
          		
                    
  ////Add text on each bubble
  var texts = nodes.append("text")
        	.text(function(d) {
        	 if (d.nationality != "") {
              return d.nationality;
          }
            else {
            return "not recorded"
            }
        })
          .style("fill", "white")
          .style("text-anchor", "middle")
          .style("font-size", function (d) {
            return radarea(d.count) * 0.3 + 2 + "px"
          })
          .attr("translate", "transform(0,10)")
       

  //Every time the simulation "ticks", this will be called
  force.on("tick", function() {
    /*for lines
  	edges.attr("x1", function(d) { return d.source.x; })
  		 .attr("y1", function(d) { return d.source.y; })
  		 .attr("x2", function(d) { return d.target.x; })
  		 .attr("y2", function(d) { return d.target.y; });
    */
    
    
    nodes.attr("x", function(d) { return d.x; })
  		   .attr("y", function(d) { return d.y; })


    circles.attr("cx", function(d) { return d.x; })
  		     .attr("cy", function(d) { return d.y; })
  		 

    texts.attr("x", function(d) { return d.x; })
  			 .attr("y", function(d) { return d.y + radarea(d.count) * 0.07; });
  			

//     newtooltips.attr("transform", d =>`translate(${d.x}, ${d.y-radarea(d.count)/3 -15} )`) 

    newtooltips.attr("transform", d =>`translate(${d.x}, ${d.y-radarea(d.count)/1.5 -15} )`) 
  });
        
        
let heading = g.append('text')  //// append text to global
//                 .text('Brooklyn Museum Contemporary Collection')
                .attr('x', -margin.left*1.5)
                .attr('y', margin.bottom/4.2)
                .attr('font-size', '1.15em'); 
                
let heading2 = g.append('text')  //// append text to global
//                 .text('10,253 artworks grouped by artist nationality')
                .attr('x', -margin.left*1.53)
                .attr('y', margin.bottom/1.4)
                .attr('font-size', '1.45em'); 

}
