import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_whBaHJ9RyGwNS5wD2gTvysRMYtNdsRZhnSbjjtJu3Bcg4CRn8x4OMdQBxGnkstVo';

const API_KEY =
  'live_whBaHJ9RyGwNS5wD2gTvysRMYtNdsRZhnSbjjtJu3Bcg4CRn8x4OMdQBxGnkstVo';
const API_URL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
  return axios
    .get(`${API_URL}breeds`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}
export function fetchCatByBreed(breedId) {
  return axios
    .get(`${API_URL}images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}
