import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './components/app';
import AddBook from './components/addBook'
import BooksToRead from './components/booksToRead'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add_book">Add Book</NavLink>
            <NavLink to="/books_to_read">Books to Read</NavLink>
          </div>
          <div>
            <Route exact path='/' component={App} />
            <Route path='/add_book' component={AddBook} />
            <Route path='/books_to_read' component={BooksToRead} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
