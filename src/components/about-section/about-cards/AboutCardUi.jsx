import React from 'react'
// import './aboutCards.css'
import styled from 'styled-components';

const AboutIcon = styled.i`
    font-size: 50px;
    margin-bottom: 20px;
`;

const AboutCard = styled.div`
   &:hover {box-shadow: 5px 10px 20px 1px rgba(0,0,0,0.350)};
`;

function AboutCardUi(props) {
    return (
        <AboutCard className = {` ${props.backColor} ${props.fontColor} card text-center`}>
            <div className = "card-body">
              <AboutIcon className={props.fontIcon}></AboutIcon>
              <h3 className={`text-capitalize my-1 ${props.fontColor}`}> {props.topic} </h3>
              <p className="lead mt-0"> {props.details} </p>
            </div>
        </AboutCard>
    )
}

export default AboutCardUi
