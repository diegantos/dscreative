import { useEffect, useRef, useState } from 'react'
import { Btn } from '../../Common/Common'
import './Video.scss'

export const Video = () => {

    const videoRef = useRef(null)
    const [scrollTop , setScrollTop] = useState('')

    const handleScroll = () => {
        const video = videoRef.current
        const scrollPosition = window.scrollY

        video.currentTime = scrollPosition / 300;

        if( scrollPosition > 1500){
            setScrollTop(true)
        }else{
            setScrollTop(false)
        }
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
                    className={`Video-video ${ scrollTop ? 'Scrolled' : ''}`}
                    muted 
                    // controls 
                    src="/assets/Videography.mp4"></video>
                <Btn url='#' clase='Video-btn'>Click to continue</Btn>
            </div>
            <h2 className='Video-h2'>WORK IN PROGRESS</h2>
        </div>
    )
}