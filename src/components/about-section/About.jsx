import React from 'react'
import MenuHeaders from '../menu-header/MenuHeaders'
import aboutBgImage from '../image/image1.jpeg'
import WeDo from './about-what-we-do/WeDo'
import AboutCards from './about-cards/AboutCards'

const aboutBackgroundHeader =   {
    backgroundImage: `url(${aboutBgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: '200px'

}

function About() {
    return (
        <>
            <MenuHeaders headerBackground = {aboutBackgroundHeader} menuHeading = "about us" menuPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
            <WeDo/>
            <div className="container">
                <hr className = "m-0" style = {{borderBottom: '2px solid #000000'}}/>
            </div>
            <AboutCards/>

        </>
    )
}

export default About
