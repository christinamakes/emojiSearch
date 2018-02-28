import React from 'react';

export default function Results(props) {
  const parseEmojis = props.emojis.slice(0,20).map((emoji, index) => 
    <li key={index}>
      <p>{emoji.symbol} {emoji.title}</p>
    </li>
  )
  return (
    <div className = 'results'>
      <ul className = 'emoji-list'>
        {parseEmojis}
      </ul>
    </div>
  );
}