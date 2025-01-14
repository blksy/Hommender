import * as yup from "yup";

//Enum for Role
const roles = ["client", "specialist", "admin"] as const;
type Role = (typeof roles)[number];

// User Schema
export const userSchema = yup.object({
  created_at: yup.string().required(),
  id: yup.number().required(),
  role: yup
    .string()
    .oneOf(roles, "Role must be one of: client, specialist, admin")
    .required(),
});

// Specialist Schema
export const specialistSchema = yup.object({
  address: yup.string().required(),
  description: yup.string().required(),
  full_name: yup.string().required(),
  id: yup.string().required(),
  phone: yup.string().nullable(),
  reviews: yup.array().of(yup.string()).nullable(),
  role: yup
    .string()
    .oneOf(roles, "Role must be one of: client, specialist, admin")
    .required(),
  services: yup.array().of(yup.string()).nullable(),
});

// Client Schema
export const clientSchema = yup.object({
  address: yup.string().required(),
  full_name: yup.string().required(),
  id: yup.string().required(),
  orders: yup.array().of(yup.string()).nullable(),
  phone: yup.string().required(),
  reviews: yup.array().of(yup.string()).nullable(),
  role: yup
    .string()
    .oneOf(roles, "Role must be one of: client, specialist, admin")
    .required(),
});

// Request Schema
export const requestSchema = yup.object({
  additional_info: yup.string().nullable(),
  clientId: yup.string().required(),
  contact: yup.string().required(),
  description: yup.string().required(),
  id: yup.string().required(),
  location: yup.string().required(),
  type_of_request: yup.string().required(),
});

// Service Schema
export const serviceSchema = yup.object({
  additional_info: yup.string().nullable(),
  contact: yup.string().required(),
  description: yup.string().required(),
  id: yup.string().required(),
  location: yup.string().nullable(),
  price: yup.string().nullable(),
  specialist_name: yup.string().required(),
  specialistId: yup.string().required(),
  type_of_service: yup.string().required(),
});

// Review Schema
export const reviewSchema = yup.object({
  client_id: yup.string().required(),
  comment: yup.string().required(),
  created_at: yup.string().required(),
  id: yup.number().required(),
  rating: yup.number().nullable(),
  specialist_id: yup.string().required(),
});

// Login Schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please provide an username for existing account"),
  password: yup.string().required("Please provide a password for your account"),
});

// Register Schema
export const registerSchema = yup.object({
  full_name: yup.string().required("Please state your full name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please provide an existing email"),
  password: yup.string().required("Please provide a new password"),
  role: yup
    .string()
    .oneOf(roles, "Invalid account type")
    .required("Please select an account type (client or specialist)"),
  address: yup.string().when("role", (role: string, schema) => {
    return role === "specialist" || role === "client"
      ? schema.required("Please provide your address")
      : schema.nullable();
  }),
  description: yup.string().when("role", (role: string, schema) => {
    return role === "specialist"
      ? schema.required("Please provide a description of yourself")
      : schema.notRequired();
  }),
  phone: yup.string().when("role", (role: string, schema) => {
    return role === "specialist" || role === "client"
      ? schema.required("Please provide your phone number")
      : schema.nullable();
  }),
  services: yup.string().when("role", (role: string, schema) => {
    return role === "specialist"
      ? schema
          .min(1, "Please provide at least one service offered")
          .required("Please provide services offered")
      : schema.notRequired();
  }),
});
