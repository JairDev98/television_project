import {CarouselPresentation} from './PresentationCarousel';
import { PostersTv } from './PostersTv';

import styles from './styles.module.scss';

export function CarouselPoster(){
    return(
        <div className={styles.carouselPoster}>
            <CarouselPresentation />
            <PostersTv />
        </div>
    )
}