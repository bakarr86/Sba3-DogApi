//importSectionApi
import { getBreeds, getBreedDetails, getRandomImage, searchBreeds, getPosts, createPost, updatePost } from './api.js';
import { populateBreedSelect, displayBreedDetails, displayRandomImage, displaySearchResults, displayPosts, showMessage } from './ui.js';

async function initializeApp() {
    try {
        const breeds = await getBreeds();
        populateBreedSelect(breeds);

        const breedSelect = document.getElementById('breed-select');
        breedSelect.addEventListener('change', handleBreedSelect);

        const randomImageBtn = document.getElementById('random-image-btn');
        randomImageBtn.addEventListener('click', handleRandomImage);

        const searchForm = document.getElementById('search-form');
        searchForm.addEventListener('submit', handleSearch);

        const searchResults = document.getElementById('search-results');
        searchResults.addEventListener('click', handleSearchResultClick);

        const createPostForm = document.getElementById('create-post-form');
        createPostForm.addEventListener('submit', handleCreatePost);

        const postsContainer = document.getElementById('posts-container');
        postsContainer.addEventListener('click', handleEditPost);

        // Load initial posts
        const posts = await getPosts();
        console.log(posts);
        displayPosts(posts);
    } catch (error) {
        console.error('Error initializing app:', error);
        showMessage('Failed to initialize the application. Please try again later.', true);
    }
}
//handleBreedSelect
async function handleBreedSelect(event) {
    const breedId = event.target.value;
    if (breedId) {
        try {
            const breedDetails = await getBreedDetails(breedId);
            displayBreedDetails(breedDetails);
        } catch (error) {
            console.error('Error fetching breed details:', error);
            showMessage('Failed to fetch breed details. Please try again.', true);
        }
    }
}
//randomImage
async function handleRandomImage() {
    try {
        const imageUrl = await getRandomImage();
        displayRandomImage(imageUrl);
    } catch (error) {
        console.error('Error fetching random image:', error);
        showMessage('Failed to fetch a random image. Please try again.', true);
    }
}
//handleSearch
async function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        try {
            const searchResults = await searchBreeds(query);
            displaySearchResults(searchResults);
        } catch (error) {
            console.error('Error searching breeds:', error);
            showMessage('Failed to search breeds. Please try again.', true);
        }
    }
}
//ResearchClick
async function handleSearchResultClick(event) {
    if (event.target.classList.contains('details-btn')) {
        const breedId = event.target.dataset.breedId;
        try {
            const breedDetails = await getBreedDetails(breedId);
            displayBreedDetails(breedDetails);
        } catch (error) {
            console.error('Error fetching breed details:', error);
            showMessage('Failed to fetch breed details. Please try again.', true);
        }
    }
}
//CreatePost
async function handleCreatePost(event) {
    event.preventDefault();
    const title = document.getElementById('post-title').value.trim();
    const body = document.getElementById('post-body').value.trim();
    if (title && body) {
        try {
            const newPost = await createPost({ title, body, userId: 1 });
            showMessage('Post created successfully!');
            const posts = await getPosts();
            displayPosts(newPost);
        } catch (error) {
            console.error('Error creating post:', error);
            showMessage('Failed to create post. Please try again.', true);
        }
    }
}
//EditPost
async function handleEditPost(event) {
    if (event.target.classList.contains('edit-btn')) {
        const postId = event.target.dataset.postId;
        const newTitle = prompt('Enter new title:');
        const newBody = prompt('Enter new body:');
        if (newTitle && newBody) {
            try {
                await updatePost(postId, { title: newTitle, body: newBody });
                showMessage('Post updated successfully!');
                const posts = await getPosts();
                displayPosts(posts);
            } catch (error) {
                console.error('Error updating post:', error);
                showMessage('Failed to update post. Please try again.', true);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);