const localHost = `http://localhost:3001`;
const cloudHost = `http://mysterious-earth-97891.herokuapp.com`;

export const host =
  process.env.NODE_ENV === 'development' ? localHost : cloudHost;

export const services = [
  {
    name: 'booker',
    url: 'http://18.219.227.74/',
    styles: '<link rel="stylesheet" href="http://18.219.227.74/styles.css" />',
    script: '<script src="http://18.219.227.74/bundle.js"></script>'
  },
  // {
  //   name: 'reviews',
  //   url: 'http://18.224.94.179/',
  //   styles: '<link rel="stylesheet" href="http://18.224.94.179/styles.css" />',
  //   script: '<script src="http://18.224.94.179/bundle.js"></script>',
  // }
];
