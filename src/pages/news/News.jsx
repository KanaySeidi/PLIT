// src/pages/AboutUs.jsx

import { useParams, Link } from "react-router-dom";
import img1 from "../../assets/img/backend.jpg";
import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export const News = () => {
  const { id } = useParams();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const mainArticle = {
    id: 1,
    title: "Почему исследования важны",
    category: "В ЦЕНТРЕ ВНИМАНИЯ",
    date: "3 июня 2025",
    image: img1,
    content: `Исследования играют ключевую роль в развитии человечества. Благодаря им появляются новые технологии, лекарства и подходы к решению глобальных проблем.

В Uneza University мы поощряем студентов и преподавателей заниматься наукой. Наши проекты охватывают всё: от искусственного интеллекта до устойчивого развития.

Наука — это не только цифры и формулы. Это способ мышления, способ задавать важные вопросы и находить на них ответы. Каждый шаг в исследовании — это шаг в будущее.`,
  };

  const articles = [
    {
      id: 2,
      title: "CRISPR и восстановление нейронов",
      category: "НАУКА И ТЕХНИКА",
      date: "2 июня 2025",
      image: img1,
      content: "CRISPR помогает в лечении нейродегенеративных заболеваний...",
    },
    {
      id: 3,
      title: "ИИ и паттерны мышления",
      category: "НАУКА И ТЕХНИКА",
      date: "1 июня 2025",
      image: img1,
      content: "ИИ способен анализировать и повторять когнитивные схемы...",
    },
    {
      id: 4,
      title: "Устойчивое сельское хозяйство и ИИ",
      category: "ТЕХНОЛОГИИ",
      date: "31 мая 2025",
      image: img1,
      content:
        "ИИ помогает в развитии агротехнологий и устойчивого сельского хозяйства...",
    },
    {
      id: 5,
      title: "Нанотехнологии в медицине",
      category: "НАУКА",
      date: "30 мая 2025",
      image: img1,
      content:
        "Наночастицы позволяют доставлять лекарства точечно и эффективно...",
    },
  ];

  const article =
    parseInt(id) === 1
      ? mainArticle
      : articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="text-center p-10 text-red-600 text-lg">
        Статья не найдена 😢
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link
          to="/newsCards"
          className="inline-flex items-center text-white hover:bg-bordoLight transform transition duration-300 mb-8 bg-bordo rounded p-2"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Назад к новостям
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-sm text-gray-500 uppercase font-medium tracking-widest">
            {article.category} • {article.date}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
            {article.title}
          </h1>
        </motion.div>

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded shadow-xl mb-10"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg prose-gray max-w-none"
        >
          {article.content.split("\n").map((p, idx) => (
            <p key={idx}>{p.trim()}</p>
          ))}
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto py-10">
          <button
            ref={prevRef}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-200 transition-all"
          >
            <svg
              className="w-6 h-6 text-black"
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
          </button>

          <button
            ref={nextRef}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-200 transition-all"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          >
            {[mainArticle, ...articles]
              .filter((a) => a.id !== parseInt(id))
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/news/${item.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="relative shadow-lg rounded overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 text-white">
                        <p className="text-sm font-semibold">{item.category}</p>
                        <h2 className="text-lg font-bold mt-1 line-clamp-2">
                          {item.title}
                        </h2>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
