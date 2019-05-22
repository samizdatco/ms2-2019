// ----------------------------------------------------
// SCROLLAMA FOR SEXUAL MISCONDUCT CHART
// ----------------------------------------------------


// using d3 for convenience
//scrolly for CHART 1
var main = d3.select('body')
var scrolly = main.select('#scrolly');
var figure = scrolly.select('figure');
var article = scrolly.select('article');
var step = article.selectAll('.step');

//scrolly for INDER VERMA
var scrolly2 = main.select('#scrolly-2');
var figure2 = scrolly2.select('figure');
var article2 = scrolly2.select('article');
var step2 = article2.selectAll('.step');

//scrolly for FRANCISCO AYALA
var scrolly3 = main.select('#scrolly-3');
var figure3 = scrolly3.select('figure');
var article3 = scrolly3.select('article');
var step3 = article3.selectAll('.step');

//scrolly for LAWRENCE KRAUSS
var scrolly4 = main.select('#scrolly-4');
var figure4 = scrolly4.select('figure');
var article4 = scrolly4.select('article');
var step4 = article4.selectAll('.step');

//scrolly for RETENTION
var scrolly5 = main.select('#scrolly-5');
var figure5 = scrolly5.select('figure');
var article5 = scrolly5.select('article');
var step5 = article5.selectAll('.step');


// initialize the scrollama
var scroller = scrollama();
var scroller2 = scrollama();
var scroller3 = scrollama();
var scroller4 = scrollama();
var scroller5 = scrollama();


// generic window resize listener event : SCROLLY 1
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.style('height', stepH + 'px');
  var figureHeight = window.innerHeight 
  var figureMarginTop = (window.innerHeight - figureHeight) /2 
  figure
    .style('height', figureHeight + 'px')
    .style('top', figureMarginTop + 'px');
  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}
// scrollama event handlers
function handleStepEnter(response) {
  console.log(response)
  // response = { element, direction, index }
  // add color to current step only
  step.classed('is-active', function (d, i) {
    return i === response.index;
  })
  // update graphic based on step
  //figure.select('p').text(response.index + 1);
}
function setupStickyfill() {
  d3.selectAll('.sticky').each(function () {
    Stickyfill.add(this);
  });
}

// generic window resize listener event : SCROLLY 2 INDER VERMA
function handleResize2() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  //step2.style('height', stepH + 'px');
  step2.style('height', '150px');
  var figureHeight = window.innerHeight 
  var figureMarginTop = (window.innerHeight - figureHeight) /2 
  figure2
    .style('height', figureHeight + 'px')
    .style('top', figureMarginTop + 'px');
  // 3. tell scrollama to update new element dimensions
  scroller2.resize();
}
// scrollama event handlers
function handleStepEnter2(response) {
  console.log(response)
  // response = { element, direction, index }
  // add color to current step only
  step2.classed('is-active', function (d, i) {
    return i === response.index;
  })
  // update graphic based on step
  //figure2.select('p').text(response.index + 1);
}

// generic window resize listener event : SCROLLY 2 FRANCISCO AYALA
function handleResize3() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  //step2.style('height', stepH + 'px');
  step3.style('height', '150px');
  var figureHeight = window.innerHeight 
  var figureMarginTop = (window.innerHeight - figureHeight) /2 
  figure3
    .style('height', figureHeight + 'px')
    .style('top', figureMarginTop + 'px');
  // 3. tell scrollama to update new element dimensions
  scroller3.resize();
}
// scrollama event handlers
function handleStepEnter3(response) {
  console.log(response)
  // response = { element, direction, index }
  // add color to current step only
  step3.classed('is-active', function (d, i) {
    return i === response.index;
  })
  // update graphic based on step
  //figure3.select('p').text(response.index + 1);
}

// generic window resize listener event : SCROLLY 2 INDER VERMA
function handleResize4() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  //step2.style('height', stepH + 'px');
  step4.style('height', '150px');
  var figureHeight = window.innerHeight 
  var figureMarginTop = (window.innerHeight - figureHeight) /2 
  figure4
    .style('height', figureHeight + 'px')
    .style('top', figureMarginTop + 'px');
  // 3. tell scrollama to update new element dimensions
  scroller4.resize();
}
// scrollama event handlers
function handleStepEnter4(response) {
  console.log(response)
  // response = { element, direction, index }
  // add color to current step only
  step4.classed('is-active', function (d, i) {
    return i === response.index;
  })
  // update graphic based on step
  //figure4.select('p').text(response.index + 1);
}

// generic window resize listener event : SCROLLY 2 INDER VERMA
function handleResize5() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  //step2.style('height', stepH + 'px');
   step5.style('height', stepH + 'px');
  var figureHeight = window.innerHeight 
  var figureMarginTop = (window.innerHeight - figureHeight) /2 
  figure5
    .style('height', figureHeight + 'px')
    .style('top', figureMarginTop + 'px');
  // 3. tell scrollama to update new element dimensions
  scroller5.resize();
}
// scrollama event handlers
function handleStepEnter5(response) {
  console.log(response)
  // response = { element, direction, index }
  // add color to current step only
  step5.classed('is-active', function (d, i) {
    return i === response.index;
  })
  // update graphic based on step
  figure5.select('p').style("color", 'yellow');
  figure5.select('img').remove();
  figure5.append('img').attr('src', 'img/pt2_graph2.svg')
        .style('height', '100vh')
        .style('margin-right', '10vw')
        .attr('align', 'right');
}

