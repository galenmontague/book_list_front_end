import React, { Component } from 'react';
import DeleteAction from "./deleteAction";
import { Link } from "react-router-dom";


export default class BooksReadIndex extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch ( "http://localhost:5000/books", {
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
                <h1>Books Read</h1>
                {this.state.books.map((book) => (
                    <div key={book[0]}>
                    {console.log(book)}
                        <br/>
                        <h2>Book Index: {book[0]}</h2>
                        <h2>Book Title: {book[1]}</h2>
                        <h3>Author: {book[2]}</h3>
                        <DeleteAction id={[book[0]]}/>
                        <Link to={`/view_book/${book[0]}`}>View Book</Link>
                        <br/>
                    </div>
                ))}
            </div>
        )
    }
}

// this is our basic api call