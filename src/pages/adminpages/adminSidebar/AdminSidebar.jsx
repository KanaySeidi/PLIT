import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAdminStore } from "./useAdminStore";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiNewspaperLine } from "react-icons/ri";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { GiScales } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <AiOutlineHome />, text: "Главная"  },
    { icon: <MdOutlineMenuBook />, text: "Курсы" },
    { icon: <AiOutlineHome />, text: "Информация" },
    { icon: <HiOutlineUserAdd />, text: "Абитуриентам" },
    { icon: <HiOutlineDocumentText />, text: "Документация" },
    { icon: <GiScales />, text: "НПА КР" },
    { icon: <RiNewspaperLine />, text: "Новости" },
    { icon: <FaGraduationCap />, text: "ПЛИТ" }, // Используем Emoji как заглушку
  ];

  return (
    <div className={`flex`}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`h-screen bg-[#5a0a2d] transition-all duration-300 ease-in-out
          ${isOpen ? "w-56" : "w-16"}
          flex flex-col justify-between relative`}
      >
        <div className="pt-4 space-y-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-white px-4 py-2 hover:bg-[#6c183b] transition-colors"
            >
              <div className="text-xl">{item.icon}</div>
              <span
                className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity duration-200 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AdminSidebar;
