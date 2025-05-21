import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";
<<<<<<< HEAD
import { Backend } from "../directions/Backend";
import { MobileDevelopment } from "../directions/MobileDevelopment";
=======
import { TD } from "../directions/TD";
import { SisAdm } from "../directions/SisAdm";
import { MechRob } from "../directions/MechRob";
>>>>>>> b012b9ec5bd38394fbb6e7e08f7ab5198eda3950

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
<<<<<<< HEAD
      <Backend/>
      <MobileDevelopment/>
=======
      <TD />
      <SisAdm />
      <MechRob />
>>>>>>> b012b9ec5bd38394fbb6e7e08f7ab5198eda3950
    </div>
  );
};

export default Layout;
