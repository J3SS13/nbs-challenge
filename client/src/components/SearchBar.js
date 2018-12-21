import React from 'react';

export default function SearchBar(props){

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='artist'
          placeholder= 'Warpaint'
          value={props.artist}
          onChange={props.handleChange}
        />
 <button className='search-bar' type='submit' value='submit'> Search </button>

      </form>
    </div>
  )
}
