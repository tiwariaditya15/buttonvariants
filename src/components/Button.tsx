import * as React from "react";
import styles from "./button.module.css";

export type ButtonProps = {
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const className = `${styles.button} ${styles[variant]}`;
  return (
    <button onClick={() => onClick?.()} className={className}>
      {children}
    </button>
  );
};
