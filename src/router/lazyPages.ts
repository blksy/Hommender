import { lazy } from "react";

export const Start = lazy(() => import("../pages/Start"));
export const Login = lazy(() => import("../pages/Login"));
export const Register = lazy(() => import("../pages/Register"));

export const HomeLayout = lazy(() => import("../pages/HomeLayout"));
export const Home = lazy(() => import("../pages/Home"));
export const About = lazy(() => import("../pages/About"));

export const Requests = lazy(() => import("../pages/Requests"));
export const RequestDetails = lazy(() => import("../pages/RequestDetails"));
export const AddRequest = lazy(() => import("../pages/AddRequest"));

export const Services = lazy(() => import("../pages/Services"));
export const ServiceDetails = lazy(() => import("../pages/ServiceDetails"));
export const AddService = lazy(() => import("../pages/AddService"));

export const Specialists = lazy(() => import("../pages/Specialists"));
export const SpecialistDetails = lazy(
  () => import("../pages/SpecialistDetails"),
);
export const AddReview = lazy(() => import("../pages/AddReview"));

export const Clients = lazy(() => import("../pages/Clients"));
export const ClientDetails = lazy(() => import("../pages/ClientDetails"));

export const UserProfile = lazy(() => import("../pages/UserProfile"));
export const EditProfile = lazy(() => import("../pages/EditProfile"));

export const Contact = lazy(() => import("../pages/Contact"));
export const ContactForm = lazy(() => import("../components/ContactForm"));

export const RulesAndRegulations = lazy(
  () => import("../pages/RulesAndRegulations"),
);

export const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
