import React from 'react'

function GetStartedUI(props) {
    return (
        <>
            <h3 class="text-capitalize text-light"> {props.gStartHeading} </h3>
            <p class="lead m-0"> {props.gStartPara} </p>
        </>
    )
}

export default GetStartedUI
