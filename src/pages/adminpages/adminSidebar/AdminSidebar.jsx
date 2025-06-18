import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAdminStore } from "./useAdminStore";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiNewspaperLine } from "react-icons/ri";
import { GiScales } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

function AdminSidebar() {
  const { closePanel } = useAdminStore();
  const location = useLocation();

  useEffect(() => {
    closePanel();
  }, [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);

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
      path: "/admin/news",
    },
    { icon: <GiScales />, text: "НПА КР", path: "/admin" },
    { icon: <RiNewspaperLine />, text: "Новости", path: "/admin/news" },
    { icon: <FaGraduationCap />, text: "ПЛИТ", path: "/admin/plit" }, // Используем Emoji как заглушку
  ];

  return (
    <div className={`flex`}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`h-screen bg-[#5a0a2d] transition-all duration-300 ease-in-out
          ${isOpen ? "w-56" : "w-16"}
          flex flex-col justify-between fixed`}
      >
        <div className="pt-4 space-y-6">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AdminSidebar;
