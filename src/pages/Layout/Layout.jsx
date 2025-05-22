import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import TeacherInfo from "../../components/teachersSlider/Teacherinfo";
import TeacherSl from "../../components/teachersSlider/TeacherSl";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <TeacherInfo />
        <TeacherSl />
      </main>
    </div>
  );
};

export default Layout;
