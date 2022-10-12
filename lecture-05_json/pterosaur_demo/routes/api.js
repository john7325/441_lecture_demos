import {promises as fs} from 'fs'
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/getPterosaurs', async function(req, res) {
  const data = await fs.readFile("data/pterosaur.json")

  res.send(data);
});

export default router;