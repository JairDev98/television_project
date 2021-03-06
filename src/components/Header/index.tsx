import styles from './styles.module.scss';

import { StarMenu } from '../StarsCarousel';

export function Header(){
    return(
        <>
        <header className={styles.headerContainer}>
            <img src="/images/logo.svg" alt="Logo" className={styles.logo}/>
            <img src="/images/logo_tupi.svg" alt="LogoTupi" className={styles.logoTupi}/>
        </header>
        <StarMenu />
        </>
    )
}