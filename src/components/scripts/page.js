import React from 'react';

export default function Page(props) {
  const prevButton = (
    <button 
      name = 'prev-page'
      onClick= {() => props.prevPage()}
      >Previous Page</button>
    )
  

  return (
    <div className = 'page-button'>
      {props.isFirstPage ? null : prevButton}
    
    <button 
      name = 'next-page'
      onClick= {() => props.nextPage()}
      >Next Page</button>

    </div>
  )
}