import React, { Component } from 'react';
import BooksReadIndex from "./booksReadIndex"
import backgroundImage from './accardi-marbling-3.jpg'
// import BooksToReadIndex from "./booksToReadIndex"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hi Test</h1>
        <BooksReadIndex />
        {/* <div>
          <img src={ backgroundImage } alt='background-image' />
        </div> */}
        {/* <BooksToReadIndex /> */}
      </div>
    );
  } 
}
