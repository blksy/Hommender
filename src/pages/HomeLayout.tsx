import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Dashboard from "./Dashboard";

const HomeLayout = () => {
  return (
    <div className="flex">
      <Dashboard />
      <SideNav />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
