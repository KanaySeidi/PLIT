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

export default function AdminSidebar() {
  // const { isOpen, closePanel } = useAdminStore();
  // const location = useLocation();

  // useEffect(() => {
  //   closePanel();
  // }, [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <AiOutlineHome />, text: "Главная" },
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

      <div className="flex-1 bg-gray-400 p-4">Контент</div>
    </div>

    // {/* <button
    //   className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#5a0a2d] text-white rounded-full p-2 shadow-md hover:bg-[#6c183b] transition"
    // >
    //   {isOpen ? <FiArrowLeftCircle /> : <FiArrowRightCircle />}
    // </button> */}

    // <div
    //   className={`fixed top-0 left-0 h-full bg-[#63001F] shadow-lg z-50 text-xl transition-all duration-300
    //     ${isOpen ? "w-1/3 max-w-md" : "w-0 overflow-hidden"}`}
    // >
    //   <button
    //     onClick={closePanel}
    //     className="absolute flex items-center justify-center top-1/2 p-2 right-4 text-white w-20 bg-[#63001F] rounded"
    //   >
    //     <FiArrowLeftCircle className="w-8 h-8" />
    //   </button>
    //   <div className="space-y-4 p-4 mt-20 text-white">
    //     <Link
    //       to="/admin/home"
    //       className="hover:bg-gray-400 w-86 h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center"
    //       onClick={closePanel}
    //     >
    //       <AiOutlineHome className="text-2xl" />
    //       {isOpen && <span className="whitespace-nowrap">Главная</span>}
    //     </Link>
    //     <Link
    //       to="/admin/courses"
    //       className="hover:bg-gray-400 w-86 h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center"
    //       onClick={closePanel}
    //     >
    //       <MdOutlineMenuBook /> Курсы
    //     </Link>

    //     <Popover>
    //       <PopoverButton>
    //         <div className="hover:bg-gray-400 w-[416px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //           <AiOutlineInfoCircle /> Информация
    //         </div>
    //       </PopoverButton>
    //       <PopoverPanel>
    //         <div className="flex flex-col justify-between h-[120px] mt-4 items-center">
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2">
    //             <HiOutlineUserAdd /> Абитуриентам
    //           </Link>
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //             <HiOutlineDocumentText /> Документация
    //           </Link>
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //             <GiScales /> НПА КР
    //           </Link>
    //         </div>
    //       </PopoverPanel>
    //     </Popover>

    //     <Popover>
    //       <PopoverButton>
    //         <div className="hover:bg-gray-400 w-[416px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //           <RiNewspaperLine /> Новости
    //         </div>
    //       </PopoverButton>
    //       <PopoverPanel>
    //         <div className="flex flex-col justify-between h-[120px] mt-4 items-center">
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2">
    //             Абитуриентам
    //           </Link>
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //             Документация
    //           </Link>
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //             НПА КР
    //           </Link>
    //         </div>
    //       </PopoverPanel>
    //     </Popover>
    //     <Popover>
    //       <PopoverButton>
    //         <div className="hover:bg-gray-400 w-[416px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //           <FaGraduationCap /> ПЛИТ
    //         </div>
    //       </PopoverButton>
    //       <PopoverPanel>
    //         <div className="flex flex-col justify-between h-[120px] mt-4 items-center">
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2">
    //             Абитуриентам
    //           </Link>
    //           <Link className="hoverbg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //             Документация
    //           </Link>
    //           <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
    //             НПА КР
    //           </Link>
    //         </div>
    //       </PopoverPanel>
    //     </Popover>
    //   </div>
    //   <div className=""></div>
    // </div>
  );
}
