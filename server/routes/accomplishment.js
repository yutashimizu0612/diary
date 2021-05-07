const express = require('express');
const accomplishmentRouter = express.Router();
const { requireLogin } = require('../middleware/auth');
// controller
const accomplishmentController = require('../controllers/accomplishmentController');

accomplishmentRouter.get(
  '/accomplishments/counts',
  requireLogin,
  accomplishmentController.getAccomplishmentsCounts,
);
accomplishmentRouter.get(
  '/accomplishments/:date',
  requireLogin,
  accomplishmentController.getAccomplishments,
);
accomplishmentRouter.post('/accomplishments/', requireLogin, accomplishmentController.create);
accomplishmentRouter.put('/accomplishments/:id', requireLogin, accomplishmentController.update);
accomplishmentRouter.delete('/accomplishments/:id', requireLogin, accomplishmentController.delete);

module.exports = accomplishmentRouter;
