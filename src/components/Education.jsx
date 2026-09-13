import education from "../data/education";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-28 border-t border-gray-800 bg-[#0a0a0a] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Education
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            My Education
          </h2>

        </div>

        {/* Education List */}
        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <EducationCard
  key={`${item.institution}-${item.degree}`}
  period={item.period}
  institution={item.institution}
  degree={item.degree}
  gpa={item.gpa}
  description={item.description}
  logo={item.logo}
/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;