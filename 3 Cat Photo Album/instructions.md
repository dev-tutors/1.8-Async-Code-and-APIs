# **Cat Photo Album**

In this lesson, you’ll create a Cat Photo Album app that fetches random cat images using **async/await**. You'll practice working with APIs, DOM manipulation, and button interaction in JavaScript.

### **Steps**

### 1. **Setting Up the Basic HTML Structure**

First, let's create the HTML structure with a button that, when clicked, fetches 10 random cat photos. The images will be displayed inside a container.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Photo Album</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Cat Photo Album</h1>

    <!-- Button to fetch new cat photos -->
    <button id="fetch-btn" onclick="fetchCatPhotos()">Get New Cat Photos</button>

    <!-- Section to display photos -->
    <div id="photo-list"></div>

    <script src="script.js"></script>
</body>
</html>
```

### 2. **Styling the Cat Photo Album**

Now, we’ll add some simple CSS to style the page and arrange the photos nicely in a grid.

```css
/* style.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    padding: 20px;
}

h1 {
    color: #007bff;
    text-align: center;
}

button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#photo-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

#photo-list img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}
```

### 3. **Fetching Cat Photos Using Async/Await**

Now, we will write the JavaScript code that fetches the cat photos and displays them on the page. We’ll break this into smaller steps.

#### 3.1 **Creating a Fetch Function**

We’ll create a `fetchData` function to fetch 10 random cat images from the **Cat API**. This function will use async/await to handle the asynchronous API call.

```js
// script.js

// Fetch data from the given API URL
async function fetchData(url) {
    const response = await fetch(url); // Make the API request
    const data = await response.json(); // Convert the response to JSON
    return data; // Return the fetched data
}
```

#### 3.2 **Fetching 10 Cat Photos**

Now, we’ll create the `fetchCatPhotos` function that will be called when the user clicks the button. This function fetches 10 random cat photos using the Cat API.

```js
// script.js

// Function to fetch 10 random cat photos from the Cat API
async function fetchCatPhotos() {
    // Fetch 10 random cat images
    const data = await fetchData('https://api.thecatapi.com/v1/images/search?limit=10');
    
    // Call the function to display the cat photos
    displayCatPhotos(data);
}
```

#### 3.3 **Displaying the Photos**

The `displayCatPhotos` function takes the fetched photos and dynamically adds them to the web page inside the `photo-list` div. Each time new photos are fetched, the previous set will be removed.

```js
// script.js

// Function to display the fetched cat photos
function displayCatPhotos(photos) {
    const photoList = document.getElementById('photo-list'); // Get the photo container
    photoList.innerHTML = ''; // Clear previous photos

    // Loop through the fetched photos and create image elements for each
    photos.forEach(photo => {
        const img = document.createElement('img'); // Create a new img element
        img.src = photo.url; // Set the img source to the photo URL
        photoList.appendChild(img); // Add the image to the photo list container
    });
}
```

### 4. **Putting It All Together**

Now, we have everything in place. The fetch function will be triggered by the button click, and the cat photos will be displayed on the page.

```js
// script.js

// Fetch data from the given API URL
async function fetchData(url) {
    const response = await fetch(url); // Make the API request
    const data = await response.json(); // Convert the response to JSON
    return data; // Return the fetched data
}

// Function to fetch 10 random cat photos from the Cat API
async function fetchCatPhotos() {
    // Fetch 10 random cat images
    const data = await fetchData('https://api.thecatapi.com/v1/images/search?limit=10');
    
    // Call the function to display the cat photos
    displayCatPhotos(data);
}

// Function to display the fetched cat photos
function displayCatPhotos(photos) {
    const photoList = document.getElementById('photo-list'); // Get the photo container
    photoList.innerHTML = ''; // Clear previous photos

    // Loop through the fetched photos and create image elements for each
    photos.forEach(photo => {
        const img = document.createElement('img'); // Create a new img element
        img.src = photo.url; // Set the img source to the photo URL
        photoList.appendChild(img); // Add the image to the photo list container
    });
}
```

### **Full Code**

<details>
<summary>Full Code</summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Photo Album</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Cat Photo Album</h1>

    <!-- Button to fetch new cat photos -->
    <button id="fetch-btn" onclick="fetchCatPhotos()">Get New Cat Photos</button>

    <!-- Section to display photos -->
    <div id="photo-list"></div>

    <script src="script.js"></script>
</body>
</html>
```

```css
/* style.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    padding: 20px;
}

h1 {
    color: #007bff;
    text-align: center;
}

button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#photo-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

#photo-list img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}
```

```js
// script.js

// Fetch data from the given API URL
async function fetchData(url) {
    const response = await fetch(url); // Make the API request
    const data = await response.json(); // Convert the response to JSON
    return data; // Return the fetched data
}

// Function to fetch 10 random cat photos from the Cat API
async function fetchCatPhotos() {
    // Fetch 10 random cat images
    const data = await fetchData('https://api.thecatapi.com/v1/images/search?limit=10');
    
    // Call the function to display the cat photos
    displayCatPhotos(data);
}

// Function to display the fetched cat photos
function displayCatPhotos(photos) {
    const photoList = document.getElementById('photo-list'); // Get the photo container
    photoList.innerHTML = ''; // Clear previous photos

    // Loop through the fetched photos and create image elements for each
    photos.forEach(photo => {
        const img = document.createElement('img'); // Create a new img element
        img.src = photo.url; // Set the img source to the photo URL
        photoList.appendChild(img); // Add the image to the photo list container
    });
}
```

</details>

### **Explanation**

- **Async/Await**: The `async/await` keywords are used to handle asynchronous code, making it easier to work with APIs by "waiting" for the data to be fetched before continuing.
  
- **API Requests**: We use `fetchData` to make the API call to The Cat API and retrieve 10 random cat images.

- **DOM Manipulation**: The `displayCatPhotos` function dynamically creates and appends image elements to the webpage using JavaScript’s DOM methods.

### **Important Notes**

- Make sure to only request 10 cat photos at a time.
  
- Use async/await to properly handle the data fetching and ensure that the images are only displayed once the data has been fully retrieved.