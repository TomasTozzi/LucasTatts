import React, { useState, useEffect } from "react";

const CircleWithArrow = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const halfPageHeight = document.documentElement.scrollHeight / 2;
    // Mostrar si está por debajo de la mitad de la página, ocultar si está por encima
    setShow(scrollPosition > halfPageHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 z-50 transition-opacity duration-500 ${
        show ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Círculo */}
        <div className="w-full h-full bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center shadow-lg">
          {/* Flecha */}
          <div className="w-8 h-8 flex items-center justify-center">
            <a href="#inicio">
              <svg
                className="w-6 h-6 text-black transform "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 15l-7-7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleWithArrow;
