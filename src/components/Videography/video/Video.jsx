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

        if( scrollPosition > 1300){
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
            <div className={`Video-vid ${ scrollTop ? 'Scrolled' : ''}`}>
                <video
                    ref={videoRef}
                    className='Video-video'
                    muted 
                    // controls 
                    src="/assets/Videography.mp4"></video>
                <Btn clase='Video-btn'>Scroll to see</Btn>
            </div>
            <h2 className='Video-h2'>Work in progress</h2>
            <h2 className='Video-h2'>Please check out my social media for more</h2>
        </div>
    )
}