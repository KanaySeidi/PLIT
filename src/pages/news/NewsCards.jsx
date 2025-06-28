import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import img1 from "../../assets/img/1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NewsCards = () => {
  const { t } = useTranslation();

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("newsAdminCards");
    if (saved) {
      const parsed = JSON.parse(saved);

      const cleaned = parsed.map(({ content, ...rest }) => rest);
      setCards(cleaned);
    } else {
      setCards([
        {
          id: 1,
          title: t("newsPage.id1.title"),
          date: t("newsPage.id1.date"),
          image: img1,
          highlight: true,
        },
        {
          id: 2,
          title: t("newsPage.id2.title"),
          date: t("newsPage.id2.date"),
          image: img1,
        },
        {
          id: 3,
          title: t("newsPage.id3.title"),
          date: t("newsPage.id3.date"),
          image: img1,
        },
        {
          id: 4,
          title: t("newsPage.id4.title"),
          date: t("newsPage.id4.date"),
          image: img1,
        },
        {
          id: 5,
          title: t("newsPage.id5.title"),
          date: t("newsPage.id5.date"),
          image: img1,
        },
      ]);
    }
  }, [t]);

  return (
    <div className="p-8">
      <div className="flex justify-center items-center mb-6">
        <p className="font-semibold text-5xl text-center leading-snug">
          Новости
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative shadow-lg rounded overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] ${
              card.highlight ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <Link to={`/news/${card.id}`}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:brightness-90 transition duration-300"
                loading="lazy"
              />
              <div className="p-4 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white">
                <h2 className="text-lg font-bold line-clamp-2 break-words overflow-hidden">
                  {card.title}
                </h2>
                <p className="text-sm font-medium uppercase tracking-widest mt-1">
                  {card.date}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
