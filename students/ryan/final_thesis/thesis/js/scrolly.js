// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
	// 1. update height of step elements
	var stepH = Math.floor(window.innerHeight * 0.75);
	step.style('height', stepH + 'px');

	// 2. update height of figure container
	var figureHeight = window.innerHeight * 0.95
	var figureMarginTop = (window.innerHeight - figureHeight) / 2

	figure
		.style('height', figureHeight + 'px')
		.style('top', figureMarginTop + 'px');

	resizeMap();
	// 3. tell scrollama to update new element dimensions
	scroller.resize();
}

function resizeMap() {
	// UPDATE d3 MAP //
	// These stipulations for my d3 map projection seems to work ok, but it might be zoomed in too much for wide screens
	// Bounding map to boundaries of what's visible?
	figureSvgWidth  = parseInt(figureSvg.style('width'));
	figureSvgHeight = parseInt(figureSvg.style('height'));
	projection = d3.geoMercator()
			.center([-73.98,40.78])
			.scale(figureSvgWidth * 75)
			.translate([figureSvgWidth / 2, figureSvgHeight / 2.3]);

	geoGenerator = d3.geoPath().projection(projection);
	figureSvg.selectAll('path').attr('d',geoGenerator);
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
	if (response.index === 0) {
		hideHolcGrade('A');
		hideHolcGrade('B');
		hideHolcGrade('C');
		hideHolcGrade('D');
	} else if (response.index === 1) {
		hideHolcGrade('A');
		hideHolcGrade('B');
		hideHolcGrade('C');
		showHolcGrade('D');
	} else if (response.index === 2) {
		showHolcGrade('A');
		hideHolcGrade('B');
		hideHolcGrade('C');
		fadeHolcGrade('D');
	} else if (response.index === 3) {
		fadeHolcGrade('A');
		showHolcGrade('B');
		showHolcGrade('C');
		fadeHolcGrade('D');
	} else if (response.index === 4) {
		showHolcGrade('A');
		showHolcGrade('B');
		showHolcGrade('C');
		showHolcGrade('D');
	}

}

function init() {
	// 1. force a resize on load to ensure proper dimensions are sent to scrollama
	handleResize();

	// 2. setup the scroller passing options
	// 		this will also initialize trigger observations
	scroller.setup({
		step: '#scrolly article .step',
		offset: 0.33,
		debug: true,
	})
	// 3. bind scrollama event handlers
	.onStepEnter(handleStepEnter)

	// setup resize event
	window.addEventListener('resize', handleResize);
}

// kick things off
init();

// define graphics functions that will be called in the handleResize() function
function showHolcGrade(grade) {
	d3.selectAll('.holc-'+grade).attr('class','show holc holc-'+grade)
}

function hideHolcGrade(grade) {
	d3.selectAll('.holc-'+grade).attr('class','hide holc holc-'+grade)
}

function fadeHolcGrade(grade) {
	d3.selectAll('.holc-'+grade).attr('class','fade holc holc-'+grade)
}
