import { AuthContext } from "./AuthContext";
import React from 'react'

export const AuthProvider = ({children}) => {
    
  return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}
