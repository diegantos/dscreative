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

export const BackgroundElement = ({ clase , url }) => {
    return(
        <div 
            className={`Intro-element ${clase}`}
            style={{
                backgroundImage : `url(${ url })` }}></div>
    )
}

export const TextEffect = ({ parrafo , titulo }) => {
    return(
        <div className="Intro-text">
            <p className="Intro-p">{ parrafo }</p>
            <h2 className="Intro-h2">{ titulo }</h2>
        </div>
    )
}