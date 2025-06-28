import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";

import { NewsSwiper } from "./NewsSwiper";
import { NewsVideo } from "./NewsVideo";
import { NewsPhoto } from "./NewsPhoto";

import img1 from "../../assets/img/1.jpg";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export const News = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const galleryPrevRef = useRef(null);
  const galleryNextRef = useRef(null);
  const galleryPaginationRef = useRef(null);
  const [setGallerySwiperInstance] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const [mainArticle, setMainArticle] = useState({
    id: 1,
    title: t("newsPage.id1.title"),
    date: t("newsPage.id1.date"),
    image: img1,
    content: t("newsPage.id1.content"),
  });

  const [articles, setArticles] = useState([
    {
      id: 2,
      title: t("newsPage.id2.title"),
      date: t("newsPage.id2.date"),
      image: img1,
      content: t("newsPage.id2.content"),
    },
    {
      id: 3,
      title: t("newsPage.id3.title"),
      date: t("newsPage.id3.date"),
      image: img1,
      content: t("newsPage.id3.content"),
    },
    {
      id: 4,
      title: t("newsPage.id4.title"),
      date: t("newsPage.id4.date"),
      image: img1,
      content: t("newsPage.id4.content"),
    },
    {
      id: 5,
      title: t("newsPage.id5.title"),
      date: t("newsPage.id5.date"),
      image: img1,
      content: t("newsPage.id5.content"),
    },
  ]);

  useEffect(() => {
    const savedData = localStorage.getItem("newsAdminCards");
    if (!savedData) return;

    try {
      const parsedCards = JSON.parse(savedData);

      const mainCard = parsedCards.find((card) => card.id === 1);
      const otherCards = parsedCards.filter((card) => card.id !== 1);

      if (mainCard) {
        setMainArticle((prev) => ({ ...prev, ...mainCard }));
      }

      setArticles((prevArticles) =>
        prevArticles.map((article) => {
          const updated = otherCards.find((card) => card.id === article.id);
          return updated ? { ...article, ...updated } : article;
        })
      );
    } catch (error) {
      console.error("Ошибка при парсинге saved NewsCardsAdmin:", error);
    }
  }, [t]);

  const article = useMemo(
    () =>
      parseInt(id) === 1
        ? mainArticle
        : articles.find((a) => a.id === parseInt(id)),
    [id, mainArticle, articles]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mediaData = JSON.parse(localStorage.getItem(`newsMedia_${id}`) || "{}");

  const galleryImages = mediaData.galleryImages || [];
  const videoSrc = mediaData.videoSrc || "";
  const mainImage = mediaData.mainImage || article.image;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8 flex flex-col lg:flex-row justify-around">
        <div className="lg:w-2/3">
          <Link
            to="/news"
            className="inline-flex items-center text-white hover:bg-red-900 transform transition duration-300 mb-8 bg-bordo rounded p-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-sm text-gray-500 uppercase font-medium tracking-widest">
              {article.date}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2 break-words overflow-hidden">
              {article.title}
            </h1>
          </motion.div>

          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={mainImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-[400px] object-cover rounded shadow-xl mb-10"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-none break-words whitespace-pre-wrap mb-10"
          >
            {article?.content?.split("\n").map((p, idx) => (
              <p key={idx}>{p.trim()}</p>
            ))}
          </motion.div>

          <NewsVideo videoSrc={videoSrc} />

          <NewsPhoto
            galleryImages={galleryImages}
            setGallerySwiperInstance={setGallerySwiperInstance}
            galleryPaginationRef={galleryPaginationRef}
            galleryPrevRef={galleryPrevRef}
            galleryNextRef={galleryNextRef}
            setActiveImage={setActiveImage}
          />
        </div>

        <div className="sticky top-20 self-start h-fit">
          <NewsSwiper
            mainArticle={mainArticle}
            articles={articles}
            currentId={id}
          />
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition"
            aria-label="Закрыть изображение"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={activeImage}
            alt="Full view"
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl max-h-[80vh] rounded shadow-lg object-contain"
          />
        </div>
      )}
    </div>
  );
};
