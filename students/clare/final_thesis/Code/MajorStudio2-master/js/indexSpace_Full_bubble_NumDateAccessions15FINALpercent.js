// PERCENT 2015 - March 2019
// // <!--clean full Brooklyn Museum contemporary collection dataset full 10,253 with accession_number with accession date, and artist information-->
// // <!--force circle BUBBLE chart_Bkyn museum artworks by nationality - artworks acquired before 2015-->
// <!--/////count nationality for artwork bubbles grouped by artist nationality by before 2015 and 2015 and after-->
// <!--/////3 with no accession number / corresponding accession date-->

// <!--/////here artworks acquired 2015 and after: 289 artworks-->

// <!--see indexSpace_Full_bubble_NumDateAccessions15.js for data wrangling-->


d3.json("data/after15groupsortcontinent.json").then((after15groupCount) => {
  // dataWrangling(data);
  svgPlot29(after15groupCount); // called later in the dateWrangling function
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

            const svgPlot29 = (after15groupCount) => { ////different svgPlot 
                // console.log(data[2]);
                console.log(after15groupCount)
                console.log(after15groupCount.length);
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
  // var margin = {top: 5, right: 120, bottom: 60, left: 120}; ////this works outside the svgPlot
	var margin = {top: 40, right: 21, bottom: 30, left: 33};
	
	var width = 690 - margin.left - margin.right; // specify the width and give space around the chart
	var height = 670 - margin.top - margin.bottom; // specify the width and give space around the chart
// 	console.log(margin.top)



    var svg = d3.select('#svg29')		  
            .append('svg')  ////then append an svg 
              .attr("width", width + margin.left + margin.right) ///attribute width is width(above) with the margins back on
      			  .attr("height", height + margin.top + margin.bottom)
            
        var g = svg.append('g')    ////then append to global g - so now the div svg is appended
             ///note for multiple svgs you need a new g variable so you'd have g1, g2, etc
                // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        ////the above transform moves the whole chart away from the left and top of the browser
                
       var modal4 = svg.append('g').attr("id", "modal4")        
            // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                
 ////============ data wrangling === leave  ==============
 
  // select accession year - first 4 numbers
   
    // let data2 = reformattedData.slice(0, 3);
  // console.log(data2)

// let data1 = []
//     data1 = data.map((e,i)=>{
//       return {dateNum: e[0], nationality: e[1]};
//     })


                // let nested_data = d3.nest()
                //         .key(function(newData) { 
                //             return newData.artists[0].nationality; 
                //         })
                //         .entries(newData);
                //         console.log(nested_data); 
                    

                // var nationalityCount = nested_data.map((e,i) => { 
                //     return {nationality: e.key, count: e.values.length};
                // });
                // // console.log(nationalityCount[0].count)
                // // console.log(nationalityCount)  
                // console.log(nationalityCount.length);
                
 /////sort to order by number
               // Sort works similar, but the sorting logic is a bit unintuitive
                // You have to define to parameters, and a comparison like '>' that returns a boolean
                // the ? -1 : 1 is just a very concise ways to write an if else statement
                // It’s not necessary to remember this syntax, I look it up, when I need it, too
                
            // let nationalityCount = data;
            //     nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
            // //   nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? 1 : -1); // small to large

                
            //   console.log(nationalityCount);   /////returns the count of each group in order      
  

////clean up accession_date,  note here using accession_number see below

////slice date to return just the year (not months etc) & the nationality

// let datenodes = []; 
////this was for accession_date - note here using accession_number
// for(let i = 0; i < data2.length; i++){
//   if (data2[i].date == null) {
//     // console.log("data"+i+ "is null");
//     datenodes[i] = ["null", data2[i].nationality];
//   }
//   else {
//   datenodes[i] = [data2[i].date.slice(0,4), data2[i].nationality];
//   }
// }
// console.log(datenodes.length);
// console.log(datenodes[1250]);

//////=======

/////return accession number 4 digits, artist name and artist nationality for each artwork

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
            
// // //return data by year grouped into before and after  

// // //group the accession date years into before 2010 and after 2010
// // // second group 2015 before and after

// let datenull10 =[];
// let datebefore10 = []; 
// let dateafter10 = [];
// let datenull15 =[];
// let datebefore15 = []; 
// let dateafter15 = [];



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


// // ===== return keys for date and nationality
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
     
// //====== then for each group count by nationality


// // ====== after15 group by nationality and keep date == 

// let after15group = d3.nest()
//                     // .key(function(d) { return d.nationality; })
//               ////retains date array and group by nationality     
//                     .key(function(d) { return  d.date, d.artist, d.nationality; })
//                     .entries(after15);
//             console.log(after15group)
//             console.log(after15group.length)

// // ////====count by nationality and keep date

//     var after15groupCount = after15group.map((e,i) => { 
//                     // return {nationality: e.key, count: e.values.length};
//     //////keep the arrays in each nationality group
//                     return {artists: e.values, nationality: e.key, count: e.values.length};
//                 });
//                 // console.log(nationalityCount[0].count)
//       console.log(after15groupCount)  
//       console.log(after15groupCount.length);
      
// // ====sort by nationality length after 2015

// after15groupsort = after15groupCount.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
// console.log(after15groupsort)

// // get max number
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
// //                  console.log(maxnatcount);  

/////// ===================== end of data wrangling ======================

console.log(after15groupCount)
console.log(after15groupCount.length);

////get the count
            let nat = after15groupCount.map((e,i) => { 
                    // return {artists: e.artists, nationality: e.nationality, continent: e.continent, continentnum: e.continentnum, count: e.count }; /////returns count: value
                    // return {count: e.count}
                    return e.count
                    });
                    console.log(nat);  //////just the counts

////sum the numbers
var numbers = nat
var sum = 0;
for (var i = 0; i<numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum)

//// percentages on limited numbers
// for (var i = 0; i<numbers.length; i++) {
//   var percentage = before15groupCount[i].count*100/sum;
//   if(i==2){
//     console.log(percentage+"%");
//   }
//   console.log(percentage+"%")
// }


////to get percentages 

return_data = [];

var after15groupCountpercent 
for (let i = 0; i < after15groupCount.length; i++){
  var counts = after15groupCount[i].count;
  var percentage = after15groupCount[i].count*100/sum;{
          console.log(percentage)
          
           return_data[i] = [percentage, after15groupCount[i].artists, after15groupCount[i].continent, after15groupCount[i].continentnum, after15groupCount[i].nationality, counts];
         
  }
}

after15groupCountpercent= return_data;
console.log(after15groupCountpercent)


////map to add keys

let after15grouppercent = [];
        after15grouppercent = after15groupCountpercent.map((e,i) => { 
                    return {percent: e[0], artist: e[1], continent: e[2], continentnum: e[3], nationality: e[4], count: e[5]};
                })


console.log(after15grouppercent)



let radareadate = d3.scaleSqrt()     
                      .domain([0, 6811])   ////same domain as pre 2015 bubble 
                      .range([0, 1600]);   ////same range as pre 2015 bubble
            console.log(radareadate(289))

// //Initialize a simple force layout, using the nodes and edges in dataset

let force = d3.forceSimulation(after15grouppercent)  /////gets concentric circles
  			  .force("charge", d3.forceManyBody().strength(70))
  				// .force("link", d3.forceLink(dataset.edges).distance(30))  
  			  .force("center", d3.forceCenter().x(width/2.3).y(height/1.8))
  				.force("collision", d3.forceCollide().radius(function(d, i) {
  				    return radareadate(d.percent) + 1;
  				}));

// // var colors = d3.scaleOrdinal(d3.schemeCategory10);

// var colors = d3.scaleSequential(d3.interpolateOrRd).domain([1, 6])

// var colors = d3.scaleLinear().domain([1,13]).range(["#c9d3d6", "#ffe114","#c9d3d6", "#e0f75d", "#c5e3f9","#ffd6c9","#ffa14f"])


 
// //create nodes as circles
console.log(after15grouppercent.length)

// //tooltip for information (changed to modal)
//         ////tooltip
  // let div = d3.select("g").append("div")
  //       .attr("class", "tooltipcircles15") ////best to use #tooltip div for styling
  //           .style("opacity", 0)
  //           .style("display", "none");

  // function mouseover() {
  //   div.style("display", "inline");
  // }


var nodes = g.selectAll("g")
            .data(after15grouppercent)
            .enter()
          .append("g")
            .on('mouseover', function(d,i) {
                console.log(i)
        		d3.select(`#tooltip15perc${i}`).style("display", "block").style("opacity", 0.9)
                  // d3.select("#modal1").select(`#tooltip${i}`).select("rect").style("fill", "#fff")
                  })
        		.on('mouseleave', function(d,i) {
            		    console.log(i)
            		d3.select(`#tooltip15perc${i}`)
			     .transition()	
				.delay(50)
				.duration(200)
				.style("opacity", 0) /////has to be above display none
				.transition()	
				.delay(50)
				.duration(200)
				.style("display", "none")  ////note this is binary

              //d3.select("#modal1").select(`#tooltip${i}`).select("rect").style("fill", "#fff")
          		  });
          		  

/////create tooltip for each circle - percent
 var newtooltips4 = modal4.selectAll("g")
                .data(after15grouppercent)
                .enter()
              .append("g")
                .attr("class", "newtooltips15perc")
                .attr("id", (d,i) => {   ////create id for each tooltip
                    return `tooltip15perc${i}`
                  })
                  .style("opacity", 0)   ////hide
                  .style("display", "none")  //// change display on mouseover
                  
              
     newtooltips4.append("rect")  
                  .attr("width", 254)
                  .attr("height", 32)
                  .attr("class", "toolrectperc")
                  .attr("x", -129)
                  .attr("y", -28)
                  .attr("rx", 3)
                  .attr("ry", 3)
                  // .attr("transform", "translate(-100,-15)")
                  .style("padding", 6)
                  // .style("fill", "#f7f7f7")
                  .style("fill", "#a8aa2e")
                  .style("opacity", 1)
                  .attr("text-anchor", "middle")

    
    newtooltips4.append("text")       	      	
              	   .text(function(d) {
                  	 // if (d.nationality != "") {
//                         return (d.nationality + ': ' + (d3.format(".4g")(d.percent)) + "%  " + d.count + ' artworks')
	    									return (d.nationality + ': ' + (d3.format("0.2f")(d.percent)) + "%  " + d.count + ' artworks')
                            // }
                            //   else {
                            //   return "not recorded"
                            //   }
                          })
                          .attr("x", 0)
                          .attr("y", -6)
                          .attr("class", "tiptextperc")
                            .attr("text-anchor", "middle")
                            .style("fill", "#2d2725")
                            .style("font-size", "0.68em")
                     
    
    
console.log(after15grouppercent)

////6 continent groupings
  let sortcontinent = [];
                sortcontinent = after15grouppercent.sort((a, b) => (a.continentnum > b.continentnum) ? -1 : 1); // This is to sort the array large to small
console.log(sortcontinent)

  var circles = nodes.append("circle") 
          	.attr("r", (d,i) => { 
          		return radareadate(d.percent);
          	  })
              	.style("opacity", 0.6)
              	.style("fill", (d,i) => {
              	  console.log(after15grouppercent[i].continentnum)
              	  console.log(after15grouppercent[i].continent)
          		  // return colors(after15grouppercent[i].continentnum);
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
      //               .text(d.nationality + ' artists: ' + d.count + ' artworks since 2015')
                  
      //           d3.select("#tooltipcircles15").classed("hiddencircle15", false);  //Show the tooltip
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
          	
////simple tooltip
  nodes.append("title")
      .data(after15grouppercent)
  	 .text(function(d) {
  		return d.name;
  	 });

  var texts = nodes.append("text")
        	.text(function(d) {
        	  console.log(d.nationality)
        	 if (d.nationality != "") {
              return d.nationality;
          }
            else {
            return "not recorded"
            }
        })
          .style("fill", "white")
          // .style("fill", "black")
          .attr("class", "bubblenames")
          .style("text-anchor", "middle")
          .style("font-size", function (d) {
            // console.log(d.count)
             return radareadate(d.percent) * 0.275 + 2 + "px"
            // return radareadate(d.percent) * 0.3 + 2 + "px"
          })
          .attr("translate", "transform(0,10)")
       

//   //Every time the simulation "ticks", this will be called
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
  			  return d.y + radareadate(d.percent) * 0.07; })

    newtooltips4.attr("transform", d =>`translate(${d.x}, ${d.y-radareadate(d.count)/3 -15} )`) 

  })

// let heading15 = g.append('text')  //// append text to global
//                 .text('2015-March 2019')
//                 .attr('x', width/3.3)
//                 .attr('y', height+margin.bottom/1.4)
//                 .attr("fill", "#f5fcf7")
//                 .attr('font-size', '1.4em') 

let heading15 = g.append('text')  //// append text to global
                .text('2015-March 2019')
                .attr('x', width/2.9)
                .attr('y', height+margin.bottom/28)
                .style("fill", "#f5fcf7")
                .style('font-size', '0.95em') 

let heading16 = g.append('text')  //// append text to global
                .text('289 artworks   ::   2.82%')
                .attr('x', width/2.9)
                .attr('y', height+margin.bottom/1.1)
                .style("fill", "#f5fcf7")
                .style('font-weight', 'bolder') 
                .style('font-size', '1.1em') 
                
}
