import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const [sideNavToggle, setSideNavToggle] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {sideNavToggle && (
          <SideNav
            sideNavToggle={sideNavToggle}
            setSideNavToggle={setSideNavToggle}
          />
        )}
        <div className="flex-1">
          <Navbar
            sideNavToggle={sideNavToggle}
            setSideNavToggle={setSideNavToggle}
          />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
