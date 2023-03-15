const modifierServices = require('../services/ModifierServices');
const { AppError, catchAsync } = require('../../utils');

const getAllModifiers = catchAsync(async (req, res, next) => {
  const result = await modifierServices.get();
  if (!result.length) {
    return next(new AppError('Modifiers do not exist', 404));
  }
  return res.status(200).json({ data: result });
});

const getSingleModifier = catchAsync(async (req, res, next) => {
  const result = await modifierServices.getById(req.params);
  if (!result.length) {
    return next(new AppError(`Modifier with id=${req.params.id} does not exist`, 404));
  }
  return res.status(200).json({ data: result });
});

const createModifier = catchAsync(async (req, res, next) => {
  if (!req.body.description) {
    return next(new AppError('Description field cannot be empty', 400));
  }
  const result = await modifierServices.create(req.body);
  return res.status(201).json({ message: 'Modifier added successfully' });
});

const updateModifier = catchAsync(async (req, res, next) => {
  const modifier = await modifierServices.getById(req.params);
  if (!modifier.length) {
    return next(new AppError(`Modifier with id=${req.params.id} does not exist`, 404));
  }

  if (!req.body.description) {
    return next(new AppError('Description field cannot be empty', 400));
  }
  const data = { ...req.body, id: req.params.id };
  const result = await modifierServices.update(data);
  return res.status(200).json({ message: 'Modifier updated successfully' });
});

const deleteModifier = catchAsync(async (req, res, next) => {
  const modifier = await modifierServices.getById(req.params);
  if (!modifier.length) {
    return next(new AppError(`Modifier with id=${req.params.id} does not exist`, 404));
  }
  const result = await modifierServices.remove(req.params);
  return res.status(200).json({ message: 'Modifier deleted successfully' });
});

module.exports = {
  getAllModifiers,
  getSingleModifier,
  createModifier,
  updateModifier,
  deleteModifier
};
