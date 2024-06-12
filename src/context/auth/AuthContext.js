'use client'
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useReducer, useCallback } from "react";
import { useState } from "react";


const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
  subscriptionPlan: null,
  isOnBordingCompleted: false,
  forgatPasswordType: "",
};
const reducer = (state, action) => {
  if (action.type === "INITIAL") {
   
    return {
      user: action.payload.user,
      isAuthenticated: action.payload.isAuthenticated,
    };
  }
  if (action.type === "LOGIN") {
    const { user } = action.payload || {};
    return {
      ...state,
      isAuthenticated: true,
      user: user,
      };

      }
  if (action.type === "REGISTER") {
    return {
      ...state,
      isAuthenticated: false,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  if (action.type === "CHANGE_LOADING") {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === "FORGET_PASSWORD_TYPE") {
    return {
      ...state,
      forgatPasswordType: action.payload.forgatPasswordType,
    };
  }
  return state;
};

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if (token) {
      const user = jwtDecode(token);
      
      dispatch({
        type: "INITIAL",
        payload: {
          user,
          isAuthenticated: true,
        }
      })
    }
  }, [])


  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
}
