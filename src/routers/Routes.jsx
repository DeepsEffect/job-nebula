import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello world!</Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
