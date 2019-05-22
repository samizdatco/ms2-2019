// NYC DCLA area curators - comparison with those hired in last 5 years
// <!--FILTERED OUT VOLUNTEERS _ PAID CURATORS ONLY 318 paid curators at museums with budgets over 1m-->
// <!--FILTERED ONLY MUSEUMS & FILTERED OUT LOW BUDGET MUSEUMS so only BUDGETS MORE THAN $999,999: 7647 museums-->
// <!--LINE CHART WORKING file current for line chart curators-->
// <!--NYC DCLA all curators & curators hired since 2010-->
// <!--THEN do 2nd chart with percentage increase / decrease all starting from 0 at lhs and % up / down on right-->


d3.csv("data/NYCDCLA1.csv").then((data) => {
	// console.log(data);
	svgPlot3(data);

});

// ---------------------------- Data ----------------------------
// ----- NYCDCLA curators -----
let svgPlot3 = (data) => {
	
	console.log(data);
	console.log(data.length);
	// let nationalityCount = data.sort((a, b) => (a.count > b.count) ? -1 : 1); // This is to sort the array large to small
	// //   nationalityCount = nationalityCount.sort((a, b) => (a.count > b.count) ? 1 : -1); // small to large
	// console.log(nationalityCount[0].count)
	// // ---
	// let reformattedData = data.slice(0, 3);
	// let reformattedData = data;
	// svgPlot(reformattedData);
	// }



	var margin = { top: 100, right: 80, bottom: 10, left: 20 };


	var width = 260 - margin.left - margin.right; // Use the window's width 
	var height = 350 - margin.top - margin.bottom; // Use the window's height
	console.log(margin.top)


	////FILTER the data set to get MUSEUM only
	let museum = data.filter((e) => { ////this loops through and selects museum only within the discipline column
		if (e.DISCIPLINE == "Museum") {
			return e;
		}
	}); // need all of the elements museums, data.DISCIPLINE[i]
	// console.log(museum);
	console.log(museum.length);

	////FILTER museum to get budget 3,4,5 over $999,999 annual budget 
	let museums = museum.filter((e) => { ////this loops through and selects museum only within the discipline column
		if (e.BUDGET == "3" || e.BUDGET == "4" || e.BUDGET == "5") {
			return e;
		}
	}); // need all of the elements museums, data.DISCIPLINE[i]
	// console.log(museums);
	console.log(museums.length);

	////FILTER museums to get only jobtype curator
	let curatorsmus = museums.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.JOBTYPE == "4") {
			return e;
		}
	});
	// console.log(curator);
	console.log(curatorsmus.length);

	////FILTER volunteer to get only paid employees
	let curator = curatorsmus.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.VOLUNTEER == "2") {
			return e;
		}
	});
	// console.log(curator);

	////total number of employed curators at museums with budgets over $999,999
	console.log(curator.length);

	////filter museums with large budgets to get last 5 years hired - hired in decade 2010s
	let fiveyrs = museums.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.DECADEHIRED == "2010") {
			return e;
		}
	});
	console.log(fiveyrs);

	////////NOT HIRED in last 5 years, that is hired prior to 2010			
	let notfiveyrs = museums.filter((e) => { ////use the variable museums and loop through to filter just those staff hired since 2010
		if (e.DECADEHIRED !== "2010") {
			return e;
		}
	});
	console.log(notfiveyrs);

	////filter last five years & not volunteer to just get curator not volunteer - these are at large museums only
	let curatorfiveyrs = fiveyrs.filter((e) => { 
		if (e.JOBTYPE == "4" && e.VOLUNTEER == "2") {
			return e;
		}
	});

	////number of paid curators hired 2010-15 in museums with budgets over $999,999
	/////=========132
	console.log(curatorfiveyrs.length);

	/////filter curators NOT HIRED in last 5 years
	let curatornotfiveyrs = notfiveyrs.filter((e) => { 
		if (e.JOBTYPE == "4" && e.VOLUNTEER == "2") {
			return e;
		}
	});

	////number of curators working at time of survey hired prior to 2010 paid in large museums
	////=========186
	console.log(curatornotfiveyrs.length);

	///curators last five years filter by race/ethnicity

	let curatorfiveyr1 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "1") {
			return e;
		}
	});
	// console.log(curatorfiveyr1);

	let curatorfiveyr2 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "2") {
			return e;
		}
	});
	// console.log(curatorfiveyr2);

	let curatorfiveyr3 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "3") {
			return e;
		}
	});
	// console.log(curatorfiveyr3);

	let curatorfiveyr4 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "4") {
			return e;
		}
	});
	// console.log(curatorfiveyr4);

	let curatorfiveyr5 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "5") {
			return e;
		}
	});
	// console.log(curatorfiveyr5);

	let curatorfiveyr6 = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "6") {
			return e;
		}
	});
	console.log(curatorfiveyr6);

	let curatorfiveyrundef = curatorfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "-8") {
			return e;
		}
	});
	// console.log(curatorfiveyrundef);

	// curators hired in last 5 YEARS by race/ethnicity
	var ethcuratorgrp = [curatorfiveyr1.length, curatorfiveyr2.length, curatorfiveyr3.length, curatorfiveyr4.length, curatorfiveyr5.length, curatorfiveyr6.length, curatorfiveyrundef.length];

	console.log(ethcuratorgrp);

	///////race/ethnicity 6 only five years: 107
	console.log(curatorfiveyr6.length)
	///////////////\\\\\\\\\\\\


	//////curators hired BEFORE 2010 filter by race/ethnicity

	let curatornotfiveyr1 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "1") {
			return e;
		}
	});
	console.log(curatornotfiveyr1);

	let curatornotfiveyr2 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "2") {
			return e;
		}
	});
	console.log(curatornotfiveyr2);

	let curatornotfiveyr3 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "3") {
			return e;
		}
	});
	console.log(curatornotfiveyr3);

	let curatornotfiveyr4 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "4") {
			return e;
		}
	});
	console.log(curatornotfiveyr4);

	let curatornotfiveyr5 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "5") {
			return e;
		}
	});
	console.log(curatornotfiveyr5);

	let curatornotfiveyr6 = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "6") {
			return e;
		}
	});
	console.log(curatornotfiveyr6);

	let curatornotfiveyrundef = curatornotfiveyrs.filter((e) => {
		if (e.RACEETHNICITY == "-8") {
			return e;
		}
	});
	console.log(curatornotfiveyrundef);

	// curators not hired in last 5 years by race/ethnicity - hired before 2010
	var ethcuratornotgrp = [curatornotfiveyr1.length, curatornotfiveyr2.length, curatornotfiveyr3.length, curatornotfiveyr4.length, curatornotfiveyr5.length, curatornotfiveyr6.length, curatornotfiveyrundef.length];

	console.log(ethcuratornotgrp);

	///////race/ethnicity 6 not hired in last five years: 163
	console.log(curatornotfiveyr6.length)


	/////2nd chart job seniority -  mid / senior levels


	// 	///mid & senior level curators last five years filter by race/ethnicity
	// 		let curatorfiveyrjob = curatorfiveyrs.filter((e)=> {
	// 			if (e.LEVEL=="2" || e.LEVEL=="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob);

	// 		let curatorfiveyrjob1 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="1")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob1);

	// 		let curatorfiveyrjob2 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="2")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob2);

	// 		let curatorfiveyrjob3 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob3);

	// 		let curatorfiveyrjob4 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="4")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob4);

	// 		let curatorfiveyrjob5 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="5")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob5);

	// 		let curatorfiveyrjob6 = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="6")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjob6);

	// 		let curatorfiveyrjobundef = curatorfiveyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="-8")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorfiveyrjobundef);

	// var ethjobcuratorgrp = [curatorfiveyrjob1.length, curatorfiveyrjob2.length, curatorfiveyrjob3.length, curatorfiveyrjob4.length, curatorfiveyrjob5.length, curatorfiveyrjob6.length, curatorfiveyrjobundef.length];

	//// console.log(ethjobcuratorgrp);



