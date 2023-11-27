import AWN from "awesome-notifications";
import "awesome-notifications/src/styles/style.scss";

/**
 * Global options for Awesome Notifications.
 * @type {object}
 */
const globalOptions = {
  position: "bottom-right",
  durations: { alert: 5000 },
  labels: {
    alert: "Failure",
  },
  maxWidth: "500px",
};

/**
 * Instance of Awesome Notifications with global options.
 * @type {AWN}
 */
const notifier = new AWN(globalOptions);

/**
 * Displays an error notification based on the given error object.
 * If the error is a 404, a custom notification with specific labels is shown.
 * @param {Error} error - The error object.
 */
export const showError = (error) => {
  let errorMessage = "";

  if (error && error.response && error.response.status === 404) {
    const customLabels = {
      alert: "Error 404: Page not found",
    };

    /**
     * Custom options for Awesome Notifications, merging global options with custom labels.
     * @type {object}
     */
    const customOptions = {
      ...globalOptions,
      labels: { ...globalOptions.labels, ...customLabels },
    };

    /**
     * Instance of Awesome Notifications with custom options.
     * @type {AWN}
     */
    const customNotifier = new AWN(customOptions);

    errorMessage =
      "Oops! It seems the cats knocked this page off the shelf. Please try again later.";

    // Show the alert notification with custom notifier instance
    customNotifier.alert(errorMessage);
  } else {
    errorMessage = "Oops! Something went wrong! Try reloading the page.";

    // Show the alert notification with the original notifier instance
    notifier.alert(errorMessage);
  }
};

/**
 * Shows the loading overlay by setting its display property to "grid".
 */
export const showLoader = () => {
  const loader = document.querySelector(".overlay-loader");
  loader.style.display = "grid";
};

/**
 * Hides the loading overlay by setting its display property to "none".
 */
export const hideLoader = () => {
  const loader = document.querySelector(".overlay-loader");
  loader.style.display = "none";
};
