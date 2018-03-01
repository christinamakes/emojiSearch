import React from 'react';
import SearchBox from './searchBox';
import Results from './results';
import Page from './page';
import EmojiList from '../../../src/emoji.json'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      emojis: EmojiList,
      filter: '',
      currentPage: 1,
      emojisPerPage: 10
    }
  }
  
  filterEmoji(filterValue) {
    this.setState({currentPage: 1, 
                filter: filterValue,
                emojis: EmojiList.filter(emoji => {
      return emoji.name.toUpperCase().includes(filterValue.toUpperCase()) ||
              emoji.code.toUpperCase().includes(filterValue.toUpperCase()) ;
    })}
  )}; 


  render() {
    console.log('rendered')
    const { currentPage, emojisPerPage } = this.state;
    const indexOfLastChar= currentPage * emojisPerPage;
    const indexOfFirstChar= indexOfLastChar - emojisPerPage;

    return (
      <div className = 'app'>
        <SearchBox 
          onSearch={ (value) => {this.filterEmoji(value)} }
          value={this.state.filter}
          />
        <Results 
          emojis = {this.state.emojis}
          endChar= { indexOfLastChar }
          startChar= { indexOfFirstChar }
          />
        <Page 
        isFirstPage= {this.state.currentPage === 1}
        nextPage= {() => this.setState({currentPage: this.state.currentPage + 1 })}
        prevPage= {() => this.setState({currentPage: this.state.currentPage - 1 })} />
      </div>
    )
  }
}