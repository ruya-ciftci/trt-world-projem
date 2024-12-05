import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout";
import HomePages from "../Pages/Home";
import DetailsPages from "../Pages/Details";
import ErrorPage from "../Components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <HomePages />,
        index: true,
      },
      {
        element: <DetailsPages />,
        path: "/DetaySayfası",
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
