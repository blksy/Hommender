import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedWrapper from "../components/ProtectedWrapper";
import Loader from "../components/Loader";

// Lazy-loaded pages
import {
  Start,
  Login,
  Register,
  HomeLayout,
  Home,
  About,
  Requests,
  RequestDetails,
  AddRequest,
  Services,
  ServiceDetails,
  AddService,
  Specialists,
  SpecialistDetails,
  AddReview,
  Clients,
  ClientDetails,
  UserProfile,
  EditProfile,
  Contact,
  ContactForm,
  RulesAndRegulations,
  PrivacyPolicy,
} from "./lazyPages";

// Path constants
export const ROUTES = {
  START: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  APP: "/app",
  ABOUT: "/app/about",

  REQUESTS: "/app/requests",
  REQUESTS_ADD: "/app/requests/add_request",
  REQUEST_DETAILS: (id: string) => `/app/requests/${id}`,

  SERVICES: "/app/services",
  SERVICES_ADD: "/app/services/add_service",
  SERVICE_DETAILS: (id: string) => `/app/services/${id}`,

  SPECIALISTS: "/app/specialists",
  SPECIALIST_DETAILS: (id: string) => `/app/specialists/${id}`,
  REVIEW_ADD: (id: string) => `/app/specialists/${id}/add_review`,

  CLIENTS: "/app/clients",
  CLIENT_DETAILS: (id: string) => `/app/clients/${id}`,

  PROFILE: "/app/profile",
  PROFILE_EDITION: "/app/profile/edit",

  RULES: "/app/rules",
  PRIVACY_POLICY: "/app/privacy_policy",

  CONTACT: "/app/contact",
  CONTACT_FORM: "/app/contact_form",
};

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

  // All routes below /app are protected by this single wrapper
  {
    path: ROUTES.APP,
    element: (
      <ProtectedWrapper>
        <Suspense fallback={<Loader />}>
          <HomeLayout />
        </Suspense>
      </ProtectedWrapper>
    ),

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      // Requests
      {
        path: "requests",
        children: [
          {
            index: true,
            element: <Requests />,
          },
          {
            path: "add_request",
            element: <AddRequest />,
          },
          {
            path: ":id",
            element: <RequestDetails />,
          },
        ],
      },

      // Services
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: "add_service",
            element: <AddService />,
          },
          {
            path: ":id",
            element: <ServiceDetails />,
          },
        ],
      },

      // Profile
      {
        path: "profile",
        children: [
          {
            index: true,
            element: <UserProfile />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
        ],
      },

      // Specialists
      {
        path: "specialists",
        children: [
          {
            index: true,
            element: <Specialists />,
          },
          {
            path: ":id",
            element: <SpecialistDetails />,
          },
          {
            path: ":id/add_review",
            element: <AddReview />,
          },
        ],
      },

      // Clients
      {
        path: "clients",
        children: [
          {
            index: true,
            element: <Clients />,
          },
          {
            path: ":id",
            element: <ClientDetails />,
          },
        ],
      },

      {
        path: "rules",
        element: <RulesAndRegulations />,
      },
      {
        path: "privacy_policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "contact_form",
        element: <ContactForm />,
      },
    ],
  },
]);
