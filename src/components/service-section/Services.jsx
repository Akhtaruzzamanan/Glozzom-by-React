import React from 'react'
import MenuHeaders from '../menu-header/MenuHeaders'
import servicesBgImg from '../image/image2.jpeg'
import ServicesCards from './services-cards/ServicesCards'
import FaQuestions from './services-questions/FaQuestions'

const servicesBackgroundHeader = {
    backgroundImage: `url(${servicesBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: '200px'
}

function Services() {
    return (
        <>
            <MenuHeaders headerBackground = {servicesBackgroundHeader} menuHeading = "services" menuPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit."/>
            <ServicesCards/>
            <FaQuestions/>
        </>
    )
}

export default Services
