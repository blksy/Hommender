import { User } from "../../types/types";
import { supabase } from "../database/supabase";

export const fetchUsers = async () => {
  try {
    const { data: users, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Failed to fetch users", error);
      throw error;
    }
    return users;
  } catch (error) {
    console.error("Unexpected error fetching users", error);
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, role, created_at")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Failed to fetch user by ID", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error fetching user by ID", error);
    throw error;
  }
};

export const updateUserById = async (
  updateUserData: Partial<User>,
  id: string | number
) => {
  const { data, error } = await supabase
    .from("users")
    .update(updateUserData)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Failed to update client data", error);
    throw error;
  }

  return data;
};
