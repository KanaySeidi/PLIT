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
  LDocs,
  About,
  Teacherinfo,
  Students,
  NPA,
  LoginPage,
  AdminPage,
  HomeAdmin,
  CoursesAdmin,
<<<<<<< HEAD
=======
  InfoAdmin,
  AdminApplicant,
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
  DocsAdmin,
  NpaAdmin,
  NewsAdmin,
  PlitAdmin,
  AboutAdmin,
<<<<<<< HEAD
  TeacherSl,
  NewsCards,
  News,
  Npa99,
=======
  TeachersSlAdmin,
  TeacherSl,
  NewsCards,
  News,
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
} from "../pages";
import Layout from "../pages/adminpages/adminSidebar/layout";

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
  { path: "/info/npa", element: <NPA /> },
  { path: "/plit/teachers", element: <TeacherSl /> },
  { path: "/plit/teachers/:id", element: <Teacherinfo /> },
  { path: "/news", element: <NewsCards /> },
  { path: "/news/:id", element: <News /> },
  { path: "/plit/about", element: <About /> },
  { path: "/npa99", element: <Npa99 /> },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      { path: "sign", element: <LoginPage /> }, // Страница входа
      { path: "main", element: <AdminPage /> }, // Страница админки
      { path: "home", element: <HomeAdmin /> },
      { path: "courses", element: <CoursesAdmin /> },
<<<<<<< HEAD
      { path: "docs", element: <DocsAdmin /> },
      { path: "npa", element: <NpaAdmin /> },
      { path: "news", element: <NewsAdmin /> },
      { path: "plit", element: <PlitAdmin /> },
      { path: "about", element: <AboutAdmin /> },
=======
      { path: "information", element: <InfoAdmin /> },
      { path: "applicant", element: <AdminApplicant /> },
      {path : "docs", element: <DocsAdmin />},
      {path: "npa", element: <NpaAdmin />},
      { path: "news", element: <NewsAdmin /> },
      { path: "plit", element: <PlitAdmin /> },
      { path: "about", element: <AboutAdmin /> },
      { path: "teachersad", element: <TeachersSlAdmin /> },
>>>>>>> 418495c652824e12b89688565be65b6aaa949fae
    ],
  },
];

export default routes;
