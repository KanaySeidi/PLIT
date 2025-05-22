import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
<<<<<<< HEAD
=======
import { Frontend } from "../directions/Frontend";

import { Information } from "../directions/Information";
import { AutoMechanic } from "../directions/AutoMechanic";

import { Backend } from "../directions/Backend";
import { MobileDevelopment } from "../directions/MobileDevelopment";
import { TD } from "../directions/TD";
import { SisAdm } from "../directions/SisAdm";
import { MechRob } from "../directions/MechRob";

>>>>>>> 75dcf0f41dc4a5d83ff5e511369bb7f781e63ee9

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
<<<<<<< HEAD
=======
      <Frontend />

      <Backend />
      <MobileDevelopment />

      <TD />
      <SisAdm />
      <MechRob />
>>>>>>> 75dcf0f41dc4a5d83ff5e511369bb7f781e63ee9
    </div>
  );
};

export default Layout;
