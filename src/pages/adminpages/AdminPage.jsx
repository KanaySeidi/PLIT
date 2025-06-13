import { Navigate, useNavigate } from "react-router-dom";
import AdminSidebar from "./adminSidebar/AdminSidebar.jsx";
import { useAdminStore } from "./adminSidebar/useAdminStore.js";

export default function AdminPage() {
  const openPanel = useAdminStore((state) => state.openPanel);
  const Navigate = useNavigate();

  const goHome = () => {
    Navigate("/");
  };

  return (
    <div className="flex h-[1000px] bg-gray-400">
      <button
        className="fixed right-6 top-4 text-6xl text-white"
        onClick={goHome}
      >
        ×
      </button>
      <AdminSidebar />
      <button
        onClick={openPanel}
        className="fixed top-1/2 left-4 z-30 bg-[#63001F] text-white p-2 rounded w-20"
      >
        ⇨
      </button>
      <div className="ml-[35%] w-full p-8">
        <h1 className="text-2xl  font-bold bg-[#63001F] w-[450px] h-16 flex items-center justify-center text-white rounded-xl">
          Добро пожаловать в админку!
        </h1>
        {/* Здесь можно добавить содержимое админки */}
      </div>
    </div>
  );
}
