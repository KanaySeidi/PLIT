import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAdminStore } from "./useAdminStore";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

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
        className="absolute top-1/2 p-2 right-[-90px] text-white w-20 bg-[#63001F] rounded"
      >
        ⇦
      </button>
      <div className="space-y-4 p-4 mt-20 text-white">
        <Link
          to="/admin/home"
          className="hover:bg-gray-400 w-86 h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center"
          onClick={closePanel}
        >
          Главная
        </Link>
        <Link
          to="/admin/courses"
          className="hover:bg-gray-400 w-86 h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center"
          onClick={closePanel}
        >
          Курсы
        </Link>

        <Popover>
          <PopoverButton>
            <div className="hover:bg-gray-400 w-[416px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
              Информация
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
              Новости
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
              ПЛИТ
            </div>
          </PopoverButton>
          <PopoverPanel>
            <div className="flex flex-col justify-between h-[120px] mt-4 items-center">
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center py-2">
                Абитуриентам
              </Link>
              <Link className="hoverbg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
                Документация
              </Link>
              <Link className="hover:bg-gray-400 w-[380px] h-8 bg-[#63001F] rounded-[50px] flex items-center justify-center">
                НПА КР
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
