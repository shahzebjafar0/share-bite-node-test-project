const menuServices = require('../services/MenuServices');
const { AppError, catchAsync } = require('../../utils');

const getEntireMenu = catchAsync(async (req, res, next) => {
  const result = await menuServices.get();
  if (!result.length) {
    return next(new AppError('Menu do not exist', 404));
  }
  return res.status(200).send(result);
});

module.exports = {
  getEntireMenu
};
