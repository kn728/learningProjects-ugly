import express from 'express'
import { getInfo } from '../controllers/campaignController.js';
import { getCharacter, createCharacter} from '../controllers/charController.js'

const router = express.Router()

router.get('/', getInfo)
router.get('/character', getCharacter)
router.post('/character', createCharacter)

export default router;