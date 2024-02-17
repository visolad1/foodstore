// import React from 'react'
import styles from './Navigation.module.scss'
import phoneIcon from '../../assets/images/phone.svg'

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.phoneWrapper}>
                <img src={phoneIcon} alt="phone icon" />
                <p className={styles.phone}>+999-888-76-54</p>
            </div>
            <p className={styles.contactsText}>Свяжитесь с нами для бронирования</p>
        </div>
    )
}
