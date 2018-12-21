/// Resources:
// https://bl.ocks.org/alokkshukla/5306fdf5684f85d5b768d2bc02013b09

import React from 'react';
import * as d3 from 'd3';

class Chart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.draw(this.svg, this.props)
  }
  componentDidUpdate(nextProps, nextState) {
    this.draw(this.svg, this.props);
    return false;
  }

  draw(elem, props) {
    const {
      height,
      width,
      benchmarkMean
      } = props

			const xScale = d3.scaleBand()
							.domain(d3.range(benchmarkMean.length))
							.range([0, width])
							.paddingInner(0.08);

			const yScale = d3.scaleLinear()
							.domain([0, d3.max(benchmarkMean)])
							.range([0, height]);

      // Select  SVG element
    const svg = d3.select(elem);

			//Create bars
	  const bars = svg.selectAll("rect").data(benchmarkMean);

    this.styleBars(
      bars.empty()
      ?
        bars.enter().append("rect")
        // bars.transition(),
        // yScale,
        // height
        //
      :
        bars.transition(),
        xScale,
        yScale,
        height
    );

    //Create labels
    const labels = svg.selectAll("text").data(benchmarkMean);

    this.styleLabels(
      labels.empty()
      ?
        labels.enter().append("text")
      :
        labels.transition(),
        xScale,
        yScale,
        height
    );
  }

  styleBars(bars, xScale, yScale, height) {
    bars.attr("x", function(d, i) {
      	return xScale(i);
    })
    .attr("y", function(d) {
       return height - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) {
       return yScale(d);
    })
    .attr("fill", function(d) {
     return "rgb(0, 0, " + Math.round(d * 10) + ")";
    })

  }

  styleLabels(labels, xScale, yScale, height){
    labels.text(function(d){
      return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
       return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr("y", function(d) {
        if(yScale(d)<=15) {
            return height - yScale(d) - 2;
        }else{
            return height - yScale(d) + 14;
        }
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", function (d) {
      if(yScale(d)<=15){
          return "black"
      } else {
          return "white";
      }
    });
}






 //         //On click, update with new data
 //          d3.select("#search-bar")
 //              .on("click", function() {
	// 			//pass in props
 //                  yScale.domain([0, d3.max(data)]);
 //
 //                  //Update all rects
 //                  svg.selectAll("rect")
 //                      .data(data)
 //          .transition()
 //                      .delay(function(d, i) {
 //                          return i * 100;
 //                      })
 //          .duration(1700)
 //          .ease(d3.easeCubic)
 //                      .attr("y", function(d) {
 //                          return height - yScale(d);
 //                      })
 //                      .attr("height", function(d) {
 //                          return yScale(d);
 //                      })
 //                      .attr("fill", function(d) {
 //                          return "rgb(0,0," + Math.round(d * 10) + ")";
 //                      });
 //                    });
 //
 //
 //                    //Update labels
 //                svg.selectAll("text")
 //                    .data(data) //add props
 //                    .transition()								// <-- Now with
 //                    .delay(function(d, i) {
 //                        return i * 100;
 //                    })
 //                    .duration(1000)
 //      						  .ease(d3.easeCubic)
 //      							.text(function(d) {
 //                        return d;
 //                    })
 //                    .attr("x", function(d, i) {
 //                        return xScale(i) + xScale.bandwidth() / 2;
 //                    })
 //                    .attr("y", function(d) {
 //                        if(yScale(d)<=15) {
 //                            return height - yScale(d) - 2;  //h = impressions
 //                        }else{
 //                            return height - yScale(d) + 14;
 //      		}
 //                    })
 //                    .attr("fill", function (d) {
 //                        if(yScale(d)<=15){
 //                            return "black"
 //                        }else{
 //                            return "white";
 //                        }
 //                    });
 //
 //
 //
 //
 // }

  render() {
    return  <svg
        ref={(elem) => { this.svg = elem }}
        height={this.props.height}
        width={this.props.width}
      />
  }
}

export default Chart;
