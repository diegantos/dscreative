import { useEffect, useRef, useState } from 'react'
import { Btn } from '../../Common/Common'
import './Video.scss'

export const Video = () => {

    const VideoPlayer = useRef(null)
    const [scrollTop, setScrollTop] = useState('')

    // const handleScroll = ( element ) => {
    //     console.log(element)
    //     let pixel = window.scrollY
    //     console.log(pixel)
    //     console.log(VideoPlayer)
    //     VideoPlayer.currentTime = pixel / 1000
    // }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let pixel = window.scrollY
            VideoPlayer.currentTime = pixel / 1000
            console.log(pixel)
            console.log(VideoPlayer.currentTime)
        })
        // return () => {
        //     window.removeEventListener('scroll', handleScroll)
        // }
    })

    return(
        <div className="Video">
            <div className="Video-vid">
                <video
                    ref={VideoPlayer} 
                    className="Video-video" muted controls src="/assets/Videography.mp4"></video>
                <Btn url='#' clase='Video-btn'>Click to continue</Btn>
            </div>
        </div>
    )
}