import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/organisms/Header";
import Footer from "../../footer/Footer";
import LocationPage from "../location/LocationPage";
import AdminSidebar from "../adminpages/adminSidebar/AdminSidebar";
import MainAdmin from "../adminpages/HomeAdmin";

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
