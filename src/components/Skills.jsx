import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-gray-800 bg-[#0a0a0a] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Skills
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Beberapa teknologi dan tools yang saya gunakan dalam
            pengembangan aplikasi web.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              number={String(index + 1).padStart(2, "0")}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;