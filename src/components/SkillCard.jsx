function SkillCard({ number, category, items }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-white/2 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gray-600 hover:bg-white/4 md:p-7">
      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm tracking-wider text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
          {number}
        </span>

        <span className="text-sm text-gray-600">
          {String(items.length).padStart(2, "0")} skills
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-medium tracking-tight text-white">
        {category}
      </h3>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-gray-800 px-3 py-1.5 text-sm text-gray-400 transition-all duration-300 hover:border-gray-600 hover:bg-white/4 hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;