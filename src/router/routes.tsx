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
import AddRequest from "../pages/AddRequest";
import AddService from "../pages/AddService";
import ContactForm from "../components/ContactForm";
import AddReview from "../pages/AddReview";
import EditProfile from "../pages/EditProfile";

// Path Constants
export const ROUTES = {
  START: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  APP: "/app",
  ABOUT: "/app/about",
  REQUESTS: "/app/requests",
  REQUESTS_ADD: "/app/requests/add_request",
  REVIEW_ADD: (id: string) => `/app/specialists/${id}/add_review`,
  SERVICES_ADD: "/app/services/add_service",
  REQUEST_DETAILS: (id: string) => `/app/requests/${id}`,
  SERVICES: "/app/services",
  SERVICE_DETAILS: (id: string) => `/app/services/${id}`,
  RULES: "/app/rules",
  PRIVACY_POLICY: "/app/privacy_policy",
  PROFILE: "/app/profile",
  PROFILE_EDITION: "/app/profile/edit",
  CLIENTS: "/app/clients",
  CLIENT_DETAILS: (id: string) => `/app/clients/${id}`,
  SPECIALISTS: "/app/specialists",
  SPECIALIST_DETAILS: (id: string) => `/app/specialists/${id}`,
  CONTACT: "/app/contact",
  CONTACT_FORM: "/app/contact_form",
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
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Requests />
              </Suspense>
            ),
          },
          {
            path: "add_request",
            element: (
              <Suspense fallback={<Loader />}>
                <AddRequest />
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <RequestDetails />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            ),
          },
          {
            path: "add_service",
            element: (
              <Suspense fallback={<Loader />}>
                <AddService />
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <ServiceDetails />
              </Suspense>
            ),
          },
        ],
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
        path: "profile",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <UserProfile />
              </Suspense>
            ),
          },
          {
            path: "edit",
            element: (
              <Suspense fallback={<Loader />}>
                <EditProfile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "specialists",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Specialists />
              </Suspense>
            ),
          },
          {
            path: "specialists/:id/add_review",
            element: (
              <Suspense fallback={<Loader />}>
                <AddReview />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "clients",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Clients />
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <ClientDetails />
              </Suspense>
            ),
          },
        ],
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
      {
        path: "contact_form",
        element: (
          <Suspense fallback={<Loader />}>
            <ContactForm />
          </Suspense>
        ),
      },
    ],
  },
]);
