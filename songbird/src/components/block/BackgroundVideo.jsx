import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://www.videvo.net/videvo_files/converted/2016_01/preview/Forest_15_2_Videvo.mov92730.webm"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo