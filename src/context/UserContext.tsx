import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  Admin,
  Client,
  Specialist,
  User,
  UserContextType,
} from "../../types/types";
import { supabase } from "../database/supabase";
import { getUserById } from "../api/usersRequests";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | Client | Specialist | Admin | null>(
    null
  );

  const fetchUserData = async () => {
    try {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getUser();
      if (sessionError) throw sessionError;

      const sessionUser = sessionData?.user;
      if (!sessionUser) {
        setUser(null);
        return;
      }

      const userId = sessionUser.id;
      const userData = await getUserById(userId);
      if (!userData) throw new Error("User not found");

      let detailedUserData = null;
      if (userData.role === "client") {
        const { data: clientData } = await supabase
          .from("clients")
          .select("*")
          .eq("id", userId)
          .single();
        detailedUserData = clientData;
      } else if (userData.role === "specialist") {
        const { data: specialistData } = await supabase
          .from("specialists")
          .select("*")
          .eq("id", userId)
          .single();
        detailedUserData = specialistData;
      } else {
        detailedUserData = {
          id: userId,
          role: userData.role,
          created_at: sessionUser.created_at,
        };
      }

      setUser(detailedUserData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  supabase.auth.onAuthStateChange(async (event) => {
    setTimeout(async () => {
      try {
        const { data: sessionData, error } = await supabase.auth.getSession();
        if (error) throw error;

        const session = sessionData?.session;

        if (
          session?.user &&
          (event === "SIGNED_IN" ||
            event === "USER_UPDATED" ||
            event === "TOKEN_REFRESHED")
        ) {
          await fetchUserData();
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching session in auth state change:", error);
        setUser(null);
      }
    }, 0);
  });

  const logIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error logging in:", error);
      return false;
    }

    if (data?.user) {
      await fetchUserData();
      return true;
    }

    return false;
  };

  const logOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
