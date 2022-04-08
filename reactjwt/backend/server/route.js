import express from 'express';
const router = express.Router();
import {signUp,signIn,show} from '../controller/signUp.js';


router.post('/api/auth/signup',signUp)
router.post('/api/auth/signin',signIn)
router.get('/show',show)

export default router;
