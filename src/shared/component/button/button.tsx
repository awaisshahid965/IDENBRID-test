import React, { FC, ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  afterIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  disabled = false,
  afterIcon = null,
}) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {title}
      {afterIcon}
    </button>
  );
};

export default Button;
