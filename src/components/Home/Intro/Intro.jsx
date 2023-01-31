import { Btn, TextEffect } from '../../Common/Common'
import './Intro.scss'

export const Intro = () => {
    return(
        <div className="Intro">
            <video className="Intro-video" autoPlay muted loop src="/assets/Intro.mp4"></video>
            {/* <div class="intro__text">
                <a href="#" class="btn">
                    <span>play showreel</span>
                </a>
            </div> */}
            <Btn url='https://diegantos.com'>Play Showreel</Btn>
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
                    <TextEffect  />
                    <div className="Intro-text">
                        <p className="Intro-p">from nature to festivals</p>
                        <h2 className="Intro-h2">photography</h2>
                    </div>
                </a>
            </div>
        </div>
        
    )
}