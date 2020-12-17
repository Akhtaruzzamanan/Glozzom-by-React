import React from 'react'
import AboutCardUi from './AboutCardUi'
// import './aboutCards.css'

function AboutCards() {
    return (
        <div className = "container justify-content-center my-5">
            <div className="row d-flex">
                <div className="col-md-4">
                    <AboutCardUi backColor = "bg-success" fontColor = "text-light" fontIcon = "fa fa-envelope mb-1" topic = "Message Item" details = "When an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className="col-md-4">
                    <AboutCardUi backColor = "bg-dark" fontColor = "text-light" fontIcon = "fa fa-car mb-1" topic = "car Item" details = "When an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className="col-md-4">
                    <AboutCardUi backColor = "bg-primary" fontColor = "text-light" fontIcon = "fa fa-play mb-1" topic = "One play after another" details = "When an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
            </div>

            <div className="row d-flex pt-sm-0 pt-md-4">
                <div className="col-md-4">
                    <AboutCardUi backColor = "bg-warning" fontColor = "text-dark" fontIcon = "fa fa-tree mb-1" topic = "tree Item" details = "When an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className="col-md-4">
                    <AboutCardUi backColor = "bg-info" fontColor = "text-light" fontIcon = "fa fa-cart-plus mb-1" topic = "Buy Products" details = "When an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className="col-md-4">
                    <AboutCardUi backColor = "bg-light" fontColor = "text-dark" fontIcon = "fab fa-youtube-square mb-1" topic = "YouTube tutorial" details = "When an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
            </div>
        </div>
    )
}

export default AboutCards
