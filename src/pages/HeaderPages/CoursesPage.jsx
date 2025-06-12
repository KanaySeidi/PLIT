import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CoursesPage = () => {
  const { t } = useTranslation();

  const [openSections, setOpenSections] = useState({
    sports: false,
    language: false,
    professional: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      sports: section === "sports" ? !prev.sports : false,
      language: section === "language" ? !prev.language : false,
      professional: section === "professional" ? !prev.professional : false,
    }));
  };

  const sportsCourses = [
    { id: 1, title: "Футбол", price: "Бесплатно", lessons: "9 месяцев" },
    { id: 2, title: "Баскетбол", price: "Бесплатно", lessons: "9 месяцев" },
    { id: 3, title: "Волейбол", price: "Бесплатно", lessons: "9 месяцев" },
    { id: 4, title: "Карате", price: "Бесплатно", lessons: "9 месяцев" },
    { id: 5, title: "Бег", price: "Бесплатно", lessons: "9 месяцев" },
  ];

  const languageCourses = [
    { id: 1, title: "Английский", price: "Бесплатно", lessons: "Час за урок" },
    { id: 2, title: "Китайский", price: "Бесплатно", lessons: "Час за урок" },
    { id: 3, title: "Корейский", price: "Бесплатно", lessons: "Час за урок" },
    { id: 4, title: "Немецкий", price: "Бесплатно", lessons: "Час за урок" },
    { id: 5, title: "Японский", price: "Бесплатно", lessons: "Час за урок" },
  ];

  const professionalCourses = [
    {
      id: 1,
      title: "Программирование на Python",
      price: "40 000",
      lessons: "6 месяцев",
    },
    {
      id: 2,
      title: "Графический дизайн",
      price: "40 000",
      lessons: "4 месяца",
    },
    { id: 3, title: "Маркетинг", price: "40 000", lessons: "3 месяца" },
    {
      id: 4,
      title: "Управление проектами",
      price: "20 000",
      lessons: "2 месяца",
    },
    {
      id: 5,
      title: "Финансовая грамотность",
      price: "30 000",
      lessons: "2 месяца",
    },
  ];

  const CourseCard = ({ title, price, lessons }) => (
    <motion.div
      className="bg-white rounded-xl overflow-hidden flex flex-col items-center p-4 text-bordo hover:scale-[1.02] transition-transform duration-300 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-32 bg-white/20 rounded-lg flex items-center justify-center">
        <span className="text-bordo text-sm">Изображение</span>
      </div>
      <h3 className="text-lg font-semibold mt-4 text-center">{title}</h3>
      <p className="text-xl font-bold mt-2">{price}</p>
      <p className="text-sm">{lessons}</p>
    </motion.div>
  );

  const Section = ({ title, courses, sectionKey }) => (
    <motion.div className="mb-6 rounded-xl overflow-hidden" layout>
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full text-left text-2xl font-bold text-white flex items-center justify-between py-4 px-6 bg-bordo hover:bg-[#8B0126] transition-colors"
      >
        {title}
        <motion.span
          className="text-white text-2xl"
          animate={{ rotate: openSections[sectionKey] ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <FaAngleDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {openSections[sectionKey] && (
          <motion.div
            className="bg-black/30 p-6"
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            style={{ originY: 0, overflow: "hidden" }}
            layout
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9],
                delayChildren: 0.3,
                staggerChildren: 0.15,
              }}
              layout
            >
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                >
                  <CourseCard
                    title={course.title}
                    price={course.price}
                    lessons={course.lessons}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <motion.div
      className="min-h-screen bg-gray-400 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="bg-bordo py-6 text-center">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("curs.cursi")}
        </motion.h1>
        <motion.p
          className="mt-2 text-lg max-w-3xl mx-auto"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("curs.cur")}
        </motion.p>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <Section
          title={t("courses.sports")}
          courses={sportsCourses}
          sectionKey="sports"
        />
        <Section
          title={t("courses.language")}
          courses={languageCourses}
          sectionKey="language"
        />
        <Section
          title={t("courses.professional")}
          courses={professionalCourses}
          sectionKey="professional"
        />
      </main>
    </motion.div>
  );
};

export default CoursesPage;
