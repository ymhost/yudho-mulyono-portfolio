import profile from "../data/profile";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] pt-20">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:gap-16 md:py-20">

        {/* Left */}
        <div>


         <h1 className="max-w-3xl tracking-tight">
  <span className="block text-3xl font-medium leading-tight text-gray-400 md:text-4xl lg:text-5xl">
    Hello, I'm
  </span>

  <span className="mt-2 block text-5xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl">
    Yudho Mulyono
  </span>
</h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            {profile.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              View Projects ↗
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Download CV ↓
            </a>

          </div>


        </div>

        {/* Right - Profile */}
        <div className="flex justify-center pt-4 md:justify-end md:pt-0">

          <div className="group relative">
  {/* Border belakang */}
  <div className="absolute -right-6 top-12 h-full w-full rounded-2xl border border-gray-800 transition-all duration-500 group-hover:-right-8 group-hover:top-14 group-hover:border-gray-600" />

  {/* Animated Border */}
  <div className="relative overflow-hidden rounded-2xl p-px">
    <div className="absolute -inset-full hidden bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,white_330deg,transparent_360deg)] group-hover:block group-hover:animate-[spin_3s_linear_infinite]" />

    {/* Profile Card */}
    <div className="relative h-105 w-80 overflow-hidden rounded-2xl bg-gray-900 md:h-120 md:w-90">
      <div className="absolute left-5 top-5 z-10 flex gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
      </div>

      <img
        src="/images/profile.png"
        alt="Profile"
        className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
    </div>
  </div>
</div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-gray-500">
        ↓
      </div>

    </section>
  );
}

export default Hero;