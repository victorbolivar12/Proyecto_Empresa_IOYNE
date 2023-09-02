import express from 'express'
import { sendMail } from '../controllers/mail.controller.js'

const router = express.Router()

//Post /mail:id
router.get('/:id',sendMail)

export default router