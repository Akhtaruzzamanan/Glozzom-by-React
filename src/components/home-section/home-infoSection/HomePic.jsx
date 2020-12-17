import React from 'react'
// import car from '../images/car.jpg'

function HomePic(props) {
    return (
        <div className="col-md-6 mt-sm-3 mt-3 mt-md-0">
            <img src={props.homeInfoImage} alt="car" className = "img-fluid rounded"/>
        </div>
    )
}

export default HomePic
