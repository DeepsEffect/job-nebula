import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import AddJob from "../pages/AddJob/AddJob";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../pages/JobDetails/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello world!</Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "addAJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API_URL}/jobs/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
