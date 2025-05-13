import { Specialist } from "../../types/types";
import { supabase } from "../database/supabase";

export const fetchAllSpecialists = async () => {
  const { data: specialists, error } = await supabase
    .from("specialists")
    .select("*");
  if (error) {
    console.error("Failed to fetch specialists data", error);
    // throw error;
  }

  return specialists;
};

export const getSpecialistById = async (id: string) => {
  const { data: specialist, error } = await supabase
    .from("specialists")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Failed to fetch specialist data", error);
    throw error;
  }

  return specialist;
};

export const updateSpecialistById = async (
  updateSpecialistData: Partial<Specialist>,
  id: string
) => {
  const { data, error } = await supabase
    .from("specialists")
    .update(updateSpecialistData)
    .eq("id", id)
    .select();
  console.log("updated data", data);
  if (error) {
    console.error("Failed to update specialist data", error);
    throw error;
  }

  return data;
};

export const deleteSpecialistById = async (id: string) => {
  const { data, error } = await supabase
    .from("specialists")
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    console.error("Failed to delete specialist", error);
    throw error;
  }
  return data;
};
