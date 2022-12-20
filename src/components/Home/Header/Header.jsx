import './Header.scss'

export const Header = () => {
    return(
        <div className="Header">
            <a href="#" className="Header-logo">
                <img src="" alt="Logo" className="Header-img" />
            </a>

            <nav className="Header-nav">

                <ul className="Header-ul">
                    <li className="Header-li">Videography</li>
                    <li className="Header-li">Photography</li>
                    <li className="Header-li">Contact</li>
                </ul>

            </nav>
            
        </div>
    )
}