import * as yup from "yup";

// User Schema
export const userSchema = yup.object({
  created_at: yup.string().required(),
  id: yup.number().required(),
  role: yup.string().required(),
});

// Specialist Schema
export const specialistSchema = yup.object({
  address: yup.string().required(),
  description: yup.string().required(),
  full_name: yup.string().required(),
  id: yup.string().required(),
  phone: yup.string().nullable(),
  reviews: yup.array().of(yup.string()).nullable(),
  role: yup.string().required(),
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
  role: yup.string().required(),
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
