import React from 'react'
import styled from 'styled-components';

const FontIcon = styled.i`
    font-size: 40px;
`;

function AfterHeadingUI(props) {
    return (
        <>
            <FontIcon className={props.afIcon}></FontIcon>
            <h3 className="text-capitalize my-2"> {props.afHeading} </h3>
            <p className="lead mb-0"> {props.afPara} </p>
        </>
    )
}

export default AfterHeadingUI
