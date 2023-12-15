import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


/**
 * Hook que devuelve el contexto de autenticación.
 * @returns {AuthContext} El contexto de autenticación.
 */
export const useAuth = () => {
    return useContext(AuthContext);
};