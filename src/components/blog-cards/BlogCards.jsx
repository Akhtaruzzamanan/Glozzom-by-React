import React from 'react'
// import './blog-card.css'
import BlogCardUI from './BlogCardUI'
import blogBgImg1 from '../image/image5.jpeg'
import blogBgImg2 from '../image/people.jpg'
import blogBgImg3 from '../image/image6.jpeg'

function BlogCards() {
    return (
        <div className = "container">
            <div className = "row py-5">
                <div className = "col-md-4">
                    <BlogCardUI imgSrc = {blogBgImg1} blogCardHeading = "blog post one" authorName = "Written by Roman Ahmed Adnan" blogPara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. " btnDesign = "btn-dark"/>
                </div>
                <div className = "col-md-4">
                    <BlogCardUI imgSrc = {blogBgImg2} blogCardHeading = "blog post two" authorName = "Written by MD Akhtruzzman" blogPara = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000. " btnDesign = "btn-secondary"/>
                </div>
                <div className = "col-md-4">
                    <BlogCardUI imgSrc = {blogBgImg3} blogCardHeading = "blog post three" authorName = "Written by Abida Sultana" blogPara = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000. " btnDesign = "btn-dark"/>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
