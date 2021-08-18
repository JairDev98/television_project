import Vimeo, {VimeoProps} from '@u-wave/react-vimeo';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

import styles from './styles.module.scss';

/**
function useWindowSize() {
    const [size, setSize] = useState([306,220]);
    useLayoutEffect(() =>{
        const updateSize = () => {
            setSize([window.innerWidth - 1060, window.innerHeight - 447]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}
 */

export function ScheduleVideos(){
    //const[width, heigth] = useWindowSize();
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

    console.log(optsOne);

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
                <div className={styles.subannouncementContainer2}>
                    <Vimeo {...optsNine} className={styles.vimeo}/>
                </div>
            </div>


           <div className={styles.subannouncementContainer}>
                <Vimeo {...optsFour} className={styles.vimeo}/>
                <Vimeo {...optsFive} className={styles.vimeo}/>
                <div className={styles.subannouncementContainer2}>
                    <Vimeo {...optsEight} className={styles.vimeo}/>
                </div>
           </div>


           <div className={styles.subannouncementContainer}>
                <Vimeo {...optsSeven} className={styles.vimeo}/>
                <Vimeo {...optsTwo} className={styles.vimeo}/>
                <div className={styles.subannouncementContainer2}>
                    <Vimeo {...optsTre} className={styles.vimeo}/>
                </div>
           </div>
        </div>
    );
}