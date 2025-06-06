import {
  HomePage,
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
  News,
  NewsCards,
} from "../pages";
import TeacherInfo from "../components/teachersSlider/Teacherinfo";

const routes = [
  { path: "/home", element: <HomePage /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/info", element: <InfoPage /> },
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
  { path: "/teacher/:id", element: <TeacherInfo /> },
  { path: "/news/:id", element: <News /> },
  { path: "/newsCards", element: <NewsCards /> },
];
export default routes;
