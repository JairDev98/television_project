import styles from './home.module.scss';

import {CarouselPresentation} from '../components/PresentationCarousel';
import {Card} from '../components/ScheduleCard';

import { ScheduleVideos } from '../components/ScheduleVideos';

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.designTelevision}>
          <div className={styles.divScreenAnnoucment}>
            <div className={styles.carroselContainer}>
              <CarouselPresentation />
            </div>

            <div className={styles.imageContainer}>
              <a><img src={"/images/rca.jpg"} alt="RCA TUPI PRF3" /></a>
              <a><img src={"/images/beto.jpg"} alt="Beto" /></a>
              <a><img src={"/images/toddy.JPG"} alt="Patrulheiro" /></a>
            </div>
          </div>

       
          <ScheduleVideos />
       

        <div className={styles.cardPrograming}>
          <Card />
          </div>
        </div>
      </main>
    </>
  )
}
