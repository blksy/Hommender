import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Client, Specialist, User, UserContextType } from "../../types/types";
import { supabase } from "../database/supabase";
import { fetchUserData } from "../api/usersRequests";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | Client | Specialist | null>(null);

  //const { data: { user } } = await supabase.auth.getUser()

  useEffect(() => {
    supabase.auth.getSession().then(() => {
      fetchUserData()
        .then((data) => {
          console.log("userData", data);
          setUser(data);
        })
        .catch(() => {
          setUser(null);
        });
    });

    supabase.auth.onAuthStateChange(async () => {
      fetchUserData()
        .then((data) => {
          console.log("userData", data);
          setUser(data);
        })
        .catch(() => {
          setUser(null);
        });
    });
  }, []);

  // supabase.auth.onAuthStateChange(async (event) => {
  //   try {
  //     console.log("onAuthStateChange");
  //     const { data: sessionData, error } = await supabase.auth.getSession();
  //     console.log("sessionData", sessionData);
  //     if (error) throw error;

  //     const session = sessionData?.session;

  //     if (
  //       session?.user &&
  //       (event === "SIGNED_IN" ||
  //         event === "USER_UPDATED" ||
  //         event === "TOKEN_REFRESHED")
  //     ) {
  //       const userData = await fetchUserData();
  //       setUser(userData);
  //     } else if (event === "SIGNED_OUT") {
  //       setUser(null);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching session in auth state change:", error);
  //     setUser(null);
  //   }
  // });

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
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
