import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import { Children } from "react";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";

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
        path: "Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
