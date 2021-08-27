import express from 'express'
import convert from '../controllers/convert.js'

const router = express.Router()

router.route('/text')
  .post(convert.input)

export default router