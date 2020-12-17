import React from 'react'
import MenuHeaders from './menu-header/MenuHeaders'
import contactBgImg from './image/contact.jpg'
import ContactCards from './contact-cards/ContactCards'

const contactBackgroundHeader = {
    backgroundImage: `url(${contactBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: '200px'
}


function Contact() {
    return (
        <>
            <MenuHeaders headerBackground = {contactBackgroundHeader} menuHeading = "contact us" menuPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eaque, saepe."/>
            <ContactCards/>
        </>
    )
}

export default Contact
