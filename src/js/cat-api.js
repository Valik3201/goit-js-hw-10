import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_17W11S6QfjcvMt6gMvLcPsE6GzJxkEVugauVifkT0ILTFEZkRYDTpx3gGp29m6Jh";

export const fetchBreeds = () => {
  return axios
    .get("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching breeds:", error);
      throw error;
    });
};
