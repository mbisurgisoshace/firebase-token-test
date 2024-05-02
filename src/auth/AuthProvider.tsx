import { User, onAuthStateChanged } from "firebase/auth";
import { useState, createContext, useEffect, useContext } from "react";

import { auth } from "@/db/firebase";

const AuthContext = createContext<{
  isLoading: boolean;
  currentUser: User | null;
} | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  }, []);

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }

    setIsLoading(false);
  }

  const values = {
    isLoading,
    currentUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth has to be used within <AuthContext.Provider>");
  }

  return auth;
}
