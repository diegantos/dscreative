import './Footer.scss'

export const Footer = () => {

    const socialMedia = [
        { id : 0 , href : 'https://www.instagram.com/diegantos/' , src : '/assets/instagram.svg' , alt : 'instagram' },
        { id : 1 , href : 'https://vimeo.com/diegantos' , src : '/assets/vimeo.svg' , alt : 'vimeo' },
        { id : 2 , href : 'https://www.youtube.com/@diegantos' , src : '/assets/youtube.svg' , alt : 'youtube' },
        { id : 3 , href : 'https://www.linkedin.com/in/diegantos/' , src : '/assets/linkedin.svg' , alt : 'linkedin' }
    ]

    return(
        <div className="Footer">

            <div className="Footer-Wrapper Wrapper">
                <ul className="Footer-ul">
                    {socialMedia.map(({ id, href, src, alt }) =>
                        <li key={ id } className="Footer-li">
                            <a href={ href } className='Footer-a' target="_blank">
                                <img className='Footer-img' src={ src } alt={ alt } />
                            </a>
                        </li>
                    )}
                </ul>
            </div>

            <div class="Footer-register">
                <p className='Footer-p'>diegantos</p>
                <svg className='Footer-c' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10 10-4.58 10-10S17.421 2 12 2zm0 13c.992 0 1.85-.265 2.293-.708l1.414 1.415C14.581 16.832 12.901 17 12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5c.901 0 2.582.168 3.707 1.293l-1.414 1.414C13.851 9.264 12.993 9 12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3z"/></svg>
                <p className='Footer-p'>2023</p>
            </div>

        </div>
    )
}