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
import { FiArrowLeftCircle } from "react-icons/fi";
import { GiScales } from "react-icons/gi";
import { FaRegGraduationCap } from "react-icons/fa";

export default function AdminSidebar() {
  const { isOpen, closePanel } = useAdminStore();
  const location = useLocation();

  useEffect(() => {
    closePanel();
  }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#63001F] shadow-lg z-50 text-xl transition-all duration-300
        ${isOpen ? "w-1/3 max-w-md" : "w-0 overflow-hidden"}`}
    >
      <button
        onClick={closePanel}
        className="absolute flex items-center justify-center top-1/2 p-2 right-4 text-white w-20 bg-[#63001F] rounded"
      >
        <FiArrowLeftCircle className="w-8 h-8" />
      </button>
      <div className="space-y-4 p-4 mt-20 text-white">
        <Link
          to="/admin/home"
          className="hover:bg-gray-400 w-86 h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center"
          onClick={closePanel}
        >
          <AiOutlineHome /> Главная
        </Link>
        <Link
          to="/admin/courses"
          className="hover:bg-gray-400 w-86 h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center"
          onClick={closePanel}
        >
          <MdOutlineMenuBook /> Курсы
        </Link>

        <Popover>
          <PopoverButton>
            <div className="hover:bg-gray-400 w-[416px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
              <AiOutlineInfoCircle /> Информация
            </div>
          </PopoverButton>
          <PopoverPanel>
            <div className="flex flex-col justify-between h-[120px] mt-4 items-center">

              <Link
                to="/admin/applicant"
                className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2"
                onClick={closePanel}>
                Абитуриентам

              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2">
                <HiOutlineUserAdd /> Абитуриентам

              </Link>
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
                <HiOutlineDocumentText /> Документация
              </Link>
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
                <GiScales /> НПА КР
              </Link>
            </div>
          </PopoverPanel>
        </Popover>

        <Popover>
          <PopoverButton>
            <div className="hover:bg-gray-400 w-[416px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
              <RiNewspaperLine /> Новости
            </div>
          </PopoverButton>
          <PopoverPanel>
            <div className="flex flex-col justify-between h-[120px] mt-4 items-center">
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2">
                Абитуриентам
              </Link>
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
                Документация
              </Link>
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
                НПА КР
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton>
            <div className="hover:bg-gray-400 w-[416px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
              <FaRegGraduationCap /> ПЛИТ
            </div>
          </PopoverButton>
          <PopoverPanel>
            <div className="flex flex-col justify-between h-[120px] mt-4 items-center">
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2">
                Абитуриентам
              </Link>
              <Link
                to={"/admin/teachersad"}
                onClick={closePanel}
                className="hoverbg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center"
              >
                Педагоги
              </Link>
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
                НПА КР
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
      <div className=""></div>
    </div>
  );
}
