import React from 'react'
import { Link } from 'react-router-dom'
import CarouselSlideUI from './CarouselSlideUI'
// import styled from "styled-components";

// Image source file
import img1 from '../../image/image1.jpeg'
import img2 from '../../image/image2.jpeg'
import img3 from '../../image/image3.jpeg'



function CarouselSlider() {
    return (
        <>
            <div id="MyCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-slide-to="0" class="active" data-target="#MyCarousel"></li>
                    <li data-slide-to="1" data-target="#MyCarousel"></li>
                    <li data-slide-to="2" data-target="#MyCarousel"></li>
                </ol>
                <div className="carousel-inner">
                    {/**
                     *  isActive : "isActive has been used to understand whether the slider is active or not"
                     *  imgSrc : "Here is the image source"
                     *  slidePara: "The slider's paragraph is given"
                     *  btnColor: "For slider buttons"
                     */}
                    <CarouselSlideUI side = "text-center" isActive = "active" imgSrc = {img1} slideHeading = "Heading One" slidePara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" btnColor = "btn-success"/>
                    <CarouselSlideUI side = "text-right" isActive = "" imgSrc = {img2} slideHeading = "Heading two" slidePara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" btnColor = "btn-info"/>
                    <CarouselSlideUI side = "text-left" isActive = "" imgSrc = {img3} slideHeading = "Heading three" slidePara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" btnColor = "btn-danger"/>
                </div>
                <Link data-target="#MyCarousel" className="carousel-control-prev" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link>
                <Link data-target="#MyCarousel" className="carousel-control-next" data-slide="next">
                    <span className="carousel-control-next-icon "></span>
                </Link>
            </div>
        </>
    )
}

export default CarouselSlider
