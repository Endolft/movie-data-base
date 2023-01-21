import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {
  const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return {
        logged: false,
        user: user,
      };
    }
    console.log(user);
    return {
      logged: true,
      user: user,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = async (name = "") => {
    const user = { id: "ABC", name };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };
  const logout = () => {
    const action = {
      type: types.logout,
      payload: null,
    };
    localStorage.removeItem("user");
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
