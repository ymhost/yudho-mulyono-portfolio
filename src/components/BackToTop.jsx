import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-gray-400 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-lg transition-all duration-500 ease-out hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_35px_rgba(255,255,255,0.08)] ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-5 scale-90 opacity-0"
      }`}
    >
      {/* Glass highlight */}
      <span className="pointer-events-none absolute inset-x-3 top-0 h-px rounded-full bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
      >
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}

export default BackToTop;