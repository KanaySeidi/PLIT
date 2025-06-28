import { useAdminStore } from "./useAdminStore";
import AdminSidebar from "./AdminSidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { isOpen } = useAdminStore();

  const {pathname} = useLocation();

  const isAuthPage = pathname === "/admin/sign";
  const isAdminPath = pathname.startsWith("/admin") && !isAuthPage;

  return (
    <div className="flex h-screen">
      <div>
        {isAdminPath && <AdminSidebar />}
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-56" : "ml-16"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
