import { useState, useEffect, createContext } from "react";
import { setToken, getToken, removeToken } from "../api/token";
import { useUser } from "../hooks/useUser";

/**
 * @fileoverview Contexto de autenticación para la aplicación.
 * @module AuthContext
 */

/**
 * Contexto de autenticación que permite inicializar un nuevo Context.
 * Este contexto se puede usar para compartir datos a los hijos.
 * @typedef {Object} AuthContext
 * @property {Object} auth - Objeto que representa la información de autenticación.
 * @property {Function} login - Función para iniciar sesión.
 * @property {Function} logout - Función para cerrar sesión.
 */
export const AuthContext = createContext({
    /** Valores predeterminados */
    auth: undefined,
    login: () => null,
    logout: () => null,
});

/**
 * Proveedor de autenticación que maneja el estado de autenticación y proporciona funciones de inicio de sesión y cierre de sesión.
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Los componentes hijos que se renderizarán dentro del proveedor de autenticación.
 * @returns {ReactNode} El proveedor de autenticación con los componentes hijos renderizados.
 */
export function AuthProvider(props) {
    const { children } = props;
    const { getMe } = useUser(); // Obtenemos la funcion getMe
    const [auth, setAuth] = useState(undefined);

    useEffect(() => {
        /**
         * Funcion anonima asincronica que recupera el token de autenticación del usuario y obtiene los datos del usuario.
         */
        (async () => {
            const token = getToken(); // Obtenemos el token de autenticación del usuario
            if (token) {
                const me = await getMe(token); // Obtenemos los datos del usuario
                setAuth({ token, me }); // Establecemos el estado de autenticación (Token y usuario)
            } else {
                setAuth(null);
            }
        })();
    }, []);

    /**
     * Se crea la funcion asincrocina que permite iniciar sesion con el token proporcionado.
     * @param {string} token - El token de autenticación.
     */
    const login = async (token) => {
        setToken(token);
        const me = await getMe(token);
        setAuth({ token, me })
    }

    /**
     * Se crea la funcion que permite cerrar la sesion de un usuario.
     */
    const logout = () => {
        if (auth) {
            removeToken();
            setAuth(null);
        }
    }

    /**
     * Se crea un objeto que contiene la información de autenticación y las funciones de inicio de sesión y cierre de sesión.
     */
    const valueContext = {
        auth: auth,
        login,
        logout,
    }

    // Esto evita que se renderice el componente antes de que se obtenga la información de autenticación.
    // Basicamente evita el flasheo
    if (auth === undefined) return null;

    /**
     * Se retorna el proveedor de autenticación con los componentes hijos renderizados.
     */
    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
}