import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Admin, Client, Specialist, User } from "../../types/types";
import { supabase } from "../database/supabase";
import { getUserById } from "../api/usersRequests";

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

        const userData = await getUserById(userId);
        if (!userData) throw new Error("User not found");

        const role = userData.role;

        let detailedUserData = null;

        if (role === "client") {
          const { data: clientData, error: clientError } = await supabase
            .from("clients")
            .select("*")
            .eq("id", userId)
            .single();
          if (clientError) throw clientError;
          detailedUserData = clientData;
        } else if (role === "specialist") {
          const { data: specialistData, error: specialistError } =
            await supabase
              .from("specialists")
              .select("*")
              .eq("id", userId)
              .single();
          if (specialistError) throw specialistError;
          detailedUserData = specialistData;
        } else {
          detailedUserData = {
            id: userId,
            role,
            created_at: session.user.created_at,
          };
        }

        setUser(detailedUserData);
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
