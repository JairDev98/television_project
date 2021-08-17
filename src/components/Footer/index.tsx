import styles from './styles.module.scss';

import { StarMenu } from '../StarsCarousel';

export function Footer(){
    return(
        <>
        <StarMenu />
        <footer className={styles.footerContainer}>
            <img src="/images/logo.svg" alt="Logo"/>
            <h3>TV TUPI</h3>
        </footer>
        </>
    )
}