// import React from 'react'
import styles from './Navigation.module.scss'
import { Container } from '../UI/Container'
import { Logo } from '../UI/Logo'
import { NavigationList } from './NavigationList'
import cartIcon from '../../assets/images/cart.svg'
import { Contacts } from './Contacts'

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navWrapper}>
                    <Logo />
                    <NavigationList />
                    <button className={styles.cartBtn}>
                        <img src={cartIcon} alt="cart icon" />
                    </button>
                    <Contacts />
                </div>
            </Container>
        </nav>
    )
}
