import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Requests from "./pages/Requests";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleRequest from "./pages/SingleRequest";
import SingleService from "./pages/SingleService";
import Specialists from "./pages/Specialists";
import ClientDetails from "./pages/ClientDetails";
import Clients from "./pages/Clients";
import SpecialistDetails from "./pages/SpecialistDetails";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import Start from "./pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> }, // Relative path
      { path: "requests", element: <Requests /> },
      { path: "services", element: <Services /> },
      { path: "requests/:id", element: <SingleRequest /> },
      { path: "services/:id", element: <SingleService /> },
      { path: "profile", element: <UserProfile /> },
      { path: "specialists", element: <Specialists /> },
      { path: "clients", element: <Clients /> },
      { path: "clients/:id", element: <ClientDetails /> },
      { path: "specialists/:id", element: <SpecialistDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
