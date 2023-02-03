import './Photo.scss';

export const Photo = () => {

    const grid = [
        { id : 0 , src : '/assets/img/P1052054.jpg' , alt : 'Img' , big : 'Big'},
        { id : 1 , src : '/assets/UBINAS/DJI_0005.jpg' , alt : 'Img' , big : ''},
        { id : 2 , src : '/assets/UBINAS/DJI_0021.jpg' , alt : 'Img' , big : ''},
        { id : 3 , src : '/assets/UBINAS/DJI_0025.jpg' , alt : 'Img' , big : ''},
        { id : 4 , src : '/assets/UBINAS/DJI_0027.jpg' , alt : 'Img' , big : ''},
        { id : 5 , src : '/assets/UBINAS/DJI_0031.jpg' , alt : 'Img' , big : ''},
        { id : 6 , src : '/assets/UBINAS/DJI_0049.jpg' , alt : 'Img' , big : ''},
        { id : 7 , src : '/assets/UBINAS/DJI_0056-2.jpg' , alt : 'Img' , big : ''},
        { id : 8 , src : '/assets/UBINAS/DJI_0077.jpg' , alt : 'Img' , big : ''},
    ]

    return(
        <div className="Photo">
            <h2 className="Photo-h2">Nature</h2>
            <div className="Photo-grid">
                {grid.map( ({ id , src , alt , big }) => 
                    <img className={`Photo-img ${ big }`} key={ id } src={ src } alt={ alt } loading="lazy" />
                )}
            </div>
        </div>
    )
}