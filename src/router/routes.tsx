import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import About from "../pages/About";
import Requests from "../pages/Requests";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
import { Suspense } from "react";
import RequestDetails from "../pages/RequestDetails";
import ServiceDetails from "../pages/ServiceDetails";

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
  REQUEST_DETAILS: (id: string) => `/app/requests/${id}`,
  SINGLE_DETAILS: (id: string) => `/app/services/${id}`,
  PROFILE: "/app/profile",
  SPECIALISTS: "/app/specialists",
  CLIENTS: "/app/clients",
  CLIENT_DETAILS: (id: string) => `/app/clients/${id}`,
  SPECIALIST_DETAILS: (id: string) => `/app/specialists/${id}`,
  CONTACT: "/app/contact",
};

// Fallback loader for lazy-loaded components
const Loader = () => <div>Loading...</div>;

// Router
export const router = createBrowserRouter([
  {
    path: ROUTES.START,
    element: (
      <Suspense fallback={<Loader />}>
        <Start />
      </Suspense>
    ),
  },
  {
    path: ROUTES.LOGIN,
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: ROUTES.REGISTER,
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: ROUTES.APP,
    element: (
      <Suspense fallback={<Loader />}>
        <HomeLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "requests",
        element: (
          <Suspense fallback={<Loader />}>
            <Requests />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "rules",
        element: (
          <Suspense fallback={<Loader />}>
            <RulesAndRegulations />
          </Suspense>
        ),
      },
      {
        path: "privacy_policy",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "requests/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <RequestDetails />
          </Suspense>
        ),
      },
      {
        path: "services/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ServiceDetails />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "specialists",
        element: (
          <Suspense fallback={<Loader />}>
            <Specialists />
          </Suspense>
        ),
      },
      {
        path: "clients",
        element: (
          <Suspense fallback={<Loader />}>
            <Clients />
          </Suspense>
        ),
      },
      {
        path: "clients/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ClientDetails />
          </Suspense>
        ),
      },
      {
        path: "specialists/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <SpecialistDetails />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);
