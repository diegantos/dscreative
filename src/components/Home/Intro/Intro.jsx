import { NavLink } from 'react-router-dom'
import { BackgroundElement, Btn, TextEffect } from '../../Common/Common'
import './Intro.scss'

export const Intro = () => {
    return(
        <div className="Intro">
            <div className="Intro-vid">
                <video className="Intro-video" autoPlay muted loop src="/assets/Intro.mp4"></video>
                <Btn url='https://vimeo.com/812354875' clase='Intro-btn'>Play Showreel</Btn>
            </div>
            
            <div className="Intro-works">
                <NavLink to='/video' className='Intro-a'>
                    <BackgroundElement url='/assets/img/P1022369.jpg'></BackgroundElement>
                    <TextEffect 
                        parrafo='creative filmmaking / brand work'
                        titulo='videography'></TextEffect>
                </NavLink>
            </div>

            <div className="Intro-works">
                <NavLink to='/photography' className='Intro-a'>
                    <BackgroundElement url='/assets/img/DJI_0027.jpg'></BackgroundElement>
                    <TextEffect 
                        parrafo='from nature to festivals'
                        titulo='photography'></TextEffect>
                </NavLink>
            </div>
        </div>
        
    )
}