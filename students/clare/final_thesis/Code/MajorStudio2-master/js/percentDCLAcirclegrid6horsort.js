//// NYC Department of Cultural Affairs by 22 job types grouped by race and ethnicity data
//// larger budgets over $1 million - these percents do not include volunteers 
//// except for board job type
//// grid with circles for numbers and for percent by race and ethnicity and for percent by job type


// this is DCLA numbers:
//             d3.json("alljobtypes.json").then((data)=>{
//                 svgPlot(data);
//             });

// Here using PERCENT dcla jobtypes:

// d3.json("alljobtypesperct.json").then((data) => {
//     svgPlot21(data);
// });

////========Dataset ====== PERCENT 
////====== race and ethnicity by job type at museums with 
////larger budgets over $999999 - these percents do not include volunteers 
////except for board job type


// d3.json("allracejobtypespercordered.json").then((datapercent) => {

d3.json("data/allracejobtypespercorderedtotjobperc.json").then((datapercent) => {
//   dataWrangling(datapercent);  // called later in the dateWrangling function
   svgPlot21(datapercent); 
  d3.json("data/alljobtypes.json").then((datastaff) => {
//////for data by jobtype
    // svgPlot22(datastaff);
  });
});

/////bring in data and working with it to get volunteers
// d3.json("racebyjobtype.json").then((data) => {
//   dataWrangling(data);
//   // svgPlot21(data); // called later in the dateWrangling function
// });

// // ---------------------------- Data ----------------------------
// // const dataWrangling = (data) => {
// //   // ----- racebyjobtype -----
// //   console.log(data.length);
 

// //   let reformattedData = data1;
// //   svgPlot21(reformattedData);
  
// // }


