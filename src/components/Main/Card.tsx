import React from 'react'
import styles from './Main.module.scss'
import img from '../../assets/images/main-card-img.png'

interface ICardProps {
    title: string,
    description: string
}

export const MainCard: React.FC<ICardProps> = ({title, description}) => {
  const titleMass = title.split(' ')
  const lastWord = titleMass[titleMass.length -1]
  const titleWithoutLastWord = titleMass.splice(0, titleMass.length - 1).join(' ')
  return (
    <div className={styles.card}>
        <img src={img} alt="card img" className={styles.cardImg}/>
        <h3 className={styles.cardTitle}>{titleWithoutLastWord} <span className={styles.cardTitleLastWord}>{lastWord}</span></h3>
        <p className={styles.cardDescription}>{description}</p>
    </div>
  )
}
