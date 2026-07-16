import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { supabase } from "../lib/supabase";
import { signIn as signInService, signOut as signOutService, signUp as signUpService } from "../services/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function initializeSession() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (isMounted) {
        setUser(data.session?.user ?? null);
        setLoading(false);
      }
    }

    initializeSession();

    const { data: authListener } = supabase
      ? supabase.auth.onAuthStateChange((_event, session) => {
          if (isMounted) {
            setUser(session?.user ?? null);
          }
        })
      : { data: null };

    return () => {
      isMounted = false;
      authListener?.subscription?.unsubscribe?.();
    };
  }, []);

  const signIn = async (email, password) => {
    const response = await signInService(email, password);
    if (!response.error) {
      setUser(response.data?.user ?? null);
    }
    return response;
  };

  const signUp = async (email, password) => {
    const response = await signUpService(email, password);
    if (!response.error) {
      setUser(response.data?.user ?? null);
    }
    return response;
  };

  const signOut = async () => {
    const response = await signOutService();
    setUser(null);
    return response;
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      signIn,
      signUp,
      signOut,
    }),
    [loading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
