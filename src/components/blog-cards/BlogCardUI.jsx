import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const BlogCard = styled.div`
    &:hover {box-shadow: 5px 10px 20px 1px rgba(0,0,0,0.253) !important};
`;

const Img = styled.img`
    min-height: 250px;
    transition: 0.5s ease;

    &:hover {transform: scale(1.3)};
`;

function BlogCardUI(props) {
    return (
        <BlogCard className = "card text-left my-2">
            <div className = "overflow-hidden">
                <Img src={props.imgSrc} alt="people blog" className = "img-fluid"/>
            </div>
            <div className = "card-body">
                <h4 className = "text-capitalize"> {props.blogCardHeading} </h4>
                <small className = "text-muted"> {props.authorName} </small>
                <hr/>
                <p className = "lead"> {props.blogPara} </p>
                <Link to = "#" className = {`btn btn-block ${props.btnDesign} text-capitalize`}>read more</Link>
            </div>
        </BlogCard>
    )
}

export default BlogCardUI
