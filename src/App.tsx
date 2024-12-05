import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Requests from "./pages/Requests";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleRequest from "./pages/SingleRequest";
import SingleService from "./pages/SingleService";
import ClientProfile from "./pages/ClientProfile";
import SpecialistProfile from "./pages/SpecialistProfile";
import Specialists from "./pages/Specialists";
import ClientDetails from "./pages/ClientDetails";
import Clients from "./pages/Clients";
import SpecialistDetails from "./pages/SpecialistDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      { path: "/about", element: <About /> },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "requests/:id",
        element: <SingleRequest />,
      },
      {
        path: "services/:id",
        element: <SingleService />,
      },
      {
        path: "/client-profile",
        element: <ClientProfile />,
      },
      {
        path: "/specialist-profile",
        element: <SpecialistProfile />,
      },
      {
        path: "/specialists",
        element: <Specialists />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/clients/:id",
        element: <ClientDetails />,
      },
      {
        path: "/specialists/:id",
        element: <SpecialistDetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
