import React from 'react'
import AfterHeaders from './after-home-heading/AfterHeaders'
import GetStarted from './home-getStarted/GetStarted'
import CarouselSlider from './home-heading/CarouselSlider'
import TotalInfo from './home-infoSection/TotalInfo'
import HomeNewsletter from './home-newsletter/HomeNewsletter'
import HomePhotos from './home-photo-cards/HomePhotos'
import HomeVideo from './home-video-section/HomeVideo'

function Home() {
    return (
        <>
            <CarouselSlider/>
            <AfterHeaders/>
            <GetStarted/>
            <TotalInfo/>
            <HomeVideo/>
            <HomePhotos/>
            <HomeNewsletter/>
        </>
    )
}

export default Home
