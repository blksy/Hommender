import { useQuery } from "@tanstack/react-query";
import { supabase } from "../database/supabase";
import {
  HandleSupabaseError,
  Role,
  ClientInsert,
  SpecialistInsert,
} from "../../types/types";

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
  const signUp = async (
    name: string,
    email: string,
    password: string,
    role: Role,
    additionalInfo: { address: string; phone: string; description?: string }
  ) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        handleSupabaseError(error);
      }

      if (data?.user) {
        const userId = data.user.id;
        const createdAt = new Date().toISOString();

        if (role === "client") {
          const clientData: ClientInsert = {
            id: userId,
            full_name: name,
            address: additionalInfo.address,
            phone: additionalInfo.phone,
            role: "client",
          };

          const { error: clientError } = await supabase
            .from("clients")
            .insert(clientData);

          if (clientError) {
            handleSupabaseError(clientError);
          }
        } else if (role === "specialist") {
          const specialistData: SpecialistInsert = {
            id: userId,
            full_name: name,
            address: additionalInfo.address,
            phone: additionalInfo.phone,
            role: "specialist",
            description: additionalInfo.description || null,
          };

          const { error: specialistError } = await supabase
            .from("specialists")
            .insert(specialistData);

          if (specialistError) {
            handleSupabaseError(specialistError);
          }
        }

        const { error: userError } = await supabase.from("users").insert({
          id: userId,
          created_at: createdAt,
          role,
        });

        if (userError) {
          handleSupabaseError(userError);
        }
      }
    } catch (error) {
      handleSupabaseError(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) handleSupabaseError(error);
    } catch (error) {
      handleSupabaseError(error);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) handleSupabaseError(error);
    } catch (error) {
      handleSupabaseError(error);
    }
  };

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        return session?.user ?? null;
      } catch (error) {
        handleSupabaseError(error);
      }
    },
  });

  return { signUp, login, logout, user, isLoading, error };
};
