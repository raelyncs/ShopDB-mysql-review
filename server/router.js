const router = require('express').Router();
const controllers = require('./controllers.js')

// TODO: Connect router to controller functions

router
  .route('/items')
    .get(controllers.getAll)
    .post(controllers.create)

router
  .route('/items/:id')
    .get(controllers.getOne)
    .delete(controllers.delete)
    .put(controllers.updateOne)


module.exports = router;