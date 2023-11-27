<a name="readme-top">
  <div align="center"> 
  <br>
  <picture>
    <img alt="The Cat Search Logo" src="src/assets/the-cat-search-logo.svg" width="400">
  </picture>
    <h1>
      HTTP Requests and Fetch API - Cat Search
    </h1>
  </div>
</a>

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

* [![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
* [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
* [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

* [SlimSelect](https://slimselectjs.com/)
* [CSS Loaders](https://cssloaders.github.io/)
* [Notiflix](https://www.notiflix.com/)

<p align="right"><a href="#readme-top">Back to top</a></p>

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) and npm (Node Package Manager)

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
   cd goit-js-hw-10
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

- [x] Create a new repository on GitHub.
- [x] Set up the project structure with HTML, CSS, and JavaScript files.
- [x] Initialize npm for package management.
- [x] Configure Git and GitHub Actions for automatic deployment.

## 2. HTTP Requests - Cat Search

- [x] Set up axios for making HTTP requests in `cat-api.js`.
- [x] Fetch a collection of cat breeds from The Cat API.
- [x] Populate the breed selector with fetched data.
- [x] Implement fetching cat information by breed.
- [x] Display cat information and image in the interface.
- [x] Handle loading states and errors with appropriate UI feedback.
- [x] Add minimal design to the interface elements.

## 3. Documentation and Final Touches

- [x] Update the README with detailed instructions and information.
- [ ] Double-check the project for any issues and fix them.
- [ ] Ensure the code follows best practices and is well-commented.
- [ ] Test the entire application for functionality and responsiveness.

Once these tasks are completed, the project will be ready for deployment and use.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Contact

**Valentyn Chernetskyi**

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:valik3201@gmail.com)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/valik3201)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/valentynchernetskyi/)

Project Link:

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Valik3201/goit-js-hw-10)

<p align="right"><a href="#readme-top">Back to top</a></p>

## Acknowledgments

Special thanks to The Cat API for providing the data used in this project.
