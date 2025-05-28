import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { TbEaseInOutControlPoints } from "react-icons/tb";
import TeacherSl from "../../components/teachersSlider/TeacherSl";
import TeacherInfo from "../../components/teachersSlider/Teacherinfo";



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
