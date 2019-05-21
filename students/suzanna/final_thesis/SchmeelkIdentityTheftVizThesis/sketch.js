// an array for the magnitude
var magnitudes;
var states;// an array for lat & long
var stateAb;
var stateDetails = [];
var stateBreachCount = [];
var stateBreachCountWithoutBA = [];
var latitudes, longitudes;

var leftBuffer;
var rightBuffer;

// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;
var tableIdentCov;
var tableIdentLoc;
var tableStateDetails;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("./data/BreachesByStateFinal.csv", "csv", "header");
    tableIdentCov = loadTable("./data/IncidentByTotalIndividuals.csv", "csv", "header");
    tableIdentLoc = loadTable("./data/IncidentTypeByCoveredEntityCount.csv", "csv", "header");
    tableStateDetails = loadTable("./data/StateBreachDetails.csv", "csv", "header");
}

function setup() {
 
   // first, call our map initialization function (look in the html's style tag to set its dimensions)
    //setupMap()
    // get the two arrays of interest: magnitude
    magnitudes = table.getColumn('Total');
    latitudes  = table.getColumn('latitude');
    longitudes = table.getColumn('longitude');
    states = table.getColumn('State');
    stateAb = table.getColumn('StateAb'); //may need to fix

    console.log("Magnitudes length: " + magnitudes.length);
    console.log("Longitudes length: " + longitudes.length);
    console.log("Latitudes length: " + latitudes.length);
    console.log("States length: " + states.length);
    console.log("StateAb length: " + stateAb.length);
    console.log(states);
    console.log(stateAb);

    for(var i=0; i<states.length; i++){
      console.log(" State: " + states[i] + " State Ab: " + stateAb[i]);
      var stateIssues = {};
      //stateIssues.name = states[i];
      //stateIssues.abrev = stateAb[i];
      var stateIssues = tableStateDetails.findRows(String(stateAb[i]),0);
      var stateIssueString = '';
      console.log(stateIssues.length)
      var show = (stateIssues.length > 3)? 3: stateIssues.length;
      for(var j=0; j<show; j++){
         var thisIssue = stateIssues[j]
         //console.log(stateIssues[j])
         //console.log(thisIssue.arr[0])
         var num = j + 1
         stateIssueString = stateIssueString + "<b>Breach Info [</b>" + num + "<b>]</b><br>"
         stateIssueString = stateIssueString + " &nbsp; <b>Who:</b> " + thisIssue.arr[1] + "<br>"
         stateIssueString = stateIssueString + " &nbsp; <b>What:</b> " + thisIssue.arr[2] + "<br>"
         stateIssueString = stateIssueString + " &nbsp; <b>Individuals:</b> " + thisIssue.arr[3] + "<br>"
         stateIssueString = stateIssueString + " &nbsp; <b>Date:</b> " + thisIssue.arr[4] + "<br>"
         stateIssueString = stateIssueString + " &nbsp; <b>Type:</b> " + thisIssue.arr[5] + "<br>"
         stateIssueString = stateIssueString + " &nbsp; <b>BA Agreement:</b> " + thisIssue.arr[6] + "<br>"
         //stateIssueString = stateIssueString + " " + thisIssue[''] + " " 
         stateIssueString = stateIssueString 
      }
      var countBANo = 0;
      for(var j=0; j < stateIssues.length; j++){
         var thisIssue = stateIssues[j]
         if(thisIssue.arr[6] == "No" ){
              countBANo = countBANo + 1
         }
      }
      console.log(stateIssueString);
      stateDetails[i] = stateIssueString;
      stateBreachCount[i] = stateIssues.length;
      console.log('State Breach Count: ' + stateBreachCount[i]);
      stateBreachCountWithoutBA[i] = countBANo
      console.log('State Breach Count of No BA: ' + stateBreachCountWithoutBA[i]);
    }

    // next, draw our p5 diagram that complements it
    var canvas = createCanvas(3200, 1090);
    canvas.parent('sketch-holder');
 
    background('white');
    rightBuffer = createGraphics(2700, 900);
    leftBuffer = createGraphics(800,600);
    fill(0)
    noStroke()
}

function draw(){
   drawLeftBuffer();
   drawRightBuffer();
   image(leftBuffer, 0, 100);
   image(rightBuffer, 780, 0);
}

function drawLeftBuffer() {
    setupMap();
    leftBuffer.background('white');
    leftBuffer.fill(255, 255, 255);
    leftBuffer.textSize(32);
    leftBuffer.text("This is the left buffer!", 50, 50);
}

