import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import SignIn from "./pages/Singin/SignIn";
import MainLayout from "./layout/MainLayout/MainLayout";
import JobsDetails from "./pages/JobsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route Not Fount</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <JobsDetails></JobsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
