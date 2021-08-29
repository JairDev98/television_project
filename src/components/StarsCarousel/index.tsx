import Carousel from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SquareCarrousel } from './SquareCarrousel';
import { useModal } from '../../hooks/useModal';

import styles from './styles.module.scss';
import { strict } from 'node:assert';

interface istarMenu{
    id: number;
    star: string;
    name:string;
    url: string;
}

export function StarMenu(){
    const { readModalValues } = useModal();

    const stars: istarMenu[] = [
        {id: 1, star:"/images/lima.jpg", url:"Lima_Duarte", name:"LIMA DUARTE"},
        {id: 2, star:"/images/hebe.jpg", url:"Hebe_Camargo",name:"HEBE CAMARGO"},
        {id: 3, star:"/images/lolita.jpg", url:"Lolita_Rodrigues",name:"LOLITA RODRIGUES"},
        {id: 4, star:"/images/assis.jpg", url:"Assis_Chateaubriand",name:"ASSIS CHATEAUBRIAND"},
        {id: 5, star:"/images/inezita.jpg", url:"Inezita_Barroso",name:"INEZITA BARROSO"},
        {id: 6, star:"/images/eva.jpg", url:"Eva_Wilma",name:"EVA WILMA"},
        {id: 7, star:"/images/guarnieri.png", url:"Gianfrancesco_Guarnieri",name:"GIANFRANCESCO GUARNIERI"},
        {id: 8, star:"/images/silvio.jpg", url:"Silvio_Santos",name:"SILVIO SANTOS"},
        {id: 9, star:"/images/airton.JPG", url:"A%C3%ADrton_Rodrigues",name:"Aírton Rodrigues"},
        {id: 10, star:"/images/cassiano.jpg", url:"Cassiano_Gabus_Mendes",name:"CASSIANO GABUS MENDES"},
        {id: 11, star:"/images/nicette.png", url:"Nicette_Bruno",name:"NICETTE BRUNO"},
        {id: 12, star:"/images/tarcisio.jpg", url:"Tarc%C3%ADsio_Meira",name:"TARCISIO MEIRA"},
        {id: 13, star:"/images/tony.png", url:"Tony_Ramos",name:"TONY RAMOS"},
    ];
    
    const settings = {
        slidesToShow: 6,
        infinite: true,
        speed: 3000,
        arrows: false,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        cssEase: 'linear'
    }

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
        {breakpoint:400, 
                settings:{
                slidesToShow: 1,
                }},
            ]        

    return(
        <>
        <SquareCarrousel />

        <Carousel {...settings} responsive={responsiveCarousel} className={styles.starSlide} >
             {stars.map(star=>(
                 <nav key={star.id} className={styles.starContainer}>
            <div>
                <a 
                    onClick={() => readModalValues({urlTitle: star.url, image:star.star})} 
                >
                    <img src={star.star} alt={star.name} />
                    <p>{star.name}</p>
                </a>
            </div>
                </nav>
                ))}    
        </Carousel>

        <SquareCarrousel />
    </>        
    )
}