function drawRightBuffer() {
    rightBuffer.background('white');
    rightBuffer.fill(0, 0, 0);
    rightBuffer.textSize(10);
    var incByIn = tableIdentCov.getColumn("Types of Incident");
    var inByInc = tableIdentCov.getColumn("Individuals Affected");
    console.log('Right buffer');

   //Heading

    rightBuffer.textSize(20);
    rightBuffer.fill('black');
    rightBuffer.text("USA HIPAA Breach Information", 150, 20);

    //Top 
    y = 50
    rightBuffer.textSize(12);
    rightBuffer.fill('black');
    rightBuffer.text("Total Incident Type Across Country (per 100000)", 50, y);

    var anumberOfShades = 9;
    var amin = 0;
    var amax = 8300000;
    var apalette = Brewer.sequential('Blues', anumberOfShades, amin, amax)
    var x = 70
    var y = y + 10
    var xright = 200
    var dim = 10
    for(var j = 0; j < incByIn.length; j++){
      var acolor = apalette.colorForValue(inByInc[j]);
      rightBuffer.fill(acolor);
      rightBuffer.rect(x, y, xright, dim);
      if(inByInc[j] < 900000){
          rightBuffer.fill('black');
      } else {
          rightBuffer.fill('white');
      }
      rightBuffer.textSize(9);
      rightBuffer.text(incByIn[j] + " \t" + inByInc[j], x+dim*.5, y+dim*.8);
      rightBuffer.fill(acolor);
      console.log(incByIn[j] + " " + " \t" + inByInc[j]);
      for (var w = 0; w < inByInc[j]/100000; w++) {
        console.log('ae');
        rightBuffer.fill(apalette.colorForValue( inByInc[j] ))
        console.log('ap');
        rightBuffer.rect(x + xright + dim + (10 * w) , y, 10, 10);
      }
      y+=dim;
    }

    console.log("Trying location");
    var loc = tableIdentLoc.getColumn("Incident Location");
    var locCE = tableIdentLoc.getColumn("Covered Entity Count");
    var count = 0;
    var hash = {};
    loc.forEach(function(item){
      if (item.indexOf(",") == -1){
        var key = item.slice(0, item.length).trim();   //physical location
      }else {
        var key = String(item.slice(0, item.indexOf(",")).trim()) ;   //physical location
      }
      if (hash[key]) {
         hash[key] = int(hash[key]) + int(locCE[count]) ;
      } else {
         hash[key] = int(locCE[count]);
      }
    count++;
    });
    console.log(hash);
    console.log(hash);
    var min = max = 0;
    console.log("start sort");
    var sortedCities=sortProperties(hash);
    console.log(sortedCities);
    for (var k in hash){
         //console.log( k + " (" + hash[k] + ")");
         if(hash[k] > max){
            max = hash[k];
         }
    }


    console.log("Elements examined " + Object.keys(hash).length);
  /*  rightBuffer.textSize(20);
    rightBuffer.fill('black');
    rightBuffer.text("USA HIPAA Breach Information", 150, 20);
*/

    //By Incident Type
    y = y + 30
    rightBuffer.textSize(12);
    rightBuffer.fill('black');
    rightBuffer.text("Total Incident Locations Across Country (per 10)", 50, y);

    //rightBuffer.text("Elements examined " + Object.keys(hash).length, 50, 14 + (i));
    var numberOfShades = 9;
    var palette = Brewer.sequential('Greens', numberOfShades, min, max)
    var x = 70
    var y = y + 10
    var xright = 200
    var dim = 10
    for (var r=0; r<sortedCities.length; r++){
      var city = sortedCities[r]
      var color = palette.colorForValue(city[1]);
      //var color = palette.colorForValue(hash[j]);
      rightBuffer.fill(color);
      rightBuffer.rect(x, y, xright, dim);
      if(city[1] < 70){
          rightBuffer.fill('black');
      } else {
          rightBuffer.fill('white');
      }
      rightBuffer.textSize(9);
      rightBuffer.text(city[0] + " (" + city[1] + ")", x+dim*.5, y+dim*.8);
      for (var w = 0; w < city[1]/10; w++) {
        rightBuffer.fill(palette.colorForValue( city[1] ))
        rightBuffer.rect(x + xright + dim + (10 * w) , y, 10, 10);
      }
     console.log(city[0] + " (" + city[1] + ")");
      stroke('#222222');
      strokeWeight(4);//rectngel
      line(xright + dim, y + dim*.8, int(xright) + int(hash[j]), y + dim*.8);
      console.log("xright " + xright + " dim " + dim + " y " +  y + " city[1] " + city[1]);
      y+=dim;
     }

     //State information
    y = y + 30 
    rightBuffer.textSize(12);
    rightBuffer.fill('black');
    rightBuffer.text("Total State Breaches without a Business Associate Agreement (BAA)", 50, y);

    var amax = 22;
    var apalette = Brewer.sequential('Reds', anumberOfShades, amin, amax)
    var xright = 90 
    y = y + 10
    for(var j=0; j<states.length - 1; j++){
      //console.log(" State: " + states[j] + " State Ab: " + stateAb[j] + " State Breach Count: " + stateBreachCount[j]);
      console.log(" State: " + states[j] + " State Ab: " + stateAb[j] + " State Breach Count: " + stateBreachCountWithoutBA[j]);
      //var acolor = apalette.colorForValue(stateBreachCount[j]);
      var acolor = apalette.colorForValue(stateBreachCountWithoutBA[j]);
      rightBuffer.fill(acolor);
      rightBuffer.rect(x, y, xright, dim);
      if(stateBreachCount[j] < 10){
          rightBuffer.fill('black');
      } else {
          rightBuffer.fill('white');
      }
      rightBuffer.textSize(9);
      //rightBuffer.text(states[j] + " \t" + stateBreachCount[j], x+dim*.5, y+dim*.8);
      rightBuffer.text(states[j] + " \t" + stateBreachCountWithoutBA[j], x+dim*.5, y+dim*.8);
      rightBuffer.fill(acolor);
      //console.log(states[j] + " " + " \t" + stateBreachCount[j]);
      console.log(states[j] + " " + " \t" + stateBreachCountWithoutBA[j]);
      //for (var w = 0; w < stateBreachCount[j]; w++) {
      for (var w = 0; w < stateBreachCountWithoutBA[j]; w++) {
        //rightBuffer.fill(apalette.colorForValue( stateBreachCount[j] ))
        rightBuffer.fill(apalette.colorForValue( stateBreachCountWithoutBA[j]  ))
        rightBuffer.rect(x + xright + dim + (10 * w) , y, 10, 10);
      }
      y+=dim;
    }

 
}

