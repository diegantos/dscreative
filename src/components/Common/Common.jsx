import './Common.scss'

export const Btn = ({ children, clase }) => {
    return(
        <button 
            className={`Btn ${ clase }`}
            title='Play Showreel'>{ children }</button>
    )
}

export const BackgroundElement = ({ children, clase }) => {
    return(
        <div className="Intro-works">
        <a href="#" className="Intro-a">
            <div className="Intro-element Intro-elementVideo"></div>
            <div className="Intro-text">
                <p className="Intro-p">creatrive filmmaking / brand work</p>
                <h2 className="Intro-h2">videography</h2>
            </div>
        </a>
    </div>
    )
}

export const TextEffect = ({ clase }) => {
    return(
        <div className={`Intro-element ${ clase }`}></div>
    )
}