let svgPlot21 = (datapercent) => { 
    console.log(datapercent); 
    

// filter and count
/////=============
// let return_data = []
//              let test_data = data.filter((e) => {
                
//                 if (e.JOBTYPE !== "2" && e.VOLUNTEER == "2"){ // if artist is not empty
//                     // console.log(data[i].artists.length);
//                     return_data[i] = [data[i]];
//                 } else if (e.JOBTYPE == "2"){ // if artist array is empty
//                     // console.log("I'm here");
//                     // return_data[i] = [data[i].accession_date, "N/A"];
//                     return_data[i] = [data[i]];
//                 }
//                 console.log(return_data);
//                 });

//             let accessionNat = return_data;
            
//             console.log(accessionNat);
//// preprocess the data with array.filter to NOT include empty artists arrays
                // const filtered = data.filter((d)=>{
                //         // return d.artists[0] !=="[]";
                //         return d.artists !==[""];
                //           });
                
        // console.log(data[0].accession_date);
       // console.log(data[0].artists[0].nationality);
       // var return_data = [];
        // return_data[0] = data[0].accession_date;
       // return_data[1] = data[0].artists[0].nationality;
       // console.log(return_data);
                        
       // return return_data;
                        
                        
                        
//                 const filtered = data.filter((d)=>{
//                         // return d.artists[0] //////works to filter
                        
//// returns BOTH ACCESSION DATE AND NAT with the full dataset
//                         return d.accession_date && d.artists[0]
//                         })
//                         console.log(filtered.length);

//               	var newData = filtered;  ////arrays that contain artist data
//               	console.log(newData)
  
//   ////use map function to return nationality
//                 let nested_data = d3.nest()
//                         .key(function(newData) { 
//                                 return newData.artists[0].nationality;
//                         })
//                         .entries(newData);
//                         console.log(nested_data); ////NATIONALITY DATA and COUNTS
                    
      //// map is a very useful method in JavaScript to re-arrange arrays
                // it takes a bit to get used to it, but then it’s really helpful for tasks like this
                // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
                
                // The new variable nationalityCount is the result of the map method
                // I’m applying the map method on the nested_data array
                // I can define a arrow function that is applied to every element in the array
                // In parentheses I define the parameters (e,i) which are arbitrary, but work like (d,i) in d3
                // Every element in the array is replace by what I *return* in the function
                // In this case a new object, with the nationality name and the length of the nested array
    
                
//                 var nationalityCount = nested_data.map((e,i) => { 
//                     return {nationality: e.key, count: e.values.length};
//                 });
//                 // console.log(nationalityCount[0].count)
//                 // console.log(nationalityCount)  
//                 console.log(nationalityCount.length);
//  /////then sort to order by number
//               // Sort works similar, but the sorting logic is a bit unintuitive
//                 // You have to define to parameters, and a comparison like '>' that returns a boolean
//                 // the ? -1 : 1 is just a very concise ways to write an if else statement
//                 // It’s not necessary to remember this syntax, I look it up, when I need it, too
//                 nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
//             //   nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? 1 : -1); // small to large

                
//               console.log(nationalityCount);   /////returns the count of each group in order      
  
//   //////dataset too large for AWS so save data from cloud 9 here 
  

////=============


////===== reorder 7 rows and 22 columns    
    const startv = 390; ////vertical
    const rowheight = 55;
    // const starth = 300; ////horizontal
    const starth = 330;
    const colwidth = 38;
    const linevstart = 600;

////=====margin
    var margin = { top: 300, right: 0, bottom: 120, left: 60 };


    // colwidth * 7 
    // rowheight * 22
    var width = starth + colwidth * 22 + margin.right + margin.left;
    var height = startv + rowheight * 7 + margin.bottom;

    // let svg21 = d3.select('#svg21')
    let svg21 = d3.select('#svg21')
        .append('svg')
        .attr("width", width)
        .attr("height", height)
        .style("background", "#726a64")
        // .style("background", "#877c74")  
        
let g21 = svg21.append('g') 


////===== filter percentages    
    const filtered = datapercent.filter((d) => {
        // return d.percentdat //////for jobtypes alpha order
        return d.percentdatreord  ////for jobtypes ordered by seniority, highest to lowest
    })
    console.log(filtered.length);
    console.log(filtered);

    var newData = filtered; ////arrays that contain artist data

    // returns numbers
    // let nested_data = d3.nest()
    //     .key(function (newData) {
    //         return newData.dat;
    //     })
    //     .entries(newData);
    // //         console.log(nested_data);


 //////TO GET THE JOB PERCENTS
 
    let nestedjob_data = d3.nest()
        .key(function (newData) {
            return newData.percentbyjobreord;
        })
        .entries(newData);
            console.log(nestedjob_data); /////returns jobpercents WORKS


//\\\\\\\\\\
////==== return percentages  
    let nested_data = d3.nest()
        .key(function (newData) {
            // return newData.percentdat;  //////for jobtypes alpha order
            return newData.percentdatreord;  ////for jobtypes ordered by seniority
        })
        .entries(newData);
    console.log(nested_data);

    // ////return just the numbers and names              
    // var dclajobtypes = nested_data.map((e, i) => {
    //     return { jobtype: e.values[0].jobtype, dat: e.key }
    // });
    // console.log(dclajobtypes)
    // console.log(dclajobtypes.length)
    // // console.log(dclajobtypes[0].dat)

////====return just the percent and names note now for reordered data by job seniority               
    var dclaraceethpercent = nested_data.map((e, i) => {
        // return { jobtype: e.values[0].jobtype, percent: e.key }
         return { key: e.values, percent: e.key }
    });

    console.log(dclaraceethpercent)
    console.log(dclaraceethpercent.length)
    // console.log(dclajobpercent[0].percent)

//////TO GET THE JOB PERCENT KEYS
////====return just the jobpercent and names note now for reordered data               
    var dclaraceethjobpercent = nestedjob_data.map((e, i) => {
        // return { jobtype: e.values[0].jobtype, percent: e.key }
         return { key: e.values, jobpercent: e.key }
    });

    console.log(dclaraceethjobpercent)     
    console.log(dclaraceethjobpercent.length)
    // console.log(dclajobpercent[0].percent)
    
    
///////=====for numbers
    // /////js string split() method to return a string into an array of substrings
    // var dclajob = dclajobtypes.map((e, i) => {
    //     // console.log(e)
    //     return { dat: e.dat.split(",") } // Here is the split method
    // });
    // console.log(dclajob)
    // console.log(dclajob.length)
    // // //             console.log(data)


    // /////for percent - split array of numbers into each separate component  
    var raceethpercent = dclaraceethpercent.map((e, i) => {
        // console.log(e)
        return { percent: e.percent.split(",") } // Here is the split method
    });
    console.log(raceethpercent)
    console.log(raceethpercent.length)
    //             console.log(data)

//////////for the separate percentages in the arrays - double for loop 
    let datacircles = [];

    for (let i = 0; i < datapercent.length; i++) {
        // let childpercent = datapercent[i].percentdat; //////for jobtypes alpha order
        let childpercent = datapercent[i].percentdatreord; ////for jobtypes ordered by seniority
        for (let j = 0; j < childpercent.length; j++) {
            // console.log(childpercent[j]); ////////this gets the separate numbers in each of the arrays
            datacircles.push(childpercent[j]);
        }
    }
 console.log(datacircles)
 var max = d3.max(datacircles)
 console.log(max)
 
 
 //////////==== JOB PERCENT
 
    // /////for percent - split array of numbers into each separate component  
    var raceethjobpercent = dclaraceethjobpercent.map((e, i) => {
        // console.log(e)
        return { jobpercent: e.jobpercent.split(",") } // Here is the split method
    });
    console.log(raceethjobpercent)
    console.log(raceethjobpercent.length)
    //             console.log(data)

//////////for the separate job percentages in the arrays - double for loop for job percents and max
    let datajobcircles = [];

    for (let i = 0; i < datapercent.length; i++) {
        // let childpercent = datapercent[i].percentdat; //////for jobtypes alpha order
        let childjobpercent = datapercent[i].percentbyjobreord; ////for jobtypes ordered by seniority
        for (let j = 0; j < childjobpercent.length; j++) {
            // console.log(childpercent[j]); ////////this gets the separate numbers in each of the arrays
            datajobcircles.push(childjobpercent[j]);
        }
    }
 console.log(datajobcircles)
 var max1 = d3.max(datajobcircles)
 console.log(max1)
 
 ///////end of job percent
 

///////for the separate numbers in the arrays
let datanumcircles = [];

    for (let i = 0; i < datapercent.length; i++) {
        // let childnum = datapercent[i].dat; //////for jobtypes alpha order
        let childnum = datapercent[i].datreord; ////for jobtypes ordered by seniority
        for (let j = 0; j < childnum.length; j++) {
            // console.log(childpercent[j]); ////////this gets the separate numbers in each of the arrays
            datanumcircles.push(childnum[j]);
        }
    }
 console.log(datanumcircles)


/////=====headings and endnotes

    let heading = g21.append('g') //// append text to global
        .append("text")
            .attr("class", "textpink")
            .text('Who Works in Museums and What Do They Do?')
            .attr('x', margin.left*5.8)
            .attr('y', margin.top / 12)
            .style('font-size', '1.8em');

    let subheading = g21.append('g') //// append text to global
        .append("text")
            .attr("class", "textsubhead")
            .text('Number of staff, grouped by job type & by race and ethnicity')
            .attr('x', margin.left*5.8)
            .attr('y', margin.top /1.54)
            // .attr('x', margin.left*5.8)
            // .attr('y', margin.top / 3)
            .style('font-size', '1.15em');

    let subheading2 = g21.append('g') //// append text to global
        .append("text")
            .attr("class", "textsubhead")
            // .text('At museums with budgets $1 million+. Paid staff + board members: 7,346 people')
            .text('22 job types ordered by level of seniority, high --> low')
            .attr('x', margin.left*5.8)
            .attr('y', margin.top / 5.5)
            .style('font-size', '1.1em');

    let subheading3 = g21.append('g') //// append text to global
        .append("text")
            .attr("class", "textsubhead")
            // .style("color", "#fdd2f5")
            .style("color", "#f5f4f9")
            // .text('22 job types ordered by seniority level, left: highest')
            // .attr('x', margin.left*5.8)
            // .attr('y', margin.top /1.42)
            .style('font-size', '1.2em');

    let raceethnicitynote = g21.append('g')
            .append("text")
                .attr("class", "raceethnicitynote")
                .style("color", "#f5f4f9")
                .text("* AIAN and NHPI = American Indian or Alaskan Native and Native Hawaiian or Other Pacific Islander")
                .attr('x', margin.left*5.5)
                .attr('y', height - margin.bottom / 2)
                .style('font-size', '1.05em');
                

    let endnote2 = g21.append('g') //// append text to global
        .append("text")
            .attr("class", "textpink")
            .text('8,094 staff at museums; 7,647 are at museums with budgets $1 million+. Non-volunteer staff + 802 board members totals 7,346')
            .attr('x', margin.left*5.5)
            .attr('y', height - margin.bottom / 5.5)
            .style('font-size', '0.9em');

    let endnote = g21.append('g') //// append text to global
        .append("text")
            .attr("class", "textpink")
            .text('Data: National Archive of Data on Arts and Culture, ICPSR 36606')
            .attr('x', margin.left*5.5)
            .attr('y', height - margin.bottom / 30)
            .style('font-size', '0.85em');


    let endnote3 = g21.append('g') //// append text to global
        .append("text")
            .attr("class", "textpink")
            // .text('Department of Cultural Affairs Grantees,” 2015. Ann Arbor, MI: Inter-university Consortium')
            .attr('x', margin.left*5.5)
            .attr('y', height - margin.bottom /30)
            .style('font-size', '0.85em');

    let percent7 = svg21.append('g')
        percent7.selectAll('text')
            .data(datapercent)
                .attr("class", "percent7")
                .enter()
                .append('text')
                .style("visibility", "hidden")
                .text("100%")
                .attr('x', width-margin.left/1.06)
                .attr('y', (d, i) => {
                    return i * rowheight + startv + 3 ;
                })
                .attr('transform', (d, i) => {
                // let a = -40;
                let a = 0;
                let x = width-margin.left/1.06
                let y = i * rowheight + startv/0.95 + 3;
                return `rotate(${a}, ${x}, ${y})`;
                })
                .style('font-size', '78%')
                .style("fill", "#f5f4f9")
                .style("text-anchor", "start");


  
 let jobpercent7 = svg21.append('g')
    jobpercent7.selectAll('text')
            .data(datapercent[0].jobtypes)
                .attr("class", "jobpercent7")
                .enter()
                .append('text')
                .style("visibility", "hidden")
                .text("100%")  
                .attr("x", (d, i) => {
                    return i * colwidth + starth-5;
                    // return (i % 22) * colwidth + starth;
                })
                .attr('y', height - margin.bottom )
                .attr('transform', (d, i) => {
                let a = -270;
                
                let x = i * colwidth + starth-5;
                let y = height-margin.bottom;
                
                return `rotate(${a}, ${x}, ${y})`;
                })
                .style('font-size', '78%')
                .style("fill", "#f5f4f9")
                .style("text-anchor", "end");
 
  
    let number7 = g21.append('g')
            number7.selectAll('text')
              .data(datapercent)
              .attr("class", "number7")
                .enter()
                .append('text')
                 .text((d,i) =>  { return (d.total + " staff")})
                // .attr('x',  linevstart + colwidth * 22+ 18)
                .attr('x', width-margin.left/0.9)
                .attr('y', (d, i) => {
                    return i * rowheight + startv + 3 ;
                })
                .attr('transform', (d, i) => {
                    // let a = -51;
                    let a = 0;
                    // let x = linevstart + colwidth * 22 + 18;
                    let x = width-margin.left/0.9
                    let y = i * rowheight + startv/0.97;
                    return `rotate(${a}, ${x}, ${y})`;
                })
                .style('font-size', '90%')
                .style("fill", "#f5f4f9")
                .style("text-anchor", "start");
            

////====horizontal lines
 
let linesh = svg21.append('g')
    linesh.selectAll('line')
        .data(datapercent)
        .enter()
        .append('line')
        .attr("class", "linegrid")
        .attr('x1', linevstart/1.94)
        // .attr('x2', linevstart + colwidth * 7)
        .attr('x2', linevstart/1.94 + colwidth * 22)
        .attr('y1', (d, i) => {
            return i * rowheight + startv;
        })
        .attr('y2', (d, i) => {
            return i * rowheight + startv;
        })
        .attr('stroke', 'pink')
        .attr('stroke.width', 1)
    console.log(datapercent)
    // console.log(datapercent[0].percentdat)
    console.log(datapercent[0].percentdatreord)

////====7 vertical lines

let linesv = svg21.append('g')
    linesv.selectAll('line')
        // .data(datapercent[0].percentdat)
        .data(datapercent[0].percentdatreord) /////reordered job type by seniority
        .enter()
        .append('line')
        .attr("class", "linegrid")
        .attr('x1', (d, i) => {
            // return starth+i*colwidth;
            return starth + i * colwidth;
        })
        .attr('x2', (d, i) => {
            return starth + i * colwidth;
        })
        .attr('y1', startv - 23)
        .attr('y2', height - margin.bottom * 1.4)
        .attr('stroke', 'pink')
        .attr('stroke-width', 0.7);

////==== labels =======

let raceethlable = svg21.append('g')
    raceethlable.selectAll('text')
        .data(datapercent)
            .enter()
            .append('text')
            // .style("font-weight", "regular")
            .attr("class", "textpink")
            .text((d, i) => { return datapercent[i].raceethnicity})
            .attr('x', starth /1.15)
            .attr('y', (d, i) => {
                return i * rowheight + startv +2;
            })
            .attr('transform', (d, i) => {
                // let a = -51;
                let a = 0;
                // let x = linevstart/2.15;
                let x = linevstart/1.8;
                // let y = i * rowheight + startv/0.95;
                let y = i * rowheight + startv ;
                return `rotate(${a}, ${x}, ${y})`;
            })
            .style('font-size', '100%')
            .style("text-anchor", "end");

    console.log(datapercent)
    
    console.log(datapercent[0]);

    console.log(datapercent[0].joborderlevel); 
let datalabel = datapercent[0].joborderlevel /////order job type by seniority highest to lowest


let jobtype = svg21.append('g')
    jobtype.selectAll('text')
        .data(datalabel)
        .enter()
        .append('text')
            .attr("class", "textpink")
            // .style("font-weight", 500)
            .text((d,i) =>  { return d})
            .attr('y', startv - 30)
            .attr('x', (d, i) => {
                return i * colwidth + starth;
            })
            .attr('transform', (d, i) => {
                // let a = -45;
                let a = -45;
                let x = i * colwidth + starth -5;
                let y = startv -30;
                return `rotate(${a}, ${x}, ${y})`;
            })
            .style('font-size', '110%');

/////=======percent circles, use square root to get the area 
    let radarea = d3.scaleSqrt() ////to get area of circles need square root 
        .domain([0,d3.max(datacircles)])
        .range([0, 42]);
 
/////=======jobpercent circles, use square root to get the area 
    let radarea1 = d3.scaleSqrt() ////to get area of circles need square root 
        .domain([0,d3.max(datajobcircles)])
        .range([0, 42]);      
    
////======number circles 
    let radarea2 = d3.scaleSqrt() ////to get area of circles need square root 
        .domain([0,d3.max(datanumcircles)])
        .range([0, 42]);
    
    
////// ======wrap the circles into rows
// https://stackoverflow.com/questions/27105991/how-to-uniformly-distribute-svg-circles-in-d3

////=====updating with 2 data variables
// http://plnkr.co/edit/Ccbs2wX0OJjH2WNSQvZS?p=preview
// https://stackoverflow.com/questions/50889602/switch-between-datasets-in-a-d3-barchart

console.log(datacircles)
console.log(datajobcircles)
console.log(datanumcircles)

dataPlaceholder = datanumcircles;

///move g function out of update function and attach id to circlegroup
//select circlegroup in the function

svg21.append("g")
    .attr("id", "circlegroup")

////specify variables to change on hover   

let color1 = "yellow";
let color2 = "green"
let color3 = "pink";
let color4 = "purple";
let color5 = "LIGHTGREEN";
let color6 = "LIGHTSTEELBLUE";


// Updates the visualization 
function update() {
console.log(dataPlaceholder, "update")

 // SECOND CONCERN: Re-draw the graph on every updata of the dataset variable

 var selection = svg21.select("#circlegroup").selectAll("circle")
        .data(dataPlaceholder, (d, i) => {  
            return d, i
        })
             .attr('x', (d, i) => { 
                return (i % 22) * colwidth + starth; ////move to next row
            })
            .attr('y', (d, i) => {
                return (startv + rowheight * parseInt(i / 22));
            })
            .attr("cx", (d, i) => {  
                return (i % 22) * colwidth + starth;
            })
            .attr("cy", (d, i) => {
                return (startv + rowheight * parseInt(i / 22)); 
            })
            .attr("r", (d, i) => {
                return radarea2(d); //// return circle area
            })
     
  // FIRST CONCERN: Create the graph in the first place
  
  // Enter selection: Create new DOM elements for added 
  // data items, resize and position them 
        
  selection.enter() // ENTER IS THE IMPORTANT KEYWORD FOR UNSEEN DATA
        .append("circle") 
            .attr("class", "circlepercent")
            .attr('x', (d, i) => { 
                return (i % 22) * colwidth + starth; ////move to next row
            })
            .attr('y', (d, i) => {
                return (startv + rowheight * parseInt(i / 22));
            })
            .attr("cx", (d, i) => {  
                // return (i % 7) * colwidth + starth;
                return (i % 22) * colwidth + starth;
            })
            .attr("cy", (d, i) => {
                return (startv + rowheight * parseInt(i / 22)); 
            })
            .attr("r", (d, i) => {
                return radarea2(d); //// return circle area
            })
            .style("fill", color1)
            .style("stroke", "none")
            .style("opacity", "0.6")
                     .on('mouseenter', (d, i, j) => {   
                            console.log('hover');
                            console.log(d);
//                             subheading.text(d + ' staff by job type, by race and ethnicity');
                               subheading.text(d + ' staff');
                            d3.select(j[i])
                                .style('fill', color2)
                                .style('opacity', '0.5');
                        })
                        .on('mouseout', (d, i, j) => {
                            console.log(d);
                            subheading.text((d) => { return "Number: Staff by race and ethnicity"; });
                            d3.select(j[i])
                                .style('fill', color1)
                                .style('opacity', '0.5');
                        });
        
    // // THIRD CONCERN: What to do if the updated data has less elements than the previous one?
  
    // // Exit selection: Remove elements without data from the DOM
    selection.exit().remove(); // EXIT IS THE IMPORTANT KEYWORD FOR OBSOLETE DATA

    // // Print underlying data array
    // d3.select("#dataset").text(datacircles);
}   /////end of update function 


var currentData = 'numbers'; 
// empty quotes for a string to use string methods

////=======PERCENT BUTTON 
console.log(datacircles)
    
let percenttext = g21.append('g').attr("class", "percenttext")
                     .append("text")
                      .attr('x', margin.left*7.5)
                    .attr('y', margin.top / 2.8)
                    //  .attr('y', margin.top / 1.8)
                      .style("color", "#f5f4f9")
                      .text("for percent")
                
let percentbtn = g21.append('g').attr("id", "percent-btn")
                    .append("rect")
                      .attr("class", "stylepercent")
                      .attr("width", "50px")
                      .attr("height", "40px")
                      .attr('x', margin.left*7.5)
                      .attr('y', margin.top / 2.5)
                    //   .attr('y', margin.top / 2.5)
                      .style("fill", "pink")
                      .style("opacity", "0.6")
                     
  d3.select("#percent-btn").on("click", function(e){

    if (currentData == 'numbers') {
            console.log("in numbers")
         dataPlaceholder = datacircles 
             radarea2 = d3.scaleSqrt() ////change radius area too 
                .domain([0,d3.max(datacircles)]) ////max datacircles
                .range([0, 42]);
         
          subheading.text('Percent: Staff by race and ethnicity')
            percent7.selectAll("text").style("visibility", "visible")
            number7.selectAll("text").style("visibility", "hidden")
        
//// selectAll not needed here
    // d3.selectAll("circle").attr("class", "circlepercent")
                percent7.style("visibility", "visible")
                number7.style("visibility", "hidden")
                jobpercent7.style("visibility", "hidden")
                
               
             ////select div then select all circles in the div 
    d3.select("#circlegroup").selectAll("circle").attr("class", "circlepercent").style("fill", "pink")
                    .style("opacity", "0.6")
                                .on('mouseenter', (d, i, j) => {   
                                    console.log('hover');
                                    console.log(d);
//                                 subheading.text(d + '% staff by race and ethnicity');
                                   subheading.text(d + '% staff');
                        // d3.select(j[i]).attr("class", "circlepercent")
                        d3.select(j[i])
                                .style("fill", color4)
                                .style('opacity', '0.45')
                                })
                                .on('mouseout', (d, i, j) => {
                                    console.log(d);
//                                     subheading.text((d) => { return "Percent: Staff by race and ethnicity"; });
                                       subheading.text(d + ' staff');
                                d3.select(j[i]).attr("class", "circlepercent")
                                        .style('fill', color3)
                                        .style('opacity', '0.5');
                                });
              currentData = 'percent'
              
    } else if (currentData == 'jobpercent') {
            console.log("in jobpercent")
         dataPlaceholder = datacircles 
             radarea2 = d3.scaleSqrt() ////change radius area too 
                .domain([0,d3.max(datacircles)]) ////max datacircles
                .range([0, 42]);
         
          subheading.text('Percent: Staff by race and ethnicity')
          percent7.selectAll("text").style("visibility", "visible")
          jobpercent7.selectAll("text").style("visibility", "hidden")
    
          
//// selectAll not needed here
    // d3.selectAll("circle").attr("class", "circlepercent")
                percent7.style("visibility", "visible")
                number7.style("visibility", "hidden")             
                jobpercent7.style("visibility", "hidden")
               
             ////select div then select all circles in the div 
    d3.select("#circlegroup").selectAll("circle").attr("class", "circlepercent").style("fill", "pink")
                    .style("opacity", "0.6")
                                .on('mouseenter', (d, i, j) => {   
                                    console.log('hover');
                                    console.log(d);
//                                 subheading.text(d + '% staff by race and ethnicity');
                                    subheading.text(d + '% staff');
                               
                        // d3.select(j[i]).attr("class", "circlepercent")
                        d3.select(j[i])
                                .style("fill", color4)
                                .style('opacity', '0.45')
                                })
                                .on('mouseout', (d, i, j) => {
                                    console.log(d);
                                    subheading.text((d) => { return "Percent: Staff by race and ethnicity"; });
                                d3.select(j[i]).attr("class", "circlepercent")
                                        .style('fill', color3)
                                        .style('opacity', '0.5');
                                });
              currentData = 'percent'          
              
         } else if (currentData == 'percent') {
                console.log("in percent")
                console.log(dataPlaceholder, datacircles)
                
              dataPlaceholder = datacircles
              console.log(dataPlaceholder)
      
          radarea2 = d3.scaleSqrt() ////change radius area of circles  
            .domain([0,d3.max(datacircles)]) ////max datanumcircles
            .range([0, 42]);
            
          currentData = 'percent';
        }
        
       update();
    }); 


////=======JOBTYPE PERCENT BUTTON  ====

    console.log(datajobcircles)
    
let jobpercenttext = g21.append('g').attr("class", "jobpercenttext")
                     .append("text")
                      .attr('x', margin.left*9.2)
                    //  .attr('y', margin.top / 1.8)
                    //  .attr('y', margin.top / 1.8)
                    //   .attr('x', margin.left*1.386)
                     .attr('y', margin.top / 2.8)
                      .style("color", "#f5f4f9")
                     .text("for percent by job type")
                
let jobpercentbtn = g21.append('g').attr("id", "jobpercent-btn")
                    .append("rect")
                      .attr("class", "stylejobpercent")
                      .attr("width", "50px")
                      .attr("height", "40px")
                    //   .attr('x', margin.left*1.4)
                    //   .attr('y', margin.top/1.3)
                      .attr('x', margin.left*9.2)
                      .attr('y', margin.top / 2.5)
                    //   .attr('y', margin.top / 2.5)
                      .style("fill", "LIGHTGREEN")
                      .style("opacity", "0.6")
                     
  d3.select("#jobpercent-btn").on("click", function(e){

    if (currentData == 'numbers') {
            console.log("in numbers")
         dataPlaceholder = datajobcircles 
             radarea2 = d3.scaleSqrt() ////change radius area too 
                .domain([0,d3.max(datajobcircles)]) ////max datacircles
                .range([0, 42]);
                
         
          subheading.text('Percent: Staff by job type')
          jobpercent7.selectAll("text").style("visibility", "visible")
        //  percent7.selectAll("text").style("visibility", "hidden")
         number7.selectAll("text").style("visibility", "hidden")
        
          
//// selectAll not needed here
    // d3.selectAll("circle").attr("class", "circlepercent")
                percent7.style("visibility", "hidden") 
                jobpercent7.style("visibility", "visible")
                number7.style("visibility", "hidden")             
                
               
             ////select div then select all circles in the div 
    d3.select("#circlegroup").selectAll("circle").attr("class", "circlejobpercent").style("fill", "LIGHTGREEN")
                    .style("opacity", "0.6")
                                .on('mouseenter', (d, i, j) => {   
                                    console.log('hover');
                                    console.log(d);
//                                  subheading.text(d + '% staff by job type');
                                    subheading.text(d + '% staff');
                               
                        // d3.select(j[i]).attr("class", "circlepercent")
                        d3.select(j[i])
                                .style("fill", color6)
                                .style('opacity', '0.45')
                                })
                                .on('mouseout', (d, i, j) => {
                                    console.log(d);
                                    subheading.text((d) => { return "Percent: Staff by job type"; });
                                d3.select(j[i]).attr("class", "circlejobpercent")
                                        .style('fill', color5)
                                        .style('opacity', '0.5');
                                });
                                
              currentData = 'jobpercent'
              
    } else if (currentData == 'percent') {
            console.log("in percent")
         dataPlaceholder = datajobcircles 
             radarea2 = d3.scaleSqrt() ////change radius area too 
                .domain([0,d3.max(datajobcircles)]) ////max datacircles
                .range([0, 42]);
         
          subheading.text('Percent: Staff by job type')
          jobpercent7.selectAll("text").style("visibility", "visible")
         percent7.selectAll("text").style("visibility", "hidden")
        
          
//// selectAll not needed here
    // d3.selectAll("circle").attr("class", "circlepercent")
                
                percent7.style("visibility", "hidden")
                jobpercent7.style("visibility", "visible")
                number7.style("visibility", "hidden")             
                
               
             ////select div then select all circles in the div 
    d3.select("#circlegroup").selectAll("circle").attr("class", "circlejobpercent").style("fill", "LIGHTGREEN")
                    .style("opacity", "0.6")
                             .on('mouseenter', (d, i, j) => {   
                                    console.log('hover');
                                    console.log(d);
//                                 subheading.text(d + '% staff by job type');
                                    subheading.text(d + '% staff');
                               
                        // d3.select(j[i]).attr("class", "circlepercent")
                        d3.select(j[i])
                                .style("fill", color6)
                                .style('opacity', '0.45')
                                })
                                .on('mouseout', (d, i, j) => {
                                    console.log(d);
                                    subheading.text((d) => { return "Percent: Staff by job type"; });
                                d3.select(j[i]).attr("class", "circlejobpercent")
                                        .style('fill', color5)
                                        .style('opacity', '0.5');
                                });
                                
            currentData = 'jobpercent';
              
           } else if (currentData == 'jobpercent') {
                console.log(dataPlaceholder, datajobcircles)
                
              dataPlaceholder = datajobcircles
              console.log(dataPlaceholder)
      
          radarea2 = d3.scaleSqrt() ////change radius area of circles  
            .domain([0,d3.max(datajobcircles)]) ////max datanumcircles
            .range([0, 42]);
            
            
          currentData = 'jobpercent';
        }
        
       update();
    }); 



////========NUMBERS BUTTON 
    console.log(datanumcircles)

let numberstext = g21.append('g').attr("class", "numberstext")
                     .append("text")
                    //   .attr('x', margin.left*1.386)
                    //   .attr('y', margin.top/0.905)
                      .attr('x', margin.left*5.8)
                      .attr('y', margin.top / 2.8)
                      .style("color", "#f5f4f9")
                      .text("for numbers")
        
                
let numbersbtn = g21.append('g').attr("id", "numbers-btn")
                    .append("rect")
                      .attr("class", "stylenumbers")
                      .attr("width", "50px")
                      .attr("height", "40px")
                      .attr('x', margin.left*5.8)
                      .attr('y', margin.top/2.5)
                    //   .attr('x', margin.left*1.4)
                    //   .attr('y', margin.top/1.05)
                      .style("fill", color1)
                      .style("opacity", "0.5")
    
    d3.select("#numbers-btn").on("click", function(e){
      
        if(currentData == 'percent') {
            
            console.log("in percent")
         dataPlaceholder = datanumcircles 
             radarea2 = d3.scaleSqrt() ////change radius area too 
                .domain([0,d3.max(datanumcircles)]) ////max datacircles
                .range([0, 42]);
                
        subheading.text('Number: Staff by race and ethnicity')
        number7.selectAll("text").style("visibility", "visible")
        percent7.selectAll("text").style("visibility", "hidden")
        

    // d3.selectAll("circle").attr("class", "circlenumbers")
                        percent7.style("visibility", "hidden")
                        jobpercent7.style("visibility", "hidden")
                        number7.style("visibility", "visible")

        /////select div then select all circles in the div 
    d3.select("#circlegroup").selectAll("circle").attr("class", "circlenumbers").style("fill", "yellow")
                    .style("opacity", "0.6")
                        .on('mouseenter', (d, i, j) => {   
                                console.log('hover');
                                console.log(d);
//                                 subheading.text(d + ' staff by each job type, by race and ethnicity');
                                   subheading.text(d + ' staff');
                         
                        d3.select(j[i])
                                    .style('fill', color2)
                                    .style('opacity', '0.5')
                            })
                            .on('mouseout', (d, i, j) => {
                                console.log(d);
                                subheading.text((d) => { return "Number: Staff by race and ethnicity"; });
                            d3.select(j[i])
                                    .style('fill', color1)
                                    .style('opacity', '0.5');
                            });
        currentData = 'numbers'
        
        } else if (currentData == 'jobpercent') {
          
            console.log("in job percent")
         dataPlaceholder = datanumcircles 
             radarea2 = d3.scaleSqrt() ////change radius area too 
                .domain([0,d3.max(datanumcircles)]) ////max datacircles
                .range([0, 42]);
                
        subheading.text('Number: Staff by race and ethnicity')
        number7.selectAll("text").style("visibility", "visible")
        jobpercent7.selectAll("text").style("visibility", "hidden")
        

    // d3.selectAll("circle").attr("class", "circlenumbers")
                        percent7.style("visibility", "hidden")
                        jobpercent7.style("visibility", "hidden")
                        number7.style("visibility", "visible")

        /////select div then select all circles in the div 
    d3.select("#circlegroup").selectAll("circle").attr("class", "circlenumbers").style("fill", "yellow")
                    .style("opacity", "0.6")
                        .on('mouseenter', (d, i, j) => {   
                                console.log('hover');
                                console.log(d);
//                                 subheading.text(d + ' staff by each job type, by race and ethnicity');
                                    subheading.text(d + ' staff');
                         
                        d3.select(j[i])
                                    .style('fill', color2)
                                    .style('opacity', '0.5')
                            })
                            .on('mouseout', (d, i, j) => {
                                console.log(d);
                                subheading.text((d) => { return "Number: Staff by race and ethnicity"; });
                            d3.select(j[i])
                                    .style('fill', color1)
                                    .style('opacity', '0.5');
                            });
        currentData = 'numbers'
 
        
     } else if (currentData == 'numbers') {

        console.log(dataPlaceholder, datanumcircles)
     
      dataPlaceholder = datanumcircles
        console.log(dataPlaceholder)
      
          radarea2 = d3.scaleSqrt() ////change radius area of circles  
            .domain([0,d3.max(datanumcircles)]) ////max datanumcircles
            .range([0, 42]);
            
          currentData = 'numbers'
     }
        
      update();
    }); 
    
update(); ///call update function
}; ////end of svgPlot
                    


