import express from 'express'
import { getInfo } from '../controllers/campaignController.js';

const router = express.Router()

router.get('/', getInfo)

export default router;