function init() {
  setupStickyfill();
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();
  handleResize2();
  handleResize3();
  handleResize4();
  handleResize5();

  // 2. setup the scroller passing options
  //    this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
    step: '#scrolly article .step',
    offset: 0.5,
    debug: false,
  })
    .onStepEnter(handleStepEnter)
  // setup resize event
  window.addEventListener('resize', handleResize);

  scroller2.setup({
    step: '#scrolly-2 article .step',
    offset: 0.5,
    debug: false,
  })
    .onStepEnter(handleStepEnter2)
  // setup resize event
  window.addEventListener('resize', handleResize2);

  scroller3.setup({
    step: '#scrolly-3 article .step',
    offset: 0.5,
    debug: false,
  })
    .onStepEnter(handleStepEnter3)
  // setup resize event
  window.addEventListener('resize', handleResize3);

  scroller4.setup({
    step: '#scrolly-4 article .step',
    offset: 0.5,
    debug: false,
  })
    .onStepEnter(handleStepEnter4)
  // setup resize event
  window.addEventListener('resize', handleResize4);

  scroller5.setup({
    step: '#scrolly-5 article .step',
    offset: 0.33,
    debug: false,
  })
    .onStepEnter(handleStepEnter5)
  // setup resize event
  window.addEventListener('resize', handleResize5);
}
// kick things off
init();



// ----------------------------------------------------
// SEXUAL MISCONDUCT DOTPLOT HISTOGRAM UPDATING VERSION
// ----------------------------------------------------

var w = window.innerWidth
var h = window.innerHeight

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 20, bottom: 30, left: 30},
    width = w/1.5 - margin.left - margin.right,
    height = h/1.18 - margin.top - margin.bottom;

//parse the date
var parseDate = d3.timeParse("%Y");

// Set the ranges of x and y
var x = d3.scaleTime()
    .rangeRound([0,width])
    .domain([new Date(1980, 1, 1), new Date(2018, 12, 31)])
var y = d3.scaleLinear()
    .range([height, 0]);

// Adds the svg canvas
var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");


// add the tooltip area to the webpage
var tooltip = d3.select("#chart").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

//update the graph
//function update(){

var t = d3.transition()
      .duration(1000);

var file = "data/sexualMisconduct_science_v2.csv"
var dataIndex = 0

// Get the data for sexual misconduct
d3.csv(file, function(error, data0) {
    data0.forEach(function(d) {
        d.Year = parseDate(d.Year)
        d.Name = d.Name
        d.Outcome = d.Outcome
        d.Color = d.Color
        //console.log(d.Color)
    });

    console.log(eval("data"+dataIndex).length);
    console.log(eval("data"+dataIndex));
    // Scale the range of the data
    //x.domain(d3.extent(data, function(d) { return d.Year; }));
    y.domain([0, eval("data"+dataIndex).length]);

    //make individual datasets
    //no action
    let data1 = data0.slice(0,17)
    console.log(data1);
    //retired/resigned
    let data2 = data0.slice(17,85)
    console.log(data2);
    //demoted/reprimanded
    let data3 = data0.slice(85,97)
    //suspended
    let data4 = data0.slice(97,113)
    //fired
    let data5 = data0.slice(113,153)
    //lawsuit settled
    let data6 = data0.slice(153,162)
    //banned
    let data7 = data0.slice(162,168)
    //arrested
    let data8 = data0.slice(168,184)
    //death
    let data9 = data0.slice(184, 189)


    // Set up the binning parameters for the histogram
    var nbins = 38;
    //var nbins = eval("data"+dataIndex).length; 189
    console.log(nbins);


    var histogram = d3.histogram()
      .domain(x.domain())
      .thresholds(x.ticks(nbins))
      .value(function(d) { return d.Year;} )

    // Compute the histogram
    //var bins = histogram(eval("data"+dataIndex));
    var bins = histogram(eval("data"+dataIndex));
    //var bins = histogram(data0).filter(d => d.length>0)
    console.log(bins);

 //g container for each bin
    let binContainer = svg.selectAll(".gBin")
      .data(bins);

    binContainer.exit().remove()

    let binContainerEnter = binContainer.enter()
      .append("g")
        .attr("class", "gBin")
        .attr("transform", d => `translate(${x(d.x0)}, ${height})`)

    //need to populate the bin containers with data the first time
   binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))
      .enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
            return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
        //.on("mouseover", function(d, i){console.log(value[i])})
        .on("mouseover", tooltipOn)
        //.on("click", tooltipOff)
        .on("mouseout", tooltipOff)
        .on("click", function(d){
          window.open(d.link)
        })
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })

    binContainerEnter.merge(binContainer)
        .attr("transform", d => `translate(${x(d.x0)}, ${height})`)

    //binContainerEnter.exit().remove();

