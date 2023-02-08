import { useEffect } from 'react'
import { useState } from 'react'
import './Header.scss'

export const Header = () => {

    const [show, setShow] = useState(false)
    const [scrollTop , setScrollTop] = useState('')

    const handleScroll = () => {
        (window.scrollY > 100) ? setScrollTop(true) : setScrollTop(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return(
        <header
            className={`Header ${ show ? 'Active' : '' } ${ scrollTop ? 'Scrolled' : ''}`}>

            <div className="Header-wrapper Wrapper">
                <a href="/" className="Header-logo">
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
                            <a href="/photography" className="Header-a">photograhpy</a>
                        </li>
                        <li className="Header-li">
                            <a href="/video" className="Header-a">video</a>
                        </li>
                        <li className="Header-li">
                            <a href="/contact" className="Header-a">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}