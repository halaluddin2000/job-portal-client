import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default MainLayout;
