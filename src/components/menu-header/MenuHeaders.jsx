import React from 'react'

function MenuHeaders(props) {
    return (
        <div className = "py-5 mt-5 text-center text-light" style = {props.headerBackground} >
            <div className="container">
                <div className="row p-0">
                    <div className="col">
                        <h2 className="text-capitalize text-light"> {props.menuHeading} </h2>
                        <p className="lead"> {props.menuPara} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHeaders
