const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

router.use('/name',newsController.name)
router.use('/mo',newsController.show)

router.use('/',newsController.index)




module.exports = router;