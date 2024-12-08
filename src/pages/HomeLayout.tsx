import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const HomeLayout = () => {
  return (
    <div className="flex ">
      <SideNav />
      <div className="align-element py-20"></div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
