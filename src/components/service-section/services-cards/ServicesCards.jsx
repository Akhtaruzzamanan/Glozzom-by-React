import React from 'react'
import ServicesCardUI from './ServicesCardUI'

function ServicesCards() {
    return (
        <div className = "container d-flex justify-content-center py-5">
            <div className = "row">
                <div className = "col-md-4">
                    <ServicesCardUI plan = "services plan one" salary = "$59.99/Month" cardText = "Lorem Ipsum is simply dummy text of the printing and anything" cardFooter = "1 year plan" />
                </div>
                <div className = "col-md-4">
                    <ServicesCardUI plan = "services plan two" salary = "$68.58/Month" cardText = "Lorem Ipsum has been the industry's standard dummy text ever since" cardFooter = "2 year plan" />
                </div>
                <div className = "col-md-4">
                    <ServicesCardUI plan = "services plan three" salary = "$80.25/Month" cardText = "when an unknown printer took a galley of type and scrambled it book." cardFooter = "5 year plan" />
                </div>
            </div>
        </div>
    )
}

export default ServicesCards
