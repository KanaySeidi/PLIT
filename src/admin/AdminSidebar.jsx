import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/admin/main" className="hover:text-gray-300">
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
};

export default AdminSidebar;
