import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const [activePill, setActivePill] = useState({
    left: 0,
    width: 0,
  });

  const menuContainerRef = useRef(null);

  const menuItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

  // =========================
  // Detect scroll
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Detect active section
  // =========================

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          );
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // =========================
  // Move active pill
  // =========================

  useEffect(() => {
    const updateActivePill = () => {
      if (!menuContainerRef.current) return;

      const activeLink =
        menuContainerRef.current.querySelector(
          `[data-active="true"]`
        );

      if (!activeLink) return;

      const containerRect =
        menuContainerRef.current.getBoundingClientRect();

      const linkRect =
        activeLink.getBoundingClientRect();

      setActivePill({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    };

    updateActivePill();

    window.addEventListener("resize", updateActivePill);

    return () => {
      window.removeEventListener(
        "resize",
        updateActivePill
      );
    };
  }, [activeSection]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "px-4 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`relative mx-auto max-w-6xl transition-all duration-500 ${
          isScrolled
            ? "rounded-2xl border border-white/10 bg-white/6 shadow-2xl shadow-black/20 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >

        {/* Glass Highlight */}
        {isScrolled && (
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        )}

        <div className="flex items-center justify-between px-6 py-5">

          {/* Logo */}
         <div className="relative overflow-hidden rounded-full p-px">
  {/* Animated Border */}
  <div className="relative overflow-hidden rounded-full p-px">
  {/* Animated Border */}
  <div className="absolute -inset-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_315deg,white_340deg,transparent_360deg)] opacity-70" />

  {/* Dark Liquid Glass Logo */}
  <a
    href="#"
    className="relative block rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:bg-black/50"
  >
    YM
  </a>
</div>

</div>

          {/* Desktop Menu */}
          <div
            ref={menuContainerRef}
            className="relative hidden items-center rounded-full border border-gray-800 bg-white/3 p-1 md:flex"
          >

            {/* Moving Active Pill */}
            <span
              className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition-all duration-500 ease-out"
              style={{
                left: `${activePill.left}px`,
                width: `${activePill.width}px`,
              }}
            />

            {menuItems.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  data-active={isActive}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-6 md:flex">
            <a
  href="https://www.linkedin.com/in/yudho-mulyono-679a253a9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-gray-300 transition hover:text-white"
>
  LinkedIn ↗
</a>

            <a
              href="/cv/cv-yudho-mulyono.pdf"
              target="_blank"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-xl text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
<div
  className={`overflow-hidden md:hidden transition-[max-height,opacity,transform] duration-500 ease-out ${
    isOpen
      ? "max-h-96 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"
  }`}
>
  <div className="px-4 pb-4 pt-3">
    {/* Glass Container */}
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10
        bg-white/6 backdrop-blur-lg
        shadow-2xl shadow-black/20
        transition-all duration-500 ease-out
        ${
          isOpen
            ? "translate-y-0 scale-100"
            : "-translate-y-3 scale-[0.98]"
        }`}
    >
      {/* Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      {/* Menu Items */}
      <div className="relative p-2">
        {menuItems.map((item, index) => {
          const isActive = activeSection === item.href;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-xl px-4 py-3 text-sm transition-all duration-500 ease-out ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              } ${
                isActive
                  ? "border border-white/10 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.04)]"
                  : "border border-transparent text-gray-400 hover:bg-white/6 hover:text-white"
              }`}
              style={{
                transitionDelay: isOpen
                  ? `${100 + index * 60}ms`
                  : "0ms",
              }}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  </div>
</div>



      </div>
    </nav>
  );
}

export default Navbar;