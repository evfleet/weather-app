import createAPIResponse from './createAPIResponse';

export default (res, results) => {
  let locality;
  let adminArea;

  results[0].address_components.map((component) => {
    if (component.types.includes('locality')) {
      locality = component.long_name;
    } else if (component.types.includes('administrative_area_level_1')) {
      adminArea = component.long_name;
    }
  });

  let { location: { lat, lng } } = results[0].geometry;

  return res.json(createAPIResponse(true, {
    name: `${locality}, ${adminArea}`,
    coords: {
      latitude: lat,
      longitude: lng
    }
  }));
};