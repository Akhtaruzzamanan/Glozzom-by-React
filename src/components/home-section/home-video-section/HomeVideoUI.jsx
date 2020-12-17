import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const VideoIcon = styled.i`
  font-size: 50px;
  color: #ff0000;
`;

function HomeVideoUI(props) {
    return (
        <div className="col-12">
            <div>
              <Link to= {props.videoLink} class="text-light text-danger">
                <VideoIcon className="fa fa-play"></VideoIcon>
              </Link>
            </div>
            <h2 className="text-capitalize mt-3 text-light"> {props.videoTitle} </h2>
        </div>
    )
}

export default HomeVideoUI
