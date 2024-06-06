import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "../auth/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in when the app loads
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = async (email, password) => {
    try {
        const response = await authService.login(email, password);
        console.log("Login response:", response);
        if (response ) {
          localStorage.setItem("user", JSON.stringify(response));
          setUser(response);
          console.log("User set after login:", response);
          return true;
        }
      } catch (error) {
        console.error("Login error:", error);
      }
      return false;
    };
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

export const useAuth = () => useContext(AuthContext);
