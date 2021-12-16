import { createContext, useContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import * as userService from "../services/userService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);

    const login = async (email, password) => {
        const newUser = await userService.login(email, password);
        if (newUser) {
            setUser(newUser)
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);
    return authState;
}