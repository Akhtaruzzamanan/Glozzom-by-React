import React from 'react'
import HomeNewsletterUI from './HomeNewsletterUI'

function HomeNewsletter() {
    return (
        <div className = "py-5 bg-dark text-light text-center">
            <div className="container">
                <div className="row p-0">
                    <div className="col">
                        <HomeNewsletterUI newsLetter = "signup for our newsletter" newsPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam similique esse assumenda quasi repellendus illum perferendis quos aliquid possimus."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeNewsletter
