const baseUrl = import.meta.env.VITE_API_URL;

export const getOne = (id, param) => {
    return fetch(`${baseUrl}${id}${param ? "/" + param : ""}`).then((res) =>
        res.json()
    );
};
