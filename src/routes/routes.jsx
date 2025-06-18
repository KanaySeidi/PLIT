import {
  CoursesPage,
  InfoPage,
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
  About,
  Students,
  LoginPage,
  AdminPage,
  HomeAdmin,
  CoursesAdmin,
  DocsAdmin,
  NpaAdmin,
  NewsAdmin,
  PlitAdmin,
  AboutAdmin,
  TeacherSl,
  NewsCards,
  News,
  LDocs,
} from "../pages";
import Layout from "../pages/adminpages/adminSidebar/layout";
import Npa99 from "../pages/HeaderPages/Npa99";
import NpaKr from "../pages/HeaderPages/NpaKr";
import NPAPosition from "../pages/HeaderPages/NPAPosition";
import OP from "../pages/HeaderPages/OP";
import RpObraz from "../pages/HeaderPages/RpObraz";
import RPProf from "../pages/HeaderPages/RPProf";
import SelfReport from "../pages/HeaderPages/SelfReport";
import TeachersSlAdmin from "../pages/adminpages/TeachersSlAdmin";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/info", element: <InfoPage /> },
  { path: "/fr", element: <Frontend /> },
  { path: "/br", element: <Backend /> },
  { path: "/mr", element: <MechRob /> },
  { path: "/md", element: <MobileDevelopment /> },
  { path: "/sa", element: <SisAdm /> },
  { path: "/td", element: <TD /> },
  { path: "/am", element: <AutoMechanic /> },
  { path: "/in", element: <Information /> },
  { path: "/ex", element: <Exploitation /> },
  { path: "/info/applicant", element: <Students /> },
  { path: "/info/docs", element: <LDocs /> },
  { path: "/info/op", element: <OP /> },
  { path: "/info/position", element: <NPAPosition /> },
  { path: "/info/selfreport", element: <SelfReport /> },
  { path: "/info/rpobraz", element: <RpObraz /> },
  { path: "/info/rpprof", element: <RPProf /> },
  { path: "/info/npakr", element: <NpaKr /> },
  { path: "/info/npa99", element: <Npa99 /> },
  {
    path: "/plit/teachers",
    element: <TeacherSl />,
  },
  // { path: "/plit/teachers/:id", element: <Teacherinfo /> },
  { path: "/news", element: <NewsCards /> },
  { path: "/news/:id", element: <News /> },
  { path: "/plit/about", element: <About /> },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      { path: "sign", element: <LoginPage /> }, // Страница входа
      { path: "main", element: <AdminPage /> }, // Страница админки
      { path: "home", element: <HomeAdmin /> },
      { path: "courses", element: <CoursesAdmin /> },
      { path: "docs", element: <DocsAdmin /> },
      { path: "npa", element: <NpaAdmin /> },
      { path: "news", element: <NewsAdmin /> },
      { path: "plit", element: <PlitAdmin /> },
      { path: "about", element: <AboutAdmin /> },
      { path: "teachersad", element: <TeachersSlAdmin /> },
    ],
  },
];

export default routes;
