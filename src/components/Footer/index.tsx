import styles from './styles.module.scss';

export function Footer(){
    return(
        <>
        <div className={styles.footerSeparator} />
        <footer className={styles.footerContainer}>
            <img src="/images/logo.svg" alt="Logo"/>
            <h3>TV TUPI</h3>
        </footer>
        </>
    )
}