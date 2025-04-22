import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Shared/Navbar";
import Footer from "../../pages/Home/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