// ------------------
// NO ACTION BUTTON
// ------------------

    d3.select("#legend").append("button")
        .text("No Action")
        .style("background-color", "#212121")
        .style("border-color", "#424242")
        .on("mouseover", function(d){
             d3.select(this).style("background-color", "#424242")
        })
        .on("mouseout", function(d){
             d3.select(this).style("background-color", "#212121")
        })
        .on("click",function(){
            //select new data
            if (dataIndex !==1) {
                dataIndex=1
                console.log(eval("data"+dataIndex).length);  
            }
                else{
                  dataIndex=0;
            }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button no action

// -----------------------
// RESIGNED/RETIRED BUTTON
// -----------------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Resigned/retired")
    .style("background-color", "#212121")
    .style("border-color", "#757575")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#757575")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 2) {
            dataIndex=2
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button resigned/retired

// --------------------------
// DEMOTED/REPRIMANDED BUTTON
// --------------------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Demoted/reprimanded")
    .style("background-color", "#212121")
    .style("border-color", "#ffff00")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#ffff00")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 3) {
            dataIndex=3
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button demoted/reprimanded

// -----------------
// SUSPENDED BUTTON
// -----------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Suspended")
    .style("background-color", "#212121")
    .style("border-color", "#f7931e")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#f7931e")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 4) {
            dataIndex=4
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button suspended

// -----------------
// FIRED BUTTON
// -----------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Fired")
    .style("background-color", "#212121")
    .style("border-color", "#f15924")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#f15924")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 5) {
            dataIndex=5
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button fired

// ----------------------
// LAWSUIT SETTLED BUTTON
// ----------------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Lawsuit settled/monetary punishment")
    .style("background-color", "#212121")
    .style("border-color", "#fa37d9")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#fa37d9")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 6) {
            dataIndex=6
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button lawsuit settled/monetary punishment

// ---------------------------
// BANNED FROM PREMESIS BUTTON
// ---------------------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Banned from premesis")
    .style("background-color", "#212121")
    .style("border-color", "#d4145a")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#d4145a")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 7) {
            dataIndex=7
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button banned from premesis

// ---------------------------
// ARRESTED BUTTON
// ---------------------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Arrested/imprisoned/convicted")
    .style("background-color", "#212121")
    .style("border-color", "#600047")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#600047")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 8) {
            dataIndex=8
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.7
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button arrested

// ---------------------------
// DIED BUTTON
// ---------------------------

//button to swap over datasets
d3.select("#legend").append("button")
    .text("Committed suicide/died")
    .style("background-color", "#212121")
    .style("border-color", "#800000")
    .on("mouseover", function(d){
         d3.select(this).style("background-color", "#800000")
    })
    .on("mouseout", function(d){
         d3.select(this).style("background-color", "#212121")
    })
    .on("click",function(){
        //select new data
        if (dataIndex !== 9) {
            dataIndex=9
            console.log(eval("data"+dataIndex).length);  
        }
            else{
              dataIndex=0;
        }
 
 var bins = histogram(eval("data"+dataIndex))
 //g container for each bin
  let binContainer = svg.selectAll(".gBin")
    .data(bins);

  //enter/update/exit for circles, inside each container
 let dots = binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Outcome,
                  institution: p["Institution and/or Professional Society"],
                  discipline: p["Discipline or Domain"],
                  color: p.Color,
                  link: p["Link(s)"],
                  radius: (x(d.x1)-x(d.x0))/2.6
                }
        }))

      //EXIT old elements not present in data
    dots.exit()
        .attr("class", "exit")
      .transition(t)
        .attr("r", 0)
        .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update");

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("class", "enter")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
          return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", function(d){ return d.color; })
      .merge(dots)
        .style("fill", function(d){ return d.color; })
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
  }); //button DIED



}); //d3.csv
//};//update

function tooltipOn(d) {
  //x position of parent g element
  let gParent = d3.select(this.parentElement)
  let translateValue = gParent.attr("transform")

  let gX = translateValue.split(",")[0].split("(")[1] * 50
  //let gX = translateValue.split(",")[0].split
  let gY = height + (+d3.select(this).attr("cy")- 1500)

  d3.select(this)
    .classed("selected", true)
    .style("opacity", .5)
    .style("cursor", "pointer")
  tooltip.transition()
       .duration(200)
       .style("opacity", .9);
  tooltip.html("<b><span style = 'font-size: 20px; color: red'>"+ d.name + "</span></b>" + "</br>" + "<b>Outcome:  </b>" + d.value + "</br>" + "<b>Institution:  </b>" + d.institution + "</br>" +  "<b>Discipline:  </b>" + d.discipline + "</br>" + "<a href= '" + d.link + "''>" + "</a>")
    .style("left", gX/200 + "px")
    .style("top", gY/3 + "px")
    .style("margin", "10px")
}//tooltipOn

function tooltipOff(d) {
  d3.select(this)
      .classed("selected", false)
      .style("fill", function(d){ return d.color; })
      .style("opacity", 1)
    tooltip.transition()
         .duration(500)
         .style("opacity", 0);
}//tooltipOff

// add x axis
svg.append("g")
  .style("font", "12px futura-pt")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(0," + height + ")")
  .style("stroke", "white")
  .call(d3.axisBottom(x));


//draw everything
//update();

//update with new data every 3sec
//d3.interval(function() {
//  update();
//}, 3000);




//SEXUAL MISCONDUCT CASE STUDIES********************************************************************
// -----------------------
// INDER VERMA CHART 2
// -----------------------
var w = window.innerWidth;

var margin1 = {top: 10, right: 30, bottom: 30, left: 30},
    width1 = w - margin1.left - margin1.right - w/8,
    height1 = 240 - margin1.top - margin1.bottom;

//parse the date
//var parseDate = d3.timeParse("%d-%m-%Y");
var parseDate1 = d3.timeParse("%m/%d/%Y");

// Set the ranges
/*var x = d3.scaleLinear()
    .rangeRound([0, width1])
    .domain([1980, 2018]); */
/*var x1 = d3.scaleTime()
    .rangeRound([0,width1])
    .domain([new Date(1970, 1, 1), new Date(2018, 12, 31)])
var y1 = d3.scaleLinear()
    .range([0, height1]);*/

var x1 = d3.scaleTime()
        .domain([new Date(1970, 1, 1), new Date(2020, 12, 31)])
        .rangeRound([0, width1]);
var x2 = d3.scaleLinear()
    .range([0, width1]);
var y2 = d3.scaleLinear()
    .domain([0, 23])
    .range([0, height1]);

// Adds the svg canvas
var svg1 = d3.select("#chart1")
  .append("svg")
    .attr("width", width1 + margin1.left + margin1.right+200)
    .attr("height", height1 + margin1.top + margin1.bottom+300)
    //.style("background-color", 'red');
    .style("background", "img/inder_verma.jpg");

// add the tooltip area to the webpage
var tooltip1 = d3.select("#chart1").append("div")
    .attr("class", "tooltip1")
    .style("opacity", 0);


var file1 = "data/misconduct_caseStudies.csv";

var g1 = svg1.append("g")
    .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");


