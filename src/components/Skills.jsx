import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-gray-800 bg-[#0a0a0a] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Skills
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Skills & Expertise
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Teknologi, tools, dan aplikasi yang saya gunakan dalam pengembangan
            web serta pekerjaan administrasi.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="mt-12 space-y-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
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
