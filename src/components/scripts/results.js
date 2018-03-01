import React from 'react';

export default function Results(props) {
  const parseEmojis = props.emojis.slice(props.startChar, props.endChar).map((emoji, index) => 
    <li key={index}>
      <p>{emoji.char} {emoji.name} {emoji.code}</p>
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