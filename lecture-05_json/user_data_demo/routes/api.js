import {promises as fs} from 'fs'
import usersRouter from './users.js';
import express from 'express';
var router = express.Router();

router.use('/users', usersRouter)


export default router;