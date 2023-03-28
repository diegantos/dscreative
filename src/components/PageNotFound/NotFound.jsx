import { Link } from "react-router-dom"
import { Footer } from "../Home/Footer/Footer"
import { Header } from "../Home/Header/Header"
import './NotFound.scss'

export const NotFound = () => {
    return(
        <>
        <Header />
        <div className="NotFound">
            <h2>Page not found!</h2>
            <p>Please, come back to <Link to='/' className="NotFound-link">Homepage</Link></p>
        </div>
        <Footer />
        </>
    )
}