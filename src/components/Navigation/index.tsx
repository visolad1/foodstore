// import React from 'react'
import styles from "./Navigation.module.scss";
import { Container } from "../UI/Container";
import { Logo } from "../UI/Logo";
import { NavigationList } from "./NavigationList";
import cartIcon from "../../assets/images/cart.svg";
import { Contacts } from "./Contacts";
import { Button } from "../UI/Button";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navWrapper}>
          <Logo />
          <div className={styles.content}>
            <NavigationList />
            <button className={styles.cartBtn}>
              <img src={cartIcon} alt="cart icon" />
            </button>
            <div className={styles.line}></div>
            <Contacts />
            <div className={styles.btnWrapper}>
              <Button>ЗАКАЗ СТОЛИКА</Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
