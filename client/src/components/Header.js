import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';


export default function Header(props){
  return(

    <div id="header">
      <div id="nbs-icon"> </div>
      <nav>
        <SearchBar handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
      </nav>
    </div>
    )
}
