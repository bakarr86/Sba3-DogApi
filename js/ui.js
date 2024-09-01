//breed select options function
export function populateBreedSelect(breeds) {
    const breedSelect = document.getElementById('breed-select');
    breedSelect.innerHTML = '<option value="">Select a breed</option>';
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
}
// breed details
export function displayBreedDetails(breed) {
    const breedDetails = document.getElementById('breed-details');
    breedDetails.innerHTML = `
        <h3>${breed.name}</h3>
        <p><strong>Temperament:</strong> ${breed.temperament || 'Not available'}</p>
        <p><strong>Life Span:</strong> ${breed.life_span || 'Not available'}</p>
        <p><strong>Height:</strong> ${breed.height?.metric || 'Not available'} cm</p>
        <p><strong>Weight:</strong> ${breed.weight?.metric || 'Not available'} kg</p>
    `;
}
//display random image and display search result function
export function displayRandomImage(imageUrl) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Random dog image">`;
}

export function displaySearchResults(breeds) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    breeds.forEach(breed => {
        const breedItem = document.createElement('div');
        breedItem.classList.add('breed-item');
        breedItem.innerHTML = `
            <h3>${breed.name}</h3>
            <p><strong>Temperament:</strong> ${breed.temperament || 'Not available'}</p>
            <button class="details-btn" data-breed-id="${breed.id}">View Details</button>
        `;
        searchResults.appendChild(breedItem);
    });
}
// display posts 
export function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    // Check if posts is a single object or an array
    if (Array.isArray(posts.posts)) {
        // If posts is an array, iterate over it
        posts.posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="edit-btn" data-post-id="${post.id}">Edit</button>
            `;
            postsContainer.appendChild(postElement);
        });
    } else {
        // If posts is a single object, display its content directly
        const postElement = document.createElement('div');
        console.log(posts.id)
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${posts.title}</h3>
            <p>${posts.body}</p>
            <button class="edit-btn" data-post-id="${posts.id}">Edit</button>
        `;
        postsContainer.appendChild(postElement);
    }
}
//show message
export function showMessage(message, isError = false) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
    messageContainer.classList.toggle('error', isError);
    messageContainer.style.display = 'block';
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 3000);
}