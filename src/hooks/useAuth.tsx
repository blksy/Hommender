import { useQuery } from "@tanstack/react-query";
import { supabase } from "../database/supabase";
import {
  HandleSupabaseError,
  Role,
  ClientInsert,
  SpecialistInsert,
} from "../../types/types";
import { useUser } from "../context/UserContext";

const handleSupabaseError: HandleSupabaseError = (error) => {
  console.error("Supabase Error Details:", error);
  if (error instanceof Error) {
    console.error("Network Error:", error.message);
  } else {
    console.error("Supabase Error:", error);
  }
  throw new Error(error?.message || "Unknown error occurred");
};

export const useAuth = () => {
  const { fetchUserData } = useUser();

  const signUp = async (
    name: string,
    email: string,
    password: string,
    role: Role,
    additionalInfo: {
      address: string;
      phone: string;
      description?: string;
      services?: string[];
    }
  ) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) handleSupabaseError(error);

    const userId = data?.user?.id;
    if (!userId) return;

    const createdAt = new Date().toISOString();
    const { error: userError } = await supabase.from("users").insert({
      id: userId,
      created_at: createdAt,
      role,
    });

    if (userError) handleSupabaseError(userError);

    if (role === "client") {
      const clientData: ClientInsert = {
        user_id: userId,
        full_name: name,
        address: additionalInfo.address,
        phone: additionalInfo.phone,
        role: "client",
      };
      const { error: clientError } = await supabase
        .from("clients")
        .insert(clientData);
      if (clientError) handleSupabaseError(clientError);
    } else if (role === "specialist") {
      const specialistData: SpecialistInsert = {
        user_id: userId,
        full_name: name,
        address: additionalInfo.address,
        phone: additionalInfo.phone,
        role: "specialist",
        description: additionalInfo.description || null,
        services: additionalInfo.services || null,
      };
      const { error: specialistError } = await supabase
        .from("specialists")
        .insert(specialistData);
      if (specialistError) handleSupabaseError(specialistError);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) handleSupabaseError(error);
      await fetchUserData();
    } catch (error) {
      handleSupabaseError(error as Error);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) handleSupabaseError(error);
    } catch (error) {
      handleSupabaseError(error as Error);
    }
  };

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();
      return data.session?.user ?? null;
    },
  });

  return { signUp, login, logout, user, isLoading, error };
};
