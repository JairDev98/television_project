import styles from './home.module.scss';

import {Menu} from '../components/Menu';
import {CarouselPresentation} from '../components/PresentationCarousel';
import {Card} from '../components/ScheduleCard';

import { ScheduleAnnouncements } from '../components/ScheduleAnnouncements';

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

        <div className={styles.announcementContainer}>
          <ScheduleAnnouncements />
        </div>

        <div className={styles.cardPrograming}>
          <Card />
          </div>
        </div>
      </main>
    </>
  )
}
