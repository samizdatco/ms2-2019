//https://bl.ocks.org/tiktaktok/0966c7d1f1f5dce8936772479a89fa87

var table; // data loaded from csv
var cars;
var longCategories = ['Front-wheel drive', 'Rear-wheel drive', 'All-wheel drive'];
var mpgAverages = {}; 

function preload() {
    table = loadTable('cars.csv', 'csv', 'header');
}

function unique_array(arr) {
    var uniqueArr = [];
    for (var i = 0 ; i < arr.length ; i++) {
        if (uniqueArr.indexOf(arr[i]) < 0) { // not contains
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

function int_array(arr) {
    var intArr = [];
    for (var i = 0 ; i < arr.length ; i++) {
        intArr[i] = int(arr[i]);
    }
    return intArr;
}

function min_from_array(arr) {
    return Math.min(...arr);
}

function max_from_array(arr) {
    return Math.max(...arr);
}

function round_10_below(n) {
    return Math.floor(n/10) * 10;
}

function round_10_above(n) {
    return Math.ceil(n/10) * 10;
}

var leftMargin = 100;
var topMargin = 50;

var plotHeight = 350;

function setup() {
    createCanvas(1000, 500);

    cars = table.getRows();

    var mpgTotals = {};
    var mpgCounts = {};

    for (var i = 0 ; i < longCategories.length ; i++) {
        mpgTotals[longCategories[i]] = 0.0;
        mpgCounts[longCategories[i]] = 0;
    }

    for (var i = 0 ; i < cars.length ; i++) {
        var car = cars[i];
        var driveline = car.get('Driveline');
        var mpg = int(car.get('Highway mpg'));

        mpgTotals[driveline] = mpgTotals[driveline] + mpg;
        mpgCounts[driveline] = mpgCounts[driveline] + 1;
    }

    for (var i = 0 ; i < longCategories.length ; i++) {
        mpgAverages[longCategories[i]] = mpgTotals[longCategories[i]] / mpgCounts[longCategories[i]];
    }
}

function draw() {
    background(255);

    var barWidth = 20;
    var barSpacing = 5;
    var numBarsPerCategory = 1;
    var categorySpacing = 50;

    // X axis
    var xLen = leftMargin + 200 + barWidth; 
    line(leftMargin, topMargin + plotHeight, xLen, topMargin + plotHeight);
    // X axis label
    textAlign(LEFT);
    text('Driveline', xLen, topMargin + plotHeight + 30);
    
    // ----------------------------------------------

    // Y axis
    line(leftMargin, topMargin + plotHeight, leftMargin, topMargin);
    // Y axis arrow at the top
    line(leftMargin - 10, topMargin + 10, leftMargin, topMargin);
    line(leftMargin + 10, topMargin + 10, leftMargin, topMargin);
    // Y axis label
    angleMode(DEGREES);
    rotate(-90);
    textAlign(CENTER);
    text('Average highway MPG', 0 - (topMargin + plotHeight/2), leftMargin - 50);
    rotate(90);

    // Y axis ticks
    
    var surplus = 30; // extra pixels on Y axis inside plot for spacing

    // compute average for each year, and min / max
    var maxMpg = 0;
    for (var i = 0 ; i < longCategories.length ; i++) {
        if (mpgAverages[longCategories[i]] > maxMpg) {
            maxMpg = mpgAverages[longCategories[i]];
        }
    }

    console.log('Averages of highway mpg per driveline', mpgAverages);

    maxMpg = round_10_above(maxMpg);
    var minMpg = 0;

    var pixelsPerMpg = (plotHeight - surplus * 2) / (maxMpg - minMpg);

    // ticks
    // bottom tick
    textAlign(RIGHT);
    var minMpgY = topMargin + plotHeight - surplus;
    text(minMpg, leftMargin - 10, minMpgY+5); // + 5 to center text vertically
    line(leftMargin - 5, minMpgY, leftMargin + 5, minMpgY);

    // top tick
    var maxMpgY = topMargin + surplus;
    text(maxMpg, leftMargin - 10, maxMpgY+5);
    line(leftMargin -5, maxMpgY, leftMargin + 5, maxMpgY);

    // ticks in between
    // => we'll put this many ticks:
    var numVertTicks = 5;
    // so each tick represents this much mpg:
    var hpDelta = (maxMpg - minMpg) / numVertTicks;

    for (var i = 0 ; i < numVertTicks ; i++) {
        var x = leftMargin;
        var y = minMpgY - (i+1) * hpDelta * pixelsPerMpg;
        text(minMpg + (i+1) * hpDelta, x - 10, y+5);
        line(x-5, y, x+5, y);
    }

    // Draw bars
    
    textAlign(LEFT);

    fill(0, 80, 0);
    var rwdHeight = pixelsPerMpg * mpgAverages['Rear-wheel drive'];
    var rwdX = leftMargin + 50;
    rect(rwdX, topMargin + plotHeight - rwdHeight, barWidth, rwdHeight);
    fill(0);
    text('RWD', rwdX - 5, topMargin + plotHeight + 20);

    fill(0, 128, 0);
    var awdHeight = pixelsPerMpg * mpgAverages['All-wheel drive'];
    var awdX = leftMargin + 100;
    rect(awdX, topMargin + plotHeight - awdHeight, barWidth, awdHeight);
    fill(0);
    text('AWD', awdX - 5, topMargin + plotHeight + 20);
    
    fill(0x29, 0xc4, 0x63);
    var fwdHeight = pixelsPerMpg * mpgAverages['Front-wheel drive'];
    var fwdX = leftMargin + 150;
    rect(fwdX, topMargin + plotHeight - fwdHeight, barWidth, fwdHeight);
    fill(0);
    text('FWD', fwdX - 5, topMargin + plotHeight + 20);

    fill(0);

    if (mouseX >= fwdX && 
        mouseX <= fwdX + barWidth &&
        mouseY >= topMargin + plotHeight - fwdHeight && 
        mouseY <= topMargin + plotHeight) {

        text(int(mpgAverages['Front-wheel drive']), fwdX+3, topMargin + plotHeight - fwdHeight - 10);
    } else 
    if (mouseX >= rwdX && 
        mouseX <= rwdX + barWidth &&
        mouseY >= topMargin + plotHeight - rwdHeight && 
        mouseY <= topMargin + plotHeight) {

        text(int(mpgAverages['Rear-wheel drive']), rwdX+3, topMargin + plotHeight - rwdHeight - 10);
    } else
    if (mouseX >= awdX && 
        mouseX <= awdX + barWidth &&
        mouseY >= topMargin + plotHeight - awdHeight && 
        mouseY <= topMargin + plotHeight) {

        text(int(mpgAverages['All-wheel drive']), awdX+3, topMargin + plotHeight - awdHeight - 10);
    }

}

