import * as React from "react";
import styles from "./card.module.css";

export type CardProps = {
  onClick?: () => void;
};
export const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return <div className={styles.card}>{children}</div>;
};
