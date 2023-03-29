import { useEffect, useRef, useState } from 'react'
import { Btn } from '../../Common/Common'
import './Video.scss'

export const Video = () => {

    const videoRef = useRef(null)

    const handleScroll = () => {
        const video = videoRef.current
        const scrollPosition = window.scrollY

        // if( scrollPosition > 0 && scrollPosition < 2000){
            video.currentTime = scrollPosition / 300
        // }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return(() => {
            window.removeEventListener('scroll', handleScroll)
        })
    },[])

    return(
        <div className="Video">
            <div className="Video-vid">
                <video
                    ref={videoRef}
                    className="Video-video" 
                    muted 
                    // controls 
                    src="/assets/Videography.mp4"></video>
                <Btn url='#' clase='Video-btn'>Click to continue</Btn>
            </div>
        </div>
    )
}