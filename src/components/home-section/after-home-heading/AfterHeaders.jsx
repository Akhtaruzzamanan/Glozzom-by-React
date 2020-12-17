import React from 'react'
import AfterHeadingUI from './AfterHeadingUI'
// import './after-header.css'

function AfterHeaders() {
    return (
        <div className = "container text-center">
            <div className="row my-5 p-0">
                {/**
                 * afIcon: "For FontAwesome Icons"
                 * afPara: "Paragraph"
                 * afHeading: "For Heading"
                 */}
                <div className="col-md-4 my-2">
                    <AfterHeadingUI afIcon = "fa fas fa-cogs" afHeading = "turning gears" afPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur." />
                </div>

                <div className="col-md-4 my-2">
                    <AfterHeadingUI afIcon = "fa fas fa-cloud" afHeading = "sending data" afPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur." />
                </div>

                <div className="col-md-4 my-2">
                    <AfterHeadingUI afIcon = "fa fas fa-cart-plus" afHeading = "making money" afPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur." />
                </div>
            </div>
        </div>
    )
}

export default AfterHeaders
