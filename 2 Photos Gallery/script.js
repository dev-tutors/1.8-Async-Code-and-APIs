// fetch function
async function fetchData(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// displayPhotos function
async function displayPhotos(){
    const albumId = parseInt(prompt('Enter album ID:'))
    const album = await fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    const photos = await fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)

    console.log('album',album)
    console.log('photos',photos)

    // link to photo-container
    const photoContainer = document.getElementById('photo-container')
    
    for (let index = 0; index<10; index++){
        const image = document.createElement('img')
        image.src = photos[index].url // photos[0].url, photos[1].url ..., photos[9].url
        photoContainer.appendChild(image)
    }
}

displayPhotos()