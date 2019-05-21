var words = [];
var others = [];
var data;
var count;
var url = 'http://students.ceid.upatras.gr/~pavlopou/data.json';
var max_size = 0;
var slider, sliderLabel;
var r = 200;
var w = 600;

function preload() {
  data = loadJSON(url);
}

function setup() {
  noLoop();  
  
  var canvas = createCanvas(w, w);

  canvas.mouseReleased(redraw);
  canvas.parent("container");

  count = Object.keys(data).length;
  for (var i = 0; i < count; i++) {
    if (data[i].size > max_size) {
      max_size = data[i].size;
    }
  }
  var minW = 134*pow(2.72, count*0.005); // y = 134*e^(0.004*x)
  slider = createSlider(minW, width/2, r);
  // slider.parent("slider");
  slider.mouseReleased(redraw);
}

function draw() {
  background(40);
  r = slider.value();
  
  fill(255);
  textSize(15);
  text(round(r), slider.position().x + 140, 20);
 
  words = [];
  others = [];
  translate(width/2, height/2);
  // scale(300/r);
  slider.position(10, 10);
  drawCloud();
  // translate(-width/2, -height/2);
}

function drawCloud() {
  // Uncomment to view circle
  // fill(240);
  // ellipse(0, 0, r*2, r*2);

  for (var i = 0; i < count; i++) {
    var tries = 0; 
    do {
      if (tries == 5000) {
        console.log("gave up at '" + data[i].text + "'");
        break;
      }
      tries++;

      var size = (data[i].size/max_size) * 40 + 3;
      textSize(size);
      var tWidth = textWidth(data[i].text);
      var x = random(-r, r - tWidth);
      var d = floor(sqrt(pow(r, 2) - pow(x, 2))); // x^2 + y^2 < r^2
      var y = random(-d + size, d);
      var circleCond1 = (pow(x+tWidth, 2) + pow(y-size, 2)) < pow(r, 2);
      var circleCond2 = (pow(x+tWidth, 2) + pow(y, 2)) < pow(r, 2);
      var circleCond = circleCond1 && circleCond2;

    } while (!circleCond || (others.length > 0 && isOverlapping(x, y, data[i], others)));

    words[i] = new Word(x, y, data[i]);
    others.push(words[i]);

    noStroke();
    textSize(words[i].size);
    var tWidth = textWidth(words[i].text);
    
    // Uncomment to view word highlighting
    // fill(0);
    // rect(words[i].x, words[i].y + words[i].size*0.2, tWidth, -words[i].size);

    fill(words[i].color.r);
    text(words[i].text, words[i].x, words[i].y);
  }
}

function isOverlapping(x, y, word, others) {
  var wordHeight = (word.size/max_size) * 40 + 3; // scale word size from old data
  textSize(wordHeight);
  var wWidth = textWidth(word.text);

  for (var i = 0; i < others.length; i++) {
    textSize(others[i].size);
    var oWidth = textWidth(others[i].text);

    if (x + wWidth > others[i].x && 
        x < others[i].x + oWidth && 
        y + others[i].size*0.2 > others[i].y - others[i].size*0.7 && 
        y - wordHeight < others[i].y) {
      return true;
    }
  }
  return false;
}

function Word(x, y, data) {
  this.x = x;
  this.y = y;
  this.orglsize = data.size;
  this.size = (data.size/max_size) * 40 + 3;
  this.text = data.text;
  this.color = {
    r: random(130, 250),
    g: random(255),
    b: random(255)
  };
}
