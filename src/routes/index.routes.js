import { Router } from 'express';
const router = Router();
const { addData, getData } = require('../controllers/dataSensor.controller');

router.get('/getData/', getData);

router.post('/postData', addData);

export default router;
