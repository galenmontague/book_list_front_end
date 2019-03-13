import React from "react";
import { Link } from "react-router-dom"

export default function UpdateLanding(props) {

    return (
        <div>
            <h1>You updated a book.</h1>
            <Link to={"/"} >View All Books</Link>
            {console.log(props)}
        </div>
    )
} 