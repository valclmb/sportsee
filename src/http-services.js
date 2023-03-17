const baseUrl = import.meta.env.VITE_API_URL;

/** Get an item from the api return mock if error
 * @param {number} id - id of the item
 * @param {string} param - Additional endpoint for the url to fetch
 */
export const getOne = (id, param) => {
    return fetch(`${baseUrl}${id}${param ? "/" + param : ""}`)
        .then((res) => res.json())
        .catch(() =>
            fetch(`/apiMock/user${param ? "." + param : "." + id}.json`)
                .then((res) => res.json())
                .catch((res) => {
                    return { error: true };
                })
        );
};
