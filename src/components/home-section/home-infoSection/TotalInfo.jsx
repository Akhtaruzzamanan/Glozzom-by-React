import React from 'react'
import HomeInfoUI from './HomeInfoUI'
import HomePic from './HomePic'
import pc from '../../image/pc.jpeg'

function TotalInfo() {
    return (
        <div className = "py-5">
            <div className="container">
                <div className="row p-0">
                    {/**
                     * homeInfoHeading = "Heading"
                     * homeInfoPara = "paragraph"
                     * homeInfoImage : "picture"
                     */}
                    <HomeInfoUI homeInfoHeading = "lorem ipsum dolar sit." homeInfoPara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos recusandae nobis reiciendis voluptatem quae iusto, fugiat itaque iste explicabo."/>
                    <HomePic homeInfoImage = {pc}/>
                </div>
            </div>
        </div>
    )
}

export default TotalInfo
