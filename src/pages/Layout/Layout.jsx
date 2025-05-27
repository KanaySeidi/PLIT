import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";
import { Information } from "../directions/Information";
import { AutoMechanic } from "../directions/AutoMechanic";
import { Backend } from "../directions/Backend";
import { MobileDevelopment } from "../directions/MobileDevelopment";
import { TD } from "../directions/TD";
import { SisAdm } from "../directions/SisAdm";
import { MechRob } from "../directions/MechRob";
import { InformationLyceum } from "../information/InformationLyceum";
import { Documents } from "../information/Documents";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <InformationLyceum />
      <Documents />
      <Frontend />
      <Backend />
      <MobileDevelopment />
      <AutoMechanic />
      <TD />
      <Information />
      <SisAdm />
      <MechRob />
    </div>
  );
};

export default Layout;
