import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

import constants from './config/constants';
import utils from './utils';

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.post('/api/weather', utils.requireParams('latitude', 'longitude'), async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const { currently, hourly, daily, alerts } = await fetch(`https://api.darksky.net/forecast/${constants.WEATHER_KEY}/${latitude},${longitude}?exclude=[minutely,flags]`).then((r) => r.json());

    // format out useless data later

    return res.json(utils.createAPIResponse(true, {
      currently,
      hourly,
      daily,
      alerts: alerts || null
    }));
  } catch (error) {
    return res.json(utils.createAPIResponse(false, 'Unexpected server error', 500));
  }
});

app.post('/api/location/coords', utils.requireParams('latitude', 'longitude'), async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const { status, results } = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${constants.GOOGLE_KEY}`).then((r) => r.json());

    if (status === 'OK') {
      return utils.parseAddress(res, results);
    } else {
      throw new Error(status);
    }
  } catch (error) {
    switch (error.message) {
      case 'ZERO_RESULTS':
      case 'OVER_QUERY_LIMIT':
      default:
        return res.json(utils.createAPIResponse(false, 'Unexpected server error', 500));
    }
  }
});

app.post('/api/location/address', utils.requireParams('address'), async (req, res) => {
  try {
    const { address } = req.body;
    const { status, results } = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${constants.GOOGLE_KEY}`).then((r) => r.json());

    if (status === 'OK') {
      return utils.parseAddress(res, results);
    } else {
      throw new Error(status);
    }
  } catch (error) {
    switch (error.message) {
      case 'ZERO_RESULTS':
      case 'OVER_QUERY_LIMIT':
      default:
        return res.json(utils.createAPIResponse(false, 'Unexpected server error', 500));
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});