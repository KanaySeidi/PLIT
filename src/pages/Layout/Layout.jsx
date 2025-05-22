import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";
import { Backend } from "../directions/Backend";
import { MobileDevelopment } from "../directions/MobileDevelopment";
import { TD } from "../directions/TD";
import { SisAdm } from "../directions/SisAdm";
import { MechRob } from "../directions/MechRob";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
