const express = require('express');
const routes = require('./api/routes');
const glabalErrorHandler = require('./api/middlewares/GlobalErrors');
const AppError = require('./utils/AppError');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/v1/sections', routes.sectionRoutes);
app.use('/api/v1/modifiers', routes.modifierRoutes);
app.use('/api/v1/items', routes.itemRoutes);
app.use('/api/v1/menu', routes.menuRoutes);
app.use('/api/v1/items-modifiers', routes.itemModifierRoutes);

app.all('*', (req, res, next) => {
  return next(new AppError(`Requested URL '${req.path}' not found!`, 404));
});

app.use(glabalErrorHandler);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
