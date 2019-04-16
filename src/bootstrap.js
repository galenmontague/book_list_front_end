import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './components/app';
import AddBook from './components/addBook'
import BooksToRead from './components/booksToRead'
import DeleteLanding from './components/deleteLanding'
import UpdateLanding from './components/updateLanding'
import ViewBook from './components/viewBook'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
            <Route exact path='/' component={App} />
            <Route path='/add_book' component={AddBook} />
            <Route path='/deleted_book' component={DeleteLanding} />
            <Route path='/update_book' component={UpdateLanding} />
            <Route path='/view_book/:id' component={ViewBook} />
              {/* this is a slug (: means it can change. Use "slug" if it's a string) */}
            {/* <Route path='/books_to_read' component={BooksToRead} /> */}
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
