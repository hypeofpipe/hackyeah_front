import axios from 'axios';

const baseUrl = 'http://laraveldev.pl';

export const getTrashTypes = () =>
  axios.get(`${baseUrl}/initialize`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
  });
