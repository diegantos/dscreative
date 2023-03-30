import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export const ScrollToTop = () => {

    const { pathname } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' //You can choose instant or smooth (for a smooth movement to the top)
        })
    },[pathname])

    return(
        null
    )
}