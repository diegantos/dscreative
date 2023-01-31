import './Common.scss'

export const Btn = ({ children, clase, url }) => {
    return(
        <a
            href={ url }
            target='_blank'
            className={`Btn ${ clase }`}
            title='Play Showreel'>
            <span className='Btn-span'>{ children }</span>    
        </a>
    )
}

export const BackgroundElement = ({ children, clase }) => {
    return(
        <div className="Intro-element Intro-elementVideo"></div>
    )
}

export const TextEffect = ({ clase }) => {
    return(
        // <div className={`Intro-element ${ clase }`}></div>
        <div className="Intro-text">
            <p className="Intro-p">from nature to festivals</p>
            <h2 className="Intro-h2">photography</h2>
        </div>
    )
}