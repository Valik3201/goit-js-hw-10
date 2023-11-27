import SlimSelect from "slim-select";
import "slim-select/dist/slimselect.css";

import { fetchCatByBreed } from "./cat-api";
import { showError } from "./feedbackHandling";

/**
 * Populates the breed select dropdown with options based on the provided cat breeds.
 * @function
 * @param {Array} breeds - An array of cat breeds.
 * @returns {void}
 */
export const populateBreedsSelect = (breeds) => {
  // Get the cat info div element from the DOM
  const catInfoDiv = document.querySelector(".cat-info");

  /**
   * Instance of SlimSelect for the breed select dropdown.
   * @type {SlimSelect}
   */
  const select = new SlimSelect({
    select: ".breed-select",
    settings: {
      allowDeselect: true,
    },
    data: [
      // Add a placeholder option to the dropdown
      { placeholder: true, text: "Search for the purr-fect cat breed..." },
      // Map cat breeds to SlimSelect options
      ...breeds.map((breed) => ({ text: breed.name, value: breed.id })),
    ],
    events: {
      // Event handler for breed selection changes
      afterChange: () => {
        const selectedValues = select.getSelected();
        if (selectedValues.length > 0) {
          // Fetch cat information for the selected breeds
          const promises = selectedValues.map((breedId) =>
            fetchCatByBreed(breedId)
          );

          // Handle the promises using Promise.all
          Promise.all(promises)
            .then((catsData) => {
              // Display the fetched cat information
              displayCatInfo(catsData);

              // Scroll to the cat info div with a smooth animation
              catInfoDiv.scrollIntoView({ behavior: "smooth", block: "start" });
            })
            .catch((error) => {
              // Show error message if fetching cat info fails
              showError(error);
              console.error("Error fetching cat info:", error);
            });
        } else {
          // Clear cat information if no breed is selected
          clearCatInfo();
        }
      },
    },
  });
};

/**
 * Displays cat information in the cat info div based on the provided cat data.
 * @function
 * @param {Array} catsData - An array of cat data objects.
 * @returns {void}
 */
const displayCatInfo = (catsData) => {
  const catInfoDiv = document.querySelector(".cat-info");
  catInfoDiv.innerHTML = "";

  catsData.forEach((catData) => {
    const temperamentList = catData[0].breeds[0].temperament.split(", ");

    const catInfoBlock = document.createElement("div");
    catInfoBlock.classList.add("container", "flex");

    catInfoBlock.innerHTML = `
      <img src="${catData[0].url}" alt="Cat Image">
      <div class="breed-info">
        <p class="breed-info__title">${catData[0].breeds[0].name}</p>
        <p class="breed-info__description">${
          catData[0].breeds[0].description
        }</p>
        <p class="breed-info__temperament"><strong>Temperament:</strong> ${temperamentList
          .map(
            (temperament) =>
              `<span class="temperament-item">${temperament}</span>`
          )
          .join(" ")}</p>
      </div>
    `;

    catInfoDiv.appendChild(catInfoBlock);
  });
};

/**
 * Clears cat information from the cat info div.
 * @function
 * @returns {void}
 */
const clearCatInfo = () => {
  // Get the cat info div element from the DOM
  const catInfoDiv = document.querySelector(".cat-info");

  // Clear any existing content in the cat info div
  catInfoDiv.innerHTML = "";
};
