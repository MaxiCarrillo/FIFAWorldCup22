/**
 * Este archivo contiene las funciones que se manejan en el local storage
 * para el manejo de usuarios.
 */

export function setToken(token) {
    localStorage.setItem(import.meta.env.VITE_TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(import.meta.env.VITE_TOKEN);
}

export function removeToken() {
    localStorage.removeItem(import.meta.env.VITE_TOKEN);
}