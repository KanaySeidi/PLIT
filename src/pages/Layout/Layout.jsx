import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";
import { Backend } from "../directions/Backend";
import { MobileDevelopment } from "../directions/MobileDevelopment";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Frontend />
      <Backend/>
      <MobileDevelopment/>
    </div>
  );
};

export default Layout;
