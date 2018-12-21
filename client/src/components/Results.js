
import React from 'react';
import Chart from './Chart';
import ChartKeys from './ChartKeys'
import './Results.css'
export default function Results(props){

return(
  <div className="results-container">
    <div className="results">
    <div id="page-title">
      <h2> Social Media </h2>
    </div>
    <h3> {props.artistName} </h3>
      <div id="chart">
        <Chart height="450" width="864" benchmarkMean={props.benchmarkMean} />

        <ChartKeys social={props.social}/>

        <p id="foot-note"> Numbers represent mean of six months of data collections. </p>
      </div>
    </div>
  </div>
)
}
