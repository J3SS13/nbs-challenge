import React from 'react';

export default function ChartKeys(props){
// props.social

  return(
    <div className="chart-key-container">
    {
      props.social.map(name => (
      <h1 key={name} id={name} className="chart-key"> {name} </h1>))
    }
    </div>
  )
}
