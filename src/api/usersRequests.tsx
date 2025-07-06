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
  id: string
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

export const fetchUserData = async () => {
  try {
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getUser();
    if (sessionError) throw sessionError;

    const sessionUser = sessionData?.user;
    if (!sessionUser) {
      return null;
    }

    const userId = sessionUser.id;
    const userData = await getUserById(userId);
    if (!userData) throw new Error("User not found");

    let detailedUserData = null;
    if (userData.role === "client") {
      const { data: clientData } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", userId)
        .single();
      detailedUserData = clientData;
    } else if (userData.role === "specialist") {
      const { data: specialistData } = await supabase
        .from("specialists")
        .select("*")
        .eq("user_id", userId)
        .single();
      detailedUserData = specialistData;
    } else {
      detailedUserData = {
        id: userId,
        role: userData.role,
        created_at: sessionUser.created_at,
      };
    }
    return detailedUserData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const logOut = async () => {
  await supabase.auth.signOut();
};

export const logIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error logging in:", error);
  }
};
