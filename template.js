import { host, services } from './configs';

const styles = services.map(
  ({ name, url }) => `<link rel="stylesheet" href="${url}style.css />`
);
const scripts = services.map(
  ({ name, url }) => `<script src="${url}bundle.js />`
);

export const template = function(
  initialState = {},
  content_one = '',
  content_two = ''
) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
      crossorigin="anonymous">
    <title>FEC</title>
    <base href="/" target="_blank">

    <link rel="stylesheet" href="${host}/styles.css" />

    <!-- styles from other services --> 
    ${styles.join('\n')}
    <!-- styles from other services --> 

  </head>
  
  <body>
    <div id="root">
      <div id="gallery-app">${content_one}</div>
      <div id="booker-app"></div>
      <div id="reviews-app"></div>
      <div id="related-listings-app">${content_two}</div>
    </div>
  
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em"
      crossorigin="anonymous"></script>
  
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
  
    <script>window.__initialState__ = ${JSON.stringify(initialState)}</script>
    <script src="${host}/client.js"></script>

    <!-- scripts from other services --> 
    ${scripts.join('\n')}
    <!-- scripts from other services --> 

  </body>
  </html>
  `;
};