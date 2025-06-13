<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 6589de2b90a9475c682b9925c69c69dc7f2c83bb
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBook,
  FaRunning,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const CourseCard = ({ title, description, price, imagePreview }) => (
  <div className="bg-white rounded-2xl shadow-md p-4">
    {imagePreview && (
      <img
        src={imagePreview}
        alt={title}
        className="w-full h-32 object-cover rounded-xl mb-3"
        onError={(e) => (e.target.style.display = "none")}
      />
    )}
    <h3 className="text-xl font-semibold text-[#222]">{title}</h3>
    <p className="text-sm text-[#333] mt-1">{description}</p>
    <p className="text-sm text-[#333] mt-1">Цена: {price} руб.</p>
  </div>
);

const Section = ({
  title,
  courses,
  sectionKey,
  icon,
  openSection,
  setOpenSection,
}) => {
  const isOpen = openSection === sectionKey;

  const toggleSection = () => {
    setOpenSection(isOpen ? null : sectionKey);
  };

  return (
    <div className="mb-6">
      <button
        onClick={toggleSection}
        className="w-full flex items-center justify-between text-white bg-[#8B0000] rounded-2xl p-4 text-lg font-medium hover:bg-[#600000] transition-colors duration-200"
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </div>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white/80 rounded-2xl shadow-md mt-3 p-4 overflow-hidden"
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-[#8B0000] rounded-xl p-2"
              initial={{ y: 20, opacity: 0, boxShadow: "0 0 0px #8B0000" }}
              animate={{
                y: 0,
                opacity: 1,
                boxShadow: "0 0 20px rgba(139, 0, 0, 0.5)",
              }}
              transition={{ duration: 0.5 }}
            >
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    imagePreview={course.imagePreview}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CoursesPage = () => {
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem("courses");
    return savedCourses
      ? JSON.parse(savedCourses)
      : { sports: [], language: [], professional: [] };
  });

  const [openSection, setOpenSection] = useState(null); // ТОЛЬКО одна секция

  useEffect(() => {
    const handleStorageChange = () => {
      const savedCourses = localStorage.getItem("courses");
      if (savedCourses) setCourses(JSON.parse(savedCourses));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-[#F9F9F9] text-[#222] p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="bg-[#8B0000] text-white rounded-2xl p-6 mb-6 text-center">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Курсы
        </motion.h1>
        <motion.p
          className="mt-2 text-lg max-w-3xl mx-auto text-[#EEE]"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Выберите курс для обучения
        </motion.p>
      </header>

      <main className="max-w-7xl mx-auto">
        <Section
          title="Спортивные курсы"
          courses={courses.sports}
          sectionKey="sports"
          icon={<FaRunning className="text-xl" />}
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
        <Section
          title="Языковые курсы"
          courses={courses.language}
          sectionKey="language"
          icon={<FaGlobe className="text-xl" />}
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
        <Section
          title="Профессиональные курсы"
          courses={courses.professional}
          sectionKey="professional"
          icon={<FaBook className="text-xl" />}
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
      </main>
    </motion.div>
  );
};

export default CoursesPage;
