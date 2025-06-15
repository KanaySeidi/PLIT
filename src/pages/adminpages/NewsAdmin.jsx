import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const NewsAdmin = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles")) || [
      {
        id: 1,
        title: "Пример заголовка",
        date: "01.01.2025",
        image: "https://via.placeholder.com/400",
        content: "Полный текст новости...",
        highlight: true,
      },
    ]
  );

  const handleChange = (id, key, value) => {
    const updated = articles.map((a) =>
      a.id === id ? { ...a, [key]: value } : a
    );
    setArticles(updated);
    localStorage.setItem("articles", JSON.stringify(updated));
  };

  const handleAdd = () => {
    const newArticle = {
      id: Date.now(),
      title: "Новая новость",
      date: new Date().toLocaleDateString(),
      image: "https://via.placeholder.com/400",
      content: "Текст новой новости...",
    };
    const updated = [...articles, newArticle];
    setArticles(updated);
    localStorage.setItem("articles", JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = articles.filter((a) => a.id !== id);
    setArticles(updated);
    localStorage.setItem("articles", JSON.stringify(updated));
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Админка новостей</h1>
      <button
        onClick={handleAdd}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
      >
        ➕ Добавить новость
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow rounded p-4 space-y-3"
          >
            <input
              value={article.title}
              onChange={(e) => handleChange(article.id, "title", e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Заголовок"
            />
            <input
              value={article.date}
              onChange={(e) => handleChange(article.id, "date", e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Дата"
            />
            <input
              value={article.image}
              onChange={(e) => handleChange(article.id, "image", e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="URL изображения"
            />
            <textarea
              value={article.content}
              onChange={(e) => handleChange(article.id, "content", e.target.value)}
              className="w-full border rounded px-3 py-2 h-32"
              placeholder="Полный текст новости"
            />
            <div className="flex justify-between items-center">
              <button
                onClick={() => navigate(`/news/${article.id}`)}
                className="text-blue-600 hover:underline"
              >
                🔍 Просмотр
              </button>
              <button
                onClick={() => handleDelete(article.id)}
                className="text-red-600 hover:underline"
              >
                🗑️ Удалить
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
