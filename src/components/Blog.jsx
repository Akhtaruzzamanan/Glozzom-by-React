import React from 'react'
import MenuHeaders from './menu-header/MenuHeaders'
import blogBgImg from './image/image3.jpeg'
import BlogCards from './blog-cards/BlogCards'

const blogBackgroundHeader = {
    backgroundImage: `url(${blogBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: '200px'
}

function Blog() {
    return (
        <>
            <MenuHeaders headerBackground = {blogBackgroundHeader} menuHeading = "blog" menuPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eaque, saepe."/>
            <BlogCards/>
            
        </>
    )
}

export default Blog
