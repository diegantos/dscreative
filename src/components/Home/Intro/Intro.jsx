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
                    <div className="Intro-element Intro-elementVideo"></div>
                    <div className="Intro-text">
                        <p className="Intro-p">creatrive filmmaking / brand work</p>
                        <h2 className="Intro-h2">videography</h2>
                    </div>
                </a>
            </div>
            
            <div className="Intro-works">
                <a href="#" className="Intro-a">
                    {/* <div className="Intro-element Intro-elementPhoto"></div> */}
                    <BackgroundElement url='/public/assets/UBINAS/DJI_0027.jpg'></BackgroundElement>
                    <TextEffect 
                        parrafo='from nature to festivals'
                        titulo='photography'></TextEffect>
                </a>
            </div>
        </div>
        
    )
}