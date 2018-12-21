import React from 'react';
import './Chart.css'

export default function ChartKeys(props){
// props.social

  return(
    <div className="chart-key-container">
    {
      props.social.map(name => (
      <h1 key={name} id={`chart-key${props.social.indexOf(name) +1 }`}className="chart-key"> {name} </h1>))
    }
    </div>
  )
}
