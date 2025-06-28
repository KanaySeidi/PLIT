import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NewsSwiper = ({ mainArticle, articles, currentId }) => {
  const currentArticleId = useMemo(() => parseInt(currentId), [currentId]);

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      {[mainArticle, ...articles]
        .filter((a) => a.id !== currentArticleId)
        .map((item) => (
          <Link to={`/news/${item.id}`} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full shadow-lg rounded overflow-hidden group transition-all duration-300 transform hover:scale-[1.02]"
            >
              <img
                src={item.image || "/fallback.jpg"}
                alt={item.title}
                className="w-full h-36 object-cover group-hover:brightness-90 transition duration-300"
              />
              <div className="p-4 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white">
                <h2 className="text-lg font-bold mt-1 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm font-medium uppercase tracking-widest mt-1">
                  {item.date}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
    </div>
  );
};
