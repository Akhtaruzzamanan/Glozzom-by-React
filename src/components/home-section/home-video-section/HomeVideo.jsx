import React from 'react'
import HomeVideoUI from './HomeVideoUI'
// import "./home-video.css"
import styled from 'styled-components';
import videoImg from '../../image/people1.jpg'

const HomeVideoImg = styled.div`
    background-image: url(${videoImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 250px;
    position: relative;
`;

const DarkOverlay = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

function HomeVideo() {
    return (
        <HomeVideoImg className="text-center text-light">
            <DarkOverlay>
                <div className="container justify-content-center">
                    <div className="row py-5">
                        {/**
                         * videoTitle: "Video title"
                         */}
                        <HomeVideoUI videoLink = "https://youtu.be/aXRS-YzWyJw" videoTitle = "bootstrap 4 crash course"/>
                    </div>
                </div>
            </DarkOverlay>
        </HomeVideoImg>
    )
}

export default HomeVideo
