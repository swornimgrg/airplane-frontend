import {jwtDecode} from "jwt-decode";

const API_URL = "http://127.0.0.1:8000/";

const register = async (email, password, age) => {
  console.log("Registering user:", { email, password, age });
  const response = await fetch(API_URL + "api/system/users/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, age }),
  });
  const data = await response.json();
  console.log("Register response:", data);
  return data;
};

const login = async (email, password) => {
  console.log("Logging in user:", { email, password });
  const response = await fetch(API_URL + "api/system/auth/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email:email, password:password }),
  });
  const data = await response.json();
//   console.log("Login response:", data);
  if (data.accessToken) {
    localStorage.setItem("user", JSON.stringify(data));
    console.log("Access token saved to localStorage");
  }
  return data;
};

const logout = () => {
  console.log("Logging out user");
  localStorage.removeItem("user");
  console.log("User logged out");
};

const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    console.log("Current user:", user);
    return user ? JSON.parse(user) : null;
};

const getToken = () => {
  const user = getCurrentUser();
  const token = user ? user.accessToken : null;
  console.log("Current token:", token);
  return token;
};

const isAuthenticated = () => {
  const token = getToken();
  if (!token) {
    console.log("No token found, user is not authenticated");
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    const isAuth = decodedToken.exp > currentTime;
    console.log("Token is valid:", isAuth);
    return isAuth;
  } catch (error) {
    console.log("Error decoding token:", error);
    return false;
  }
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  getToken,
  isAuthenticated,
};
