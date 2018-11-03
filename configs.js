const localHost = `http://localhost:3001`;
const cloudHost = `https://mysterious-earth-97891.herokuapp.com`;

export const host =
  process.env.NODE_ENV === 'development' ? localHost : cloudHost;

export const services = [
  {
    name: 'booker',
    url: 'https://18.219.227.74/'
  }
];
