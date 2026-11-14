import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function HomeView() {
  return (
    <main className="flex-1">
      <Hero />

      <ProjectSection
        direction="right"
        textAlign="left"
        title="Project One"
        description="A short, concrete description of what this project does, the problem it solves, and the part you owned."
        tags={["Next.js", "TypeScript", "PostgreSQL"]}
      />

      <ProjectSection
        direction="left"
        textAlign="right"
        title="Project Two"
        description="Another short, concrete description — what shipped, what was hard about it, and the impact it had."
        tags={["React", "Node.js", "AWS"]}
      />

      <Contact />
      <ScrollToTopButton />
    </main>
  );
}
