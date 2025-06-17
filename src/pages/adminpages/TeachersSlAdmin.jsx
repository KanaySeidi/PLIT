import React, { useState, useEffect } from "react";

const TeachersSlAdmin = () => {
  // Загружаем данные из localStorage при монтировании
  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("teachers");
    return savedTeachers
      ? JSON.parse(savedTeachers)
      : [
          {
            id: 1,
            name: "Преподаватель 1",
            role: "Профессор",
            img: "teacher1.jpg",
            hasDetails: true,
            dateAdded: new Date().toLocaleDateString(),
          },
          {
            id: 2,
            name: "Преподаватель 2",
            role: "Доцент",
            img: "teacher2.jpg",
            hasDetails: true,
            dateAdded: new Date().toLocaleDateString(),
          },
        ];
  });
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    role: "",
    img: "",
    hasDetails: false,
  });
  const [filter, setFilter] = useState("");

  // Сохраняем данные в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (newTeacher.name && newTeacher.role && newTeacher.img) {
      setTeachers([
        ...teachers,
        {
          ...newTeacher,
          id: Date.now(),
          dateAdded: new Date().toLocaleDateString(),
        },
      ]);
      setNewTeacher({ name: "", role: "", img: "", hasDetails: false });
    }
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const handleEditTeacher = (id) => {
    const teacher = teachers.find((t) => t.id === id);
    const updatedName = prompt("Введите новое имя:", teacher.name);
    const updatedRole = prompt("Введите новую роль:", teacher.role);
    const updatedImg = prompt(
      "Введите путь к новому изображению:",
      teacher.img
    );
    if (updatedName && updatedRole && updatedImg) {
      setTeachers(
        teachers.map((t) =>
          t.id === id
            ? { ...t, name: updatedName, role: updatedRole, img: updatedImg }
            : t
        )
      );
    }
  };

  // Фильтрация учителей
  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(filter.toLowerCase()) ||
      teacher.role.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="teachers-admin bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#A1002F]">
        Управление преподавателями
      </h2>
      {/* Поле фильтрации */}
      <input
        type="text"
        placeholder="Фильтр по имени или роли..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
      />
      {/* Форма добавления */}
      <form
        onSubmit={handleAddTeacher}
        className="mb-6 bg-gray-800 p-4 rounded-lg"
      >
        <input
          type="text"
          placeholder="Имя"
          value={newTeacher.name}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, name: e.target.value })
          }
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <input
          type="text"
          placeholder="Роль"
          value={newTeacher.role}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, role: e.target.value })
          }
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <input
          type="text"
          placeholder="Путь к изображению"
          value={newTeacher.img}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, img: e.target.value })
          }
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={newTeacher.hasDetails}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, hasDetails: e.target.checked })
            }
            className="mr-2"
          />
          Есть подробности
        </label>
        <button
          type="submit"
          className="bg-[#A1002F] text-white p-2 rounded hover:bg-[#800020]"
        >
          Добавить преподавателя
        </button>
      </form>
      S-, [17.06.2025 11:34]
      {/* Список преподавателей */}
      <div className="space-y-4">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{teacher.name}</p>
              <p>{teacher.role}</p>
              <p className="text-sm text-gray-400">
                Добавлен: {teacher.dateAdded}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleEditTeacher(teacher.id)}
                className="bg-[#A1002F] text-white p-2 rounded mr-2 hover:bg-[#800020]"
              >
                Редактировать
              </button>
              <button
                onClick={() => handleDeleteTeacher(teacher.id)}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersSlAdmin;
