import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
  color?: string;
}

export const Button: React.FC<IButtonProps> = ({ children, color }) => {
  return (
    <button style={{ backgroundColor: color }} className={styles.btn}>
      {children}
    </button>
  );
};
