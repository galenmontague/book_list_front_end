import React, { Component } from 'react';
import { withRouter } from "react-router";

class UpdateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            title: "",
            author: "",
            formHidden: true
        }
        this.editBook = this.editBook.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    editBook() {
        this.setState({id: this.props.ourProp[0]})
        this.setState({title: this.props.ourProp[1]})
        this.setState({author: this.props.ourProp[2]})
        this.setState({formHidden: !this.state.formHidden})
    }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        // let id = this.state.id; (this is string interpolated below, so don't need it)
        let title = this.state.title;
        let author = this.state.author;

        fetch ( `https://gm-book-api-practice.herokuapp.com/update_book/${this.state.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title, author: author})
            // turns this info into a json object
        })
        .then(response => {return response.json();})
            // makes the return a json object (in this case, we already set up the api to return a json, but this would be needed if we didn't know what an api returns)
        .then(responseData => {return responseData})
            // In all .then cases, the next .then statement takes the data that is returned in the last .then statement
            // This helps us to have access to what is being returned from the api in case we need to use it fix problems if the come from the api side. We are not accessing this return any where in this app right now.
        // .then(() => {this.props.history.push('/update_book/<id>')})
        .then(() => {this.props.history.push('/')})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

    render() {
        return (
            <div className=''>
                <div>
                    <button onClick={this.editBook}>Update This Book</button>
                </div>

                <form onSubmit={this.handleSubmit} style = {{visibility: this.state.formHidden ? "hidden" : "visible"}}>
                    <div>
                        <label>New Title:</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>New Author:</label>
                        <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Submit" updatedBookInfo={this.state} />
                    </div>
                </form>
             </div>
        );
    }
}

export default withRouter(UpdateBook);
// wherever we export this component to, gives it access to a route for UpdateBook