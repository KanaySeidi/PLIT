import { useAdminStore } from "./useAdminStore";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const { isOpen, setIsOpen } = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div>
        <AdminSidebar />
      </div>

      {/* Content */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-56" : "ml-16"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
