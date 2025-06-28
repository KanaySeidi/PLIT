import React, { useEffect } from "react";
import {
  fetchCoursesByType,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../../components/api/auth/coursesAuth";
import { useCoursesStore } from "../../components/api/store/coursesStore";
import { FaSave, FaEllipsisV } from "react-icons/fa";
import { motion } from "framer-motion";

const CoursesAdmin = () => {
  const {
    courses,
    selectedCategory,
    newCourse,
    editCourse,
    showMenu,
    setSelectedCategory,
    setNewCourse,
    setEditCourse,
    setShowMenu,
    setCourses,
    resetNewCourse,
    clearEditCourse,
  } = useCoursesStore();

  useEffect(() => {
    fetchCourses();
    console.log(courses);
    
  }, [selectedCategory]);

  const fetchCourses = async () => {
    try {
      const data = await fetchCoursesByType(selectedCategory);
      setCourses(selectedCategory, data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setCourses(selectedCategory, []); // Устанавливаем пустой массив при ошибке
    }
  };

  const handleAddCourse = async () => {
    if (
      !newCourse.category ||
      !newCourse.title ||
      !newCourse.description ||
      !newCourse.price
    )
      return;

    try {
      const response = await createCourse(newCourse);
      setCourses(selectedCategory, [...(courses[selectedCategory] || []), response]);
      resetNewCourse();
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleDeleteCourse = async (course) => {
    try {
      await deleteCourse(course.id);
      const updatedCategory = (courses[course.category] || []).filter(
        (c) => c.id !== course.id
      );
      setCourses(course.category, updatedCategory);
      setShowMenu(null);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleEditCourse = (course) => {
    setEditCourse(course);
    setShowMenu(null);
  };

  const handleSaveEdit = async () => {
    if (
      !editCourse.category ||
      !editCourse.title ||
      !editCourse.description ||
      !editCourse.price
    )
      return;

    try {
      const response = await updateCourse(editCourse);
      const updatedCourses = (courses[editCourse.category] || []).map((c) =>
        c.id === editCourse.id ? response : c
      );
      setCourses(editCourse.category, updatedCourses);
      clearEditCourse();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (editCourse) {
      if (name === "image" && files) {
        setEditCourse({ ...editCourse, [name]: files[0], imagePreview: URL.createObjectURL(files[0]) });
      } else {
        setEditCourse({ ...editCourse, [name]: value });
      }
    } else {
      if (name === "image" && files) {
        setNewCourse(name, files[0]);
        setNewCourse("imagePreview", URL.createObjectURL(files[0]));
      } else {
        setNewCourse(name, value);
      }
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const categories = ["sports", "language", "professional"];

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#222]">Управление курсами</h1>
      </div>
      <div className="mb-8">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      {selectedCategory && (
        <>
          <div className="space-y-8">
            {Array.isArray(courses[selectedCategory]) &&
              courses[selectedCategory].length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#222]">
                    {selectedCategory.charAt(0).toUpperCase() +
                      selectedCategory.slice(1)}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses[selectedCategory].map((course) => (
                      <div
                        key={course.id}
                        className="bg-white rounded-2xl shadow-md p-4 relative"
                      >
                        {course.image && course.image.fileName && (
                          <img
                            src={`${API_URL}/images/${course.image.fileName}`} // Адаптируйте URL для изображений
                            alt={course.title}
                            className="w-full h-32 object-cover rounded-xl mb-3"
                            onError={(e) => (e.target.style.display = "none")}
                          />
                        )}
                        <h3 className="text-xl font-semibold text-[#222]">
                          {course.title}
                        </h3>
                        <p className="text-sm text-[#333] mt-1">
                          {course.description}
                        </p>
                        <p className="text-sm text-[#333] mt-1">
                          Цена: {course.price} руб.
                        </p>
                        <div className="absolute top-2 right-2">
                          <button
                            onClick={() =>
                              setShowMenu(
                                course.id === showMenu ? null : course.id
                              )
                            }
                            className="text-[#333] hover:text-[#600000] transition-colors"
                          >
                            <FaEllipsisV />
                          </button>
                          {showMenu === course.id && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-2xl shadow-md z-10">
                              <button
                                onClick={() => handleEditCourse(course)}
                                className="w-full text-left px-4 py-2 text-[#222] hover:bg-[#F9F9F9] rounded-t-2xl"
                              >
                                Редактировать
                              </button>
                              <button
                                onClick={() => handleDeleteCourse(course)}
                                className="w-full text-left px-4 py-2 text-[#8B0000] hover:bg-[#F9F9F9] rounded-b-2xl"
                              >
                                Удалить
                              </button>
                            </div>
                          )}
                        </div>
                        {editCourse && editCourse.id === course.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 space-y-4"
                          >
                            <input
                              type="text"
                              name="title"
                              value={editCourse.title}
                              onChange={handleChange}
                              placeholder="Название"
                              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                            />
                            <input
                              type="text"
                              name="description"
                              value={editCourse.description}
                              onChange={handleChange}
                              placeholder="Описание"
                              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                            />
                            <input
                              type="number"
                              name="price"
                              value={editCourse.price}
                              onChange={handleChange}
                              placeholder="Цена"
                              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                            />
                            <input
                              type="file"
                              name="image"
                              onChange={handleChange}
                              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                            />
                            <button
                              onClick={handleSaveEdit}
                              className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition-colors duration-200 flex items-center"
                            >
                              <FaSave className="mr-2" /> Сохранить
                            </button>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-md p-4 mt-8"
          >
            <h3 className="text-xl font-semibold text-[#222] mb-4">
              Добавить курс в категорию{" "}
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}
            </h3>
            <input
              type="text"
              name="title"
              value={newCourse.title}
              onChange={handleChange}
              placeholder="Название"
              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
            />
            <input
              type="text"
              name="description"
              value={newCourse.description}
              onChange={handleChange}
              placeholder="Описание"
              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
            />
            <input
              type="number"
              name="price"
              value={newCourse.price}
              onChange={handleChange}
              placeholder="Цена"
              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
            />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
            />
            <button
              onClick={handleAddCourse}
              className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition-colors duration-200 flex items-center"
            >
              <FaSave className="mr-2" /> Сохранить
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default CoursesAdmin;