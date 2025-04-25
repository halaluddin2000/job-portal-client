import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import SignIn from "./pages/Singin/SignIn";
import MainLayout from "./layout/MainLayout/MainLayout";

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
