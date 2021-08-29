import Vimeo, {VimeoProps} from '@u-wave/react-vimeo';

import styles from './styles.module.scss';

export function ScheduleVideos(){
    const optsOne : VimeoProps ={
        video: '587481455',
        height: '220',
        width: '306',
        autoplay: true,
        muted: true,
        controls: false,
        loop: true,
        showByline: false,
        showTitle: false,
    }

    const optsTwo : VimeoProps ={
        ...optsOne, video : '587510732'
    }

    const optsTre : VimeoProps ={
        ...optsOne, video : '587510978'
    }

    const optsFour : VimeoProps ={
        ...optsOne, video : '587511520'
    }

    const optsFive : VimeoProps ={
        ...optsOne, video : '587510109'
    }

    const optsSix : VimeoProps ={
        ...optsOne, video : '587511800'
    }

    const optsSeven : VimeoProps ={
        ...optsOne, video : '587511894'
    }

    const optsEight : VimeoProps ={
        ...optsOne, video : '587511925'
    }

    const optsNine : VimeoProps ={
        ...optsOne, video : '587512210'
    }

    return(
        <div className={styles.videoContainer} >
           
           <div className={styles.subannouncementContainer}>
                <Vimeo {...optsOne} className={styles.vimeo}/>
                <Vimeo {...optsSix} className={styles.vimeo}/>
                <Vimeo {...optsNine} className={styles.vimeo}/>
            </div>


           <div className={styles.subannouncementContainer}>
                <Vimeo {...optsFour} className={styles.vimeo}/>
                <Vimeo {...optsFive} className={styles.vimeo}/>
                <Vimeo {...optsEight} className={styles.vimeo}/>
           </div>


           <div className={styles.subannouncementContainer}>
                <Vimeo {...optsSeven} className={styles.vimeo}/>
                <Vimeo {...optsTwo} className={styles.vimeo}/>
                <Vimeo {...optsTre} className={styles.vimeo}/>
           </div>
        </div>
    );
}