const DOG_API_BASE_URL = 'https://api.thedogapi.com/v1';
//const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

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