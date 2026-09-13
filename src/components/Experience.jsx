import experiences from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-gray-800 bg-[#0a0a0a] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Experience
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            My Experience
          </h2>

        </div>

        {/* Timeline */}
        <div className="mt-14">
          {experiences.map((experience) => (
            <ExperienceItem
              key={`${experience.position}-${experience.company}`}
              period={experience.period}
              position={experience.position}
              company={experience.company}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;