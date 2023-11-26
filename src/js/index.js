import { fetchBreeds } from "./cat-api";
import { populateBreedsSelect } from "./select";
import { showError } from "./feedbackHandling";

fetchBreeds()
  .then((breeds) => {
    populateBreedsSelect(breeds);
  })
  .catch((error) => {
    showError();
    console.error("Error:", error);
  });
