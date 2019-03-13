import React, { Component } from 'react';


export default class BooksToReadIndex extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            books: []
        }
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
        return (
            <div className='books'>
                <h1>Books to Read</h1>
                {this.state.books.map((book) => (
                    <div key={book[0]}>
                        <br/>
                        <h2>Book Index: {book[0]}</h2>
                        <h2>Book Title: {book[1]}</h2>
                        <h3>Author: {book[2]}</h3>
                        <br/>
                    </div>
                ))}
            </div>
        )
    }
}

// this is our basic api call