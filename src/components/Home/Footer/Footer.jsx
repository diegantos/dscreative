import './Footer.scss'

export const Footer = () => {
    return(
        <div className="Footer">
            <div className="Footer-Wrapper Wrapper">
                <ul className="Footer-ul">
                    <li className="Footer-li">
                        <a href="#" className="Footer-a"><img src="https://img.icons8.com/sf-regular/48/null/instagram-new.png"/></a>
                    </li>
                    <li className="Footer-li">
                        <a href="#" className="Footer-a"><img src="https://img.icons8.com/sf-regular/48/null/vimeo.png"/></a>
                    </li>
                    <li className="Footer-li">
                        <a href="#" className="Footer-a"><img src="https://img.icons8.com/sf-regular/48/null/youtube-play.png"/></a>
                    </li>
                    <li className="Footer-li">
                        <a href="#" className="Footer-a"><img src="https://img.icons8.com/sf-regular/48/null/linkedin.png"/></a>
                    </li>
                </ul>
                <div class="register flex jcenter">
                    <p>diegantos 2022</p>
                </div>
            </div>
        </div>
    )
}