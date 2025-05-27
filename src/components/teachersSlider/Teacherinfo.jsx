import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaArrowLeft,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const skillBarVariants = {
  hidden: { width: 0 },
  visible: (width) => ({
    width: `${width}%`,
    transition: { duration: 1.5, ease: "easeOut" },
  }),
};

export const TeacherInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const teachers = t("teachers.list", { returnObjects: true }) || [];
  const currentTeacherId = location.pathname.split("/").pop();
  const teacher = Array.isArray(teachers) ? teachers[currentTeacherId] : null;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleBack = () => {
    navigate("/", { state: { scrollToTeachers: true } });
  };

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[#63001F]">
            Информация о преподавателе не найдена
          </h2>
          <button
            onClick={handleBack}
            className="mt-4 flex items-center text-[#63001F] hover:text-[#4a0017]"
          >
            <FaArrowLeft className="mr-2" />
            Назад к преподавателям
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <button
          onClick={handleBack}
          className="mb-8 flex items-center text-[#63001F] hover:text-[#4a0017]"
        >
          <FaArrowLeft className="mr-2" />
          Назад к преподавателям
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-full h-auto rounded-xl shadow-md"
              />
              <div className="mt-6 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#63001F] mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-3">
                  {teacher.contact?.phone && (
                    <p>
                      <strong>Телефон:</strong> {teacher.contact.phone}
                    </p>
                  )}
                  {teacher.contact?.email && (
                    <p>
                      <strong>Email:</strong> {teacher.contact.email}
                    </p>
                  )}
                  {teacher.contact?.website && (
                    <p>
                      <strong>Сайт:</strong> {teacher.contact.website}
                    </p>
                  )}
                  {teacher.contact?.address && (
                    <p>
                      <strong>Адрес:</strong> {teacher.contact.address}
                    </p>
                  )}
                </div>
                {teacher.social && (
                  <div className="mt-6 flex justify-center gap-4">
                    {teacher.social.facebook && (
                      <a
                        href={teacher.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#63001F] hover:text-[#4a0017] transition-colors"
                      >
                        <FaFacebook size={24} />
                      </a>
                    )}
                    {teacher.social.instagram && (
                      <a
                        href={teacher.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#63001F] hover:text-[#4a0017] transition-colors"
                      >
                        <FaInstagram size={24} />
                      </a>
                    )}
                    {teacher.social.linkedin && (
                      <a
                        href={teacher.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#63001F] hover:text-[#4a0017] transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold text-[#63001F] mb-2">
                {teacher.name}
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">{teacher.role}</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {teacher.description}
              </p>

              {teacher.skills && teacher.skills.length > 0 && (
                <div ref={ref}>
                  <h3 className="text-2xl font-semibold text-[#63001F] mb-6">
                    Профессиональные навыки
                  </h3>
                  <div className="space-y-4">
                    {teacher.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <motion.div
                            className="h-full bg-[#63001F] rounded-full"
                            initial="hidden"
                            animate={controls}
                            variants={skillBarVariants}
                            custom={skill.level}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
