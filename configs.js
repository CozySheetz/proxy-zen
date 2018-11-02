const localHost = `http://localhost:3001`;
const cloudHost = `https://vast-fortress-96596.herokuapp.com`;

export const host = process.env.NODE_ENV === 'development'
? localHost
: cloudHost

export const services = [
  {
    name: 'booker',
    url: 'http://18.219.227.74/'
  }
];