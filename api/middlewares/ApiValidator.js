const AppError = require('../../utils/AppError');

const validateApi = (req, res, next) => {
  if (req.originalUrl === '/api/v1/sections' && req.method === 'POST') {
    const { name, description } = req.body;

    if (!name || !description) {
      return next(new AppError('Missing required field(s)', 400));
    }
  } else if (req.originalUrl === '/api/v1/items' && req.method === 'POST') {
    const { name, description, price, section_id, modifier_id } = req.body;

    if (!name || !description || !price || !section_id || !modifier_id) {
      return next(new AppError('Missing required field(s)', 400));
    }
  } else if (req.originalUrl === '/api/v1/modifiers' && req.method === 'POST') {
    const { description } = req.body;

    if (!description) {
      return next(new AppError('Missing required field(s)', 400));
    }
  }

  next();
};

module.exports = validateApi;
