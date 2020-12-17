import React from 'react'
import HomePhotoCardUI from './HomePhotoCardUI'
// import './home-photo.css'
import img1 from '../../image/image1.jpeg'
import img2 from '../../image/image2.jpeg'
import img3 from '../../image/image3.jpeg'
import img4 from '../../image/image4.jpeg'
import img5 from '../../image/image5.jpeg'
import img6 from '../../image/image6.jpeg'
import HomePhotoTopUi from './HomePhotoTopUi'

function HomePhotos() {
    return (
        <div className="py-5 text-center">
            <div className = "container">
                <div className="row p-0">
                    <div className="col">
                        <HomePhotoTopUi photoHeading = "photo gallery" photoPara = "Check out our photos"/>
                    </div>
                </div>
                <div className = "row pt-sm-0 pt-md-3">
                    <div className="col-md-4 pt-3">
                        <HomePhotoCardUI imgSrc = {img1} imgLink = {img1} altName = "Car"/>
                    </div>
                    <div className="col-md-4 pt-3">
                        <HomePhotoCardUI imgSrc = {img2} imgLink = {img2} altName = "Doll"/>
                    </div>
                    <div className="col-md-4 pt-3">
                        <HomePhotoCardUI imgSrc = {img3} imgLink = {img3} altName = "Drawing room"/>
                    </div>
                </div>

                <div className = "row pt-sm-0 pt-md-3">
                    <div className="col-md-4 pt-3">
                        <HomePhotoCardUI imgSrc = {img4} imgLink = {img4} altName = "Tea"/>
                    </div>
                    <div className="col-md-4 pt-3">
                        <HomePhotoCardUI imgSrc = {img5} imgLink = {img5} altName = "Bridge"/>
                    </div>
                    <div className="col-md-4 pt-3">
                        <HomePhotoCardUI imgSrc = {img6} imgLink = {img6} altName = "People"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePhotos
