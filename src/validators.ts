import * as yup from "yup";

//Enum for Role
const roles = ["client", "specialist", "admin"] as const;

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
  contact: yup
    .string()
    .required("Contact is required")
    .matches(/^\+?\d{7,15}$/, "Contact must be a valid phone number"),
  description: yup.string().required("Description is required"),
  location: yup.string().required("Location is required"),
  price: yup
    .string()
    .required("Price is required")
    .matches(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),
  specialist_name: yup.string().required("Specialist name is required"),
  specialist_id: yup.string().required("Specialist ID is required"),
  type_of_service: yup.string().required("Type of service is required"),
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
    .required("Please provide an email for existing account"),
  password: yup.string().required("Please provide a password for your account"),
});

// Register Schema
export const registerSchema = yup.object({
  role: yup
    .string()
    .required("Role is required")
    .oneOf(
      ["client", "specialist"],
      "Role must be either 'client' or 'specialist'"
    ),
  full_name: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters long"),
  phone: yup
    .string()
    .required("Phone number is required, must be in format +48 123-456-789")
    .matches(
      /^\+48 \d{3}-\d{3}-\d{3}$/,
      "Phone must be in format +48 123-456-789"
    ),
  address: yup.string().required("Address is required"),
  description: yup
    .string()
    .nullable()
    .when("role", {
      is: "specialist",
      then: (schema) =>
        schema.required("Description is required for specialists"),
      otherwise: (schema) => schema.notRequired(),
    }),
  orders: yup
    .array()
    .of(yup.string())
    .nullable()
    .when("role", {
      is: "client",
      then: (schema) => schema.notRequired(),
      otherwise: (schema) => schema.notRequired(),
    }),
  services: yup
    .string()
    .nullable()
    .when("role", {
      is: "specialist",
      then: (schema) =>
        schema
          .min(1, "Please provide at least one service offered")
          .required("Please provide services offered"),
      otherwise: (schema) => schema.notRequired(),
    }),
});
// Add Service Schema
export const addServiceSchema = yup.object({
  type_of_service: yup.string().required("Type of service is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .string()
    .required("Price is required")
    .matches(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),
  location: yup.string().required("Location is required"),
  contact: yup
    .string()
    .required("Contact phone is required")
    .matches(
      /^\+?\d{9,15}$/,
      "Contact must be 9–15 digits, optional leading +"
    ),
  additional_info: yup.string().nullable(),
  specialist_id: yup.string().required(),
  specialist_name: yup.string().required(),
});
// Add Request Schema
export const addRequestSchema = yup.object({
  type_of_request: yup.string().required("Request type is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .string()
    .required("Contact phone is required")
    .matches(
      /^\+?\d{9,15}$/,
      "Contact must be 9–15 digits, optional leading +"
    ),
  location: yup.string().required("Location is required"),
  additional_info: yup.string().nullable(),
  client_id: yup.string().required(),
  client_name: yup.string().required(),
});
