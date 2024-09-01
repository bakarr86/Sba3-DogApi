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