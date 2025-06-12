import { Outlet } from "react-router-dom";
import AdminSidebar from "./adminSidebar/AdminSidebar.jsx";
import { useAdminStore } from "./adminSidebar/useAdminStore.js";

export default function AdminPage() {
  const openPanel = useAdminStore((state) => state.openPanel);
  return (
    <div className="flex h-[1000px] bg-gray-400">
      <AdminSidebar />
      <button
        onClick={openPanel}
        className="fixed top-1/2 left-4 z-30 bg-[#63001F] text-white p-2 rounded w-20"
      >
        ⇨
      </button>
      <div className="ml-64 w-full p-8">
        <Outlet />
      </div>
    </div>
  );
}

// const AdminPage = () => {
//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <button
//         onClick={openPanel}
//         className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
//       >
//         ⚙️
//       </button>
//       <div className="ml-64 w-full p-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
