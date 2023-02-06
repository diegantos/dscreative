import './Photo.scss';

export const Photo = () => {

    const natureGrid = [
        { id : 0 , src : '/assets/img/P1052054.jpg' , alt : 'Img' , size : 'Big'},
        { id : 1 , src : '/assets/img/P1085588.jpg' , alt : 'Img' , size : ''},
        { id : 2 , src : '/assets/img/P1057378.jpg' , alt : 'Img' , size : ''},
        { id : 3 , src : '/assets/img/P1021312-Editar.jpg' , alt : 'Img' , size : ''},
        { id : 4 , src : '/assets/img/P1052087.jpg' , alt : 'Img' , size : ''},
        { id : 5 , src : '/assets/img/P1069544-Editar.jpg' , alt : 'Img' , size : ''},
        { id : 6 , src : '/assets/UBINAS/DJI_0049.jpg' , alt : 'Img' , size : ''},
        { id : 7 , src : '/assets/img/P1085280.jpg' , alt : 'Img' , size : 'Big'},
        { id : 8 , src : '/assets/img/P1054809.jpg' , alt : 'Img' , size : ''},
        { id : 9 , src : '/assets/UBINAS/DJI_0077.jpg' , alt : 'Img' , size : ''},
        { id : 10 , src : '/assets/img/DJI_0027-Editar.jpg' , alt : 'Img' , size : ''},
        { id : 11 , src : '/assets/img/P1057962.jpg' , alt : 'Img' , size : ''},
    ]

    const festGrid = [
        { id : 0 , src : '/assets/img/P1001714.jpg' , alt : 'Img' , size : 'Big' },
        { id : 1 , src : '/assets/img/P1000966.jpg' , alt : 'Img' , size : '' },
        { id : 2 , src : '/assets/img/P1000952.jpg' , alt : 'Img' , size : '' },
        { id : 3 , src : '/assets/img/P1001845.jpg' , alt : 'Img' , size : '' },
        { id : 4 , src : '/assets/img/P1001714.jpg' , alt : 'Img' , size : '' },
        { id : 5 , src : '/assets/img/P1001714.jpg' , alt : 'Img' , size : '' },
        { id : 6 , src : '/assets/img/P1001714.jpg' , alt : 'Img' , size : '' },
        { id : 7 , src : '/assets/img/P1001714.jpg' , alt : 'Img' , size : '' },
        { id : 8 , src : '/assets/img/P1001714.jpg' , alt : 'Img' , size : '' },
    ]

    return(
        <div className="Photo">
            <h2 className="Photo-h2">Nature</h2>
            <div className="Photo-grid">
                {natureGrid.map( ({ id , src , alt , size }) => 
                    <img className={`Photo-img ${ size }`} key={ id } src={ src } alt={ alt } loading="lazy" />
                )}
            </div>

            <h2 className="Photo-h2">Festival</h2>
            <div className="Photo-grid">
                {festGrid.map( ({ id , src , alt , size}) =>
                    <img  className={`Photo-img ${ size }`} key={ id } src={ src } alt={ alt } />
                )}
            </div>
        </div>
    )
}