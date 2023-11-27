import { fetchBreeds } from "./cat-api";
import { populateBreedsSelect } from "./select";

/**
 * Fetches a list of cat breeds and populates the breeds select dropdown.
 * Displays an error message if the fetching fails.
 * @function
 * @returns {void}
 */
const initializeCatBreeds = () => {
  // Fetch cat breeds using the fetchBreeds function
  fetchBreeds()
    .then((breeds) => {
      // Populate the breeds select dropdown with the fetched breeds
      populateBreedsSelect(breeds);
    })
    .catch((error) => {
      // Log error message if fetching cat breeds fails
      console.error("Error:", error);
    });
};

// Call the function to initialize cat breeds when the script is executed
initializeCatBreeds();
