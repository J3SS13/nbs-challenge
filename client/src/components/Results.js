import React from 'react';
import Chart from './Chart';


export default function Results(props){

return(
  <div className="results">
    <h1> {props.artistName} </h1>
    <Chart mean={props.mean}/>
  </div>
)
}
