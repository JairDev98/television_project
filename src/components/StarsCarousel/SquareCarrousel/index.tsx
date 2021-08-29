import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';

export function SquareCarrousel(){

    const squareLoop = [...Array(100)]
    
    const settings = {
        infinite: true,
        speed: 460,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 460,
        variableWidth: true,
        pauseOnHover: false,
        cssEase: 'linear',
    }

    return(
        <>
    <div className={styles.squareBorder}>
    
    <Slider {...settings}>
        {squareLoop.map(square =>(
            <div key={square + 1}>
              <div className={styles.childrenSquare} />
            </div>
            ))}
        </Slider>
    </div>
    </>        
    )
}