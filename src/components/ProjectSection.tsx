import Heading from "@/atoms/Heading";
import Tag from "@/atoms/Tag";
import FadeLink from "@/atoms/FadeLink";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ProjectSection.module.scss";

type ProjectSectionProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  /** Which umber-gradient direction the background fades in. */
  direction: "left" | "right";
  /** Which side the text column sits on. Independent of `direction`. */
  textAlign: "left" | "right";
};

export default function ProjectSection({
  title,
  description,
  tags,
  href,
  direction,
  textAlign,
}: ProjectSectionProps) {
  const align = textAlign === "left" ? "items-start text-left" : "items-end text-right";

  return (
    <section
      className={`${styles[direction]} min-h-screen flex items-center ${
        textAlign === "left" ? "justify-start" : "justify-end"
      } px-6 sm:px-16 snap-start snap-always`}
    >
      <ScrollReveal className={`flex flex-col gap-5 max-w-xl w-full ${align}`}>
        <Heading>{title}</Heading>
        <p className={`${styles.description} text-base sm:text-lg leading-relaxed`}>
          {description}
        </p>
        <ul
          className={`flex flex-wrap gap-2 ${textAlign === "left" ? "justify-start" : "justify-end"}`}
        >
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </ul>
        {href && (
          <FadeLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            tone="ivory"
            className="mt-2 text-sm sm:text-base font-medium underline underline-offset-4"
          >
            View project →
          </FadeLink>
        )}
      </ScrollReveal>
    </section>
  );
}
