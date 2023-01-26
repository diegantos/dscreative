import { useState } from 'react'
import './Header.scss'

export const Header = () => {

    const [show, setShow] = useState(true)

    return(
        <div className="Header">
            <div className="Header-wrapper Wrapper">
                <a href="#" className="Header-logo">
                    <img src="/assets/DSWhite.png" alt="Logo" className="Header-img" />
                </a>

                {/* <button className="Header-button">
                    <img className='Header-btn' src="/assets/hamburger.svg" alt="button" />
                </button> */}

                <button 
                    onClick={ ()=> setShow(!show) } 
                    className='Header-button'>
                    <div className={`Header-line line1 ${ !show ? 'Active' : ''}`}></div>
                    <div className={`Header-line line2 ${ !show ? 'Active' : ''}`}></div>
                    <div className={`Header-line line3 ${ !show ? 'Active' : ''}`}></div>
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
        </div>
    )
}