import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import { Frontend } from "../directions/Frontend";
import { Information } from "../directions/Information";
import { AutoMechanic } from "../directions/AutoMechanic";

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
      <Information />
      <AutoMechanic />
    </div>
  );
};

export default Layout;
