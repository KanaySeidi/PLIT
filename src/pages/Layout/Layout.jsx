import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";
import { TD } from "../directions/TD";
import { SisAdm } from "../directions/SisAdm";
import { MechRob } from "../directions/MechRob";
import { TeacherSl } from "../../components/teachersSlider/TeacherSl";

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
      <TD />
      <SisAdm />
      <MechRob />
      <TeacherSl />
    </div>
  );
};

export default Layout;
