import env from '@env';
import ky from 'ky';

const ApiClient = ky.create({
  prefixUrl: env.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default ApiClient;
