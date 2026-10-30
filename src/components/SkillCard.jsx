function SkillCard({ category, items }) {
  return (
    <div className="rounded-2xl border border-gray-800 p-5 transition-colors duration-300 hover:border-gray-600 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white md:text-xl">
          {category}
        </h3>

        <span className="text-sm text-gray-500">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-7 gap-y-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex min-w-20 items-center gap-2.5 text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <Icon className="h-5 w-5 shrink-0" />

              <span className="text-sm font-medium whitespace-nowrap">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
