import styles from './styles.module.scss';

import { StarMenu } from '../StarsCarousel';

export function Footer(){
    return(
        <>
        <StarMenu />
        <footer className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <img src="/images/logo.svg" alt="Logo" className={styles.logo}/>
                <img src="/images/logo_tupi.svg" alt="LogoTupi" className={styles.logoTupi}/>
            </div>     
                <p>Design by Jair Aparecido de Oliveira. Logotype by Paulo Gomes da Silva Junior</p>
        </footer>
        </>
    )
}