import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';


export default function Header(props){
  return(

    <div id="header">
      <div id="nbs-icon"> </div>
      <nav>
        <SearchBar handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
        <h2 id="page-title"> Social Media </h2>
        <h3> {props.artistName} </h3>
      </nav>
    </div>
    )
}
