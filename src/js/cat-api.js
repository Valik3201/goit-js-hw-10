import axios from "axios";
import { showLoader, hideLoader, showError } from "./feedbackHandling";

axios.defaults.headers.common["x-api-key"] =
  "live_17W11S6QfjcvMt6gMvLcPsE6GzJxkEVugauVifkT0ILTFEZkRYDTpx3gGp29m6Jh";

export const fetchBreeds = () => {
  const breedSelect = document.querySelector(".breed-select");
  showLoader();
  return axios
    .get("https://api.thecatapi.com/v1/breeds")
    .then((response) => {
      hideLoader();
      breedSelect.style.display = "flex";
      return response.data;
    })
    .catch((error) => {
      hideLoader();
      showError();
      console.error("Error fetching breeds:", error);
      throw error;
    });
};

export const fetchCatByBreed = (breedId) => {
  showLoader();
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => {
      hideLoader();
      return response.data;
    })
    .catch((error) => {
      hideLoader();
      showError();
      console.error(`Error fetching cat for breed ${breedId}:`, error);
      throw error;
    });
};
