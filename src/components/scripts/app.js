import React from 'react';
import SearchBox from './searchBox';
import Results from './results';
import EmojiList from '../../../src/emoji.json'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      emojis: EmojiList,
      filter: ''
    }
  }
  
  filterEmoji(filterValue) {
    this.setState({filter: filterValue});
    this.setState({emojis: EmojiList.filter(emoji => {
      return emoji.keywords.toUpperCase().includes(filterValue.toUpperCase());
    })}
    )}; 

  render() {
    return (
      <div className = 'app'>
        <SearchBox 
          onSearch={ (value) => {this.filterEmoji(value)} }
          value={this.state.filter}
          />
        <Results 
          emojis = {this.state.emojis} />
      </div>
    )
  }
}