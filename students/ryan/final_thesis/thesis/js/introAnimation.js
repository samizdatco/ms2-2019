Promise.all([
  d3.json('data/HOLC_Manhattan.geojson'),
]).then((json) => {
  var manhattan = json[0];
  let animateWidth = window.innerWidth,
      animateHeight = window.innerHeight,
      introSvg = d3.select('#intro-animation'),
      numberOfZones = manhattan.features.length-1;

  let g = introSvg.append('g')
                  .attr('class','g-manhattan');

  let animateProjection = d3.geoMercator().scale(1).translate([0,0]);
      // .center([-74.1,40.79])
      // .scale(190000)
      // .translate([animateWidth / 2, animateHeight / 2]);

  let animateGeoGenerator = d3.geoPath().projection(animateProjection);

  let lines = g.selectAll('path')
               .data(manhattan.features)
               .enter()
               .append('path')
               .attr('d',animateGeoGenerator)
               .attr('class','intro-animation-hide');
               // .attr("stroke-width",0)


   animateResizeMapAllZones();

   setTimeout(animateLines,400);

   window.addEventListener('resize', animateResizeMapAllZones);

   function animateLines() {
     lines.each(function (d,i) {d.totalLength = this.getTotalLength();})
        .attr('class',(d)=>'path intro-animation intro-holc-'+d.properties.holc_grade)
        .attr('stroke-dasharray',(d) => d.totalLength + " " + d.totalLength)
        .attr('stroke-dashoffset',(d) => d.totalLength)
        .attr('z-index',(d,i)=>numberOfZones-i)
        .transition()
         .duration((d)=>2500)
         .ease(d3.easeCubic)
         .delay((d,i) => 600 + (30*i))
         .attr("stroke-dashoffset", 0);
       }



  function animateResizeMapAllZones() {
    introSvg.selectAll('path').attr('transform', null); // undo any zoom/pan from explore phase

    animateWidth  = parseInt(introSvg.style('width'));
    animateHeight = parseInt(introSvg.style('height'));
    animateProjection.scale(1).translate([0,0]); // Dummy data into scale so the bounding box returns coordinates

    let centerpointHoriz = 0.8,
        centerpointVert = 0.5;


    let  b = animateGeoGenerator.bounds(manhattan) // bounding box of all holc zones
        ,w = b[1][0] - b[0][0] // width of box
        ,h = b[1][1] - b[0][1] // height of box
        ,x = (b[0][0] + b[1][0]) / 2 // horizontal center point
        ,y = (b[0][1] + b[1][1]) / 2 // vertical center point
        ,sHoriz = (0.9-0.05) / (w / animateWidth) // SCALE: this ensuures that the bounding box for the selected zones takes up the specified portion of horizontal screen space provided (plus a slight buffer))
        ,sVert = (0.9-0.05) / (h / animateHeight)
        ,s = Math.min(sHoriz,sVert)
        ,t = [(animateWidth*centerpointHoriz) - (s * x), (animateHeight*centerpointVert) - (s * y)] // translate formula taken from bl.ocks
        ;

    animateProjection.scale(s).translate(t); // feed bounding fox scale and translate functions into my formula
    introSvg.selectAll('path').attr('d',animateGeoGenerator); // update all drawn paths to the new projection – geoGenerator is defined in index.html and takes projection as an argument
    animateLines();
  }
});
