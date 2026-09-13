function ExperienceItem({
  period,
  position,
  company,
  description,
  technologies,
}) {
  return (
    <article className="group relative border-l border-gray-800 pl-8 md:pl-10">
      {/* Timeline dot */}
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-gray-600 bg-[#0a0a0a] transition-all duration-300 group-hover:border-white group-hover:bg-white" />

      {/* Experience Card */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-white/2 p-6 transition-all duration-500 hover:border-gray-600 hover:bg-white/4 md:p-8">
        {/* Top highlight */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              {period}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {position}
            </h3>

            <p className="mt-1 text-gray-400">
              {company}
            </p>
          </div>

          <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
            Experience
          </span>
        </div>

        {/* Description */}
        <p className="mt-7 text-justify leading-relaxed text-gray-400">
  {description}
</p>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-800 px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-gray-600 hover:bg-white/4 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceItem;