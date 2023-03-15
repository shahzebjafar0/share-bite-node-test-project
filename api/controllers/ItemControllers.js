const { get, getById, create, update, remove } = require('../services/ItemServices');

const { AppError, catchAsync } = require('../../utils');

const getAllItems = catchAsync(async (req, res, next) => {
  const result = await get();
  if (!result.length) {
    return next(new AppError('Items do not exist', 404));
  }
  return res.status(200).json({ data: result });
});

const getSingleItem = catchAsync(async (req, res, next) => {
  const result = await getById(req.params);
  if (!result.length) {
    return next(new AppError(`Item with id=${req.params.id} does not exist`, 404));
  }
  return res.status(200).json({ data: result });
});

const createItems = catchAsync(async (req, res, next) => {
  if (!req.body.name) {
    return next(new AppError('Name field cannot be empty', 400));
  } else if (!req.body.description) {
    return next(new AppError('Description field cannot be empty', 400));
  } else if (!req.body.price) {
    return next(new AppError('Price field cannot be empty', 400));
  } else if (!req.body.section_id) {
    return next(new AppError('Section_id field cannot be empty', 400));
  } else {
    const result = await create(req.body);
    return res.status(201).json({ message: 'Item added successfully' });
  }
});

const updateItems = catchAsync(async (req, res, next) => {
  const item = await getById(req.params);
  if (!item.length) {
    return next(new AppError(`Item with id=${req.params.id} does not exist`, 404));
  }
  if (!req.body.name) {
    return next(new AppError('Name field cannot be empty', 400));
  } else if (!req.body.description) {
    return next(new AppError('Description field cannot be empty', 400));
  } else if (!req.body.price) {
    return next(new AppError('Price field cannot be empty', 400));
  } else if (!req.body.section_id) {
    return next(new AppError('Section_id field cannot be empty', 400));
  } else {
    const data = { ...req.body, id: req.params.id };
    const result = await create(data);
    return res.status(201).json({ message: 'Item updated successfully' });
  }
});

const deleteItems = catchAsync(async (req, res, next) => {
  const item = await getById(req.params);
  if (!item.length) {
    return next(new AppError(`Item with id=${req.params.id} does not exist`, 404));
  }
  const result = await remove(req.params);
  return res.status(200).json({ message: 'Item deleted successfully' });
});

module.exports = {
  getAllItems,
  getSingleItem,
  createItems,
  updateItems,
  deleteItems
};
