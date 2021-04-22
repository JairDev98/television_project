import Carousel from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';

interface iBanner{
  id: number;
  img: string;
  description: string;
}

export function CarouselPresentation(){
  const images: iBanner[] = [
    {id:1, img:"/images/tvtupi.jpg", description: "TV TUPI em São Paulo pelo canal 4"},
    {id:2, img:"/images/esso.jpg", description: "Reporter Esso aqui na TV TUPI"},
    {id:3, img:"/images/rancho.jpg", description: "Mazaroppi do cinema para sua casa em Racho Alegre"},
    {id:4, img:"/images/teatro.jpg", description: "Obras clássicas no Grande Treatro Tupi"}]  
  
  return (
    <Carousel
    slidesToShow={1}
    infinite
    speed={5000}
    arrows={false}
    slidesToScroll={1}
    autoplay
    autoplaySpeed={8000}
    fade
    >
          {images.map(banner=>(
            <div className={styles.item} key={banner.id}>
            <img src={banner.img} alt={banner.img} />
            <h3>{banner.description}</h3>
          </div>
        ))}
        </Carousel>
      );
}