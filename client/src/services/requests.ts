import axios from "axios";

const getAllWeapons = () => {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/weapons`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getAllWeapons };
