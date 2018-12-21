
import React from 'react';
import Chart from './Chart';
import ChartKeys from './ChartKeys'
import './Chart.css'
export default function Results(props){

return(
  <div className="results-container">
    <div className="results">
      <Chart height="500" width="960" benchmarkMean={props.benchmarkMean} />

      <ChartKeys social={props.social}/>

      <p id="foot-note"> Numbers represent mean of six months of data collections. </p>

    </div>
  </div>
)
}
