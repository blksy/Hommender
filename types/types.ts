import { ReactNode } from "react";
import { IconType } from "react-icons";
import { TablesInsert, Tables } from "./supabase";

export type Role = "client" | "specialist";

export type HandleSupabaseError = (error: unknown) => void;

export interface UserContextType {
  user: User | Client | Specialist | Admin | null;
  loading: boolean;
}

export interface ResponseFormValues {
  message: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  subject: string;
  message: string;
  attachments: File | null;
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

export type ClientInsert = TablesInsert<"clients">;
export type ClientRequest = Tables<"requests">;
export type Service = Tables<"service">;
export type SpecialistInsert = TablesInsert<"specialists">;
export type ClientRequestInsert = TablesInsert<"requests">;
export type ServiceInsert = TablesInsert<"service">;
export type ReviewInsert = TablesInsert<"reviews">;
export type UserInsert = ClientInsert | SpecialistInsert;
export type Client = Tables<"clients">;
export type Specialist = Tables<"specialists">;

export interface SpecialistCardProps {
  specialist: Specialist;
}

export interface ProtectedWrapperProps {
  children: ReactNode;
}

export interface ServiceCardProps {
  service: Service;
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
  client: Client;
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

export interface RegisterFormValues {
  email: string;
  password: string;
  full_name: string;
  role: "client" | "specialist";
  phone: string;
  address: string;
  description: string;
  services: string;
}

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

export interface Review {
  client_id: string;
  comment: string;
  created_at: string;
  id?: string;
  rating: number | null;
  specialist_id: string;
}
