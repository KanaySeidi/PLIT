import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const DirectionPage = ({
  image,
  image1,
  title,
  text,
  icon,
  txt1,
  txt2,
  master,
  lvl1,
  lvl2,
  lvl3,
  salary,
  junior,
  middle,
  senior,
  icon2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const levels = [
    { text: junior, id: 1 },
    { text: middle, id: 2 },
    { text: senior, id: 3 },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center pb-8">
      {/* Верхний блок с изображением */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
        <img
          src={image}
          alt="cover"
          className="w-full h-full object-cover brightness-90"
        />
        <Link to={"/"}>
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-black rounded-lg shadow-lg transition-all duration-300">
            <span className="text-xl">←</span>
            <span className="text-sm">Назад</span>
          </div>
        </Link>
      </div>

      {/* Основной контент */}
      <motion.div
        ref={ref}
        className="w-[95%] sm:w-[90%] lg:w-[85%] flex flex-col items-center py-4 sm:py-8 md:py-12 space-y-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Информационная секция */}
        <motion.div
          className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
        >
          <motion.img
            src={image1}
            alt={title}
            className="w-full lg:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-xl shadow-lg"
            variants={imageVariants}
          />
          <motion.div
            className="flex flex-col justify-center space-y-3 px-2 sm:px-4 lg:px-0"
            variants={itemVariants}
          >
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              {title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              {text}
            </p>
          </motion.div>
        </motion.div>

        {/* Серая секция */}
        <motion.div
          className="bg-gray-400/95 backdrop-blur-sm w-full rounded-xl p-4 sm:p-6 md:p-8 space-y-6"
          variants={containerVariants}
        >
          {/* Верхняя часть с иконками */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            {[
              { icon: icon, text: txt1 },
              { icon: icon, text: txt2 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg w-full sm:w-auto"
              >
                <img src={item.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-white text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Нижняя часть */}
          <motion.div
            className="flex flex-col lg:flex-row gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {/* Левая колонка */}
            <motion.div className="lg:w-1/2 space-y-4" variants={itemVariants}>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                {master}
              </h2>
              <div className="space-y-3">
                {[lvl1, lvl2, lvl3].map((level, index) => (
                  <p
                    key={index}
                    className="text-white text-sm sm:text-base bg-white/10 backdrop-blur-sm p-3 rounded-lg"
                  >
                    {level}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Правая колонка */}
            <motion.div className="lg:w-1/2 space-y-4" variants={itemVariants}>
              <div className="bg-[#A1012B] rounded-xl p-4 text-center text-white text-base sm:text-lg lg:text-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                {salary}
              </div>
              <div className="space-y-3">
                {levels.map((level) => (
                  <div
                    key={level.id}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg"
                  >
                    <img src={icon2} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                    <p className="text-white text-sm sm:text-base">
                      {level.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DirectionPage;
