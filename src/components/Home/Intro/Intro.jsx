import { BackgroundElement, Btn, TextEffect } from '../../Common/Common'
import './Intro.scss'

export const Intro = () => {
    return(
        <div className="Intro">
            <div className="Intro-vid">
                <video className="Intro-video" autoPlay muted loop src="/assets/Intro.mp4"></video>
                <Btn url='https://diegantos.com' clase='Intro-btn'>Play Showreel</Btn>
            </div>
            
            <div className="Intro-works">
                <a href="#" className="Intro-a">
                    <BackgroundElement url='/assets/img/P1022369.jpg'></BackgroundElement>
                    <TextEffect 
                        parrafo='creative filmmaking / brand work'
                        titulo='videography'></TextEffect>
                </a>
            </div>

            <div className="Intro-works">
                <a href="#" className="Intro-a">
                    <BackgroundElement url='/assets/img/DJI_0027.jpg'></BackgroundElement>
                    <TextEffect 
                        parrafo='from nature to festivals'
                        titulo='photography'></TextEffect>
                </a>
            </div>
        </div>
        
    )
}