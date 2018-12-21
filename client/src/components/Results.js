
import React from 'react';
import Chart from './Chart';


export default function Results(props){

return(
  <div className="results">
    <h1> {props.artistName} </h1>
    <Chart height="500" width="960" benchmarkMean={props.benchmarkMean}/>
  </div>
)
}
