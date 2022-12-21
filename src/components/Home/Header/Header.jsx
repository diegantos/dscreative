import './Header.scss'

export const Header = () => {
    return(
        <div className="Header">
            <a href="/public/assets/DSWhite.png" className="Header-logo">
                <img src="" alt="Logo" className="Header-img" />
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
    )
}