import { useEffect, useState } from 'react'
import { Btn } from '../../Common/Common'
import './Video.scss'

export const Video = () => {

    const [show, setShow] = useState(false)
    const [scrollTop, setScrollTop] = useState('')

    const handleScroll = ( element ) => {
        console.log(element)
        let pixel = window.scrollY
        console.log(pixel)
        setScrollTop.currentTime = pixel / 1000
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return(
        <div className="Video">
            <div className="Video-vid">
                <video className="Video-video" muted controls src="/assets/Videography.mp4"></video>
                <Btn url='#' clase='Video-btn'>Click to continue</Btn>
            </div>
        </div>
    )
}