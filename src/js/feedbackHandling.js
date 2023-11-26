export const showLoader = () => {
  const loader = document.querySelector(".overlay-loader");
  loader.style.display = "grid";
};

export const hideLoader = () => {
  const loader = document.querySelector(".overlay-loader");
  loader.style.display = "none";
};

export const showError = () => {
  const errorElement = document.querySelector(".error");
  errorElement.style.display = "block";
};
