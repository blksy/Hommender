import { IconType } from "react-icons";

export type Role = "client" | "specialist";

export type HandleSupabaseError = (error: any) => void;

export type ClientInsert = {
  id?: string;
  full_name: string;
  address: string;
  phone: string;
  role: string;
  orders?: string[] | null;
};

export type SpecialistInsert = {
  id?: string;
  full_name: string;
  address: string | null;
  phone: string | null;
  role: string;
  description?: string | null;
  services?: string[] | null;
};

export interface SpecialistCardProps {
  specialist: {
    profilePic: string;
    fullName: string;
    services: string;
    phone: string;
  };
}

export interface ServiceCardProps {
  service: {
    type: string;
    specialistName: string;
    location: string;
    priceRange: string;
    contact: string;
  };
}

export interface RequestCardProps {
  request: {
    type: string;
    location: string;
    contact: string;
  };
}

export interface ClientCardProps {
  client: {
    profilePic: string;
    fullName: string;
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
  id: number;
  role: string;
}

export interface Specialist {
  address: string | null;
  description: string | null;
  full_name: string;
  id: string;
  phone: string | null;
  role: string;
  services: string[] | null;
}

export interface Client {
  address: string;
  full_name: string;
  id: string;
  orders: string[] | null;
  phone: string;
  role: string;
}

export interface Request {
  additional_info: string | null;
  client_id: string;
  contact: string;
  description: string;
  id: string;
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
  id: number;
  rating: number | null;
  specialist_id: string;
}
