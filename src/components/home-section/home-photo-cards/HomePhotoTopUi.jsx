import React from 'react'

function HomePhotoTopUi(props) {
    return (
        <>
            <h2 class="text-capitalize"> {props.photoHeading} </h2>
            <p class="lead"> {props.photoPara} </p>
        </>
    )
}

export default HomePhotoTopUi
