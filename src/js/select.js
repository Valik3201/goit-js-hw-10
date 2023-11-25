import SlimSelect from "slim-select";
import "slim-select/dist/slimselect.css";

import { fetchBreeds } from "./cat-api";

export const populateBreedsSelect = (breeds) => {
  const select = new SlimSelect({
    select: ".breed-select",
    placeholder: "Select a breed",
    data: breeds.map((breed) => ({ text: breed.name, value: breed.id })),
  });
};
