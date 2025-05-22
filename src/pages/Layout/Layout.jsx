import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";
import { Exploitation } from "../directions/Exploitation.JSX";


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
      <Exploitation />
    </div>
  );
};

export default Layout;
