import { CarouselPoster } from '../components/CarouselPoster';
import { Card } from '../components/ScheduleCard';
import { ScheduleVideos } from '../components/ScheduleVideos';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

import { useModal } from '../hooks/useModal';

import { Modal } from '../components/Modal';

import styles from './home.module.scss';

export default function Home() {
  const { modalValues } = useModal();

  return (
    <>
    <div className={styles.mainChargeContainer}>
        <div className={styles.mainChargeContainerSub}>
          <img src="/images/logo.svg" alt="Logo"/>
        </div>
    </div>
    <Modal urlTitle={modalValues.urlTitle} image={modalValues.image}/>

    <Header />
    <main className={styles.mainContainer}>
        
        <div className={styles.designBody}>
          <CarouselPoster/>

          <ScheduleVideos/>

          <Card />
        </div>
      </main>
      <Footer />
    </>
  )
}
