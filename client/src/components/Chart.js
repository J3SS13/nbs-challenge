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
      :
        bars.transition().delay(function(d, i) {
            return i * 100;
        })
        .duration(1500)
        .ease(d3.easeCubic),
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
        labels.transition().delay(function(d, i) {
            return i * 100;
        })
        .duration(1500)
        .ease(d3.easeCubic),
        xScale,
        yScale,
        height

    );
  }

  //Style bars
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
    .attr("fill", function(d, i) {
     return "rgb(40, 220, " + Math.round(d * 20) + ")";
    })
  }

  //Style Labels
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

  render() {
    return  <svg
        ref={(elem) => { this.svg = elem }}
        height={this.props.height}
        width={this.props.width}
      />
  }
}

export default Chart;
