const { get, create } = require('../services/ItemModifierServices');
const { AppError, catchAsync } = require('../../utils');

const getItemsModifiers = catchAsync(async (req, res, next) => {
  const result = await get();
  if (!result.length) {
    return next(new AppError('ItemAndModifiers do not exist', 404));
  }
  return res.status(200).send(result);
});

const mapItemsModifiers = catchAsync(async (req, res, next) => {
  if (!req.body.item_id) {
    return next(new AppError('itemId is required', 400));
  } else if (!req.body.modifier_id) {
    return next(new AppError('modifierId is required', 400));
  } else {
    const result = await create(req.body);
    if (!result.length) {
      return next(new AppError('ItemAndModifiers do not exist', 404));
    }
    return res.status(200).json({ message: 'Item and Modifiers mapped successfully' });
  }
});

module.exports = {
  getItemsModifiers,
  mapItemsModifiers
};
