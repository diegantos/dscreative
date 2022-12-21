import './Header.scss'

export const Header = () => {
    return(
        <div className="Header">
            <div className="Header-wrapper Wrapper">
                <a href="#" className="Header-logo">
                    <img src="/assets/DSWhite.png" alt="Logo" className="Header-img" />
                </a>

                <button className="Header-button">

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