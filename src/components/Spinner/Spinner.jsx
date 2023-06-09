import { PuffLoader } from 'react-spinners'
import './Spinner.scss'

export const Spinner = () => {
    return (
      <div className="Spinner">
        <PuffLoader
          size={250}
          color="#00a7ac"
          speedMultiplier={2.5}
          className="Spinner-loader"
        />
        <img
          className="Spinner-img"
          src="/assets/FaviconDS.png"
          alt="DS logo"
          loading="lazy"
        />
      </div>
    );
}