/////======= data for ALL YEARS paid curators ALL YEARS working at large museums filter by race/ethnicity
	
	let curatorallyr1 = curator.filter((e) => {
		if (e.RACEETHNICITY == "1") {
			return e;
		}
	});
	console.log(curatorallyr1);

	let curatorallyr2 = curator.filter((e) => {
		if (e.RACEETHNICITY == "2") {
			return e;
		}
	});
	console.log(curatorallyr2);

	let curatorallyr3 = curator.filter((e) => {
		if (e.RACEETHNICITY == "3") {
			return e;
		}
	});
	console.log(curatorallyr3);

	let curatorallyr4 = curator.filter((e) => {
		if (e.RACEETHNICITY == "4") {
			return e;
		}
	});
	console.log(curatorallyr4);

	let curatorallyr5 = curator.filter((e) => {
		if (e.RACEETHNICITY == "5") {
			return e;
		}
	});
	console.log(curatorallyr5);

	let curatorallyr6 = curator.filter((e) => {
		if (e.RACEETHNICITY == "6") {
			return e;
		}
	});
	console.log(curatorallyr6);

	let curatorallyrundef = curator.filter((e) => {
		if (e.RACEETHNICITY == "-8") {
			return e;
		}
	});
	console.log(curatorallyrundef);


	var ethcuratorallgrp = [curatorallyr1.length, curatorallyr2.length, curatorallyr3.length, curatorallyr4.length, curatorallyr5.length, curatorallyr6.length, curatorallyrundef.length];

	/////all curators employed at museums with budgets over $999,999
	////318
	console.log(ethcuratorallgrp);
	console.log(curatorallyr6.length);


	//// filter by mid senior level curators

	// 		let curatorallyrjob = curator.filter((e)=> {
	// 			if (e.LEVEL=="2" || e.LEVEL=="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob);

	// 		let curatorallyrjob1 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="1")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob1);

	// 		let curatorallyrjob2 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="2")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob2);

	// 		let curatorallyrjob3 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="3")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob3);

	// 		let curatorallyrjob4 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="4")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob4);

	// 		let curatorallyrjob5 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="5")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob5);

	// 		let curatorallyrjob6 = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY==="6")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjob6);

	// 		let curatorallyrjobundef = curatorallyrjob.filter((e)=> {
	// 			if (e.RACEETHNICITY=="-8")
	// 				{
	// 					return e;
	// 				}
	// 		});
	// 		// console.log(curatorallyrjobundef);

	// var ethjoballcuratorgrp = [curatorallyrjob1.length, curatorallyrjob2.length, curatorallyrjob3.length, curatorallyrjob4.length, curatorallyrjob5.length, curatorallyrjob6.length, curatorallyrjobundef.length];

	// // console.log(ethjoballcuratorgrp);


	//////////////========= GROUP by pairs and draw charts========

	///// all curators and five years curators
	/////all years.length data  ethcuratorallgrp
	/////five years.length data ethcuratorgrp curators hired 2010-2015

	console.log(ethcuratorgrp);

	// curators all years concat with curators hired in last five years since 2010 paid at large musuems
	var alltot = ethcuratorallgrp.concat(ethcuratorgrp);

	console.log(alltot);

	///////================
	/////select pairs by race/ethnicity 
	let all1tot1 = alltot.filter((d, i) => {
		{
			return i == 0 || i == 7;
		}
	});
	let all2tot2 = alltot.filter((d, i) => {
		{
			return i == 1 || i == 8;
		}
	});
	let all3tot3 = alltot.filter((d, i) => {
		{
			return i == 2 || i == 9;
		}
	});
	let all4tot4 = alltot.filter((d, i) => {
		{
			return i == 3 || i == 10;
		}
	});
	let all5tot5 = alltot.filter((d, i) => {
		{
			return i == 4 || i == 11;
		}
	});

	let all6tot6 = alltot.filter((d, i) => {
		{
			return i == 5 || i == 12;
		}
	});
	let all7tot7 = alltot.filter((d, i) => {
		{
			return i == 6 || i == 13;
		}
	});

	console.log(all1tot1, all2tot2, all3tot3, all4tot4, all5tot5, all6tot6, all7tot7);

	/////////////\\\\\\\\\\\\\\\\\\\\\new

	/////HIRED PRIOR TO 2010s group the data into all curators and curators hired before 2010 
	/////all years.length data  ethcuratorallgrp
	/////five years.length data  ethcuratorgrp curators hired 2010-2015
	
	console.log(ethcuratornotgrp);

	var alltotnot = ethcuratorallgrp.concat(ethcuratornotgrp);

	console.log(alltotnot);

	/////select pairs by race/ethnicity 
	let all1tot1not = alltotnot.filter((d, i) => {
		{
			return i == 0 || i == 7;
		}
	});
	let all2tot2not = alltotnot.filter((d, i) => {
		{
			return i == 1 || i == 8;
		}
	});
	let all3tot3not = alltotnot.filter((d, i) => {
		{
			return i == 2 || i == 9;
		}
	});
	let all4tot4not = alltotnot.filter((d, i) => {
		{
			return i == 3 || i == 10;
		}
	});
	let all5tot5not = alltotnot.filter((d, i) => {
		{
			return i == 4 || i == 11;
		}
	});
	let all6tot6not = alltotnot.filter((d, i) => { 
		{
			return i == 5 || i == 12;
		}
	});
	console.log(all6tot6not)
	let all7tot7not = alltotnot.filter((d, i) => {
		{
			return i == 6 || i == 13;
		}
	});

	console.log(all1tot1not, all2tot2not, all3tot3not, all4tot4not, all5tot5not, all6tot6not, all7tot7not);

	let all1tot1notRev = [all1tot1not[1], all1tot1not[0]]
	console.log(all1tot1notRev)

	let all2tot2notRev = [all2tot2not[1], all2tot2not[0]]
	console.log(all2tot2notRev)

	let all3tot3notRev = [all3tot3not[1], all3tot3not[0]]
	console.log(all3tot3notRev)

	let all4tot4notRev = [all4tot4not[1], all4tot4not[0]]
	console.log(all4tot4notRev)

	let all5tot5notRev = [all5tot5not[1], all5tot5not[0]]
	console.log(all5tot5notRev)

	let all6tot6notRev = [all6tot6not[1], all6tot6not[0]]
	console.log(all6tot6notRev)


	/////====area chart with line for curators 

	/////2010 draw straight line
	
	console.log(alltotnot);

	let line1v2 = [alltotnot[7], alltotnot[7]];

	console.log(line1v2)

	let line2v2 = [alltotnot[8], alltotnot[8]];

	console.log(line2v2)

	let line3v2 = [alltotnot[9], alltotnot[9]];

	console.log(line3v2)

	let line4v2 = [alltotnot[10], alltotnot[10]];

	console.log(line4v2)

	let line5v2 = [alltotnot[11], alltotnot[11]];

	console.log(line5v2)

	let line6v2 = [alltotnot[12], alltotnot[12]];

	console.log(line6v2)


	// ---------------------------- Plot ---------------------------


	var svgheading = d3.select('#svgheading')


	var g = svgheading.append('g') //// append to global g - so now the div svg is appended
		//// multiple svgs you need a new g variable so g1, g2, etc

		.attr("transform", "translate(" + width + "," + margin.top + ")");
	
	var svg1 = d3.select('#svg4')
			.append('svg')
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)

	var g1 = svg1.append('g') 

		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	

	var svg2 = d3.select('#svg5')
			.append('svg')  
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)


	var g2 = svg2.append('g') 

		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	var svg3 = d3.select('#svg6')
		.append('svg') 
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)

	var g3 = svg3.append('g') 

		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var svg4 = d3.select('#svg7')
			.append('svg') ////then append an svg 
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)

	var g4 = svg4.append('g') 

		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	

	var svg5 = d3.select('#svg8')
		.append('svg')
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)

	var g5 = svg5.append('g')

		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	

	var svg6 = d3.select('#svg9')
		.append('svg') ////then append an svg 
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)

	var g6 = svg6.append('g')

		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	let headingmult = g.append('g') //// append text to global
		.attr("class", "svgheading")
		.append('text')
			.style("fill", "#f5f4f9")
	// .text('New York City Department of Cultural Affairs Grantees: Paid Curators')
		 .attr('x', margin.right*2)
			.attr('y', 2)
			.style('font-size', '1.35em');
		
	let headingmult2 = g.append('g') //// append text to global
		.attr("class", "svgheading2")
		.append('text')
			.style("fill", "#f5f4f9")
			.text('Curators by Race and Ethnicity, Hiring Before and After 2010')
			.attr('x', margin.right)
			.attr('y', 4)
			.style('font-size', '1.6em');
		
	let headingmult3 = g.append('g') //// append text to global
		.attr("class", "curatortext")
		.append('text')
			// .style("fill", "yellow")
			.style("fill", "#f5f4f9")
			// .text('Curators Hired Before and After 2010')
			.attr('x', margin.right*2.2)
			.attr('y', 12)
			.style('font-size', '1.9em');	
		 

	// The number of datapoints for paired lines
	var n = 2;


	var xScale = d3.scaleLinear()
		.domain([0, n - 1])
		.range([0, width]); //////only use width here

	// console.log(max)
	var yScale = d3.scaleLinear()
		.domain([0 - 18, 280]) ///adds some height to axes
		.range([height, 0]);

