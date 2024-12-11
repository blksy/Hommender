import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import { useState } from "react";

const HomeLayout = () => {
  const [sideNavToggle, setSideNavToggle] = useState(false);

  return (
    <div className="flex">
      {sideNavToggle && <SideNav sideNavToggle={sideNavToggle} />}
      <div className="flex-1">
        <Navbar
          sideNavToggle={sideNavToggle}
          setSideNavToggle={setSideNavToggle}
        />
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
