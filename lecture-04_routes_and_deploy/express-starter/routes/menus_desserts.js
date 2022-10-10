import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the desserts');
});


router.get('/1', function(req, res, next) {
    res.send('Chocolate Cake!!');
  });



export default router;