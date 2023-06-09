import { GridLoader } from 'react-spinners'
import './Spinner.scss'

export const Spinner = () => {
    return (
      <div className="Spinner">
        {/* <GridLoader
          size={15}
          margin={3}
          color="#00a7ac"
          speedMultiplier={0.8}
        /> */}
        <img className='Spinner-img' src="/assets/FaviconDS.png" alt="DS logo" loading='lazy' />
      </div>
    );
}