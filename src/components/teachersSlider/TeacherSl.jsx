import React, { useRef, useEffect } from "react";
import img from "../../assets/img/teach.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teachers = [
  { name: "Matide V. Sousa", role: "Graphic Designer" },
  { name: "Donna C. Adams", role: "App Developer" },
  { name: "Alice K. Jones", role: "Creative Arts" },
  { name: "John D. Smith", role: "UI/UX Designer" },
  { name: "Sarah L. Ray", role: "Backend Developer" },
  { name: "Mark T. Lee", role: "Project Manager" },
  { name: "Emma R. White", role: "AI Engineer" },
  { name: "Liam B. Hill", role: "DevOps Specialist" },
  { name: "Olivia M. Kim", role: "Mobile Developer" },
  { name: "Olivia M. Kim", role: "Mobile Developer" },
  { name: "Olivia M. Kim", role: "Mobile Developer" },
  { name: "Olivia M. Kim", role: "Mobile Developer" },
];

const groupTeachers = (teachers, groupSize = 6) => {
  const groups = [];
  for (let i = 0; i < teachers.length; i += groupSize) {
    groups.push(teachers.slice(i, i + groupSize));
  }
  return groups;
};

export const TeacherSl = () => {
  const groupedTeachers = groupTeachers(teachers);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-10/12 mx-auto py-6 relative">
      <div className="flex justify-center text-2xl mb-4">
        <p>Our Teachers</p>
      </div>

      {/* Custom Arrows */}
      <div
        ref={prevRef}
        className="swiper-button-prev-custom absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
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
        className="swiper-button-next-custom absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
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
        modules={[Navigation]}
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
        slidesPerView={1}
      >
        {groupedTeachers.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-3 gap-6">
              {group.map((teacher, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={img}
                    alt={teacher.name}
                    className="mb-2 w-full rounded-lg shadow"
                  />
                  <p className="font-bold">{teacher.name}</p>
                  <p className="text-gray-700">{teacher.role}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
