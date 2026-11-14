"use client";

import { useEffect, useState } from "react";
import IconButton from "@/atoms/IconButton";
import ArrowUpIcon from "@/atoms/icons/ArrowUpIcon";
import type { CSSVars } from "@/lib/css-vars";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <IconButton
      aria-label="Scroll to top"
      onClick={handleClick}
      style={{ "--visible": visible ? 1 : 0 } as CSSVars}
      className={`fixed bottom-6 right-6 z-50 ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </IconButton>
  );
}
