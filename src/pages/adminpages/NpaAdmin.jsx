import React, { useState } from "react";

const NpaAdmin = () => {
  const [content, setContent] = useState({
<<<<<<< HEAD
    title: "Добро пожаловать!",
    description: "Описание главной страницы",
=======
    title: "",
    description: "",
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setContent((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSave = () => {
<<<<<<< HEAD
    // Здесь можно отправить данные на сервер через API
    console.log("Сохранено:", content);
  };

  const handleDelete = () => {
    // Логика удаления контента
=======
    console.log("Сохранено:", content);
    // Здесь можно отправить данные на сервер через API
  };

  const handleDelete = () => {
    setContent({ title: "", description: "", image: null });
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
    console.log("Контент удален");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Редактирование Главной</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Заголовок:</label>
          <input
            type="text"
            name="title"
            value={content.title}
            onChange={handleChange}
<<<<<<< HEAD
            className="w-full border p-2"
=======
            className="w-full border p-2 rounded"
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
          />
        </div>
        <div>
          <label className="block text-gray-700">Описание:</label>
          <textarea
            name="description"
            value={content.description}
            onChange={handleChange}
<<<<<<< HEAD
            className="w-full border p-2"
=======
            className="w-full border p-2 rounded"
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
          />
        </div>
        <div>
          <label className="block text-gray-700">Изображение:</label>
          <input
            type="file"
            onChange={handleImageChange}
<<<<<<< HEAD
            className="w-full border p-2"
=======
            className="w-full border p-2 rounded"
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Сохранить
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded ml-4"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default NpaAdmin;
