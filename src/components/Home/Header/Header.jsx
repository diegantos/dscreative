import { useState } from 'react'
import './Header.scss'

export const Header = () => {

    const [show, setShow] = useState(false)
    const [scrollTop , setScrollTop] = useState(0)

    const handleScroll = event => {
        setScrollTop(event.currentTarget.scrollTop)
    }

    return(
        <div
            onScroll={ handleScroll } 
            className={`Header ${ show ? 'Active' : '' }`}>
            {/* className="Header"> */}
            <div className="Header-wrapper Wrapper">
                <a href="#" className="Header-logo">
                    <img src="/assets/DSWhite.png" alt="Logo" className="Header-img" />
                </a>

                <button 
                    onClick={ ()=> setShow(!show) }
                    className='Header-button'>
                    <div className={`Header-line line1 ${ show ? 'Active' : ''}`}></div>
                    <div className={`Header-line line2 ${ show ? 'Active' : ''}`}></div>
                    <div className={`Header-line line3 ${ show ? 'Active' : ''}`}></div>
                </button>

                <nav className="Header-nav">
                    <ul className="Header-ul">
                        <li className="Header-li">
                            <a href="#" className="Header-a">photograhpy</a>
                        </li>
                        <li className="Header-li">
                            <a href="#" className="Header-a">video</a>
                        </li>
                        <li className="Header-li">
                            <a href="#" className="Header-a">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <div className={`Menu ${ show ? 'Active' : '' }`}>
                <a href="#" className="Menu-a"></a>
            </div> */}
        </div>
    )
}