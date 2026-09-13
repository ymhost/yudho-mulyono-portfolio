function EducationCard({
  period,
  institution,
  degree,
  gpa,
  description,
  logo,
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-white/2 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gray-600 hover:bg-white/4 md:p-8">
      {/* Top Highlight */}
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Main Information */}
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        {/* Logo */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-gray-800 bg-white/4 p-4 transition-all duration-500 group-hover:border-gray-600 group-hover:bg-white/6">
          <img
            src={logo}
            alt={`${institution} logo`}
            className="h-full w-full object-contain grayscale transition duration-500 group-hover:grayscale-0"
          />
        </div>

        {/* Information */}
        <div className="flex-1">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                {period}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {institution}
              </h3>

              <p className="mt-1 text-gray-400">
                {degree}
              </p>
            </div>

            {/* GPA */}
            <div className="md:text-right">
              <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                GPA
              </p>

              <p className="mt-1 text-lg font-medium text-white">
                {gpa}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 border-t border-gray-800 pt-7">
        <p className="text-justify leading-relaxed text-gray-400">
          {description}
        </p>
      </div>
    </article>
  );
}

export default EducationCard;