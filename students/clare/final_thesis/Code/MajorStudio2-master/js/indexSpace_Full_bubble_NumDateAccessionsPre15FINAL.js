//////full Brooklyn Museum contemporary collection artworks dataset with accession information
//////accession number and accession dates of artworks with artist name and nationality 
/////count nationality for artwork bubbles grouped by artist nationality by before 2015 and 2015 and after
/////3 with no accession number / corresponding accession date
/////here artworks acquired before 2015
////data from full Brooklyn Museum contemporary collection, artist, accession date and accession number - see cloud9
// <!--see indexSpace_Full_bubble_NumDateAccessionspre15.js for data wrangling-->

// d3.json("BkMus10253fullaccessNumDatenationalityAll.json").then((data) => {
//   // dataWrangling(data);
//   svgPlot26(data); // called later in the dateWrangling function
// });

d3.json("data/before15groupsortcontinent.json").then((before15groupCount) => {
  // dataWrangling(data);
  svgPlot26(before15groupCount); // called later in the dateWrangling function
});

// ---------------------------- Data ----------------------------
// const dataWrangling = (data) => {
// console.log(data)
//   console.log(data.length);
//   // let nationalityCount = data.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
//   // //   nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? 1 : -1); // small to large
//   // console.log(nationalityCount[0].count)
  
