import SlimSelect from "slim-select";
import "slim-select/dist/slimselect.css";

export const populateBreedsSelect = (breeds) => {
  const select = new SlimSelect({
    select: ".breed-select",
    data: [
      { placeholder: true, text: "Search" },
      ...breeds.map((breed) => ({ text: breed.name, value: breed.id })),
    ],
  });
};
