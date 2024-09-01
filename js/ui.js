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
