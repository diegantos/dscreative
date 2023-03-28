import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
                <NavLink to='/' className='Header-logo'>
                    <img src="/assets/DSWhite.png" alt="Logo" className="Header-img" />
                </NavLink>

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
                            <NavLink to='/photography' className='Header-a'>photograhpy</NavLink>
                        </li>
                        <li className="Header-li">
                            <NavLink to='/video' className='Header-a'>video</NavLink>
                        </li>
                        <li className="Header-li">
                            <NavLink to='/contact'>contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}