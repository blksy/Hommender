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

  useEffect(() => {
    supabase.auth.getSession().then(() => {
      fetchUserData()
        .then((data) => {
          // console.log("userData", data);
          setUser(data);
        })
        .catch(() => {
          setUser(null);
        });
    });

    supabase.auth.onAuthStateChange(async () => {
      fetchUserData()
        .then((data) => {
          // console.log("userData", data);
          setUser(data);
        })
        .catch(() => {
          setUser(null);
        });
    });
  }, []);

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
