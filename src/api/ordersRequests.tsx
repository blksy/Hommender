import { Request } from "../../types/types";
import { supabase } from "../database/supabase";

export const addOrder = async (newRequest: Request) => {
  const { data, error } = await supabase
    .from("requests")
    .insert([newRequest])
    .select();
  if (error) {
    console.error("Failed to add new request", error);
    throw error;
  }
  return data;
};

export const fetchAllOrders = async () => {
  const { data: requests, error } = await supabase.from("requests").select("*");
  if (error) {
    console.error("Failed to fetch requests data", error);
    throw error;
  }
  return requests;
};

export const getOrderById = async (id: string) => {
  const { data: request, error } = await supabase
    .from("requests")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Failed to fetch request data", error);
    throw error;
  }
  return request;
};

export const deleteServiceById = async (id: string) => {
  const { data, error } = await supabase
    .from("requests")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error("Failed to delete request", error);
    throw error;
  }
  return data;
};
