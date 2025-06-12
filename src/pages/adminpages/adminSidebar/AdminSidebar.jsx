import { Link } from "react-router-dom";
import { useAdminStore } from "./useAdminStore";
import SidebarClose from "./SidebarClose.js";
import { useRef } from "react";

export default function AdminSidebar() {
  const sidebarRef = useRef();
  const { isOpen, closePanel } = useAdminStore();

  SidebarClose(sidebarRef, closePanel);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-all duration-300
        ${isOpen ? "w-1/3 max-w-md" : "w-0 overflow-hidden"}`}
      ref={sidebarRef}
    >
      <button onClick={closePanel} className="absolute top-2 right-2 text-xl">
        ✕
      </button>
      <ul className="space-y-4 p-4 mt-20">
        <li>
          <Link
            to="/admin/main"
            className="hover:text-gray-300"
            onClick={closePanel}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link to="/admin/courses" className="hover:text-gray-300">
            Курсы
          </Link>
        </li>
        <li>
          <Link to="/admin/information" className="hover:text-gray-300">
            Информация
          </Link>
        </li>
        <li>
          <Link to="/admin/news" className="hover:text-gray-300">
            Новости
          </Link>
        </li>
        <li>
          <Link to="/admin/plit" className="hover:text-gray-300">
            ПЛИТ
          </Link>
        </li>
        <li>
          <Link to="/admin/internal-pages" className="hover:text-gray-300">
            Внутренние страницы
          </Link>
        </li>
      </ul>
    </div>
  );
}
