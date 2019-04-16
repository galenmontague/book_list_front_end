import React from "react";
import { Link } from "react-router-dom"

export default function DeleteAction(props) {

    function bookDelete() {
        fetch(`https://gm-book-api-practice.herokuapp.com/delete/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    };

    return (
        <div>
            <Link  className="link" onClick={bookDelete} to={"/deleted_book"}>Delete Book</Link>
        </div>
    )
}