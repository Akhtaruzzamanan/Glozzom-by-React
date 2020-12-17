import React from 'react';

function HomeNewsletterUI(props) {
    return (
        <>
            <h2 className = "text-capitalize text-light"> {props.newsLetter} </h2>
            <p className = "lead"> {props.newsPara} </p>
            <form action="" className="form-inline justify-content-center">
                <label className = "sr-only" htmlFor="name">Name:</label>
                <input className = "form-control m-2" type="text" name = "name" id = "name" placeholder="Enter name"/>

                <label className = "sr-only" htmlFor="email">Email:</label>
                <input className = "form-control m-2" type="email" name = "email" id = "email" placeholder="Enter email"/>
                <input class="btn btn-outline-light m-2 form-control" type="submit" name="submit" value="Subscribe"></input>
            </form>
        </>
    )
}

export default HomeNewsletterUI