function sortProperties(obj)
{
  // convert object into array
        var sortable=[];
        for(var key in obj)
                if(obj.hasOwnProperty(key))
                        sortable.push([key, obj[key]]); // each item is an array in format [key, value]

        // sort items by value
        sortable.sort(function(a, b)
        {
                var x=a[1], y=b[1];
                return x<y ? -1 : x>y ? 1 : 0;
        });
        return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}


function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    console.log("Column count: " + table.getColumnCount());
    console.log("Row count: " + table.getRowCount());
    // create your own map
    mymap = L.map('breach-map').setView([26, -97], 4);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
    }).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();
}

function drawDataPoints(){
    strokeWeight(5);
    stroke(255,0,0);
    
    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("Total");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    var numberOfShades = 9;
    var mpalette = Brewer.divergent('PiYG', numberOfShades, 0, magnitudeMax/2,  magnitudeMax)

    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<magnitudes.length; i++){
        // create a new dot
        console.log("lat: " + latitudes[i] + " long: " + longitudes[i] + " mag: " + magnitudes[i] + " state: " + states[i]);
        if( magnitudes[i] > 0 ) {
          console.log("Breach greater than zero");
          var circle = L.circle([latitudes[i], longitudes[i]], {
              color: mpalette.colorForValue(magnitudes[i]), //'green',      // the dot stroke color
              fillColor: mpalette.colorForValue(magnitudes[i]), //'#f03', // the dot fill color
              fillOpacity: 0.5,  // use some transparency so we can see overlaps
              radius: magnitudes[i] * 10000
          });
          circle.bindPopup("<b>" + states[i] + "</b> <br> <b> Total breaches: </b> " + magnitudes[i] + " <br> " + stateDetails[i]);
          // place it on the map
          circle.addTo(mymap);
          // save a reference to the circle for later
          circles.push(circle)
        }
    }
}

function removeAllCircles(){
    // remove each circle from the map and empty our array of references
    circles.forEach(function(circle, i){
        mymap.removeLayer(circle);
    })
    circles = [];
}

// get the maximum value within a column
function getColumnMax(columnName){
    // get the array of strings in the specified column
    var colStrings = table.getColumn(columnName);

    // convert to a list of numbers by running each element through the `float` function
    var colValues = _.map(colStrings, float);

    // find the max value by manually stepping through the list and replacing `m` each time we
    // encounter a value larger than the biggest we've seen so far
    var m = 0.0;
    for(var i=0; i<colValues.length; i++){
        if (colValues[i] > m){
            m = colValues[i];
        }
    }
    return m;

    // or do it the 'easy way' by using lodash:
    // return _.max(colValues);
}
