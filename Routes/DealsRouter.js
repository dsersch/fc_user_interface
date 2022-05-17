const express = require('express')
const dealsController = require('../Controllers/DealsController.js')

const router = express.Router()

router
    .route('/')
    .get(dealsController.findAllDeals)

router
    .route('/:id')
    .get(dealsController.findDealsByPodMemberId)

module.exports = router