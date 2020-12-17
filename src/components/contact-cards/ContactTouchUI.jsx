import React from 'react'

function ContactTouchUI(props) {
    return (
        <div className = "card">
            <div className="card-body">
                <h4 className = "text-capitalize mb-1">get in touch</h4>
                <p className = "my-2"> {props.touch} </p>
                <h4 className = "mt-3 mb-1">Address</h4>
                <p className = "my-2"> {props.address} </p>
                <h4 className = "mt-3 mb-1">Email</h4>
                <p className = "my-2"> {props.emailAc} </p>
                <h4 className = "mt-3 mb-1">Phone</h4>
                <p className= "my-2"> {props.phoneNumber1} </p>
                <p className = "my-2"> {props.phoneNumber2} </p>
            </div>
        </div>
    )
}

export default ContactTouchUI
