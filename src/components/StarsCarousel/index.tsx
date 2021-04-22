import Carousel from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';

interface istarMenu{
    id: number;
    star: string;
    name:string;
}

export function StarMenu(){
    const stars: istarMenu[] = [
        {id: 1, star:"/images/lima.jpg", name:"LIMA DUARTE"},
        {id: 2, star:"/images/hebe.jpg", name:"HEBE CAMARGO"},
        {id: 3, star:"/images/lolita.jpg", name:"LOLITA RODRIGUES"},
        {id: 4, star:"/images/assis.jpg", name:"ASSIS CHATEAUBRIAND"},
        {id: 5, star:"/images/inezita.jpg", name:"INEZITA BARROSO"},
        {id: 6, star:"/images/eva.jpg", name:"EVA WILMA"},
        {id: 7, star:"/images/silvio.jpg", name:"SILVIO SANTOS"},
        {id: 7, star:"/images/dermival.jpg", name:"DERMIVAL COSTA LIMA"},
        {id: 7, star:"/images/cassiano.jpg", name:"CASSIANO GABUS MENDES"}];

        const responsiveCarousel = [
            {breakpoint:1200, 
                settings:{
                    slidesToShow: 5,
                    }},
            {breakpoint:900, 
                    settings:{
                    slidesToShow: 4,
                    }},
            {breakpoint:800, 
                    settings:{
                    slidesToShow: 3,
                    }},
            {breakpoint:700, 
                    settings:{
                    slidesToShow: 2,
                    }},
                ]        

    return(
        <Carousel
            slidesToShow={6}
            infinite
            speed={1000}
            arrows={false}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={7000}
            responsive={responsiveCarousel}
    >
             {stars.map(star=>(
                 <nav className={styles.starContainer}>
            <div key={star.id}>
                <img src={star.star} alt="Logo" />
                <p>{star.name}</p>
            </div>
                </nav>
                ))}    
        </Carousel>    
    )
}