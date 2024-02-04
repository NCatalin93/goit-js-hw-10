import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectElement = document.querySelector('.breed-select');
const loaderElement = document.querySelector('.loader');
const errorElement = document.querySelector('.error');
const catInfoElement = document.querySelector('.cat-info');

loaderElement.style.display = 'none';
errorElement.style.display = 'none';

fetchBreeds()
  .then(breeds => {
    const fragmentElement = document.createDocumentFragment();
    breeds.forEach(breed => {
      const optionElement = document.createElement('option');
      optionElement.textContent = breed.name;
      optionElement.value = breed.id;
      fragmentElement.append(optionElement);
    });

    selectElement.append(fragmentElement);
    new SlimSelect({
      select: selectElement,
    });
  })
  .catch(error => {
    loaderElement.style.display = 'none';
    Notiflix.Notify.failure('Failed to load breeds', error);
    errorElement.style.display = 'block';
    console.error(error);
  });

selectElement.addEventListener('change', function () {
  const breedId = selectElement.value;
  loaderElement.style.display = 'block';
  catInfoElement.style.display = 'none';
  fetchCatByBreed(breedId)
    .then(catData => {
      loaderElement.style.display = 'none';
      catInfoElement.style.display = 'flex';
      catInfoElement.innerHTML = `<img class="cat-image" src=${catData[0].url}  width="400px" alt="${catData[0].breeds[0].name} cat">
      <div class="cat-info-details"><h2 class="catBreed">${catData[0].breeds[0].name}  </h2>
      <p class="cat-description">${catData[0].breeds[0].description}  </p>
      <p class="cat-temperament"><strong>Temperament</strong>: ${catData[0].breeds[0].temperament}  </p></div>
      `;
    })
    .catch(error => {
      loaderElement.style.display = 'none';
      Notiflix.Notify.failure('Failed to load cat by breed', error);
      console.error(error);
    });
});
