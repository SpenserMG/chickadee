import type { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  children: ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className={`${styles.heading} text-2xl sm:text-4xl font-semibold tracking-tight`}>
      {children}
    </h2>
  );
}
