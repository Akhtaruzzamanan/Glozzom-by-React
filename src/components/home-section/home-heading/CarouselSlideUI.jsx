import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Img = styled.img`
    width: 100%;
    height: 450px;
`;

const Section = styled.div`
    height: 450px
`;

const HeadingTwo = styled.h2`
    font-size: 2.5rem
`;

const Para = styled.p`
    font-size: 1rem
`;

function CarouselSlideUI(props) {
    return (
        <Section className={`carousel-item ${props.isActive}`}>
            <Img src={props.imgSrc} alt="car" className = "imgSize overflow-hidden"/>
            <div className="container">
                <div className={`carousel-caption mb-3 pb-3 mb-sm-5 pb-sm-5 ${props.side}`}>
                <HeadingTwo className="display-4 text-capitalize text-light"> {props.slideHeading} </HeadingTwo>
                <Para className="lead"> {props.slidePara} </Para>
                <Link to="/" className={`btn ${props.btnColor} text-capitalize`}>learn more</Link>
                </div>
            </div>
        </Section>
    )
}

export default CarouselSlideUI
