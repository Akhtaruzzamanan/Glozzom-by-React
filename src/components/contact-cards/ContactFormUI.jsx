import React from 'react'

function ContactFormUI() {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className = "text-center">Please fill out this form to contact us</h4>
                <div className="row pt-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name = "name" placeholder = "First name" className = "form-control"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name = "name" placeholder = "Last name" className = "form-control"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" name = "email" placeholder = "Email" className = "form-control"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="number" name = "number" placeholder = "Phone number" className = "form-control"/>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea name="name" cols="30" rows="5" placeholder = "Message" className = "form-control"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <input type="submit" className = "btn btn-block btn-dark" value = "Send" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFormUI
