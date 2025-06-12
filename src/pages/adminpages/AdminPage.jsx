import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../admin/AdminSidebar";

const AdminPage = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 w-full p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
