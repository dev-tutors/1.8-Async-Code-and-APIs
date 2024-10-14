# Fetch Studio Ghibli Films

Ever wondered how those cool online movie directories are built? Well, guess what? You're about to create your very own! And not just any directory – you'll be showcasing the amazing world of Studio Ghibli! Whether you’ve watched or heard of their famous works, now it's your turn to bring their characters to life in your own app. 

This lesson will guide you on how to fetch and display data from the Studio Ghibli API. You will fetch information about Ghibli films and display them in a structured way with HTML, CSS, and JavaScript. 

### **Steps**

### 1. Setting Up the HTML

Start by creating a basic HTML file to structure the page. We will add a button that will trigger fetching the data and a container where the films will be displayed.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studio Ghibli Films</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Studio Ghibli Films</h1>
    <div style="text-align: center;">
        <button id="fetchButton">Fetch Ghibli Films</button>
    </div>
    <div class="movie-container" id="movie-container"></div>
    <script src="script.js"></script>
</body>
</html>
```

### 2. Adding Basic Styling

In this step, create a `style.css` file to add basic styles to the page. We will style the button and the cards where the film data will be displayed.

```css
/* style.css */
body{
    text-align: center;
}

h1 {
    color: #228B22; /* Grassy green */
    font-family: Arial, sans-serif;
    text-align: center;
}

button {
    background-color: #32CD32; /* Green */
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #2E8B57; /* Darker green */
}

.movie-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.movie-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
}

.movie-card img {
    width: 100%;
    border-radius: 5px;
}
```

### 3. Fetching Data from the Ghibli API

Next, in the `script.js` file, you will fetch the data from the API. To avoid overwhelming the students, we will break the JavaScript logic into manageable chunks.

#### Step 1: Set up the API call

Start by adding a function to fetch the films from the Ghibli API:

```js
// script.js
async function fetchGhibliFilms() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films'); // Fetch films from the API
        const films = await response.json(); // Parse the JSON response
        displayFilms(films); // Call the function to display films
    } catch (error) {
        console.error('Error fetching the Ghibli films:', error);
    }
}
```

#### Step 2: Display the fetched data

Next, create a function to display the fetched films as cards. This function will dynamically create HTML elements to show the film details.

```js
function displayFilms(films) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; // Clear any previous content

    // Loop through the films array and create a card for each film
    films.forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.classList.add('movie-card');

        filmCard.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <h2>${film.title}</h2>
            <h3>${film.original_title_romanised}</h3>
            <p><strong>Director:</strong> ${film.director}</p>
            <p><strong>Producer:</strong> ${film.producer}</p>
            <p><strong>Release Date:</strong> ${film.release_date}</p>
            <p>${film.description}</p>
        `;

        movieContainer.appendChild(filmCard);
    });
}
```

#### Step 3: Trigger the fetch on button click

Finally, add the event listener that will trigger the `fetchGhibliFilms()` function when the user clicks the button.

```js
// script.js
document.getElementById('fetchButton').addEventListener('click', fetchGhibliFilms);
```

### Full JavaScript

```js
// script.js

// Step 1: Fetch data from the Ghibli API
async function fetchGhibliFilms() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films'); // Fetch films from the API
        const films = await response.json(); // Parse the JSON response
        displayFilms(films); // Call the function to display films
    } catch (error) {
        console.error('Error fetching the Ghibli films:', error);
    }
}

// Step 2: Function to display fetched films
function displayFilms(films) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; // Clear any previous content

    // Loop through the films array and create a card for each film
    films.forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.classList.add('movie-card');

        filmCard.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <h2>${film.title}</h2>
            <h3>${film.original_title_romanised}</h3>
            <p><strong>Director:</strong> ${film.director}</p>
            <p><strong>Producer:</strong> ${film.producer}</p>
            <p><strong>Release Date:</strong> ${film.release_date}</p>
            <p>${film.description}</p>
        `;

        movieContainer.appendChild(filmCard);
    });
}

// Step 3: Trigger fetch when button is clicked
document.getElementById('fetchButton').addEventListener('click', fetchGhibliFilms);
```

### Explanation

- **Fetching Data:** We use `fetch()` to get the data from the Ghibli API. The `await` keyword ensures that the program waits for the response before moving on to parse it.
- **Displaying Data:** The `displayFilms()` function creates dynamic HTML content and appends it to the movie container for each film.
- **Handling Errors:** The `try...catch` block ensures that if there’s an issue with the API request, we catch and log the error.

### Important Notes

- **Dynamic HTML Creation:** JavaScript allows you to dynamically create elements like divs, paragraphs, and images and append them to the DOM. This is useful for fetching and displaying data from external APIs.