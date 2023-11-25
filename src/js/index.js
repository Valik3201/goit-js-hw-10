// index.js
import { fetchBreeds } from "./cat-api";
import { populateBreedsSelect } from "./select";

fetchBreeds()
  .then((breeds) => {
    populateBreedsSelect(breeds);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
