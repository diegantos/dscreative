import './Photo.scss';

export const Photo = () => {

    const grid = [
        { id : 0 , src : '' , alt : '' },
        { id : 1 , src : '' , alt : '' },
        { id : 2 , src : '' , alt : '' },
        { id : 3 , src : '' , alt : '' },
        { id : 4 , src : '' , alt : '' },
        { id : 5 , src : '' , alt : '' },
        { id : 6 , src : '' , alt : '' },
        { id : 7 , src : '' , alt : '' },
        { id : 8 , src : '' , alt : '' },
    ]

    return(
        <div className="Photo Wrapper">
            <div className="Photo-grid">
                {grid.map()}
                <img src="/assets/UBINAS/DJI_0005.jpg" alt="Img" />
                <img src="/assets/UBINAS/DJI_0005.jpg" alt="Img" />
                <img src="/assets/UBINAS/DJI_0005.jpg" alt="Img" />
                <img src="/assets/UBINAS/DJI_0005.jpg" alt="Img" />
                <img src="/assets/UBINAS/DJI_0005.jpg" alt="Img" />
            </div>
        </div>
    )
}