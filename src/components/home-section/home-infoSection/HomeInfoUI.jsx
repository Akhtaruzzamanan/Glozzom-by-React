import React from 'react'
import { Link } from 'react-router-dom'

function HomeInfoUI(props) {
    return (
        <div className="col-md-6 align-self-center">
            <h3 className = "text-capitalize"> {props.homeInfoHeading} </h3>
            <p className = "lead"> {props.homeInfoPara} </p>
            <Link to = "/" className = "text-capitalize btn btn-outline-dark">read more</Link>
        </div>
    )
}

export default HomeInfoUI
