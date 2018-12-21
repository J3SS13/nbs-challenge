import React from 'react';
import SearchBar from './SearchBar';
require('../resources/nbs-icon.jpg');


export default function Header(props){
  return(  <nav>
      <div id="nbs-icon"> </div>
      <h1 id="nbs-title"> Next Big Sound </h1>
      <SearchBar handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
      <h2 id="page-title"> Now playing {props.artist}... </h2>
    </nav>
    )
}
