import { Service } from "../../types/types";
import { supabase } from "../database/supabase";

export const addService = async (newService: Service) => {
  const { data, error } = await supabase
    .from("service")
    .insert([newService])
    .select();

  if (error) {
    console.error("Failed to add new service", error);
    throw error;
  }
  return data;
};

export const fetchAllServices = async () => {
  const { data: services, error } = await supabase.from("service").select("*");
  if (error) {
    console.error("Failed to fetch services data", error);
    throw error;
  }

  return services;
};

export const getServiceById = async (id: string) => {
  const { data: service, error } = await supabase
    .from("service")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Failed to fetch service data", error);
    throw error;
  }

  return service;
};

export const deleteServiceById = async (id: string) => {
  console.log("Calling deleteServiceById for", id);
  const { data, error } = await supabase
    .from("service")
    .delete()
    .eq("id", id)
    .select();
  console.log("supabase delete response:", { data, error });
  if (error) {
    console.error("Failed to delete service", error);
    throw error;
  }
  return data;
};
