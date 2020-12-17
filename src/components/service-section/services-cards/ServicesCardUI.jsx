import React from 'react'
import { Link } from 'react-router-dom'
// import './servicesCards.css'
import styled from 'styled-components';

const ServicesCard = styled.div`
    &:hover {box-shadow: 5px 10px 20px 1px rgba(0,0,0, 0.256)};
`;

const CardText = styled.div`
    font-size: medium;
`;

const ServicesIcon = styled.i`
    font-size: 16px;
`;

function ServicesCardUI(props) {
    return (
        <ServicesCard className = "card text-center d-inline-flex my-2">
            <div className = "card-header">
                <h3 className = "text-capitalize"> {props.plan} </h3>
            </div>
            <div className = "card-body">
                <div className = "card-title">
                    <h3> {props.salary} </h3>
                </div>
                <CardText className = "lead mb-3">
                    {props.cardText}
                </CardText>
                <ul className="list-group mb-2">
                    <li className="list-group-item">
                        <ServicesIcon className="fa fa-check"></ServicesIcon> Feature One
                    </li>
                    <li className="list-group-item">
                        <ServicesIcon className="fa fa-check"></ServicesIcon> Feature Two
                    </li>
                    <li className="list-group-item">
                        <ServicesIcon className="fa fa-check"></ServicesIcon> Feature Three
                    </li>
                    <li className="list-group-item">
                        <ServicesIcon className="fa fa-check"></ServicesIcon> Feature Four
                    </li>
                    <li className="list-group-item">
                        <ServicesIcon className="fa fa-check"></ServicesIcon> Feature Five
                    </li>
                </ul>
                <Link href="#" className="text-capitalize btn btn-primary d-block">order now</Link>
            </div>
            <div className="card-footer">
              <p className="text-capitalize text-muted m-0"> {props.cardFooter} </p>
            </div>
        </ServicesCard>
    )
}

export default ServicesCardUI