//   // let reformattedData = data.slice(0, 3);
//   let reformattedData = accession;
//   svgPlot23(reformattedData);
// }

            const svgPlot26 = (before15groupCount) => { ////different svgPlot 
                // console.log(data[2]);
                console.log(before15groupCount)
                console.log(before15groupCount.length);
                // console.log(data)
//                 let test_data = data.forEach((d, i) => {
//                 // let test_data = (data,(d, i) => {
//                 // console.log(d[i]);
//                 var dat = i[0+1];
//                 console.log(dat);
//                 return i[0+1];
//               })
// //              
// console.log(test_data)
   var margin = {top: 5, right: 120, bottom: 60, left: 120}; ////this works outside the svgPlot
	
	var width = 960 - margin.left - margin.right; // specify the width and give space around the chart
	var height = 850 - margin.top - margin.bottom; // specify the width and give space around the chart
// 	console.log(margin.top)



    var svg = d3.select('#svg26')		  
            .append('svg')  ////then append an svg 
              .attr("width", width + margin.left + margin.right) ///attribute width is width(above) with the margins back on
      			  .attr("height", height + margin.top + margin.bottom)
            
        var g = svg.append('g')    ////then append to global g - so now the div svg is appended
             ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc

            	.attr("transform", "translate(" + margin.left*2 + "," + margin.top + ")");
        ////the above transform moves the whole chart away from the left and top of the browser
        
        var modal2 = svg.append('g').attr("id", "modal2")     

              .attr("transform", "translate(" + margin.left*2 + "," + margin.top + ")");
     
                
// /////data wrangling
// /////returns data with accession number 4 digits, artist name and artist nationality for each artwork

//       var return_data = [];
            
//               let test_data = data.forEach((d, i) => {
                
//                 if (data[i].artist.length  > 0) { // if artist is not empty
//                     var str = "19";
//                     var year = data[i].accessionnumber.split('.')[0]; //split accession number at period
                
//                           if(year < 100){  //if number less than 100, concat '19' to make years 1900s
//                             var new_year = str.concat(year);
//                             // console.log(new_year)
//                               } else {
//                                 var new_year = data[i].accessionnumber.split('.')[0];
//                               }
//                     // return_data[i] = [new_year, data[i].artist[0].name, data[i].artist[0].nationality];
//                     return_data[i] = [new_year, data[i].artist[0].name, data[i].artist[0].nationality, data[i].accessiondate];
//                 } else { // if artist array is empty
//                     // console.log("here");
//                     var str = "19";
//                     var year = data[i].accessionnumber.split('.')[0];
                
//                         if(year < 100){  // if accession number is 4 digits
//                           var new_year = str.concat(year);
//                           // console.log(new_year)
//                         }else {
//                           var new_year = data[i].accessionnumber.split('.')[0];
//                         }

//                     // return_data[i] = [new_year, "null", "null"];
//                     return_data[i] = [new_year, "null", "null", data[i].accessiondate];
//                 }
//                 // console.log(return_data);
//               });

//         let accessionNum = return_data;
            
//             console.log(accessionNum);
//             console.log(accessionNum.length);
            
// ////======array of objects - so need to loop to get each item within the count
// // //return data by year grouped into before and after  

// // //group the accession date years into before 2010 and after 2010
// // // second group 2015 before and after

// let datenull10 =[];
// let datebefore10 = []; 
// let dateafter10 = [];
// let datenull15 =[];
// let datebefore15 = []; 
// let dateafter15 = [];


// // ////====console.log test

// // // for(let i = 0; i < datenodes.length; i++){
// // //   if(datenodes[i][0] == "null"){
// // //     // console.log("data " +i+ " is null, and nationality is "+ datenodes[i][1] );
// // //   } else if (datenodes[i][0] < 2010){
// // //     // console.log("data " +i+ "'s date is " + datenodes[i][0] + " is before 2010, and nationality is "+ datenodes[i][1]);
// // //     datebefore[i] = [datenodes[i]];
// // //   } else {
// // //     console.log("data " +i+ " is after 2010, and nationality is "+ datenodes[i][1]);
// // //   }
// // // }

// // /////=======2010: loop through and push into groups: null dates, before 2010 and after 2010

// for(let i = 0; i < accessionNum.length; i++)
//   {
//     if ((accessionNum[i][0]) == "date unknown")
//       {
//       console.log("data " +i+ " is date unknown, and artist is "+ accessionNum[i][1] );
//         // console.log(accessionNum[i]); /////this works to get each array
//         datenull10.push(accessionNum[i])
//     } 
//       else if ((accessionNum[i][0])<2010)
//         {
//     // // console.log("data " +i+ "'s date is " + datenodes[i][0] + " is before 2010, and nationality is "+ datenodes[i][1]);
//           // console.log(datenodes[i])
//           datebefore10.push(accessionNum[i])
//     } else if ((accessionNum[i][0])>=2010)
//       {
//     // // console.log("data " +i+ " is after 2010, and nationality is "+ datenodes[i][1]);
//           // console.log(datenodes[i])
//           dateafter10.push(accessionNum[i])
//     }
//     // else  ((accessionNum[i][0]))
// }
// console.log(datenull10.length);
// console.log(datebefore10.length);
// console.log(dateafter10.length);
// console.log(datenull10);
// console.log(datebefore10);
// console.log(dateafter10);


// // ////=======do same loop for 2015 and after 
// // /////=======2015: loop through and push into groups: null dates, before 2015, and 2015 and after

// for(let i = 0; i < accessionNum.length; i++)
//   {
//     if ((accessionNum[i][0]) == "date unknown")
//       {
//       //console.log("data " +i+ " is null, and nationality is "+ accessionNum[i][1] );
//         datenull15.push(accessionNum[i])
//     } 
//       else if ((accessionNum[i][0])<2015)
//         {
//     // // console.log("data " +i+ "'s date is " + accessionNum[i][0] + " is before 2010, and nationality is "+ accessionNum[i][1]);
//           datebefore15.push(accessionNum[i])
//     } else if ((accessionNum[i][0])>=2015)
//       {
//     // // console.log("data " +i+ " is after 2010, and nationality is "+ accessionNum[i][1]);
//           // console.log(accessionNum[i])
//           dateafter15.push(accessionNum[i])
//     }
// }

// console.log(datenull15.length);
// console.log(datebefore15.length);
// console.log(dateafter15.length);
// console.log(datenull15);
// console.log(datebefore15);
// console.log(dateafter15);


// // //////===== return keys for date and nationality
// let null15 = [];
//         null15 = datenull15.map((e,i) => { 
//                     return {date: e[0], artist: e[1], nationality: e[2]};
//                 })
//         // console.log(null15[0].date)
//         console.log(null15)  
//         console.log(null15.length);
 
// let before15 = [];
//         before15 = datebefore15.map((e,i) => { 
//                     return {date: e[0], artist: e[1], nationality: e[2]};
//                 })
//         // console.log(before15[0].date)
//         console.log(before15)  
//         console.log(before15.length);

// let after15 = [];
//         after15 = dateafter15.map((e,i) => { 
//                     return {date: e[0], artist: e[1], nationality: e[2]};
//                 })
//         // console.log(after15[0].date)
//         console.log(after15.length);
//         console.log(after15)
     
// // /////====== then for each group count by nationality

// // // ===example http://learnjsdata.com/group_data.html

// // //////====== before15 group by nationality and keep date == 

// let before15group = d3.nest()
//                     // .key(function(d) { return d.nationality; })
//               ////retains date array and group by nationality     
//                     .key(function(d) { return  d.date, d.artist, d.nationality; })
//                     .entries(before15);
//             console.log(before15group)
//             console.log(before15group.length)

// // //// =====map is a very useful method in JavaScript to re-arrange arrays
// // //// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

// // ////====count by nationality and keep date

//     var before15groupCount = before15group.map((e,i) => { 
//                     // return {nationality: e.key, count: e.values.length};
//     //////keep the arrays in each nationality group
//                     return {artists: e.values, nationality: e.key, count: e.values.length};
//                 });
//                 // console.log(nationalityCount[0].count)
//       console.log(before15groupCount)  
//       console.log(before15groupCount.length);
      
// // ////====sort by nationality length before 2015

// before15groupsort = before15groupCount.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
// console.log(before15groupsort)

  
// // ////to get max number
// //             let nat = after15group.map((e,i) => { 
// //                     return {count: e.values.length}; /////returns count: value
// //                 });
// //                    console.log(nat);  //////just the counts

// //             var maxnatctun = nat.map(function (art) {
// //                   return art.count;   ////returns just the values
// //                     });
//   //                  // console.log(maxnatctun);
//   //             // d3.max(nat);
            
// //             let maxnatct = maxnatctun.sort((a, b) => (a > b) ? -1 : 1);
// //                  console.log(maxnatct)
            
// //             let maxnatcount = d3.max(maxnatct);
// //                  console.log(maxnatcount);   //////max number

// ////use same max number as in all artwork circles 
let radareadate = d3.scaleSqrt()    ////to get area of circles need square root 
                      .domain([0, 6811])  
                      // .domain([0, 116]) 
                      .range([0, 270]);
            console.log(radareadate(6811))

// //Initialize a simple force layout, using the nodes and edges in dataset

let force = d3.forceSimulation(before15groupCount) 
  			  .force("charge", d3.forceManyBody().strength(15))
  			   // .force("charge", d3.forceManyBody().strength(20))
  				// .force("link", d3.forceLink(dataset.edges).distance(30))  
  			  .force("center", d3.forceCenter().x(width/3.5).y(height/1.66))
  				.force("collision", d3.forceCollide().radius(function(d, i) {
  				    return radareadate(d.count) + 1;
  				}));


// var colors = d3.scaleSequential(d3.interpolateOrRd).domain([1, 13])

// var colors = d3.scaleSequential().domain([1,13]).interpolator(d3.interpolateViridis);
// var colors = d3.scaleLinear().domain([1,13]).range(["yellow", "blue"])

// var colors = d3.scaleLinear().domain([1,13]).range([ "#c5e3f9","#ffd6c9","#ffa14f","#633906","#663a07","#c9d3d6", "#ffe114","#c9d3d6", "#e0f75d","#683c07","#6a3d07","#6c3e08","#6e4008"])


// // var colors = d3.scale.threshold()
// //   .domain([1, 14])  
// //   .range(["blue","yellow","green","orange"]); 
 
 //Create nodes as circles
console.log(before15groupCount.length)

// //tooltip for information
// //         ////tooltip
//   let div = d3.select("g").append("div")
//         .attr("class", "tooltipcircles26") ////best to use #tooltip div for styling
//             .style("opacity", 0)
//             .style("display", "none");

//   function mouseover() {
//     div.style("display", "inline");
//   }
  
// //enter

var nodes = g.selectAll("g")
            .data(before15groupCount)
            .enter()
          .append("g")
             .on('mouseover', function(d,i) {
                console.log(i)
        			   d3.select(`#tooltippre15${i}`).style("display", "block").style("opacity", 0.9)
                  // d3.select("#modal2").select(`#tooltippre15${i}`).select("rect").style("fill", "#fff")
                  })
        			.on('mouseleave', function(d,i) {
            		    console.log(i)
            		d3.select(`#tooltippre15${i}`).style("display", "none").style("opacity", 0)
          			   //d3.select("#modal2").select(`#tooltippre15${i}`).select("rect").style("fill", "#fff")
          		  });
    
console.log(before15groupCount)



/////create tooltip for each circle
 var newtooltips2 = modal2.selectAll("g")
                .data(before15groupCount)
                .enter()
              .append("g")
                .attr("class", "newtooltipspre15")
                .attr("id", (d,i) => {   ////create id for each tooltip
                    return `tooltippre15${i}`
                  })
                  .style("opacity", 0)   ////hide
                  .style("display", "none")  //// change display on mouseover
                  
              
     newtooltips2.append("rect")  
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

    
    newtooltips2.append("text")       	      	
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
              
///////=======previous code
  // var circles = nodes.append("circle") 
  //         	.attr("r", (d,i) => { 
  //         		return radareadate(d.count);
  //         	})
  //             	.style("opacity", 0.7)
  //             	.style("fill", (d,i) => { 
  //         	      console.log(before15groupCount[i].continentnum)
  //             	  console.log(before15groupCount[i].continent)
  //         		return colors(before15groupCount[i].continentnum);
  //         		// return colors(before15groupCount[i].count);
  //         	})
  
////13 groupings
let nationalityCount2 = before15groupCount.sort((a, b) => (a.continentnum > b.continentnum) ? -1 : 1);
console.log(nationalityCount2)
          	
 var circles = nodes.append("circle") 
          	.attr("r", (d,i) => { 
          		return radareadate(d.count);
          	})
              	.style("opacity", 0.6)
              	.style("fill", (d,i) => { 
              	  console.log(before15groupCount[i].continentnum)
              	  console.log(before15groupCount[i].continent)
//               	  return colors(before15groupCount[i].continentnum);
              		  
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
          	 
  // for (int i = 0; i < width-circleW/2; i = i+(circleW+theSpace)) {
  //   fill(redColor,greenColor,blueColor);
  //   ellipse(i, height/2, circleW, circleH);
  // }
 

      //     	.on("mouseover", function (d, i) {
      //     	  div.transition()
      //             .duration(200)
      //           d3.select(this).style("stroke", "#f742eb").style("stroke-weight", "5").style("stroke-opacity", 1)
      //           // d3.select(this).classed("toolTipHover15", true)
      //             console.log("hover")
      //           var xPosition = parseFloat(d3.select(this).attr("cx"))
      //           var yPosition = parseFloat(d3.select(this).attr("cy"))
                
      //           d3.select("#tooltipcircles15")  //Update the tooltip position and value
      //               .style("left", (xPosition + margin.right*2.1) + "px")
      //               .style("top", (yPosition + margin.right/1.8) + "px")
      //             .transition()
      //               .duration(4000)
      //               .attr("text-anchor", "middle")
      //               .attr("alignment-baseline", "middle")
      //             .select("#valuecircles15")
      //               .text(d.nationality + ' artists: ' + d.count + ' artworks before 2015')
                  
      //           d3.select("#tooltipcircles26").classed("hiddencircle26", false);  //Show the tooltip
      //         })
      //         .on("mouseout", function () {
      //           d3.select(this).style("stroke", "none");
      //           // d3.select(this).style("fill", "");
      // //           d3.select(this).style("fill", (d,i) => { 
      // //     		    return colors(data[i].continentnum);
      // // ///try with holding tooltip until hover over next circle
      // //           // d3.select("#tooltipcircles").classed("hiddencircle", true);
      // //         });
      //   });
          	
// //Add a simple tooltip
  nodes.append("title")
  	 .text(function(d) {
  		return d.name;
  	 });

  var texts = nodes.append("text")
        	.text(function(d) {
        	  console.log(d.nationality)
        	 if (d.nationality != "") {
              return (d.nationality)
          }
            else {
            return ("not recorded")
            }
        })
          .style("fill", "white")
          .style("text-anchor", "middle")
          .style("font-size", function (d) {
            // console.log(d.count)
            return radareadate(d.count) * 0.3 + 2 + "px"
          })
          .attr("translate", "transform(0,10)")
       

// //Every time the simulation "ticks", this will be called
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
  			.attr("y", function(d) { 
  			 // console.log(d.count)
  			  return d.y + radareadate(d.count) * 0.07; })
  			  
    newtooltips2.attr("transform", d =>`translate(${d.x}, ${d.y-radareadate(d.count)/3 -15} )`) 

})

let heading15 = g.append('text')  //// append text to global
                .text('1943-2015')
                .attr('x', margin.left*1.25)
                .attr('y', margin.bottom/3.6)
                .attr("fill", "#f5fcf7")
                .attr('font-size', '1.5em') 

}
