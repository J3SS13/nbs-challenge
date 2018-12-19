/// Resources:
// https://bl.ocks.org/alokkshukla/5306fdf5684f85d5b768d2bc02013b09

import React from 'react';
import * as d3 from 'd3';

class Chart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.draw()
  }
  componentDidUpdate() {
    this.draw()
  }

  draw() {
    const w = 960;
		const h = 500;
		const data = [ 5, 10, 13, 19, 21, 25];

			const xScale = d3.scaleBand()
							.domain(d3.range(data.length))
							.rangeRound([0, w])
							.padding(0.08);

			const yScale = d3.scaleLinear()
							.domain([0, d3.max(data)])
							.range([50, h]);

			//Create SVG element
			const svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			//Create bars
			svg.selectAll("rect")
			   .data(data)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return xScale(i);
			   })
			   .attr("y", function(d) {
			   		return h - yScale(d);
			   })
			   .attr("width", xScale.bandwidth())
			   .attr("height", function(d) {
			   		return yScale(d);
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + Math.round(d * 10) + ")";
			   });

         //On click, update with new data
          d3.select("button")
              .on("click", function() {

                  //New values for data
                  const numValues = data.length;						//pass in props
                  data = [];  						 				//Initialize empty array
                  const maxValue = 100;
                  for (const i = 0; i < numValues; i++) {				//Loop numValues times
                      const newNumber = Math.floor(Math.random() * maxValue); //New random integer (0-24)
                      data.push(newNumber);			 			//Add new number to array
                  }

                  yScale.domain([0, d3.max(data)]);

                  //Update all rects
                  svg.selectAll("rect")
                      .data(data)
          .transition()
                      .delay(function(d, i) {
                          return i * 100;
                      })
          .duration(1700)
          .ease(d3.easeCubic)
                      .attr("y", function(d) {
                          return h - yScale(d);
                      })
                      .attr("height", function(d) {
                          return yScale(d);
                      })
                      .attr("fill", function(d) {
                          return "rgb(0,0," + Math.round(d * 10) + ")";
                      });
                    });


   // const svg = d3.select("body")
   // .append("svg")
   // .attr("width", w)
   // .attr("height", h)
   // .style("margin-left", 100);
   //
   // svg.selectAll("rect")
   //   .data(data)
   //   .enter()
   //   .append("rect")
   //   .attr("x", (d, i) => i * 70)
   //   .attr("y", (d, i) => h - 10 * d)
   //   .attr("width", 65)
   //   .attr("height", (d, i) => d * 10)
   //   .attr("fill", "green")
 }

  render() {
    return <svg ref={(node) => { this.svg = node; }}/>
  }
}

export default Chart;
