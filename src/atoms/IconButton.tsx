import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./IconButton.module.scss";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function IconButton({ children, className = "", ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border backdrop-blur-sm transition-opacity duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
