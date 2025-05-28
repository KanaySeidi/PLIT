import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { InformationLyceum } from "../information/InformationLyceum";
import { Documents } from "../information/Documents";
import TeacherSl from "../../components/teachersSlider/TeacherSl";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <TeacherSl />
      </main>
      <InformationLyceum />
      <Documents />
    </div>
  );
};

export default Layout;
