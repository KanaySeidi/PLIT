import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/img/1.jpg";

export const NewsCards = () => {
  const cards = [
    {
      id: 1,
      title: "Почему исследования важны",
      category: "В ЦЕНТРЕ ВНИМАНИЯ",
      image: img1,
      highlight: true,
    },
    {
      id: 2,
      title:
        "Нанобиосенсор позволяет учёным отслеживать молекулы в режиме реального времени",
      category: "НАУКА И ТЕХНИКА",
      image: img1,
    },
    {
      id: 3,
      title:
        "Новая технология CRISPR может помочь восстановить повреждённые нейроны",
      category: "НАУКА И ТЕХНИКА",
      image: img1,
    },
    {
      id: 4,
      title: "Учёные восстанавливают бактерии",
      category: "НАУКА И ТЕХНИКА",
      image: img1,
    },
    {
      id: 5,
      title: "Исследование выявило паттерны в ИИ",
      category: "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
      image: img1,
    },
  ];

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
                <p className="text-sm font-medium uppercase tracking-wide">
                  {card.category}
                </p>
                <h2 className="text-lg font-bold mt-1 line-clamp-2">
                  {card.title}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
