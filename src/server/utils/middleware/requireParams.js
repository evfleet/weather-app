import createAPIResponse from '../createAPIResponse';

export default (...params) => {
  return (req, res, next) => {
    if (params.map((p) => Object.keys(req.body).includes(p)).includes(false)) {
      return res.json(createAPIResponse(false, 'Invalid parameters', 422));
    }
    next();
  };
};