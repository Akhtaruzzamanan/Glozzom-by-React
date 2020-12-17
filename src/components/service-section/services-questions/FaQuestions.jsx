import React from 'react'
import FaQuestionUI from './FaQuestionUI'
// import './faQuestion.css'


function FaQuestions() {
    return (
        <div className = "py-5 bg-dark faQuestion">
            <div className="container">
                <div className="row text-center p-0">
                    <div className="col">
                        <h2 className = "text-light">Frequently Asked Questions</h2>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-6">
                        <FaQuestionUI faQuestionHref = "#firstCollapse" faQuestionAll = "firstCollapse" questionNo = "question one?" questionPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo." />
                        <FaQuestionUI faQuestionHref = "#secondCollapse" faQuestionAll = "secondCollapse" questionNo = "question two?" questionPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo." />
                        <FaQuestionUI faQuestionHref = "#thirdCollapse" faQuestionAll = "thirdCollapse" questionNo = "question three?" questionPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo." />
                    </div>
                    <div className="col-md-6">
                        <FaQuestionUI faQuestionHref = "#fourCollapse" faQuestionAll = "fourCollapse" questionNo = "question four?" questionPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo." />
                        <FaQuestionUI faQuestionHref = "#fiveCollapse" faQuestionAll = "fiveCollapse" questionNo = "question five?" questionPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo." />
                        <FaQuestionUI faQuestionHref = "#sixCollapse" faQuestionAll = "sixCollapse" questionNo = "question six?" questionPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corrupti qui, architecto ad officia? Quo." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaQuestions
