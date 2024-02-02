import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_whBaHJ9RyGwNS5wD2gTvysRMYtNdsRZhnSbjjtJu3Bcg4CRn8x4OMdQBxGnkstVo';

new SlimSelect({
  select: '#selectElement',
});
