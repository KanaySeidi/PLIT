import {
  Backend,
  Frontend,
  Main,
  MechRob,
  MobileDevelopment,
  SisAdm,
  TD,
} from "../pages";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/fr", element: <Frontend /> },
  { path: "/br", element: <Backend /> },
  { path: "/mr", element: <MechRob /> },
  { path: "/md", element: <MobileDevelopment /> },
  { path: "/sa", element: <SisAdm /> },
  { path: "/td", element: <TD /> },
];
export default routes;
