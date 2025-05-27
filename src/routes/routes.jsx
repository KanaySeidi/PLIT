import {
  AutoMechanic,
  Backend,
  Exploitation,
  Frontend,
  Information,
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
  { path: "/am", element: <AutoMechanic /> },
  { path: "/in", element: <Information /> },
  { path: "/ex", element: <Exploitation /> },
];
export default routes;
