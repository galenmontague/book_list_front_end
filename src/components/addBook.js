import React, { Component } from 'react';

export default class AddBook extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            title: "",
            author: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    } 

    handleSubmit(event) {
        event.preventDefault()
        let title = this.state.title
        let author = this.state.author

        fetch ( "https://gm-book-api-practice.herokuapp.com/book/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title, author: author})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

    render() {
        return (
            <div>
                <div className="add-book-card-wrapper">
                    <div className='add-book-header' >
                        <p>Add a book to the list.</p>
                    </div>
                    <div className="add-book-form-wrapper">
                        <form onSubmit={this.handleSubmit} >
                            <div className='add-book-title'>
                                <div>Title:</div>
                                <div className='input-box-title'>
                                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className='add-book-author'>
                                <div>Author:</div>
                                <div className='input-box-author'>
                                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <button className="submit-button" type="submit" value="Add Book">Add Book</button>
                    </div>
                </div>
            </div>
        )
    }
}