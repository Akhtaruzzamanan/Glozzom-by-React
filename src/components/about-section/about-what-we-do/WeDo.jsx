import React from 'react'
import WeDoUI from './WeDoUI'
import aboutWeDoImg from '../../image/image4.jpeg'

function WeDo() {
    return (
        <div className = "py-5">
            <div className="container">
                <WeDoUI imgSrc = {aboutWeDoImg} weDoHeading = "what we do?" weDoPara1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex quaerat magnam obcaecati repellendus voluptatum quisquam architecto iure, aliquam labore." weDoPara2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex quaerat magnam obcaecati repellendus voluptatum quisquam architecto iure, aliquam labore." />
            </div>
        </div>
    )
}

export default WeDo
