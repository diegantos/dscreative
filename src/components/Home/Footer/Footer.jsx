import './Footer.scss'

export const Footer = () => {
    return(
        <div className="Footer">
            <div className="Footer-Wrapper Wrapper">
                <ul className="Footer-ul">
                    <li className="Footer-li">
                        <a href="https://www.instagram.com/diegantos/" className="Footer-a" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li className="Footer-li">
                        <a href="https://vimeo.com/diegantos" className="Footer-a" target="_blank"><i class="fa-brands fa-vimeo-v"></i></a>
                    </li>
                    <li className="Footer-li">
                        <a href="https://www.youtube.com/@diegantos" className="Footer-a" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                    </li>
                    <li className="Footer-li">
                        <a href="https://www.linkedin.com/in/diegantos/" className="Footer-a" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>
                <div class="Footer-register">
                    <p className=''>diegantos <i class="fa-regular fa-copyright"></i> 2023</p>
                </div>
            </div>
        </div>
    )
}