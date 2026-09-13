function About() {
  const services = [
    "Web Application Development",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "API Integration",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-gray-800 bg-[#0a0a0a] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            About
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          {/* Description */}
          <div className="flex flex-col justify-center">
            <p className="max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Saya merupakan lulusan S1 Teknik Informatika yang memiliki
              ketertarikan pada pengembangan aplikasi web dan software
              development.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Saya memiliki pengalaman dalam membangun aplikasi berbasis web
              menggunakan teknologi seperti PHP, Laravel, JavaScript, MySQL,
              serta React.
            </p>
          </div>

          {/* What I Do */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-white/2 p-7 transition-all duration-500 hover:border-gray-600 hover:bg-white/4 md:p-8">
            {/* Glass highlight */}
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium tracking-tight text-white">
                What I Do
              </h3>

              <span className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                05
              </span>
            </div>

            <div className="mt-8">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group/item flex items-center gap-4 border-b border-gray-800 py-4 first:pt-0 last:border-b-0"
                >
                  <span className="text-sm text-gray-600 transition-colors duration-300 group-hover/item:text-gray-300">
                    0{index + 1}
                  </span>

                  <span className="h-px w-5 bg-gray-700 transition-all duration-300 group-hover/item:w-8 group-hover/item:bg-gray-400" />

                  <span className="text-sm text-gray-400 transition-colors duration-300 group-hover/item:text-white md:text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;