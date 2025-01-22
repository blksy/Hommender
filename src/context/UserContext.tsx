import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Admin, Client, Specialist, User } from "../../types/types";
import { supabase } from "../database/supabase";

interface UserContextType {
  user: User | Client | Specialist | Admin | null;
  setUser: (user: User | null) => void;
  fetchUserData: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | Client | Specialist | Admin | null>(
    null
  );

  const fetchUserData = async () => {
    try {
      const { data: session } = await supabase.auth.getSession();
      if (session?.user) {
        const userId = session.user.id;
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("role")
          .eq("id", userId)
          .single();

        if (userError) throw userError;

        const role = userData.role;

        if (role === "client") {
          const { data: clientData, error: clientError } = await supabase
            .from("clients")
            .select("*")
            .eq("id", userId)
            .single();
          if (clientError) throw clientError;
          setUser(clientData);
        } else if (role === "specialist") {
          const { data: specialistData, error: specialistError } =
            await supabase
              .from("specialists")
              .select("*")
              .eq("id", userId)
              .single();
          if (specialistError) throw specialistError;
          setUser(specialistData);
        } else {
          setUser({ id: userId, role, created_at: session.user.created_at });
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserData }}>
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
