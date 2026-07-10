"use client";

import ScrollStack, {
  ScrollStackItem,
} from "@/components/ui/scrollstack";
import ProjectCard from "@/components/ProjectCard";
import { Project, projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="grid-background relative overflow-hidden py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-48 right-0 h-[550px] w-[550px] rounded-full bg-[#ED254E]/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#011936] sm:text-5xl">
            Projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            A collection of AI, machine learning and computer vision projects
            spanning research, internships and personal exploration.
          </p>
        </div>

        <ScrollStack
          useWindowScroll
          className="mx-auto max-w-5xl"
          itemDistance={30}
          itemScale={0.04}
          itemStackDistance={28}
          stackPosition="18%"
          scaleEndPosition="10%"
          baseScale={0.6}
          rotationAmount={0}
          blurAmount={0}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.id} itemClassName="mx-auto w-full max-w-3xl">
              <ProjectCard project={project} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}