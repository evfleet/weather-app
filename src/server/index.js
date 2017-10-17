import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

import constants from './config/constants';
import createAPIResponse from './utils/createAPIResponse';

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.post('/api/location/coords', async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${constants.GOOGLE_KEY}`).then((r) => r.json());

    if (response.results[0]) {
      let locality;
      let adminArea;

      response.results[0].address_components.map((component) => {
        if (component.types.includes('locality')) {
          locality = component.long_name;
        } else if (component.types.includes('administrative_area_level_1')) {
          adminArea = component.long_name;
        }
      });

      return res.json(createAPIResponse(true, {
        name: `${locality}, ${adminArea}`,
        coords: {
          latitude,
          longitude
        }
      }));
    } else {
      console.log('no result');
    }
  } catch (error) {
    console.log(error);
  }

  res.json({});
});

app.post('/api/location/address', async (req, res) => {
  const { address } = req.body;

  try {
    if (!address) {
      res.json({
        error: true
      });
    }

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${constants.GOOGLE_KEY}`).then((r) => r.json());

    console.log(response);

    res.json({});
  } catch (error) {
    res.json({
      error: true
    });
  }
});

app.get('/', (req, res) => {
  res.json({});
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});