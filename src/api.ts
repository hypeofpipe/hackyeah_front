import axios from 'axios';

const baseUrl = 'http://laraveldev.pl';

export const getTrashTypes = () =>
  axios.get(`${baseUrl}/initialize`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
  });

export const sendSubmission = (data: {
  location: {
    latitude: string;
    longitude: string;
  };

  image: string;
  type_of_trash: number;
}) =>
  axios.post(`${baseUrl}/trash`, data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
