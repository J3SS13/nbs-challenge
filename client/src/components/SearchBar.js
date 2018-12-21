import React from 'react';
import './SearchBar.css';
export default function SearchBar(props){

  return(
    <div className='search'>
      <form  onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='artist'
          placeholder= 'Search for Artist'
          value={props.artist}
          onChange={props.handleChange}
        />
        <button type='submit' value='submit'> Search </button>

      </form>
    </div>
  )
}
