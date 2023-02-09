import './About.scss';
import { BackgroundElement } from "../../Common/Common"

export const About = () => {
    return(
        <>
        <BackgroundElement 
            url='/assets/P1006460.jpg'
            clase='About-background' />

        <div className="About Wrapper">
            <div className="About-info">
                <p className="About-p">Diego Santos is a photographer and filmmaker based between León and his hometown in Asturias, in north Spain.</p>
                <p className="About-p">His work resolves around his strong passion for mountains, sports, lifestyle and festivals.</p>
            </div>

            <div className="About-contact">
                <p className="About-subp">Contact</p>
                <a href="mailto:info@diegantos.com?subject=Hello%20there!" className="About-mail">info@diegantos.com</a>
            </div>

        </div>
        </>
    )
}