// Get the data
d3.csv(file1, function(error, data) {
    data.forEach(function(d) {
        d.startYear = parseDate1(d.Start)
        d.endYear = parseDate1(d.End)
        d.Name = d.Name
        d.Incident = d.Incident
        d.Date = d.Date
        d.Status = d.Status
        //console.log(d.startYear)
        //console.log(d.Incident)
        //console.log(d.endYear-d.startYear+1)
    });

console.log(data.length); 


var h = window.innerHeight;

    x1.domain([0, d3.max(data, function(d) { return d.startYear; })]);
    g1.append("rect")
      //.attr("class", "bar")
      .attr("fill", "#4d4d4d")
      .attr("opacity", 1.0)
      .attr("x", x1(parseDate1("01/01/1970")))
      .attr("height", 50)
      .attr("y", h/3)
      .attr("width", x1(parseDate1("01/01/2019")));
    //x1.domain(d3.extent(data, function(d) { return d.End; }));
    //y.domain(data.map(function(d) { return d.Name; })).padding(0.1);

    g1.append("text")
      .text("1970")
      .attr("x", x1(parseDate1("01/01/1970")-50))
      .attr("y", h/3 - 30)
      .attr("fill", "white")
      .attr("font-family", "futura-pt");

    g1.append("text")
      .text("2019")
      .attr("x", x1(parseDate1("01/01/2018")))
      .attr("y", h/3 - 30)
      .attr("fill", "white")
      .attr("font-family", "futura-pt");

   /*g1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height1 + ")")
        .style("stroke", "white")
        //.call(d3.axisBottom(x).ticks(5).tickFormat(function(d) { return parseInt(d / 1000); }).tickSizeInner([-height1]));
*/
    //g1.append("g1")
    //    .attr("class", "y axis")
    //    .call(d3.axisLeft(y));

    // add the tooltip area to the webpage
/*var tooltip1 = d3.select("#chart1").append("div")
    .data(data)
    .attr("class", "tooltip1")
    .style("opacity", function(d){
      if (d.Status ==1){
        return 1;
      }
      else {
        return 0;
      }
    })
    .style("color", function(d){
      if (d.Color == 0) {
        return "white"
      }
      if (d.Color == 1) {
        return "red"
      }
      else{
      return "yellow"
      }
    })
  .style("left", function(d){(x1(d.startYear)) - w/3 -50 +'px'})
  //.style("top", (+d3.select(this).attr("y")-500 + 'px'))
  .style("top", function(d){
    if (d.Color == 0){
      return (+d3.select(this).attr("y")-200 + 'px')
    }
    if (d.Color == 1){
      return (+d3.select(this).attr("y") - 200 + 'px')
    }
    if (d.Color == 2){
      return (+d3.select(this).attr("y")-200 + 'px')
    }
  })
  .style("top", height1+200)
  .style("display", "inline-block")
  .html(function(d){return "<b>" + (d.Date) + "</b>" + "<br>" + (d.Name) + "<br>" + (d.Incident)});
  //.html("<b>" + (d.Date) + "</b>" + "<br>" + (d.Name) + "<br>" + (d.Incident));*/

    var bars = g1.selectAll(".bar")
        .data(data)
      .enter();

//colored lines on timeline
      bars.append("rect")
          .attr("class", "bar")
          .attr("x", function(d){return x1(d.startYear)})
          .attr("height", 50)
          .attr("y", h/3)
          //.attr("width", function(d){ return x1(d.end - d.start)})
          .attr("width", function(d) {return x1(d.endYear - d.startYear) + 3;})
          .attr("fill", function(d) {
            if (d.Color == 0) {
              return "white";
            }
              if (d.Color == 1){
                return "red"
              }
              return "yellow"
            })
          //.attr("width", function(d) { return x(d.Start); })


          // adds the mouseover function
          .on("mouseover", function(d){
             d3.select(this).style("cursor", "pointer")
            // only have a tooltip manipulation if status == 0
            if (d.Status == 0){
              d3.select(this).attr("y", h/3-2.5)
              d3.select(this).attr("x", function(d){return x1(d.startYear)-2.5})
              d3.select(this).attr("height", 55)
              d3.select(this).attr("width", function(d) {return x1(d.endYear - d.startYear) + 8;})
              d3.select(this).attr("opacity", 0.5)
              tooltip1
                .style("color", function(){
                    if (d.Color == 0) {
                      return "white"
                    }
                    if (d.Color == 1) {
                      return "red"
                    }
                    else{
                    return "yellow"
                    }
                  }
                )
                .style("left", (x1a(d.startYear)) - w/3 -50 +'px')
                //.style("top", (+d3.select(this).attr("y")-500 + 'px'))
                .style("top", function(){
                  if (d.Color == 0){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                  if (d.Color == 1){
                    return (+d3.select(this).attr("y") - 200 + 'px')
                  }
                  if (d.Color == 2){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                })
                .style("top", height1+200)
                .style("opacity", 1)
                .style("display", "inline-block")
                .html("<b>" + (d.Date) + "</b>" +  "<br>" + (d.Name) + "<br>" + (d.Incident));
            }
          })
        .on("mouseout", function(d){ 
          d3.select(this).attr("y", h/3)
          d3.select(this).attr("x", function(d){return x1(d.startYear)})
          d3.select(this).attr("height", 50)
          d3.select(this).attr("width", function(d) {return x1(d.endYear - d.startYear) + 3;})
          d3.select(this).attr("opacity", 1)
          tooltip1.style("display", "none")
          tooltip1.style("opacity", function(){
            if (d.Status ==1){
              return 1
            }
            else {
              return 0
            }
          });
        })

        

        /*var caption = bars.append("div")
                    .attr("class", "tooltip1")
                    .style("color", function(d){
                    if (d.Color == 0) {
                      return "white"
                    }
                    if (d.Color == 1) {
                      return "red"
                    }
                    else{
                    return "yellow"
                    }
                  })
                .style("left", function(d){(x1(d.startYear)) - w/3 -50 +'px'})
                //.style("top", (+d3.select(this).attr("y")-500 + 'px'))
                .style("top", function(d){
                  if (d.Color == 0){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                  if (d.Color == 1){
                    return (+d3.select(this).attr("y") - 200 + 'px')
                  }
                  if (d.Color == 2){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                })
                .style("top", height1+200)
                .style("opacity", 1)
                .style("display", "inline-block")
                .html("meow")
                .html(function(d){
                  return ("<b>" + (d.Date) + "</b>" +  "<br>" + (d.Name) + "<br>" + (d.Incident))});*/



        var text_bar = bars.append('text') //this is where the text code is
                    .attr("class", "text")
                    .text((d)  => {
                      if (d.Status == 1)
                      return (d.Date + " " +d.Incident)
                    })
                    .attr("x", function(d){return x1(d.startYear)})
                    .attr("y", function(d){
                      if (d.Color == 0) {
                        return h/3 - 130;
                      }
                        if (d.Color == 1){
                          return h/3 + 80
                        }
                        return h/3 - 160
                      })
                    .attr("font-family", "futura-pt")
                    .attr("font-size", "14px")
                    .style("border-color", "white")
                    .style("margin", "5px")
                    //.attr("width",200)
                    .attr("fill", function(d){
                        if (d.Color == 0) {
                        return "white";
                      }
                        if (d.Color == 1){
                          return "red"
                        }
                        return "yellow"
                      })
                    .call(wrap, 160);

        var lines_bar = bars.append("line")
                      .attr("opacity", function(d){
                        if (d.Status ==1 ){
                          return 1
                        }
                        else {
                          return 0
                        }
                      })
                      .style("stroke", function(d){
                        if (d.Color == 0) {
                        return "white";
                      }
                        if (d.Color == 1){
                          return "red"
                        }
                        return "yellow"
                      })
                      .style("stroke-width", "1px")
                      .style("stroke-dasharray", "2, 2")
                      .attr("x1", function(d){return x1(d.startYear)+1})
                      .attr("y1", function(d){
                        if (d.Color == 0) {
                          return h/3
                        }
                        if (d.Color == 2) {
                          return h/3
                        }
                        return h/3+50
                      })
                      .attr("x2", function(d){return x1(d.startYear)+1})
                      .attr("y2", function(d){
                        if (d.Color == 0) {
                          return h/3 - 130;
                        }
                          if (d.Color == 1){
                            return h/3 + 80
                          }
                          return h/3 - 160
                        })


                    /*.attr('transform', (d) => { 
                      if (d.Name =="NA"){
                        return "translate(" + x +"," + 20 + ")";
                      }
                        return "translate(" + x + "," + height1a-20 + ")"; 
                      });*/

                      function wrap(text, width) {
                        text.each(function() {
                          var text = d3.select(this),
                              words = text.text().split(/\s+/).reverse(),
                              word,
                              line = [],
                              lineNumber = 0,
                              lineHeight = 1.2, // ems
                              y = text.attr("y"),
                              dy = 1,
                              //dy = parseFloat(text.attr("dy")),
                              tspan = text.text(null).append("tspan").attr("x", function(d){return 5+x1(d.startYear)}).attr("y", y).attr("dy", dy + "em");



                          word = words.pop()
                          line.push(word);
                          tspan.text(line.join(" "));
                          word = words.pop()
                          line.push(word);
                          tspan.text(line.join(" "));

                          line.pop();
                          tspan.text(line.join(" "));
                          line = [word];
                          tspan = text.append("tspan").attr("x", function(d){return 5+x1(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);

                          // console.log("LOOK HERE")
                          // console.log(words)
                          // line = [word];
                          // console.log("1st LINE")
                          // console.log(line)
                          // tspan = text.append("tspan").attr("x", function(d){return 5+x1a(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);                          
                          // tspan.text(line.join(" "));                          
                          // line.pop();
                          // tspan.text(line.join(" "));


                          while (word = words.pop()) {
                            console.log(word)
                            line.push(word);
                            tspan.text(line.join(" "));
                            if (tspan.node().getComputedTextLength() > width) {
                              line.pop();
                              tspan.text(line.join(" "));
                              line = [word];
                              tspan = text.append("tspan").attr("x", function(d){return 5+x1(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                            }
                          }
                        });
                      }
});
// -----------------------
// FRANCISCO AYALA CHART 2
// -----------------------


var margin1a = {top: 10, right: 30, bottom: 30, left: 30},
    width1a = w - margin1a.left - margin1a.right - w/8,
    height1a = 240 - margin1a.top - margin1a.bottom;

//parse the date
//var parseDate = d3.timeParse("%d-%m-%Y");
var parseDate1a = d3.timeParse("%m/%d/%Y");

var x1a = d3.scaleTime()
        .domain([new Date(1970, 1, 1), new Date(2020, 12, 31)])
        .rangeRound([0, width1a]);
var x2a = d3.scaleLinear()
    .range([0, width1a]);
var y2a = d3.scaleLinear()
    .domain([0, 23])
    .range([0, height1a]);

// Adds the svg canvas
var svg1a = d3.select("#chart2")
  .append("svg")
    .attr("width", width1a + margin1a.left + margin1a.right + 200)
    .attr("height", height1a + margin1a.top + margin1a.bottom+300);

// add the tooltip area to the webpage
var tooltip1a = d3.select("#chart2").append("div")
    .attr("class", "tooltip1")
    .style("opacity", 0);

var file1a = "data/caseStudy_Ayala.csv";

var g1a = svg1a.append("g")
    .attr("transform", "translate(" + margin1a.left + "," + margin1a.top + ")")


// Get the data
d3.csv(file1a, function(error, data) {
    data.forEach(function(d) {
        d.startYear = parseDate1(d.Start)
        d.endYear = parseDate1(d.End)
        d.Name = d.Name
        d.Incident = d.Incident
        d.Date = d.Date
        d.Status = d.Status
        d.Color = d.Color
        d.id = d.id
    });

console.log(data.length); 

var h = window.innerHeight;
var h1 = window.outerHeight;
console.log(h);
console.log(h1);

    x1a.domain([0, d3.max(data, function(d) { return d.startYear; })]);
    g1a.append("rect")
      //.attr("class", "bar")
      .attr("fill", "#4d4d4d")
      .attr("opacity", 1.0)
      .attr("x", x1a(parseDate1a("01/01/1970")))
      .attr("height", 50)
      .attr("y", h/3)
      .attr("width", x1a(parseDate1a("01/01/2019")));

    g1a.append("text")
      .text("1970")
      .attr("x", x1a(parseDate1a("01/01/1970")))
      .attr("y", h/3 - 30)
      .attr("fill", "white")
      .attr("font-family", "futura-pt");

    g1a.append("text")
      .text("2019")
      .attr("x", x1a(parseDate1a("01/01/2018")))
      .attr("y", h/3 - 30)
      .attr("fill", "white")
      .attr("font-family", "futura-pt");

    /*var tooltip1a = g1a.append("div")
    .attr("class", "tooltip1")
    .style("opacity", 0);*/


    var bars = g1a.selectAll(".bar")
        .data(data)
      .enter();

      bars.append("rect")
          .attr("class", "bar")
          .attr("x", function(d){return x1a(d.startYear)})
          //.attr("height", 50)
          .attr("height", 50)
          .attr("y", h/3)
          //.attr("width", function(d){ return x1(d.end - d.start)})
          .attr("width", function(d) {return x1a(d.endYear - d.startYear) + 3;})
          .attr("fill", function(d) {
            if (d.Color == 0) {
              return "white";
            }
              if (d.Color == 1){
                return "red"
              }
              return "yellow"
            })


          // adds the mouseover function
          .on("mouseover", function(d){
            d3.select(this).style("cursor", "pointer")
            // only have a tooltip manipulation if status == 0
            if (d.Status == 0){
              d3.select(this).attr("y", h/3-2.5)
              d3.select(this).attr("x", function(d){return x1a(d.startYear)-2.5})
              d3.select(this).attr("height", 55)
              d3.select(this).attr("width", function(d) {return x1a(d.endYear - d.startYear) + 8;})
              d3.select(this).attr("opacity", 0.5)
              tooltip1a
                .style("color", function(){
                    if (d.Color == 0) {
                      return "white"
                    }
                    if (d.Color == 1) {
                      return "red"
                    }
                    else{
                    return "yellow"
                    }
                  })
                .style("left", (x1a(d.startYear)) - w/3 -50 +'px')
                //.style("top", (+d3.select(this).attr("y")-500 + 'px'))
                .style("top", function(){
                  if (d.Color == 0){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                  if (d.Color == 1){
                    return (+d3.select(this).attr("y") - 200 + 'px')
                  }
                  if (d.Color == 2){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                })
                .style("top", height1+200)
                .style("opacity", 1)
                .style("display", "inline-block")
                .html("<b>" + (d.Date) + "</b>" +  "<br>" + (d.Name) + "<br>" + (d.Incident));
            }
          })
        .on("mouseout", function(d){ 
          d3.select(this).attr("y", h/3)
          d3.select(this).attr("x", function(d){return x1a(d.startYear)})
          d3.select(this).attr("height", 50)
          d3.select(this).attr("width", function(d) {return x1a(d.endYear - d.startYear) + 3;})
          d3.select(this).attr("opacity", 1)
          tooltip1a.style("display", "none");})

      /*var captions = d3.select("#chart2") //this creates divs but positions and colors don't work
                    .selectAll("div")
                    .style("opacity", 1)
                    .data(data)
                    .enter()
                    .append("div")
                    .attr("class", "captions")
                    .text((d)  => {
                      if (d.Status == "1")
                      return d.Incident
                    })
                    .style("left", function(d){return x1a(d.startYear)})
                    .style("top", function(d){
                      if (d.Name == "NA"){
                        return 20;
                      }
                      return 150;
                    })
                    .attr("font-family", "futura-pt")
                    //.attr("width",200)
                    .attr("fill", function(d){
                      if (d.Name == "NA") {
                        return "white";
                      }
                        return "red";
                    })
                    //.call(wrap, 200)*/

      var text_bar1a = bars.append('text') //this is where the text code is
                    .attr("class", "text")
                    .text((d)  => {
                      if(d.Status ==1){
                      return (d.Date  + " " +d.Incident)
                      // return ("<tspan x='0' dy='0em'>"+d.Date+"</tspan>" + "<tspan x='0' dy='2em'>"+d.Incident+"</tspan>")
                      }
                    })
                    .attr("x", function(d){return x1a(d.startYear)})
                    .attr("y", function(d){
                      if (d.Color == 0) {
                        return h/3 - 130;
                      }
                        if (d.Color == 1){
                          return h/3 + 80
                        }
                        return h/3 - 160
                      })
                    /*.attr("opacity", function(d){
                      if(d.Status == 1){
                        return 1
                      }
                      return 0
                    })*/
                    .attr("font-family", "futura-pt")
                    .attr("font-size", "14px")
                    .attr("fill", function(d){
                        if (d.Color == 0) {
                        return "white";
                      }
                        if (d.Color == 1){
                          return "red"
                        }
                        return "yellow"
                      })
                    .call(wrap, 160)

      var lines_bar1 = bars.append("line")
                      .attr("opacity", function(d){
                        if (d.Status ==1 ){
                          return 1
                        }
                        else {
                          return 0
                        }
                      })
                      .style("stroke", function(d){
                        if (d.Color == 0) {
                        return "white";
                      }
                        if (d.Color == 1){
                          return "red"
                        }
                        return "yellow"
                      })
                      .style("stroke-width", "1px")
                      .style("stroke-dasharray", "2, 2")
                      .attr("x1", function(d){return x1a(d.startYear)+1})
                      .attr("y1", function(d){
                        if (d.Color == 0) {
                          return h/3
                        }
                        if (d.Color == 2) {
                          return h/3
                        }
                        return h/3+50
                      })
                      .attr("x2", function(d){return x1a(d.startYear)+1})
                      .attr("y2", function(d){
                        if (d.Color == 0) {
                          return h/3 - 130;
                        }
                          if (d.Color == 1){
                            return h/3 + 80
                          }
                          return h/3 - 160
                        })

                    /*.attr('transform', (d) => { 
                      if (d.Name =="NA"){
                        return "translate(" + x +"," + 20 + ")";
                      }
                        return "translate(" + x + "," + height1a-20 + ")"; 
                      });*/

                      function wrap(text, width) {
                        text.each(function() {
                          var text = d3.select(this),
                              words = text.text().split(/\s+/).reverse(),
                              word,
                              line = [],
                              lineNumber = 0,
                              lineHeight = 1.2, // ems
                              y = text.attr("y"),
                              dy = 1,
                              //dy = parseFloat(text.attr("dy")),
                              tspan = text.text(null).append("tspan").attr("x", function(d){return 5+x1a(d.startYear)}).attr("y", y).attr("dy", dy + "em");



                          word = words.pop()
                          line.push(word);
                          tspan.text(line.join(" "));
                          word = words.pop()
                          line.push(word);
                          tspan.text(line.join(" "));

                          line.pop();
                          tspan.text(line.join(" "));
                          line = [word];
                          tspan = text.append("tspan").attr("x", function(d){return 5+x1a(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);

                          // console.log("LOOK HERE")
                          // console.log(words)
                          // line = [word];
                          // console.log("1st LINE")
                          // console.log(line)
                          // tspan = text.append("tspan").attr("x", function(d){return 5+x1a(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);                          
                          // tspan.text(line.join(" "));                          
                          // line.pop();
                          // tspan.text(line.join(" "));


                          while (word = words.pop()) {
                            console.log(word)
                            line.push(word);
                            tspan.text(line.join(" "));
                            if (tspan.node().getComputedTextLength() > width) {
                              line.pop();
                              tspan.text(line.join(" "));
                              line = [word];
                              tspan = text.append("tspan").attr("x", function(d){return 5+x1a(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                            }
                          }
                        });
                      }
});



// -----------------------
// LAWRENCE KRAUSS CHART 3
// -----------------------

var margin1b = {top: 10, right: 30, bottom: 30, left: 30},
    width1b = w - margin1b.left - margin1b.right - w/8,
    height1b = 240 - margin1b.top - margin1b.bottom;

//parse the date
//var parseDate = d3.timeParse("%d-%m-%Y");
var parseDate1b = d3.timeParse("%m/%d/%Y");

var x1b = d3.scaleTime()
        .domain([new Date(1990, 1, 1), new Date(2020, 12, 31)])
        .rangeRound([0, width1b]);
var x2b = d3.scaleLinear()
    .range([0, width1b]);
var y2b = d3.scaleLinear()
    .domain([0, 23])
    .range([0, height1b]);

// Adds the svg canvas
var svg1b = d3.select("#chart3")
  .append("svg")
    .attr("width", width1b + margin1b.left + margin1b.right+200)
    .attr("height", height1b + margin1b.top + margin1b.bottom+300);

// add the tooltip area to the webpage
var tooltip1b = d3.select("#chart3").append("div")
    .attr("class", "tooltip1")
    .style("opacity", 0);

var file1b = "data/caseStudy_Krauss.csv";

var g1b = svg1b.append("g")
    .attr("transform", "translate(" + margin1b.left + "," + margin1b.top + ")");

// Get the data
d3.csv(file1b, function(error, data) {
    data.forEach(function(d) {
        d.startYear = parseDate1(d.Start)
        d.endYear = parseDate1(d.End)
        d.Name = d.Name
        d.Incident = d.Incident
        d.Date = d.Date
        //console.log(d.startYear)
        //console.log(d.Incident)
        //console.log(d.endYear-d.startYear+1)
    });

console.log(data.length); 

var h = window.innerHeight;


    x1b.domain([0, d3.max(data, function(d) { return d.startYear; })]);
    g1b.append("rect")
      //.attr("class", "bar")
      .attr("fill", "#4d4d4d")
      .attr("opacity", 1.0)
      .attr("x", x1b(parseDate1b("01/01/1970")))
      .attr("height", 50)
      .attr("y", h/3)
      .attr("width", x1b(parseDate1b("01/01/2019")));

    g1b.append("text")
      .text("1970")
      .attr("x", x1b(parseDate1b("01/01/1970")))
      .attr("y", h/3-30)
      .attr("fill", "white")
      .attr("font-family", "futura-pt");

    g1b.append("text")
      .text("2019")
      .attr("x", x1b(parseDate1b("01/01/2018")))
      .attr("y", h/3-30)
      .attr("fill", "white")
      .attr("font-family", "futura-pt");
    //x1.domain(d3.extent(data, function(d) { return d.End; }));
    //y.domain(data.map(function(d) { return d.Name; })).padding(0.1);

   /*g1.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height1 + ")")
        .style("stroke", "white")
        //.call(d3.axisBottom(x).ticks(5).tickFormat(function(d) { return parseInt(d / 1000); }).tickSizeInner([-height1]));
*/
    //g1.append("g1")
    //    .attr("class", "y axis")
    //    .call(d3.axisLeft(y));

    var bars = g1b.selectAll(".bar")
        .data(data)
      .enter();

      bars.append("rect")
          .attr("class", "bar")
          .attr("x", function(d){return x1b(d.startYear)})
          .attr("y", h/3)
          .attr("width", function(d) {return x1b(d.endYear - d.startYear) + 3;})
          .attr("height", 50)
          /*.attr("height", function(d){
            if (d.Status == 1){
              return 200
            }
            return 50;
          })*/
          .attr("fill", function(d) {
            if (d.Color == 0) {
              return "white";
            }
              if (d.Color == 1){
                return "red"
              }
              return "yellow"
            })

          // adds the mouseover function
          .on("mouseover", function(d){
            d3.select(this).style("cursor", "pointer")
            // only have a tooltip manipulation if status == 0
            if (d.Status == 0){
              d3.select(this).attr("y", h/3-2.5)
              d3.select(this).attr("x", function(d){return x1b(d.startYear)-2.5})
              d3.select(this).attr("height", 55)
              d3.select(this).attr("width", function(d) {return x1b(d.endYear - d.startYear) + 8;})
              d3.select(this).attr("opacity", 0.5)
              tooltip1b
                .style("color", function(){
                    if (d.Color == 0) {
                      return "white"
                    }
                    if (d.Color == 1) {
                      return "red"
                    }
                    else{
                    return "yellow"
                    }
                  })
                .style("left", (x1b(d.startYear)) - w/3 -50 +'px')
                //.style("top", (+d3.select(this).attr("y")-500 + 'px'))
                .style("top", function(){
                  if (d.Color == 0){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                  if (d.Color == 1){
                    return (+d3.select(this).attr("y") - 200 + 'px')
                  }
                  if (d.Color == 2){
                    return (+d3.select(this).attr("y")-200 + 'px')
                  }
                })
                .style("top", height1+200)
                .style("opacity", 1)
                .style("display", "inline-block")
                .html("<b>" + (d.Date) + "</b>" +  "<br>" + (d.Name) + "<br>" + (d.Incident));
            }
          })
        .on("mouseout", function(d){ 
          d3.select(this).attr("y", h/3)
          d3.select(this).attr("x", function(d){return x1b(d.startYear)})
          d3.select(this).attr("height", 50)
          d3.select(this).attr("width", function(d) {return x1b(d.endYear - d.startYear) + 3;})
          d3.select(this).attr("opacity", 1)
          tooltip1b.style("display", "none");})

      /*var captions = d3.select("#chart2") //this creates divs but positions and colors don't work
                    .selectAll("div")
                    .style("opacity", 1)
                    .data(data)
                    .enter()
                    .append("div")
                    .attr("class", "captions")
                    .text((d)  => {
                      if (d.Status == "1")
                      return d.Incident
                    })
                    .style("left", function(d){return x1a(d.startYear)})
                    .style("top", function(d){
                      if (d.Name == "NA"){
                        return 20;
                      }
                      return 150;
                    })
                    .attr("font-family", "futura-pt")
                    //.attr("width",200)
                    .attr("fill", function(d){
                      if (d.Name == "NA") {
                        return "white";
                      }
                        return "red";
                    })
                    //.call(wrap, 200)*/

    var text_bar2 = bars.append('text') //this is where the text code is
                    .attr("class", "text")
                    .text((d)  => {
                      if(d.Status ==1){
                      return (d.Date + " " + d.Incident)
                      }
                    })
                    .attr("x", function(d){return x1b(d.startYear)})
                    .attr("y", function(d){
                      if (d.Color == 0) {
                        return h/3 - 130;
                      }
                        if (d.Color == 1){
                          return h/3 + 80
                        }
                        return h/3 - 160
                      })
                    .attr("font-family", "futura-pt")
                    .attr("font-size", "14px")
                    //.attr("width",200)
                    .attr("fill", function(d){
                        if (d.Color == 0) {
                        return "white";
                      }
                        if (d.Color == 1){
                          return "red"
                        }
                        return "yellow"
                      })
                    .call(wrap, 160)

      var lines_bar2 = bars.append("line")
                      .attr("opacity", function(d){
                        if (d.Status ==1 ){
                          return 1
                        }
                        else {
                          return 0
                        }
                      })
                      .style("stroke", function(d){
                        if (d.Color == 0) {
                        return "white";
                      }
                        if (d.Color == 1){
                          return "red"
                        }
                        return "yellow"
                      })
                      .style("stroke-width", "1px")
                      .style("stroke-dasharray", "2, 2")
                      .attr("x1", function(d){return x1b(d.startYear)+1})
                      .attr("y1", function(d){
                        if (d.Color == 0) {
                          return h/3
                        }
                        if (d.Color == 2) {
                          return h/3
                        }
                        return h/3+50
                      })
                      .attr("x2", function(d){return x1b(d.startYear)+1})
                      .attr("y2", function(d){
                        if (d.Color == 0) {
                          return h/3 - 130;
                        }
                          if (d.Color == 1){
                            return h/3 + 80
                          }
                          return h/3 - 160
                        })

                    /*.attr('transform', (d) => { 
                      if (d.Name =="NA"){
                        return "translate(" + x +"," + 20 + ")";
                      }
                        return "translate(" + x + "," + height1a-20 + ")"; 
                      });*/

                      function wrap(text, width) {
                        text.each(function() {
                          var text = d3.select(this),
                              words = text.text().split(/\s+/).reverse(),
                              word,
                              line = [],
                              lineNumber = 0,
                              lineHeight = 1.2, // ems
                              y = text.attr("y"),
                              dy = 1,
                              //dy = parseFloat(text.attr("dy")),
                              tspan = text.text(null).append("tspan").attr("x", function(d){return 5+x1b(d.startYear)}).attr("y", y).attr("dy", dy + "em");



                          word = words.pop()
                          line.push(word);
                          tspan.text(line.join(" "));
                          word = words.pop()
                          line.push(word);
                          tspan.text(line.join(" "));

                          line.pop();
                          tspan.text(line.join(" "));
                          line = [word];
                          tspan = text.append("tspan").attr("x", function(d){return 5+x1b(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);

                          // console.log("LOOK HERE")
                          // console.log(words)
                          // line = [word];
                          // console.log("1st LINE")
                          // console.log(line)
                          // tspan = text.append("tspan").attr("x", function(d){return 5+x1a(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);                          
                          // tspan.text(line.join(" "));                          
                          // line.pop();
                          // tspan.text(line.join(" "));


                          while (word = words.pop()) {
                            console.log(word)
                            line.push(word);
                            tspan.text(line.join(" "));
                            if (tspan.node().getComputedTextLength() > width) {
                              line.pop();
                              tspan.text(line.join(" "));
                              line = [word];
                              tspan = text.append("tspan").attr("x", function(d){return 5+x1b(d.startYear)}).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                            }
                          }
                        });
                      }
                      
});





