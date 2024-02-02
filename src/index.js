import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] = 'cheia ta';

new SlimSelect({
  select: '#selectElement',
});
