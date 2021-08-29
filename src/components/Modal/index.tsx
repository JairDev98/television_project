import { useState, useEffect } from 'react';
import { useWiki } from '../../hooks/useWiki';

import { useModal } from '../../hooks/useModal';

import styles from './styles.module.scss';

interface ModalProps{
    urlTitle: string;
    image: string;
}

export function Modal({ urlTitle, image }: ModalProps){
    const[visible,setVisible]=useState(false);
    
    const { modalValues } = useModal();

    useEffect(()=>{
        urlTitle === 'Rede_Tupi' ? setVisible(false) : setVisible(true);    
    },[modalValues])
    
    const OnClose = () => {
        setVisible(false);
    }
    
    return(
        <>
        <div className={styles.darkBackground}
         onClick={OnClose}
         style={{visibility: visible === false ? 'hidden' : 'visible'}}
         />

        <div className={styles.componentStructure} 
             style={{display: visible === false ? 'none' : 'flex'}}
        >
            <div className={styles.componentLeft}>
                <img src={image} alt={urlTitle}/>
            </div>
            <div className={styles.componentRight}>
                <div className={styles.componentTop}>
                    <div className={styles.componentTitle}>
                        <img src="/images/logo_tupi.svg" alt={"LogoTupi"}/>
                        <b>PRF3 - TV TUPI</b>
                    </div>
                <button
                    onClick={OnClose}
                ><b>X</b></button>    
                </div>
                <div
                    className={styles.componentContent}
                    dangerouslySetInnerHTML={{__html: String(useWiki(urlTitle))}} 
                />
            </div>
        </div>
        </>
    )
}