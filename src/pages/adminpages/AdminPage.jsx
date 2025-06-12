import React from "react";
import AdminSidebar from "../../admin/AdminSidebar";

const AdminPage = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 w-full p-8">
        <h1 className="text-2xl font-bold">Добро пожаловать в админку!</h1>
        {/* Здесь можно добавить содержимое админки */}
      </div>
    </div>
  );
};

export default AdminPage;
