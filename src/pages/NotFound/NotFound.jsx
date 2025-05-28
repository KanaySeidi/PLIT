import { useState, useRef } from "react";

const NotFound = () => {
  const [lightPos, setLightPos] = useState({ x: "50%", y: "50%" });
  const [transformStyle, setTransformStyle] = useState({});
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLightPos({ x: `${x}px`, y: `${y}px` });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const maxRotate = 10; // градусов
    const maxScale = 1.05; // масштаб при наведении

    const rotateX = -deltaY * maxRotate;
    const rotateY = deltaX * maxRotate;

    setTransformStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${maxScale})`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: "transform 0.3s ease",
    });
    setLightPos({ x: "50%", y: "50%" });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <p className="text-xl text-gray-800 dark:text-gray-200 mt-4 font-medium">
          Ой! Ты заблудился.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Такой страницы не существует. Или она сбежала 🤷‍♂️
        </p>

        <a
          href="/"
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white font-semibold text-lg shadow-lg overflow-hidden"
          style={{
            ...transformStyle,
            backgroundImage: `
              radial-gradient(circle 100px at ${lightPos.x} ${lightPos.y}, rgba(255,255,255,0.4), transparent 80%),
              linear-gradient(to right, #ec4899, #8b5cf6, #06b6d4)
            `,
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative flex items-center gap-2 z-10">
            <span className="text-xl">🏠</span>
            На главную
          </span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;