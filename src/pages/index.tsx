import styles from './home.module.scss';

import {CarouselPresentation} from '../components/PresentationCarousel';
import {StarMenu} from '../components/StarsCarousel';
import {Card} from '../components/ScheduleCard';

import { ScheduleAnnouncements } from '../components/ScheduleAnnouncements';

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.carroselContainer}>
          <CarouselPresentation />
        </div>
        
        <div className={styles.starContainer}>
          <StarMenu />
        </div>

        <div className={styles.imageContainer}>
          <a><img src={"/images/rca.jpg"} alt="RCA TUPI PRF3" /></a>
          <a><img src={"/images/beto.jpg"} alt="Beto" /></a>
          <a><img src={"/images/toddy.jpg"} alt="Patrulheiro" /></a>
        </div>

        <div className={styles.announcementContainer}>
          <ScheduleAnnouncements />
        </div>

          <Card />
          
        <div className={styles.starContainer}>
          <StarMenu />
        </div>
      </main>
    </>
  )
}
