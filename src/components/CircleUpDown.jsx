import { useState, useEffect, useCallback } from "react";

const ScrollButton = () => {
  const [show, setShow] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const halfPageHeight = (documentHeight - windowHeight) / 2;

    if (scrollPosition < halfPageHeight) {
      setShow(true);
      setScrollDirection('down');
    } else if (scrollPosition >= halfPageHeight) {
      setShow(true);
      setScrollDirection('up');
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const linkTarget = scrollDirection === 'down' ? "#contacto" : "#inicio";
  const arrowDirection = scrollDirection === 'down' ? "M5 9l7 7 7-7" : "M19 15l-7-7-7 7";

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 z-50 ${
        show ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Círculo */}
        <div className="w-full h-full bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center shadow-lg">
          {/* Flecha */}
          <div className="w-8 h-8 flex items-center justify-center">
            <a href={linkTarget}>
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={arrowDirection}
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollButton;
