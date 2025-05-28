import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Импорты изображений
import teacher1 from "../../assets/img/teacher1.jpg";
import teacher2 from "../../assets/img/teacher2.jpg";
import teacher3 from "../../assets/img/teacher3.jpg";
import teacher4 from "../../assets/img/teacher4.jpg";
import teacher5 from "../../assets/img/teacher5.jpg";
import teacher6 from "../../assets/img/teacher6.jpg";
import teacher7 from "../../assets/img/teacher7.jpg";
import teacher8 from "../../assets/img/teacher8.jpg";
import teacher9 from "../../assets/img/teacher9.jpg";
import teacher10 from "../../assets/img/teacher10.jpg";

const teachers = [
  {
    id: 1,
    name: "Замира Эже",
    role: "Учитель химии и биологии",
    img: teacher1,
    hasDetails: true,
  },
  {
    id: 2,
    name: "Алмаз Агай",
    role: "Учитель информатики",
    img: teacher2,
    hasDetails: true,
  },
  {
    id: 3,
    name: "Айгуль Эже",
    role: "Учитель математики",
    img: teacher3,
    hasDetails: true,
  },
  { name: "Бакыт Агай", role: "Учитель физики", img: teacher4 },
  { name: "Гульмира Эже", role: "Учитель английского", img: teacher5 },
  { name: "Нурлан Агай", role: "Учитель робототехники", img: teacher6 },
  { name: "Асель Эже", role: "Учитель дизайна", img: teacher7 },
  { name: "Эрмек Агай", role: "Учитель веб-разработки", img: teacher8 },
  { name: "Жылдыз Эже", role: "Учитель мобильной разработки", img: teacher9 },
  {
    name: "Азамат Агай",
    role: "Учитель системного администрирования",
    img: teacher10,
  },
];

const TeacherSl = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleTeacherClick = (teacher) => {
    if (teacher.hasDetails) {
      navigate(`/teacher/${teacher.id - 1}`);
    }
  };

  return (
    <div className="relative w-full py-6">
      <div className="w-full flex justify-center text-2xl mb-4">
        <p className="text-[#63001F] font-bold">Наши преподаватели</p>
      </div>

      <div
        ref={prevRef}
        className="swiper-button-prev-custom absolute top-1/2 left-10 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div
        ref={nextRef}
        className="swiper-button-next-custom absolute top-1/2 right-10 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {teachers.map((teacher, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => handleTeacherClick(teacher)}
              className={`flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                teacher.hasDetails ? "cursor-pointer" : ""
              }`}
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="mb-4 w-full h-80 md:h-96 lg:h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="font-bold text-lg text-[#63001F]">{teacher.name}</p>
              <p className="text-gray-700 mt-2">{teacher.role}</p>
              {teacher.hasDetails && (
                <span className="text-sm text-blue-600 mt-2">
                  Нажмите для подробной информации
                </span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeacherSl;