/////draw pairs of lines by race/ethnicity

	var line = d3.line()
		.x(function (d, i) {
			console.log(xScale(i))
			return xScale(i);
		})
		.y(function (d, i) {
			console.log(d)
			// return height-(yScale(d)); 
			return yScale(d);
		});


	var area1 = d3.area() //////can use this twice just call in each of the 2 lines
		.x(function (d, i) { 
			// console.log(xScale(i))
			return xScale(i);
		})
		.y1(function (d, i) {
			// console.log(d)
			// return height-(yScale(d)); 
			return yScale(d);
		})
		.y0(yScale(0));


	var arealarger = d3.area() //////for transparent area mousehover for smaller areas
		.x(function (d, i) { 
			// console.log(xScale(i))
			return xScale(i);
		})
		.y1(function (d, i) {
			// console.log(d)
			return height-(yScale(d)/4); 
			// return yScale(d);
		})
		.y0(yScale(0));
		
		
	///////race/ethnicity ////American Indian - line1 
	////AIAN and NHPI
	/////line at top showing increase
	
	console.log(all1tot1notRev)
	let line1 = g1.append("path")
		.datum(all1tot1notRev)
		.attr("class", "linemult") 
		.attr('d', function (d, i) {
			return line(d, i) //// line generator  
		})
	

	let line1_area = g1.append("path")
		.datum(all1tot1notRev)
		.attr("class", "areayellow")
		.attr("opacity", 0.8)
		.attr('d', area1(all1tot1notRev))


	console.log(line1v2)


	/////line at top of area - for area see below
	let line1_2 = g1.append("path")
		.datum(line1v2) /////use the new array with the same 2 numbers
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke-dasharray', '4')
		.attr('stroke', '#a557fc')
		.attr('stroke-width', 1)
		

	/////area from y to parallel line   			
	let line1_2area = g1.append("path")
		.datum(line1v2) /////use the new array with the same 2 numbers
		.attr("fill-opacity", "0.5")
		.attr("class", "area1")
		.attr("opacity", 0.6)
		.attr('d', area1(line1v2)) /////use area 1
	
		
		let line1_2areatransparent = g1.append("path")
		.datum(line1v2) /////use the new array with the same 2 numbers
		.attr("opacity", 0)
		.attr("class", "areatransparent")
		.attr('d', arealarger(line1v2)) /////use area 1
			.on('mouseenter', function (d) {
				console.log('hover');
				console.log(d)
				ytext1title1.text('2 total; ' + d[0] + ' prior to 2010')
			})
			.on('mouseout', function (d) {
				console.log(d)
				ytext1title1.text((d) => { return "curators"; })
					.attr("class", "titlenumber");
			});
	///////////////////

	let yAxis1 = g1.append("g") // just append axis to global space
		.attr("class", "yaxisl") /////note css, left axis is hidden at present
		.style("stroke-width", 0.02)
		.style('opacity', 0.8)
		.call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
			.tickSize(3)
			.ticks("") ///takes out numbers on lh axis
		);

	let yaxisRight1 = g1.append("g")
		.attr("class", "yaxismult")
		.style("fill", "none")
		.style("color", "#ffffff")
		.attr("transform", `translate(${width}, 0 )`)
		.call(d3.axisRight(yScale) ///.above move the axis to place that the chart ends - within the margins
			.tickSize(3)
			.ticks(4)
		);
		
	let ytext1titlenumber = g1.append('text')
		.attr("class", "axislabel")
		.attr("text-anchor", "right")
		.attr("x",  width + margin.right)
		.attr("y", height/1.1)
		.text('2 total');

	let ytext1 = g1.append("text")
		.attr("class", "axislabel")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.attr("y", width + margin.right/1.8)
		.attr("x", 0 - (height / 1.16))
		.style("fill", "#FFD700")
		.text('0 to 2')
	
	
	let ytext1title = g1.append('text')
		.attr("class", "titlemult")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 2)
		.attr("x", -margin.right/4)
		.text('American Indian or Alaskan Native &')
	
	let ytext1title2 = g1.append('text')
		.attr("class", "titlemult")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 3.3)
		.attr("x", -margin.right/4)
		.text('Native Hawaiian or Pacific Islander')

	let ytext1title1 = g1.append('text')
		.attr("class", "titlenumber")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 12)
		.attr("x", -margin.right/4)
		.text('curators');
		

		
	/////////\\\\\\\\\\\\\\=================

	// ///////race/ethnicity Asian - 2
	// /////line at top showing increase
	console.log(all2tot2notRev)
	let line2 = g2.append("path")
		.datum(all2tot2notRev)
		.attr("class", "linemult") // Assign a class for styling
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke', 'yellow')
		.attr("opacity", 0.8)
		.attr('stroke-width', 1)
	

	let line2_area = g2.append("path")
		// .append("#svg2")
		.datum(all2tot2notRev)
		.attr("class", "areayellow")
		.attr("opacity", 0.6)
		.attr('d', area1(all2tot2notRev))

		
	let line2_areatransparent = g2.append("path")
		.datum(all2tot2notRev)
		.attr("class", "areatransparent")
		.attr("opacity", 0)
		.attr('d', arealarger(all2tot2notRev))
			.on('mouseenter', function (d) {
				console.log('hover');
				console.log(d)
				ytext2title1.text('23 total; ' + d[0] + ' prior to 2010')
			})
			.on('mouseout', function (d) {
				console.log(d)
				ytext2title1.text((d) => { return "curators"; })
					.attr("class", "titlenumber");
			});

	console.log(line2v2)

	// /////line at top of area - for area see below
	let line2_2 = g2.append("path")
		.datum(line2v2) /////use the new array with the same 2 numbers
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke-dasharray', '4')
		.attr('stroke', '#a557fc')
		.attr('stroke-width', 1);

	/////area from y to parallel line   			
	let line2_2area = g2.append("path")
		.datum(line2v2) /////use the new array with the same 2 numbers
		.attr("fill-opacity", "0.5")
		.attr("class", "area1")
		.attr('d', area1(line2v2)) /////use area 1
		
	///////////////////

	let yAxis2 = g2.append("g") // just append axis to global space
		.attr("class", "yaxisl")
		.style("stroke-width", 0.02)
		.style('opacity', 0.8)
		.call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
			.tickSize(3)
			.ticks("") ///takes out numbers on lh axis
		);

	let yaxisRight2 = g2.append("g")
		.attr("class", "yaxismult")
		.style("fill", "none")
		.style("color", "#ffffff")
		.attr("transform", `translate(${width}, 0 )`)
		.call(d3.axisRight(yScale) ///.above move the axis to place that the chart ends - within the margins
			.tickSize(3)
			.ticks(4)
		);

	let ytext2 = g2.append("text")
		.attr("class", "axislabel")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.attr("y", width + margin.right/1.8)
		.attr("x", 0 - (height / 1.2))
		.style("fill", "#FFD700")
		.text('12 to 23')
		

	let ytext2title = g2.append('text')
		.attr("class", "titlemult")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 3.3)
		.attr("x", -margin.right/4)
		.text('Asian');

	let ytext2title1 = g2.append('text')
		.attr("class", "titlenumber")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 12)
		.attr("x", -margin.right/4)
		.text('curators');
		
	// let ytext2titlenumber = g2.append('text')
	// 	.attr("class", "titlenumber2010")
	// 	.attr("text-anchor", "right")
	// 	.attr("y", margin.top/10 )
	// 	.attr("x", -margin.right/4)
	// 	.text('23 total, 12 prior to 2010');

	/////////\\\\\\\\\\\\\\=================


	// ///////race/ethnicity Black or African American - 3
	// /////line at top showing increase
	console.log(all3tot3notRev)
	let line3 = g3.append("path")
		.datum(all3tot3notRev)
		.attr("class", "linemult") // Assign a class for styling
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke', 'yellow')
		.attr("opacity", 0.8)
		.attr('stroke-width', 1)
		

	let line3_area = g3.append("path")
		.datum(all3tot3notRev)
		.attr("class", "areayellow")
		.attr("opacity", 0.6)
		.attr("opacity", 0.4)
		// .attr("fill", "yellow")
		.attr('d', area1(all3tot3notRev))


	console.log(line3v2)

	// /////line at top of area - for area see below
	let line3_2 = g3.append("path")
		.datum(line3v2) /////use the new array with the same 2 numbers
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke-dasharray', '4')
		.attr('stroke', '#a557fc')
		.attr('stroke-width', 1);

	/////area from y to parallel line   			
	let line3_2area = g3.append("path")
		.datum(line3v2) /////use the new array with the same 2 numbers
		.attr("fill-opacity", "0.5")
		.attr("class", "area1")
		.attr('d', area1(line3v2)) /////use area 1
		
		
		let line3_2areatransparent = g3.append("path")
		.datum(line3v2) /////use the new array with the same 2 numbers
		.attr("opacity", 0)
		.attr("class", "areatransparent")
		.attr('d', arealarger(line3v2)) /////use area 1
				.on('mouseenter', function (d) {
					console.log('hover');
					console.log(d)
					ytext3title1.text('5 total; ' + d[0] + ' prior to 2010')
				})
				.on('mouseout', function (d) {
					console.log(d)
					ytext3title1.text((d) => { return "curators"; })
						.attr("class", "titlenumber");
				});
	///////////////////

	let yAxis3 = g3.append("g") // just append axis to global space
		.attr("class", "yaxisl")
		.style("stroke-width", 0.02)
		.style('opacity', 0.8)
		.call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
			.tickSize(3)
			.ticks("") ///takes out numbers on lh axis
		);

	let yaxisRight3 = g3.append("g")
			.attr("class", "yaxismult")
			.style("fill", "none")
			.style("color", "#ffffff")
			.attr("transform", `translate(${width}, 0 )`)
			.call(d3.axisRight(yScale) ///.above move the axis to place that the chart ends - within the margins
			.tickSize(3)
			.ticks(4)
		);

	let ytext3 = g3.append("text")
		.attr("class", "axislabel")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.attr("y", width + margin.right/1.8)
		.attr("x", 0 - (height / 1.16))
		.style("fill", "#FFD700")
		.text('3 to 5')

	let ytext3title = g3.append('text')
		.attr("class", "titlemult")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 3.3)
		.attr("x", -margin.right/4)
		.text('Black or African American');

	let ytext3title1 = g3.append('text')
		.attr("class", "titlenumber")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 12)
		.attr("x", -margin.right/4)
		.text('curators');
	


	// ///////race/ethnicity Hispanic - 4
	// /////line at top showing increase
	console.log(all4tot4notRev)
	let line4 = g4.append("path")
		// .append("#svg4")
		.datum(all4tot4notRev)
		.attr("class", "linemult") // Assign a class for styling
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke', 'yellow')
		.attr("opacity", 0.8)
		.attr('stroke-width', 1)
		

	let line4_area = g4.append("path")
		.datum(all4tot4notRev)
		.attr("class", "areayellow")
		.attr("opacity", 0.6)
		// .attr("fill", "yellow")
		.attr('d', area1(all4tot4notRev))
		
	let line4_areatransparent = g4.append("path")
		.datum(all4tot4notRev)
			.attr("class", "areatransparent")
			.attr("opacity", 0)
			.attr('d', arealarger(all4tot4notRev))
				.on('mouseenter', function (d) {
					console.log('hover');
					console.log(d)
					ytext4title1.text('14 total; ' + d[0] + ' prior to 2010')
				})
				.on('mouseout', function (d) {
					console.log(d)
					ytext4title1.text((d) => { return "curators"; })
						.attr("class", "titlenumber");
				});


	// /////line at top of area - for area see below
	let line4_2 = g4.append("path")
		.datum(line4v2) /////use the new array with the same 2 numbers
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke-dasharray', '4')
		.attr('stroke', '#a557fc')
		.attr('stroke-width', 1);

	/////area from y to parallel line   			
	let line4_2area = g4.append("path")
		.datum(line4v2) /////use the new array with the same 2 numbers
		.attr("opacity", 0.5)
		.attr("class", "area1")
		.attr('d', area1(line4v2)) /////use area 1
	
	// ///////////////////

	let yAxis4 = g4.append("g") // just append axis to global space
		.attr("class", "yaxisl")
		.style("stroke-width", 0.02)
		.style('opacity', 0.8)
		.call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
			.tickSize(3)
			.ticks("") ///takes out numbers on lh axis
		);

	let yaxisRight4 = g4.append("g")
			.attr("class", "yaxismult")
			.style("fill", "none")
			.style("color", "#ffffff")
			.attr("transform", `translate(${width}, 0 )`)
			.call(d3.axisRight(yScale) ///.above move the axis to place that the chart ends - within the margins
			.tickSize(3)
			.ticks(4)
		);

	let ytext4 = g4.append("text")
		.attr("class", "axislabel")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.attr("y", width + margin.right/1.8)
		.attr("x", 0 - (height / 1.17))
		.style("fill", "#FFD700")
		.text('8 to 14')

	let ytext4title = g4.append('text')
		.attr("class", "titlemult")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 3.3)
		.attr("x", -margin.right/4)
		.text('Hispanic');

	let ytext4title1 = g4.append('text')
		.attr("class", "titlenumber")
		.attr("text-anchor", "right")
		.attr("y", -margin.top /12)
		.attr("x", -margin.right/4)
		.text('curators');
		
	// let ytext4titlenumber = g4.append('text')
	// 	.attr("class", "titlenumber2010")
	// 	.attr("text-anchor", "right")
	// 	.attr("y", margin.top/10 )
	// 	.attr("x", -margin.right/4)
	// 	.text('14 total, 8 prior to 2010');
	
	
	console.log(line3v2)

	// ///////race/ethnicity two or more races - 5
	// /////line at top showing increase
	console.log(all5tot5notRev)
	let line5 = g5.append("path")
		.datum(all5tot5notRev)
		.attr("class", "linemult") // Assign a class for styling
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke', 'yellow')
		.attr("opacity", 0.8)
		.attr('stroke-width', 1)
	

	let line5_area = g5.append("path")
		.datum(all5tot5notRev)
		.attr("class", "areayellow")
		.attr("opacity", 0.6)
		.attr('d', area1(all5tot5notRev))
		
	let line5_areatransparent = g5.append("path")
		.datum(line5v2) /////use the new array with the same 2 numbers
		.attr("opacity", 0)
		.attr("class", "areatransparent")
		.attr('d', arealarger(line5v2)) /////use area 1
			.on('mouseenter', function (d) {
				console.log('hover');
				console.log(d)
				ytext5title1.text('4 total; ' + d[0] + ' prior to 2010')
			})
			.on('mouseout', function (d) {
				console.log(d)
				ytext5title1.text((d) => { return "curators"; })
					.attr("class", "titlenumber");
			});
			
	console.log(line5v2)
	console.log(line6v2)
	
	// /////line at top of area - for area see below
	let line5_2 = g5.append("path")
		.datum(line5v2) /////use the new array with the same 2 numbers
			.attr('d', function (d, i) {
				return line(d, i) ////\\here add function in the line generator taking in the 
			})
			.attr('stroke-dasharray', '4')
			.attr('stroke', '#a557fc')
			.attr('stroke-width', 1)
	

	/////area from y to parallel line   			
	let line5_2area = g5.append("path")
		.datum(line6v2) /////use the new array with the same 2 numbers
			.attr("fill-opacity", "0.5")
			.attr("class", "area1")
			// .attr("fill", "orange")
			.attr('d', area1(line5v2)) /////use area 1
		

	let yAxis5 = g5.append("g") // just append axis to global space
		.attr("class", "yaxisl")
		.style("stroke-width", 0.02)
		.style('opacity', 0.8)
		.call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
			.tickSize(3)
			.ticks("") ///takes out numbers on lh axis
		);

	let yaxisRight5 = g5.append("g")
			.attr("class", "yaxismult")
			.style("fill", "none")
			.style("color", "#ffffff")
			.attr("transform", `translate(${width}, 0 )`)
			.call(d3.axisRight(yScale) ///.above move the axis to place that the chart ends - within the margins
				.tickSize(3)
			.ticks(4)
		);

	let ytext5 = g5.append("text")
		.attr("class", "axislabel")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.attr("y", width + margin.right/1.8)
		.attr("x", 0 - (height / 1.15))
		.style("fill", "#FFD700")
		.text('0 to 4')

	let ytext5title = g5.append('text')
		.attr("class", "titlemult")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 3.3)
		.attr("x", -margin.right/4)
		.text('Two or more races');

	let ytext5title1 = g5.append('text')
		.attr("class", "titlenumber")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 8)
		.attr("x", -margin.right/4)
		.text('curators'); ////mouseenter

	// /////\\\\\\\\\\\\\
	// ///////race/ethnicity white - 6
	// /////line at top showing increase
	// console.log(all6tot6notRev)
	let line6 = g6.append("path")
		.datum(all6tot6notRev)
		.attr("class", "linemult") // Assign a class for styling
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke', 'yellow')
		.attr("opacity", 0.8)
		.attr('stroke-width', 1)
		

	let line6_area = g6.append("path")
		.datum(all6tot6notRev)
		.attr("class", "areayellow")
		.attr("opacity", 0.6)
		// .attr("fill", "yellow")
		.attr('d', area1(all6tot6notRev))
		.on('mouseenter', function (d) {
			console.log('hover');
			console.log(d)
			ytext6title1.text(d[1] + ' total; ' + d[0] + ' prior to 2010')
		})
		.on('mouseout', function (d) {
			console.log(d)
			ytext6title1.text((d) => { return "curators"; })
				.attr("class", "titlenumber");
		});


	// /////line at top of area - for area see below
	let line6_2 = g6.append("path")
		.datum(line6v2) /////use the new array with the same 2 numbers
		.attr('d', function (d, i) {
			return line(d, i) ////\\here add function in the line generator taking in the 
		})
		.attr('stroke-dasharray', '4')
		.attr('stroke', '#a557fc')
		.attr('stroke-width', 1)


	/////area from y to parallel line   			
	let line6_2area = g6.append("path")
		.datum(line6v2) /////use the new array with the same 2 numbers
		.attr("fill-opacity", "0.5")
		.attr("class", "area1")
		.attr('d', area1(line6v2)) /////use area 1
			.on('mouseenter', function (d) {
				console.log('hover and ease');
				console.log(d)
				ytext6title1.text('270 total; ' + d[0] + ' prior to 2010')
			})
			.on('mouseout', function (d) {
				console.log(d)
				ytext6title1.text((d) => { return "curators"; })
					.attr("class", "titlenumber");
			});

	let yAxis6 = g6.append("g") // just append axis to global space
		.attr("class", "yaxisl")
		.style("stroke-width", 0.02)
		.style('opacity', 0.8)
		.call(d3.axisLeft(yScale) //call axisLeft to use yScale for axis ticks and scale
			.tickSize(3)
			.ticks("") ///takes out numbers on lh axis
		);

	let yaxisRight6 = g6.append("g")
			.attr("class", "yaxismult")
			.style("fill", "none")
			.style("color", "#ffffff")
			.attr("transform", `translate(${width}, 0 )`)
			.call(d3.axisRight(yScale) ///.above move the axis to place that the chart ends - within the margins
				.tickSize(3)
				.ticks(4)
			);

	let ytext6 = g6.append("text")
		.attr("class", "axislabel")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.attr("y", width + margin.right/1.8)
		.attr("x", 0 - (height / 1.25))
		.style("fill", "#FFD700")
		.text('163 to 270')

	let ytext6title = g6.append('text')
		.attr("class", "titlemult")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 3.3)
		.attr("x", -margin.right/4)
		.text('White');

	let ytext6title1 = g6.append('text')
		.attr("class", "titlenumber")
		.attr("text-anchor", "right")
		.attr("y", -margin.top / 12)
		.attr("x", -margin.right/4)
		.text('curators'); ////mouseenter event on area
		
	let ytext6data = g6.append("text")
		.attr("class", "axislabel")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.attr("y", width + margin.right)
		.attr("x", 0 - (height / 1.69))
		// .style("fill", "#FFD700")
		.style("fill", "#f5fcf7")
		.style("font-size","0.85em")
		.text('Data: NADAC, ICPSR 36606')

};


	// /////no one declined to state so removing this
	// //let line7 = g.append("path")
	// //   			.datum(all7tot7)
	// //   			// .attr("class", "line") // Assign a class for styling
	// //   			.attr('d', function(d,i) {
	// //   				return line(d,i)    ////\\here add function in the line generator taking in the 
	// //   			})
	// //   			.attr('fill', 'none')
	// //   			.attr('stroke', 'red')
	// //   			.attr('stroke-width', 1.5)
	// //   			.attr('shape-rendering', 'crispEdges')
	// //   				.on('mouseenter', function(d){
	// //                       console.log('hover');
	// //                       console.log(d)
	// //                       headingmult.text(d[0]  + ' curators who declined to state race/ethnicity of which '+ d[1] + ' were hired since 2010'); 
	// //                   });
	// //console.log(line7)


