const sectionServices = require('../services/SectionServices');
const { AppError, catchAsync } = require('../../utils');

const getAllSections = catchAsync(async (req, res, next) => {
  const result = await sectionServices.get();
  if (!result.length) {
    return next(new AppError('Sections do not exist', 404));
  }
  return res.status(200).json({ data: result });
});

const getSingleSection = catchAsync(async (req, res, next) => {
  const result = await sectionServices.getById(req.params);
  if (!result.length) {
    return next(new AppError(`Section with id=${req.params.id} does not exist`, 404));
  }
  return res.status(200).json({ data: result });
});

const createSection = catchAsync(async (req, res, next) => {
  if (!req.body.name) {
    return next(new AppError('Name field cannot be empty', 400));
  } else if (!req.body.description) {
    return next(new AppError('Description field cannot be empty', 400));
  }
  const result = await sectionServices.create(req.body);
  return res.status(201).json({ message: 'Section added successfully' });
});

const updateSection = catchAsync(async (req, res, next) => {
  const section = await sectionServices.getById(req.params);
  if (!section.length) {
    return next(new AppError(`Section with id=${req.params.id} does not exist`, 404));
  }

  if (!req.body.name) {
    return next(new AppError('Name field cannot be empty', 400));
  } else if (!req.body.description) {
    return next(new AppError('Description field cannot be empty', 400));
  }
  const data = { ...req.body, id: req.params.id };
  const result = await sectionServices.update(data);
  return res.status(200).json({ message: 'Section updated successfully' });
});

const deleteSection = catchAsync(async (req, res, next) => {
  const section = await sectionServices.getById(req.params);
  if (!section.length) {
    return next(new AppError(`Section with id=${req.params.id} does not exist`, 404));
  }
  const result = await sectionServices.remove(req.params);
  return res.status(200).json({ message: 'Section deleted successfully' });
});

module.exports = {
  getAllSections,
  getSingleSection,
  createSection,
  updateSection,
  deleteSection
};
