import { NewsAdmin } from "./NewsAdmin";
import { useState, useEffect } from "react";

export const NewsCardsAdmin = () => {
  const defaultCards = [
    {
      id: 1,
      title: "",
      date: "2025-06-16",
      image: "/src/assets/img/1.jpg",
      content: "",
      highlight: true,
    },
    {
      id: 2,
      title: "",
      date: "2025-06-16",
      image: "/src/assets/img/1.jpg",
      content: "",
    },
    {
      id: 3,
      title: "",
      date: "2025-06-16",
      image: "/src/assets/img/1.jpg",
      content: "",
    },
    {
      id: 4,
      title: "",
      date: "2025-06-16",
      image: "/src/assets/img/1.jpg",
      content: "",
    },
    {
      id: 5,
      title: "",
      date: "2025-06-16",
      image: "/src/assets/img/1.jpg",
      content: "",
    },
  ];

  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("newsAdminCards");
    return saved ? JSON.parse(saved) : defaultCards;
  });

  // Сохраняем в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("newsAdminCards", JSON.stringify(cards));
  }, [cards]);

  const handleChange = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };

  const handleImageChange = (id, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(id, "image", reader.result); // base64
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-8">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded shadow-lg overflow-hidden group bg-white ${
              card.highlight ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div className="relative h-64">
              <img
                src={card.image}
                alt="preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 text-white p-4">
                <input
                  type="text"
                  value={card.title}
                  onChange={(e) =>
                    handleChange(card.id, "title", e.target.value)
                  }
                  className="bg-transparent w-full text-lg font-bold outline-none placeholder-white"
                  placeholder="Заголовок"
                />
                <input
                  type="date"
                  value={card.date}
                  onChange={(e) =>
                    handleChange(card.id, "date", e.target.value)
                  }
                  className="bg-transparent text-sm outline-none"
                />
              </div>
              <div className="absolute top-2 right-2">
                <label className="text-white bg-black/50 px-3 py-1 text-sm rounded cursor-pointer">
                  Сменить фото
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(card.id, e.target.files[0])
                    }
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="p-4">
              <textarea
                ref={(el) => {
                  if (el) {
                    el.style.height = "auto";
                    el.style.height = `${el.scrollHeight}px`;
                  }
                }}
                value={card.content}
                onChange={(e) =>
                  handleChange(card.id, "content", e.target.value)
                }
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                className="w-full resize-none outline-none overflow-hidden border border-gray-300 rounded p-2"
                placeholder="Текст статьи"
                rows={1}
              />
            </div>
          </div>
        ))}
      </div>
      <NewsAdmin />
    </div>
  );
};
