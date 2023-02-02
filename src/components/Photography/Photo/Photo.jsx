import './Photo.scss';

export const Photo = () => {

    const grid = [
        { id : 0 , src : '/assets/UBINAS/DJI_0005.jpg' , alt : 'Img' },
        { id : 1 , src : '/assets/UBINAS/DJI_0011.jpg' , alt : 'Img' },
        { id : 2 , src : '/assets/UBINAS/DJI_0021.jpg' , alt : 'Img' },
        { id : 3 , src : '/assets/UBINAS/DJI_0025.jpg' , alt : 'Img' },
        { id : 4 , src : '/assets/UBINAS/DJI_0027.jpg' , alt : 'Img' },
        { id : 5 , src : '/assets/UBINAS/DJI_0031.jpg' , alt : 'Img' },
        { id : 6 , src : '/assets/UBINAS/DJI_0049.jpg' , alt : 'Img' },
        { id : 7 , src : '/assets/UBINAS/DJI_0056-2.jpg' , alt : 'Img' },
        { id : 8 , src : '/assets/UBINAS/DJI_0077.jpg' , alt : 'Img' },
    ]

    return(
        <div className="Photo Wrapper">
            <div className="Photo-grid">
                {grid.map( ({ id , src , alt }) => 
                    <img key={ id } src={ src } alt={ alt } loading="lazy" />
                )}
            </div>
        </div>
    )
}