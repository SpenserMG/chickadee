"use client";

import { useEffect, useRef, useState } from "react";
import Avatar from "@/atoms/Avatar";
import FadeLink from "@/atoms/FadeLink";
import styles from "./Hero.module.scss";
import type { CSSVars } from "@/lib/css-vars";

// NOTE: the 170vh height below is 100vh + RUNWAY_VH and must stay in sync.
const RUNWAY_VH = 70;

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const runway = (window.innerHeight * RUNWAY_VH) / 100;
      const scrolled = Math.min(Math.max(-wrapper.getBoundingClientRect().top, 0), runway);
      setProgress(runway === 0 ? 0 : scrolled / runway);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-[170vh]"
      style={{ "--progress": progress } as CSSVars}
    >
      <section className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center px-6 text-center">
        <nav
          aria-label="Page"
          className={`${styles.nav} absolute top-8 right-6 sm:right-10 text-sm sm:text-base tracking-wide`}
        >
          <FadeLink href="#contact" tone="foreground" className="underline-offset-4 hover:underline">
            Get in touch ↓
          </FadeLink>
        </nav>

        <div className={`${styles.content} flex flex-col items-center gap-8 max-w-2xl`}>
          {/* TODO: replace with <Image src="/headshot.jpg" .../> once a real headshot is added to /public */}
          <Avatar initials="SG" />

          <div className="flex flex-col gap-4">
            <h1 className={`${styles.name} text-3xl sm:text-5xl font-semibold tracking-tight`}>
              Spenser Greeley
            </h1>
            <p className={`${styles.blurb} text-base sm:text-lg leading-relaxed`}>
              Software engineer who likes building things that are fast, clear,
              and a little bit alive. Looking for teams solving hard problems
              where craft still matters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
