import { IconType } from "react-icons";

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

export interface FormLayoutProps {
  title: string;
  children: React.ReactNode;
}
