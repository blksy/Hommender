import React, { ReactNode, useEffect, useState } from "react";
import { Admin, Client, Specialist, User } from "../../types/types";
import { supabase } from "../database/supabase";
import { fetchUserData } from "../api/usersRequests";
import { UserContext } from "./UserContext";

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | Client | Specialist | Admin | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      try {
        const userData = await fetchUserData();

        if (isMounted) {
          setUser(userData);
        }
      } catch (error) {
        console.error("Error loading user:", error);

        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    const initializeUser = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (!session) {
          if (isMounted) {
            setUser(null);
          }
          return;
        }

        await loadUser();
      } catch (error) {
        console.error("Error initializing user:", error);

        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void initializeUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
        setLoading(false);
        return;
      }

      if (event === "SIGNED_IN") {
        setLoading(true);

        setTimeout(() => {
          void loadUser();
        }, 0);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
