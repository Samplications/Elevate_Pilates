import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { supabase } from "../utils/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

type AppRole = "admin" | "viewer";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  role: AppRole | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    phone_nr?: string,
    birthday?: string
  ) => Promise<{ error: Error | null }>,
  signOut: () => Promise<void>;
  signInWithMicrosoft: () => Promise<{ error: Error | null }>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  role: null,
  loading: true,
  isAdmin: false,
  signIn: async (_email: string, _password: string) => ({ error: null }),
  signUp: async (
    _email: string,
    _password: string,
    _first_name: string,
    _last_name: string,
    _phone_nr?: string,
    _birthday?: string
  ) => ({ error: null }),
  signOut: async () => {},
  signInWithMicrosoft: async () => ({ error: null }),
  resetPassword: async (_email: string) => ({ error: null }),
});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRole = useCallback(async (userId: string) => {
    // const { data } = await supabase
    //   .from("user_roles")
    //   .select("role")
    //   .eq("user_id", userId)
    //   .single();
    const role = "admin" // TODO TODO 
    if (role === "admin" || role === "viewer") {
      setRole(role);
    } else {
      setRole(null);
    }
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          await fetchRole(session.user.id);
        } else {
          setRole(null);
        }
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchRole(session.user.id);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [fetchRole]);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error as Error | null };
  };

  const signUp = async (
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  phone_nr?: string,
  birthday?: string
) => {
  // Sign up the user
  const { error: authError, data: authData } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return { error: authError as Error | null };
  }

  if (!authData?.user?.id) {
  return { error: new Error("User ID not found in auth response") };
}

  // Insert into the Members table
  const { error: membersError } = await supabase
    .from("Members")
    .insert([
      {
        id: authData?.user.id,
        first_name,
        last_name,
        email,
        phone_nr: phone_nr || null, // Handle optional field
        birthday: birthday || null, // Handle optional field
      },
    ]);

  if (membersError) {
    return { error: membersError as Error | null };
  }

  return { error: null };
};

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setUser(null);
      setSession(null);
      setRole(null);
    }
  };

  const signInWithMicrosoft = async () => {
    if (typeof window === "undefined") {
      return { error: new Error("window is not available") };
    }
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: {
        scopes: "openid profile email",
        redirectTo: window.location.origin,
      },
    });
    return { error: error as Error | null };
  };

   const resetPassword = async (email: string) => {
    if (typeof window === "undefined") {
      return { error: new Error("window is not available") };
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`, // TODO adjust to your actual reset-password route
    });
    return { error: error as Error | null };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        role,
        loading,
        isAdmin: role === "admin",
        signIn,
        signUp,
        signOut,
        signInWithMicrosoft,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);