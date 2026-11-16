import Heading from "@/atoms/Heading";
import GithubIcon from "@/atoms/icons/GithubIcon";
import LinkedinIcon from "@/atoms/icons/LinkedinIcon";
import IconLink from "@/components/IconLink";
import styles from "./Contact.module.scss";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/SpenserMG",
    icon: <GithubIcon className="h-6 w-6" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/spenser-greeley/",
    icon: <LinkedinIcon className="h-6 w-6" />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${styles.section} min-h-screen flex flex-col items-center justify-center gap-10 px-6 text-center snap-start snap-always`}
    >
      <div className="flex flex-col gap-4 max-w-xl">
        <Heading>Let&rsquo;s connect</Heading>
        <p className={`${styles.copy} text-base sm:text-lg leading-relaxed`}>
          Always open to talking about interesting problems, new roles, or
          collaborations. Find me here:
        </p>
      </div>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <IconLink
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </section>
  );
}
