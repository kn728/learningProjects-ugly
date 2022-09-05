import express from 'express'
import { getInfo } from '../controllers/campaignController.js';
import { getCharacter, createCharacter} from '../controllers/charController.js'
import { RegisterUser, login } from '../controllers/userController.js';

const router = express.Router()

router.get('/', getInfo)
router.get('/character', getCharacter)
router.post('/character', createCharacter)
router.post('/user', RegisterUser)
router.get('/user', login)
export default router;