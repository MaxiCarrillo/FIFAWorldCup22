import { getMeApi } from "../api/user"

/**
 * Hook personalizado para obtener información del usuario.
 * @returns {Object} Objeto que contiene la función getMe para obtener información del usuario.
 */
export function useUser(){

    /**
     * Obtiene los datos del usuario actual.
     * @param {string} token - El token de autenticación del usuario.
     * @returns {Promise} - Una promesa que se resuelve con los datos del usuario o se rechaza con un error.
     * @throws {Error} - Si ocurre un error al obtener los datos del usuario.
     */
    const getMe = async (token) => {
        try{
            const response = await getMeApi(token);
            return response;
        }catch(error){
            throw error;
        }
    }

    return {
        getMe
    };
}