import axios from "axios";
import { showLoader, hideLoader, showError } from "./feedbackHandling";

/**
 * Set a default API key for all Axios requests.
 */
axios.defaults.headers.common["x-api-key"] =
  "live_17W11S6QfjcvMt6gMvLcPsE6GzJxkEVugauVifkT0ILTFEZkRYDTpx3gGp29m6Jh";

/**
 * Fetches a list of cat breeds.
 * @function
 * @returns {Promise<Array>} A Promise that resolves to an array of cat breeds.
 * @throws {Error} If the request to fetch breeds fails.
 */
export const fetchBreeds = () => {
  // Get the breed select element from the DOM
  const breedSelect = document.querySelector(".breed-select");

  // Show loader while fetching breeds
  showLoader();

  /**
   * Axios GET request to fetch cat breeds.
   * @type {Promise<Array>}
   */
  return axios
    .get("https://api.thecatapi.com/v1/breeds")
    .then((response) => {
      // Hide loader on successful response
      hideLoader();

      // Display the breed select element
      breedSelect.style.display = "flex";

      // Return the array of cat breeds
      return response.data;
    })
    .catch((error) => {
      // Hide loader on error and show error message
      hideLoader();
      showError(error);

      // Log the error to the console
      console.error("Error fetching breeds:", error);

      // Propagate the error
      throw error;
    });
};

/**
 * Fetches information about a specific cat breed.
 * @function
 * @param {string} breedId - The ID of the cat breed.
 * @returns {Promise<Object>} A Promise that resolves to an object containing cat breed information.
 * @throws {Error} If the request to fetch the cat breed information fails.
 */
export const fetchCatByBreed = (breedId) => {
  // Show loader while fetching cat breed information
  showLoader();

  /**
   * Axios GET request to fetch information about a specific cat breed.
   * @type {Promise<Object>}
   */
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => {
      // Hide loader on successful response and return the cat breed information
      hideLoader();
      return response.data;
    })
    .catch((error) => {
      // Hide loader on error and show error message
      hideLoader();
      showError(error);

      // Log the error to the console
      console.error(`Error fetching cat for breed ${breedId}:`, error);

      // Propagate the error
      throw error;
    });
};
