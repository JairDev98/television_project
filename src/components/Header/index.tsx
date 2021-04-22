import styles from './styles.module.scss';

import {Menu} from '../Menu';

export function Header(){
    return(
        <>
        <header className={styles.headerContainer}>
            <img src="/images/logo.svg" alt="Logo"/>
            <h1>TV TUPI</h1>
        </header>
        <Menu />
        </>
    )
}