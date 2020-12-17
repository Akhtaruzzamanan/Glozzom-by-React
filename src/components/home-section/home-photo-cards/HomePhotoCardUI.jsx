import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Img = styled.img`
    border-radius: 5px;
    min-height: 250px;
    transition: 0.5s ease;
    display: block;

    &:hover {
        transform: scale(1.3);
    }
`;

function HomePhotoCardUI(props) {
    return (
        <div className = "card overflow-hidden" uk-lightbox>
            <Link to = {props.imgLink}>
                <Img src= {props.imgSrc} alt={props.altName} className = "img-fluid"/>
            </Link>
        </div>
    )
}

export default HomePhotoCardUI
