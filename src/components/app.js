import React, { Component } from 'react';
import BooksReadIndex from "./booksReadIndex"
import BooksToReadIndex from "./booksToReadIndex"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Galen Montague's Favorite Books</h1>
        <BooksReadIndex />
        <BooksToReadIndex />
      </div>
    );
  }
}
