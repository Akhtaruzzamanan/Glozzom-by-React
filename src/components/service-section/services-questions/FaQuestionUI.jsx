import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const CardHeader = styled.div`
    cursor: pointer;

    &: hover {
        box-shadow: 5px 10px 20px 1px rgba(255, 255, 255, 0.350) ;
    }
`;

function FaQuestionUI(props) {
    return (
        <div className="card bg-light text-dark my-2">
            <CardHeader className="card-header" data-toggle="collapse" href = {props.faQuestionHref}  aria-expanded = "false" aria-controls = {props.faQuestionAll}  >
                <h5 className="mb-0">
                    <Link className="text-dark text-capitalize">
                        {props.questionNo}
                    </Link>
                </h5>
            </CardHeader>
            <div className="card-body collapse p-3" id = {props.faQuestionAll}   data-parent = ".faQuestion" >
                <p className="lead mb-0"> {props.questionPara} </p>
            </div>
        </div>
    )
}

export default FaQuestionUI
