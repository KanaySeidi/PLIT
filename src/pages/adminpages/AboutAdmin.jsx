import React, { useState, useEffect } from "react";
import { FaSave, FaPlus, FaEllipsisV } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutAdmin = () => {
  const [aboutInfo, setAboutInfo] = useState(() => {
    const savedInfo = localStorage.getItem("aboutInfo");
    return savedInfo ? JSON.parse(savedInfo) : [];
  });

  const [newInformation, setNewInformation] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [editInformation, setEditInformation] = useState(null);
  const [showMenu, setShowMenu] = useState(null);

  useEffect(() => {
    localStorage.setItem("aboutInfo", JSON.stringify(aboutInfo));
  }, [aboutInfo]);

  const handleAddInformation = () => {
    if (!newInformation.title || !newInformation.description) return;
    const id = Date.now();
    const informationWithId = {
      ...newInformation,
      id,
      imagePreview: newInformation.image
        ? URL.createObjectURL(newInformation.image)
        : null,
    };
    setAboutInfo((prev) => [...prev, informationWithId]);
    setNewInformation({
      title: "",
      description: "",
      image: null,
    });
  };

  const handleDeleteInformation = (info) => {
    setAboutInfo((prev) => prev.filter((item) => item.id !== info.id));
    setShowMenu(null);
  };

  const handleEditInformation = (info) => {
    setEditInformation(info);
    setShowMenu(null);
  };

  const handleSaveEdit = () => {
    if (!editInformation.title || !editInformation.description) return;
    setAboutInfo((prev) =>
      prev.map((item) =>
        item.id === editInformation.id ? editInformation : item
      )
    );
    setEditInformation(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (editInformation) {
      if (name === "image" && files) {
        setEditInformation((prev) => ({
          ...prev,
          [name]: files[0],
          imagePreview: URL.createObjectURL(files[0]),
        }));
      } else {
        setEditInformation((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      if (name === "image" && files) {
        setNewInformation((prev) => ({
          ...prev,
          [name]: files[0],
          imagePreview: URL.createObjectURL(files[0]),
        }));
      } else {
        setNewInformation((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#222]">
          Управление разделом "О лицее"
        </h1>
        <button
          onClick={handleAddInformation}
          className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition-colors duration-200 flex items-center"
        >
          <FaPlus className="mr-2" /> Добавить информацию
        </button>
      </div>

      <div className="space-y-8">
        {aboutInfo.map((info) => (
          <div
            key={info.id}
            className="bg-white rounded-2xl shadow-md p-4 relative"
          >
            {info.imagePreview && (
              <img
                src={info.imagePreview}
                alt={info.title}
                className="w-full h-32 object-cover rounded-xl mb-3"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            <h3 className="text-xl font-semibold text-[#222]">{info.title}</h3>
            <p className="text-sm text-[#333] mt-1">{info.description}</p>
            <div className="absolute top-2 right-2">
              <button
                onClick={() =>
                  setShowMenu(info.id === showMenu ? null : info.id)
                }
                className="text-[#333] hover:text-[#600000] transition-colors"
              >
                <FaEllipsisV />
              </button>
              {showMenu === info.id && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-2xl shadow-md z-10">
                  <button
                    onClick={() => handleEditInformation(info)}
                    className="w-full text-left px-4 py-2 text-[#222] hover:bg-[#F9F9F9] rounded-t-2xl"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDeleteInformation(info)}
                    className="w-full text-left px-4 py-2 text-[#8B0000] hover:bg-[#F9F9F9] rounded-b-2xl"
                  >
                    Удалить
                  </button>
                </div>
              )}
            </div>
            {editInformation && editInformation.id === info.id && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 space-y-4"
              >
                <input
                  type="text"
                  name="title"
                  value={editInformation.title}
                  onChange={handleChange}
                  placeholder="Название"
                  className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                />
                <textarea
                  name="description"
                  value={editInformation.description}
                  onChange={handleChange}
                  placeholder="Описание"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-4"
      >
        <input
          type="text"
          name="title"
          value={newInformation.title}
          onChange={handleChange}
          placeholder="Название"
          className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
        />
        <textarea
          name="description"
          value={newInformation.description}
          onChange={handleChange}
          placeholder="Описание"
          className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
        />
        <button
          onClick={handleAddInformation}
          className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition-colors duration-200 flex items-center"
        >
          <FaSave className="mr-2" /> Сохранить
        </button>
      </motion.div>
    </div>
  );
};

export default AboutAdmin;
