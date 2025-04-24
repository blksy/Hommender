import { ReactNode } from "react";
import { IconType } from "react-icons";

export type Role = "client" | "specialist";

export type HandleSupabaseError = (error: any) => void;

export interface UserContextType {
  user: User | Client | Specialist | Admin | null;
}

export type BasicInsert = {
  id?: string;
  full_name: string;
  address: string;
  phone: string;
  role: Role;
};

export type ClientSpecific = BasicInsert & {
  role: "client";
  orders?: string[] | null;
};

export type SpecialistSpecific = BasicInsert & {
  role: "specialist";
  description?: string | null;
  services?: string[] | null;
};

export type ClientInsert = BasicInsert & ClientSpecific & { role: "client" };
export type SpecialistInsert = BasicInsert &
  SpecialistSpecific & { role: "specialist" };

export type UserInsert = ClientInsert | SpecialistInsert;

export interface SpecialistCardProps {
  specialist: {
    id: string;
    profilePic: string | null;
    full_name: string;
    services: string[];
    phone: string;
  };
}

export interface ProtectedWrapperProps {
  children: ReactNode;
}

export interface ServiceCardProps {
  service: {
    id: string;
    type_of_service: string;
    specialist_name: string;
    location: string;
    price: string;
    contact: string;
  };
}

export interface RequestCardProps {
  request: {
    id: string;
    type_of_request: string;
    location: string;
    description: string;
  };
}

export interface ClientCardProps {
  client: {
    id: string;
    profilePic: string;
    full_name: string;
    address: string;
    phone: string;
  };
}

export interface routerType {
  path: string;
  element: JSX.Element;
}
export interface SideNavItemProps {
  to: string;
  icon: IconType;
  label: string;
  onClick?: () => void;
}

export type RegisterFormValues = {
  email: string;
  password: string;
  full_name: string;
  role: "client" | "specialist";
  phone: string;
  address: string;
  description?: string; // Description for specialists
  services?: string[]; // Services for specialists
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export interface NavbarProps {
  sideNavToggle: boolean;
  setSideNavToggle: (toggle: boolean) => void;
}

export interface UserProfileProps {
  user: User & (Specialist | Client);
  reviews?: Review[];
  overallRating?: number;
}

export interface FormLayoutProps {
  title: string;
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export interface User {
  created_at: string;
  id: string;
  role: string;
}

export interface Admin {
  id: string;
  address: string | null;
  description: string | null;
  full_name: string;
  phone: string | null;
  role: string;
  services: string[] | null;
  orders: string[] | null;
}

export interface Specialist {
  address: string | null;
  description: string | null;
  full_name: string;
  id: string;
  phone: string | null;
  role: string;
  services: string[] | null;
  reviews: string[] | null;
}

export interface Client {
  address: string;
  full_name: string;
  id: string;
  orders: string[] | null;
  phone: string;
  role: string;
}

export interface ClientRequest {
  additional_info: string | null;
  contact: string;
  description: string;
  id: string;
  client_name: string | null;
  client_id: string;
  location: string;
  type_of_request: string;
}

export interface Service {
  additional_info: string | null;
  contact: string | null;
  description: string | null;
  id: string;
  location: string | null;
  price: string | null;
  specialist_id: string;
  specialist_name: string | null;
  type_of_service: string | null;
}

export interface Review {
  client_id: string;
  comment: string;
  created_at: string;
  id?: string;
  rating: number | null;
  specialist_id: string;
}
