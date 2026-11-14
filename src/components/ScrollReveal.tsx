"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./ScrollReveal.module.scss";
import type { CSSVars } from "@/lib/css-vars";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Assumes visible until the observer reports otherwise, so content isn't
  // hidden if JS is slow to hydrate or unavailable.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${className}`}
      style={{ "--visible": visible ? 1 : 0 } as CSSVars}
    >
      {children}
    </div>
  );
}
