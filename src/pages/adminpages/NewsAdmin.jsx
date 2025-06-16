import { useState } from "react";

export const NewsAdmin = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Заголовок 1",
      date: "2024-06-16",
      image: "/src/assets/img/1.jpg",
      content: "Текст новости 1",
    },
    {
      id: 2,
      title: "Заголовок 2",
      date: "2024-06-15",
      image: "/src/assets/img/1.jpg",
      content: "Текст новости 2",
    },
    {
      id: 3,
      title: "Заголовок 3",
      date: "2024-06-14",
      image: "/src/assets/img/1.jpg",
      content: "Текст новости 3",
    },
    {
      id: 4,
      title: "Заголовок 4",
      date: "2024-06-13",
      image: "/src/assets/img/1.jpg",
      content: "Текст новости 4",
    },
    {
      id: 5,
      title: "Заголовок 5",
      date: "2024-06-12",
      image: "/src/assets/img/1.jpg",
      content: "Текст новости 5",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...articles];
    updated[index][field] = value;
    setArticles(updated);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleChange(index, "image", imageUrl);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className="rounded-xl shadow-lg overflow-hidden bg-white"
        >
          <div className="relative h-64">
            <img
              src={article.image}
              alt="preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 text-white p-4">
              <input
                type="text"
                value={article.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="bg-transparent w-full text-lg font-bold outline-none"
              />
              <input
                type="date"
                value={article.date}
                onChange={(e) => handleChange(index, "date", e.target.value)}
                className="bg-transparent text-sm outline-none"
              />
            </div>
            <div className="absolute top-2 right-2">
              <label className="text-white bg-black/50 px-3 py-1 text-sm rounded cursor-pointer">
                Сменить фото
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="p-4">
            <textarea
              value={article.content}
              onChange={(e) => handleChange(index, "content", e.target.value)}
              className="w-full h-32 resize-none outline-none border border-gray-300 rounded p-2"
              placeholder="Текст статьи"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
