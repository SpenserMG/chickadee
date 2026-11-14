import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./FadeLink.module.scss";

type FadeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  tone?: "ivory" | "foreground";
  children: ReactNode;
};

export default function FadeLink({
  tone = "ivory",
  children,
  className = "",
  ...props
}: FadeLinkProps) {
  return (
    <a className={`${styles.link} ${styles[tone]} ${className}`} {...props}>
      {children}
    </a>
  );
}
