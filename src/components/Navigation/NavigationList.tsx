// import React from 'react'
import styles from './Navigation.module.scss'

export const NavigationList = () => {
    const navList = [
        { id: 0, name: "ГЛАВНАЯ", link: "/" },
        { id: 1, name: "МЕНЮ", link: "/" },
        { id: 3, name: "О НАС", link: "/" },
        { id: 4, name: "БРОНЬ", link: "/" }
    ]
    return (
        <ul className={styles.navList}>
            {navList.map(item =>
                <li className={styles.navListItem} key={item.id}><a href={item.link}>{item.name}</a></li>
            )}
        </ul>
    )
}
