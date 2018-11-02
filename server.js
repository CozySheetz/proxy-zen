import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

import { template } from './template';
import { host } from './configs';

const port = process.env.PORT || 3000;
const proxy = express();

proxy.use(bodyParser());

//update routing to make code more robust later;
proxy.post('/updateFavorites', function(req, res) {
  axios.post(`${host}/updateFavorites`).then(({ data }) => res.send(data));
});

proxy.get('/rooms/:id', function(req, res) {
  const id = req.params.id;
  axios
    .get(`${host}/getRoom/${id}`)
    .then(
      ({
        data: { initialState, nav, description, gallery, relatedListings }
      }) => {
        const html = template(
          initialState,
          nav,
          description,
          gallery,
          relatedListings
        );
        res.status(200).send(html);
      }
    )
    .catch(e => console.log('there is an error!', e));
});

proxy.listen(port, function() {
  console.log(`port is up on ${port}`);
});
