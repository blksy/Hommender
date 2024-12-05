import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <p>Home Page</p>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
