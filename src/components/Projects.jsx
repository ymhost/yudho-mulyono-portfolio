import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-gray-800 bg-[#0a0a0a] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Projects
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Selected Work
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Beberapa project yang saya kerjakan sebagai bagian dari
            proses belajar dan pengembangan kemampuan di bidang
            software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;