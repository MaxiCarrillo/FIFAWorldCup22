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