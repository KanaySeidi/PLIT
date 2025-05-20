import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";

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
    </div>
  );
};

export default Layout;
