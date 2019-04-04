
//js not support to include other js file
var theData = [ 1, 2, 3 ];

var p = d3.select("body").selectAll("p")
  .data(theData)
  .enter()
  .append("p")
  .text(function (d, i) { 
  	return "i = " + i + ", d = " + d;
  });



// Creating SVG Elements Based on Data
var circleRadii = [40, 20, 10];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);


var circles = svgContainer.selectAll("circle")
                          .data(circleRadii)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", 50)
                       .attr("cy", 50)
                       .attr("r", function (d) { return d; })
                       .style("fill", function (d) {
                       	if(d == 40) return "green";
                       	else if(d == 20) return "purple";
                       	else return "red";
                       });


//Using the SVG Coordinate Space
var spaceCircles = [30, 70, 110];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(spaceCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d; })
                       .attr("cy", function (d) { return d; })
                       .attr("r", 20 );

var fillColors = circleAttributes
				.style("fill", function (d) {
		                       	if(d == 30) return "green";
		                       	else if(d == 70) return "purple";
		                       	else return "red";
		                       });


//Data Structures D3.js Accepts
var secretAgent = {
  "name":"James Bond",
  "drink":"dry martini - shaken, not stirred",
  "number":"007"
};


var jsonCircles = [
  {
   "x_axis": 30,
   "y_axis": 30,
   "radius": 20,
   "color" : "green"
  }, {
   "x_axis": 70,
   "y_axis": 70,
   "radius": 20,
   "color" : "purple"
  }, {
   "x_axis": 110,
   "y_axis": 100,
   "radius": 20,
   "color" : "red"
}];


//Using JSON to Simplify Code
var jsonCircles = [
  {
   "x_axis": 30,
   "y_axis": 30,
   "radius": 20,
   "color" : "green"
  }, {
   "x_axis": 70,
   "y_axis": 70,
   "radius": 20,
   "color" : "purple"
  }, {
   "x_axis": 110,
   "y_axis": 100,
   "radius": 20,
   "color" : "red"
}];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");
var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });


// SVG Basic Shapes and D3.js

// d3.js contianer is mutually exclusive not overlap.

//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

//Draw the Circle
var circle = svgContainer.append("circle")
                         .attr("cx", 30)
                         .attr("cy", 30)
                         .attr("r", 20)
//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

//Draw the Rectangle
var rectangle = svgContainer.append("rect")
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 50)
                            .attr("height", 100)
//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);



//Draw the Ellipse
var circle = svgContainer.append("ellipse")
                         .attr("cx", 50)
                         .attr("cy", 50)
                         .attr("rx", 25)
                         .attr("ry", 10)


//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)
                                    .attr("border", 1)

//Draw the line
var circle = svgContainer.append("line")
                         .attr("x1", 5)
                         .attr("y1", 5)
                         .attr("x2", 50)
                         .attr("y2", 50)
                         .attr("stroke-width", 2)
                         .attr("stroke", "black");


//SVG Paths and D3.js
/*
<svg width="100" height="100">
  <path d=" M 10 25
            L 10 75
            L 60 75
            L 10 25"
            stroke="red" stroke-width="2" fill="none" />
</svg>
*/
//The data for our line
var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

//This is the accessor function we talked about above

var lineFunction = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; })
  .curve(d3.curveLinear); 

//The SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

//The line SVG Path we draw
var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")



/**Dynamic SVG Coordinate Space**/

// this is static
var jsonRectangles = [
  { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
  { "x_axis": 40, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
  { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 100)
                                    .attr("height", 100);

var rectangles = svgContainer.selectAll("rect")
                             .data(jsonRectangles)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.x_axis; })
                          .attr("y", function (d) { return d.y_axis; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });

// this is dynamic
var jsonRectangles = [
  { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
  { "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
  { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }];

var max_x = 0;
var max_y = 0;

for (var i = 0; i < jsonRectangles.length; i++) {
  var temp_x, temp_y;
  var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
  var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

  if ( temp_x >= max_x ) { max_x = temp_x; }

  if ( temp_y >= max_y ) { max_y = temp_y; }
}

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", max_x)
                                    .attr("height", max_y)

var rectangles = svgContainer.selectAll("rect")
                             .data(jsonRectangles)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.x_axis; })
                          .attr("y", function (d) { return d.y_axis; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });

/**
D3.js Scales
**/

var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];

var newScaledData = [];

var linearScale = d3.scaleLinear()
                   .domain([d3.min(initialScaleData),d3.max(initialScaleData)])
                   .range([0,100]);

for (var i = 0; i < initialScaleData.length; i++) {
  newScaledData[i] = linearScale(initialScaleData[i]);
}

newScaledData;


/**
SVG Group Element and D3.js


	<svg width="200" height="200">
	  <g transform="translate(80,0)">
	    <circle cx="20" cy="20" r="20" fill="green" />
	    <circle cx="70" cy="70" r="20" fill="purple" />
	  </g>
	  <g>
	    <rect x="110" y="110" height="30" width="30" fill="blue" />
	    <rect x="160" y="160" height="30" width="30" fill="red" />
	  </g>
	</svg>
**/

var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];


var rectangleData = [
  { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
  { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];

var svgContainer = d3.select("body").append("svg")
                                     .attr("width",200)
                                     .attr("height",200);

//Add a group to hold the circles
var circleGroup = svgContainer.append("g").attr("transform", "translate(80,0)");

//Add circles to the circleGroup
var circles = circleGroup.selectAll("circle")
                          .data(circleData)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

// * Note * that the rectangles are added to the svgContainer, not the circleGroup
var rectangles = svgContainer.selectAll("rect")
                              .data(rectangleData)
                              .enter()
                              .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.rx; })
                          .attr("y", function (d) { return d.ry; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });

/**
SVG Text Element
<svg width="100" height="100">
			<circle cx="20" cy="20" r="20" fill="green" />
			<circle cx="70" cy="70" r="20" fill="purple" />
			<text x="20" y="20"
				  font-family="sans-serif"
				  font-size="20px"
				  text-anchor="middle"
				  fill="red">Hello!</text>
		    <text x="70" y="70" font-family="sans-serif" font-size="20px" fill="red">Hello!</text>
		</svg>
**/

//Circle Data Set
//Circle Data Set
var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];

//Create the SVG Viewport
var svgContainer = d3.select("body").append("svg")
                                     .attr("width",200)
                                     .attr("height",200);

//Add circles to the svgContainer
var circles = svgContainer.selectAll("circle")
                           .data(circleData)
                           .enter()
                           .append("circle");

//Add the circle attributes
var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

//Add the SVG Text Element to the svgContainer
var text = svgContainer.selectAll("text")
                        .data(circleData)
                        .enter()
                        .append("text");

//Add SVG Text Element Attributes
var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.cy; })
                 .text( function (d) { return "( " + d.cx + ", " + d.cy +" )"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "red");



/**
D3.js Axes
**/

//Create the SVG Viewport selection
var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 400)
                                     .attr("height", 100);

//Create the Scale we will use for the Axis
var axisScale = d3.scaleLinear()
                         .domain([0, 100])
                         .range([0, 400]);

//Create the Axis
var xAxis = d3.axisBottom()
                  .scale(axisScale);

//Create a group Element for the Axis elements and call the xAxis function
var xAxisGroup = svgContainer.append("g")
                              .call(xAxis);














