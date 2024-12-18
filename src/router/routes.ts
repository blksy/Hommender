import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import About from "../pages/About";
import Requests from "../pages/Requests";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "./pages/Register";
import SingleRequest from "../pages/SingleRequest";
import SingleService from "../pages/SingleService";
import Specialists from "../pages/Specialists";
import ClientDetails from "../pages/ClientDetails";
import Clients from "../pages/Clients";
import SpecialistDetails from "../pages/SpecialistDetails";
import Contact from "../pages/Contact";
import UserProfile from "../pages/UserProfile";
import Home from "../pages/Home";
import Start from "../pages/Start";
import RulesAndRegulations from "../pages/RulesAndRegulations";
import PrivacyPolicy from "../pages/PrivacyPolicy";

// Path Constants
export const ROUTES = {
  START: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  APP: "/app",
  ABOUT: "/app/about",
  REQUESTS: "/app/requests",
  SERVICES: "/app/services",
  RULES: "/app/rules",
  PRIVACY_POLICY: "/app/privacy_policy",
  SINGLE_REQUEST: (id: string) => `/app/requests/${id}`,
  SINGLE_SERVICE: (id: string) => `/app/services/${id}`,
  PROFILE: "/app/profile",
  SPECIALISTS: "/app/specialists",
  CLIENTS: "/app/clients",
  CLIENT_DETAILS: (id: string) => `/app/clients/${id}`,
  SPECIALIST_DETAILS: (id: string) => `/app/specialists/${id}`,
  CONTACT: "/app/contact",
};

// Router
export const router = createBrowserRouter([
  {
    path: ROUTES.START,
    element: <Start>,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.APP,
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "requests", element: <Requests /> },
      { path: "services", element: <Services /> },
      { path: "rules", element: <RulesAndRegulations /> },
      { path: "privacy_policy", element: <PrivacyPolicy /> },
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
