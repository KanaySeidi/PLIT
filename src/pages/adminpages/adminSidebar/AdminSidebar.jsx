import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAdminStore } from "./useAdminStore";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineUserAdd, HiOutlineDocumentText } from "react-icons/hi";
import { RiNewspaperLine } from "react-icons/ri";
import { GiScales } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function AdminSidebar() {
  const { isOpen, closePanel } = useAdminStore();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    closePanel();
  }, [location.pathname]);

  const menuItems = [
    { icon: <AiOutlineHome />, text: "Главная", path: "/admin/home" },
    { icon: <MdOutlineMenuBook />, text: "Курсы", path: "/admin/courses" },
    {
      icon: <AiOutlineInfoCircle />,
      text: "Информация",
      path: "/admin/information",
    },
    {
      icon: <HiOutlineUserAdd />,
      text: "Абитуриентам",
      path: "/admin/applicant",
    },
    {
      icon: <HiOutlineDocumentText />,
      text: "Документация",
      path: "/admin/docs",
    },
    { icon: <GiScales />, text: "НПА КР", path: "/admin/npa" },
    { icon: <RiNewspaperLine />, text: "Новости", path: "/admin/news" },
    { icon: <FaGraduationCap />, text: "ПЛИТ", path: "/admin/plit" },
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 h-full bg-[#63001F] shadow-lg z-50 text-xl transition-all duration-300 ${
        isHovered ? "w-56" : "w-16"
      }`}
    >
      <button
        onClick={closePanel}
        className="absolute top-1/2 p-2 right-[-90px] text-white w-20 bg-[#63001F] rounded"
      >
        ⇦
      </button>
      <div className="space-y-4 p-4 mt-20 text-white">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center text-white px-4 py-2 hover:bg-[#6c183b] transition-colors"
          >
            <div className="text-xl">{item.icon}</div>
            <span
              className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
