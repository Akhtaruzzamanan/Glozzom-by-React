import React from 'react'
import GetStartedUI from './GetStartedUI'
// import './home-getStarted.css'
import styled from 'styled-components'
import getImg from '../../image/bg1.jpg'

const ReadyGet = styled.div`
    background-image: url(${getImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 250px;
    max-height: auto;
    position: relative;
`;

const DarkOverly = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

function GetStarted() {
    return (
        <ReadyGet className = "text-center text-light d-block mx-auto">
            <DarkOverly>
                <div className="container">
                    <div className="row py-5 mt-3">
                        <div className="col-12">
                            <GetStartedUI gStartHeading = "are you ready to get started?" gStartPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quaerat voluptatem laboriosam vero recusandae repellendus? Impedit iure est sit voluptatum blanditiis cum sequi laudantium quod dicta, a quaerat vel, obcaecati!"/>
                        </div>
                    </div>
                </div>
            </DarkOverly>
        </ReadyGet>
    )
}

export default GetStarted
