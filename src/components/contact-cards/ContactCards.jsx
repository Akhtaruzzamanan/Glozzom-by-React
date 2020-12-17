import React from 'react'
import ContactFormUI from './ContactFormUI'
import ContactTouchUI from './ContactTouchUI'

function ContactCards() {
    return (
        <div className = "py-5">
            <div className="container">
                <div className="row p-0">
                    <div className="col-md-8 my-2">
                        <ContactFormUI/>
                    </div>
                    <div className="col-md-4 my-2">
                        <ContactTouchUI touch = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequuntur." address = "House #100, Uttara, Dhaka" emailAc = "mohammedakhtaruzzaman2003@gmail.com" phoneNumber1 = "+434 3434 3433" phoneNumber2 = "+587 7989 3572" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCards
