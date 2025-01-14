import { Client } from "../../types/types";
import { supabase } from "../database/supabase";

export const fetchAllClients = async () => {
  const { data: clients, error } = await supabase.from("clients").select("*");
  if (error) {
    console.error("Failed to fetch clients data", error);
    throw error;
  }
  return clients;
};

export const updateClientById = async (
  updateClientData: Partial<Client>,
  id: string
) => {
  const { data, error } = await supabase
    .from("clients")
    .update(updateClientData)
    .eq("id", id)
    .select();
  if (error) {
    console.error("Failed to update client data", error);
    throw error;
  }

  return data;
};

export const getClientById = async (id: string) => {
  const { data: client, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Failed to fetch client data", error);
    throw error;
  }
  return client;
};

export const deleteClientById = async (id: string) => {
  const { data, error } = await supabase
    .from("clients")
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    console.error("Failed to delete client", error);
    throw error;
  }
  return data;
};
