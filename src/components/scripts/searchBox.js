import React from 'react';
import '../styles/searchBoxStyle.css';

export default function searchBox(props) {
  return (
    <div className = 'search-box'>
      <form className = 'search-form' onSubmit={e => {e.preventDefault()}}>
        <label for='input'>Search Emojis</label>
        <input 
          type = 'text' 
          name = 'input'
          onChange={e => {props.onSearch(e.target.value)}} 
          />
        <button type = 'submit'>Search</button>
      </form>
    </div>
  );
}