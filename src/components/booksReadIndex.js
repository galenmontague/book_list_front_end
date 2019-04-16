import React, { Component } from 'react';
import DeleteAction from "./deleteAction";
import { NavLink, Link } from "react-router-dom";

import AddBook from "./addBook"
import UpdateBook from "./updateBook"
import ViewBook from "./viewBook"

export default class BooksReadIndex extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            books: [],
            shown: false,
            book_update_shown: false,
        };

        this.toggle = this.toggle.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)

    }

	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

	toggleUpdate() {
		this.setState({
			book_update_shown: !this.state.book_update_shown
		});
	}

    componentDidMount() {
        fetch ( "https://gm-book-api-practice.herokuapp.com/books", {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({books: data});})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

    render() {

        let shown = {
			display: this.state.shown ? "block" : "none"
        };

        let updateBookShown = {
			display: this.state.update_book_shown ? "block" : "none"
        };
        
        return (
            <div className="homepage-wrapper">
                <div className="title-bar">
                    <h1>FAVORITE<br />BOOKS</h1>
                    <h5>A list of titles both to read and that have been read. Compiled by Galen Montague</h5>
                </div>
                <div className='book-list-wrapper'>
                    <div className="nav">
                        <div className="nav-tab">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </div>
                        <div className="nav-tab">
                            <NavLink to="/" className="nav-link" onClick={this.toggle}>Add Book</NavLink>
                        </div>
                    </div>

                    <div className="books-read-header">
                        <h1>Books Read</h1>
                    </div>
                    
                    <div className="add-book-wrapper">
                        <div style={ shown }>
                            <AddBook />
                        </div>
                    </div>

                    {this.state.books.map((book) => (
                        <div className="book-card-wrapper" key={book[0]}>
                            <div className="book-card-left-column ">
                                <div className="book-info-wrapper">
                                    <div className="book-info-item-wrapper">
                                        <div className="book-item-title">
                                            <p>Book Title</p>
                                        </div>
                                        <div className="book-item-content">
                                            <p>{book[1]}</p>
                                        </div>
                                    </div>
                                    <div className="book-info-item-wrapper">
                                        <div className="book-item-title">
                                            <p>Author</p>
                                        </div>
                                        <div className="book-item-content">
                                            <p>{book[2]}</p>
                                        </div>
                                    </div>
                                    <div className="book-info-item-wrapper">
                                        <div className="book-item-title">
                                            <p>Book Index</p>
                                        </div>
                                        <div className="book-item-content">
                                            <p>{book[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="editing-buttons-wrapper">
                                <div className="editing-button">
                                    <Link to={`/view_book/${book[0]}`} className="link">View Book</Link>
                                </div>
                                <div className="editing-button">
                                    <Link to={`/view_book/${book[0]}`} className="link" onClick={this.toggleUpdate}>Update Book</Link>
                                    {/* TODO - create real link to "Update Book" */}
                                </div>



                                {/* <div className="update-book-wrapper"> */}
                                    {/* <div style={ updateBookShown }> */}
                                        {/* <ViewBook /> */}
                                        {/* <UpdateBook /> */}
                                    {/* </div> */}
                                {/* </div> */}





                                <div className="editing-button">
                                    <DeleteAction id={[book[0]]}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="right-side">
                    </div>
            </div>
        )
    }
}

// this is the basic api call