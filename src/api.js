const api = "https://jsonplaceholder.typicode.com";
const headers = {
  Accept: "application/json",
};
export const getAll = () =>
  fetch(`${api}/photos`, { headers })
    .then((res) => res.json());