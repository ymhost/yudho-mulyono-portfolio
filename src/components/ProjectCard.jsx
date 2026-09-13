function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  demo,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-white/2 transition-all duration-500 hover:-translate-y-1 hover:border-gray-600 hover:bg-white/4">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-70" />

        {/* Project Number */}
        <span className="absolute left-5 top-5 text-sm font-medium tracking-wider text-white/60">
          PROJECT
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>

          <span className="text-gray-600 transition-colors duration-300 group-hover:text-white">
            ↗
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-800 px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-gray-600 hover:bg-white/4 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex items-center gap-6">
          

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white transition-colors duration-300 hover:text-gray-400"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;