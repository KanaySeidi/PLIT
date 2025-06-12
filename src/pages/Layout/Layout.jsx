import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/organisms/Header";
import Footer from "../../footer/Footer";
import LocationPage from "../location/LocationPage";
import AdminSidebar from "../../admin/AdminSidebar";

const Layout = () => {
  const { pathname } = useLocation();

  const isAdminPath = pathname.includes("admin");

  return (
    <div>
      {isAdminPath ? <AdminSidebar /> : <Header />}
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      {isAdminPath ? null : <LocationPage />}
      {isAdminPath ? null : <Footer />}
    </div>
  );
};

export default Layout;
