// import React from 'react'
import styles from "./Main.module.scss";
import { Navigation } from "../Navigation";
import { Button } from "../UI/Button";
import { Container } from "../UI/Container";
import { MainCards } from "./MainCards";

export const Main = () => {
  return (
    <main className={styles.main} id="main">
      <Navigation />
      <Container>
        <div className={styles.content}>
          <h3 className={styles.subtitle}>Добро пожаловать в</h3>
          <h1 className={styles.title}>Наш ресторан</h1>
          <div className={styles.textWrapper}>
            <div className={styles.line}></div>
            <p className={styles.text}>ДОМ ЛУЧШЕЙ ЕДЫ</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.btnWrapper}>
            <Button>view menu</Button>
          </div>
        </div>
        <MainCards />
      </Container>
    </main>
  );
};
