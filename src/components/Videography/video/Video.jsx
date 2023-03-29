import { useEffect, useRef, useState } from 'react'
import { Btn } from '../../Common/Common'
import './Video.scss'

export const Video = () => {

    const videoPlayer = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [scrollTop, setScrollTop] = useState('')

    const handleScroll = ( element ) => {
        let pixel = window.scrollY
        console.log(pixel)
        console.log(VideoPlayer)
        videoPlayer.currentTime = pixel / 1000
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let pixel = window.scrollY
            if( pixel > 100 && pixel < 1000 ){
                videoPlayer.currentTime = pixel / 1000
                console.log(pixel)
                console.log(videoPlayer.currentTime)
            }
        })
    })

    return(
        <div className="Video">
            <div className="Video-vid" onChange={handleScroll}>
                <video
                    // ref={videoPlayer} 
                    className="Video-video" 
                    muted 
                    controls 
                    autoPlay={playing}
                    src="/assets/Videography.mp4"></video>
                <Btn url='#' clase='Video-btn'>Click to continue</Btn>
            </div>
        </div>
    )
}