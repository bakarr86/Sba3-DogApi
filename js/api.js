const DOG_API_BASE_URL = 'https://api.thedogapi.com/v1';
const JSON_PLACEHOLDER_BASE_URL = 'https://dummyjson.com';

// Dog API functions
export async function getBreeds() {
    try {
        const response = await fetch(`${DOG_API_BASE_URL}/breeds`);
        if (!response.ok) {
            throw new Error('Failed to fetch breeds');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching breeds:', error);
        throw error;
    }
}
//search breed function
export async function searchBreeds(query) {
    try {
        const response = await fetch(`${DOG_API_BASE_URL}/breeds/search?q=${query}`);
        if (!response.ok) {
            throw new Error('Failed to search breeds');
        }
        return await response.json();
    } catch (error) {
        console.error('Error searching breeds:', error);
        throw error;
    }
}
//getBreed detail
export async function getBreedDetails(breedId) {
    try {
        const response = await fetch(`${DOG_API_BASE_URL}/breeds/${breedId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch breed details');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching breed details:', error);
        throw error;
    }
}
//getRandomImage
export async function getRandomImage() {
    try {
        const response = await fetch(`${DOG_API_BASE_URL}/images/search`);
        if (!response.ok) {
            throw new Error('Failed to fetch random image');
        }
        const data = await response.json();
        return data[0].url;
    } catch (error) {
        console.error('Error fetching random image:', error);
        throw error;
    }
}

// JSONPlaceholder API functions
export async function getPosts() {
    try {
        const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}
// create post
export async function createPost(post) {
    try {
        const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/posts/add`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}
//update post
export async function updatePost(postId, updates) {
    try {
        const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to update post');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;}}