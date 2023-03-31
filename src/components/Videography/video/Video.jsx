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

        if( scrollPosition > 1700){
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
                <Btn clase='Video-btn'>Scroll smoothly to see</Btn>
            </div>
            
            <video 
                // onClick={ muted = !muted }
                className='Video-video2'
                autoPlay 
                muted 
                loop 
                src="/assets/Videography3.mp4"></video>
                
            <video 
                className='Video-video3'
                autoPlay 
                muted 
                loop 
                src="/assets/Videography4.mp4"></video>
        </div>
    )
}