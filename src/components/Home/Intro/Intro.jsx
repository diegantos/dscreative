import './Intro.scss'

export const Intro = () => {
    return(
        <div className="Intro">
            <video className='Intro-video' autoplay muted loop src="/assets/Intro.mp4"></video>
            {/* <div class="intro__text">
                <a href="#" class="btn">
                    <span>play showreel</span>
                </a>
            </div> */}
        </div>
    )
}