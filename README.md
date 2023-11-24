<a name="readme-top"></a>

# HTTP Requests and Fetch API - Cat Search 🐾

<details>
  <summary>Table of Contents</summary>

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

</details>

---

## About The Project

This project focuses on developing the frontend component of an application designed for retrieving information about cat breeds. The primary objective is to delve into the realm of HTTP requests and utilize the Fetch API. The project offers a practical learning experience in executing asynchronous requests to a remote server, managing responses, and dynamically refreshing the user interface.

**Note: The project is set up for automatic deployment to GitHub Pages using GitHub Actions by JamesIves ([GitHub Pages Deployment Action](https://github.com/marketplace/actions/deploy-to-github-pages)). The deployment action is configured to push production-ready code into the `gh-pages` branch.**

### HTTP-requests

The public The Cat API is used for HTTP requests. To get started, register and obtain a unique access key, attaching it to each request. Axios is recommended for making requests.

```javascript
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "your key";
```

### The Breed Collection

Upon page load, an HTTP request for a collection of breeds is performed. The results populate a dropdown selector with breed options, displaying the breed names to the user.

The `fetchBreeds()` function, placed in the `cat-api.js` file, makes the HTTP request and returns a promise with an array of breeds.

### Information about a Cat

When the user selects a breed, an HTTP request for complete information about the cat is made. The request URL looks like:

```
https://api.thecatapi.com/v1/images/search?breed_ids=breed_identifier
```

The `fetchCatByBreed(breedId)` function, placed in the `cat-api.js` file, performs the HTTP request and returns a promise with cat data.

### Load Status Processing

A loader is displayed while any HTTP request is in progress. Selectors and cat information are hidden during the request, showing the loader. After finishing any request, the loader is hidden.

### Processing an Error

If an error occurs in any HTTP request, the error element is displayed, and it hides with each subsequent request.

### The Interface

Minimal design is added to the interface elements. Libraries like [SlimSelect](https://slimselectjs.com/) for beautiful selects, [CSS Loaders](https://cssloaders.github.io/) for loaders, and [Notiflix](https://www.notiflix.com/) for notifications can be integrated.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Built With

- HTML
- CSS
- JavaScript
- Axios
- [SlimSelect](https://slimselectjs.com/) (optional)
- [CSS Loaders](https://cssloaders.github.io/) (optional)
- [Notiflix](https://www.notiflix.com/) (optional)

<p align="right"><a href="#readme-top">Back to top</a></p>

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)

You can install npm by running the following command:

```bash
npm install npm@latest -g
```

### Installation

Follow these steps to set up and run the project:

1. Get a free API Key at [The Cat API](https://thecatapi.com/).

2. Clone the repository:

   ```bash
   git clone https://github.com/valik3201/goit-js-hw-10.git
   ```

3. Navigate to the project folder:

   ```bash
   cd cat-search
   ```

4. Install NPM packages:

   ```bash
   npm install
   ```

5. Enter your API key in `cat-api.js`:

   ```javascript
   const API_KEY = "ENTER YOUR API";
   ```

Now, you're all set up to run the cat search application!

<p align="right"><a href="#readme-top">Back to top</a></p>

## Usage

1. Open the `index.html` file in a web browser.
2. Explore cat breeds and retrieve detailed information.
3. Enjoy the interface with minimalistic design.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Roadmap

## 1. Project Setup

- [ ] Create a new repository on GitHub.
- [ ] Set up the project structure with HTML, CSS, and JavaScript files.
- [ ] Initialize npm for package management.
- [ ] Configure Git and GitHub Actions for automatic deployment.

## 2. HTTP Requests - Cat Search

- [ ] Set up axios for making HTTP requests in `cat-api.js`.
- [ ] Fetch a collection of cat breeds from The Cat API.
- [ ] Populate the breed selector with fetched data.
- [ ] Implement fetching cat information by breed.
- [ ] Display cat information and image in the interface.
- [ ] Handle loading states and errors with appropriate UI feedback.
- [ ] Add minimal design to the interface elements.

## 3. Documentation and Final Touches

- [ ] Update the README with detailed instructions and information.
- [ ] Double-check the project for any issues and fix them.
- [ ] Ensure the code follows best practices and is well-commented.
- [ ] Test the entire application for functionality and responsiveness.

Once these tasks are completed, the project will be ready for deployment and use.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Contact

Valentyn Chernetskyi - valik3201@gmail.com - [@valik3201](https://x.com/valik3201) - [LinkedIn](https://www.linkedin.com/in/valentynchernetskyi/)

Project Link: [GitHub](https://github.com/Valik3201/goit-js-hw-10)

<p align="right"><a href="#readme-top">Back to top</a></p>

## Acknowledgments

Special thanks to The Cat API for providing the data used in this project.
