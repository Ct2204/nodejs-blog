const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

router.get('/name',newsController.name)
router.get('/mo',newsController.show)

router.get('/',newsController.index)



module.exports = router;