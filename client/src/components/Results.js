
import React from 'react';
import Chart from './Chart';
import ChartKeys from './ChartKeys'
import './Chart.css'
export default function Results(props){

return(
  <div className="results-container">
    <div className="results">
      <h1 id="artist-name"> {props.artistName} </h1>
      <Chart height="500" width="960" benchmarkMean={props.benchmarkMean} />

      <ChartKeys social={props.social}/>

    </div>
  </div>
)
}
