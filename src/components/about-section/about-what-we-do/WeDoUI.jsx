import React from 'react'

function WeDoUI(props) {
    return (
        <div className = "row p-0">
            <div className="col-md-6 align-self-center">
                <h3 className = "text-capitalize"> {props.weDoHeading} </h3>
                <p class="lead"> {props.weDoPara1} </p>
                <p class="lead"> {props.weDoPara2} </p>
            </div>
            <div className="col-md-6 text-center">
                <img className = "rounded-circle img-fluid" src={props.imgSrc} alt="doll"/>
            </div>
        </div>
    )
}

export default WeDoUI
