/** 
* Este archivo contiene las funciones que se encargan de realizar las peticiones a la API 
* para el manejo de usuarios.
*/

/**
 * Realiza una solicitud de inicio de sesión a la API.
 * @param {Object} formValue - Los valores del formulario de inicio de sesión.
 * @returns {Promise<Object>} - Una promesa que se resuelve con el resultado de la solicitud de inicio de sesión.
 * @throws {Error} - Si la respuesta de la API no es exitosa.
 */
export async function loginApi(formValue) {
    try {
        const url = `${import.meta.env.VITE_BASE_API}/auth/login/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValue),
        };
        const response = await fetch(url, params);

        if (response.status !== 200) {
            throw new Error("Usuario o contraseña incorrectos");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}

/**
 * Obtiene los datos del usuario autenticado.
 * @param {string} token - El token de autenticación del usuario.
 * @returns {Promise<object>} - Una promesa que se resuelve con los datos del usuario.
 * @throws {Error} - Si ocurre algún error durante la solicitud.
 */
export async function getMeApi(token) {
    try {
        const url = `${import.meta.env.VITE_BASE_API}/auth/me/`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}