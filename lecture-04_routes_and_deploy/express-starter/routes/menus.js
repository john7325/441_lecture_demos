import menusDessertsRouter from './menus_desserts.js'
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the menu');
});

router.use('/desserts', menusDessertsRouter)



export default router;