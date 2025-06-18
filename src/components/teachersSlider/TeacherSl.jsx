import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Импорты изображений (оставлены для примера)
import teacher1 from "../../assets/img/teacher1.jpg";
// ... другие изображения

const TeacherSl = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleTeacherClick = (teacher) => {
    if (teacher.hasDetails) {
      navigate(`/plit/teachers/${teacher.id - 1}`);
    }
  };

  const teachers = JSON.parse(window.localStorage.getItem("teachers") || "[]");

  return (
    <div className="relative w-full py-4 bg-gray-200">
      <div className="w-full flex justify-center text-xl mb-4">
        <p className="text-[#63001F] font-bold">Наши преподаватели</p>
      </div>

      <div ref={prevRef} className="swiper-button-prev-custom absolute top-1/2 left-6 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div ref={nextRef} className="swiper-button-next-custom absolute top-1/2 right-6 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 1 },
          640: { slidesPerView: 2, spaceBetween: 1 },
          868: { slidesPerView: 4, spaceBetween: 1 },
          1024: { slidesPerView: 4, spaceBetween: 1 },
        }}
      >
        {teachers.map((teacher, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => handleTeacherClick(teacher)}
              className={'flex flex-col items-center text-center bg-gray-50 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[320px] mx-auto mb-8' `${
                teacher.hasDetails ? "cursor-pointer" : ""
              }`}
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="mb-3 w-full h-72 md:h-64 lg:h-72 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="font-bold text-lg text-[#63001F]">{teacher.name}</p>
              <p className="text-gray-600 mt-2 text-base">{teacher.role}</p>
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