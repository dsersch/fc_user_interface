const express = require('express')
const membersController = require('../Controllers/MembersController.js')

const router = express.Router()

router
    .route('/')
    .get(membersController.findAllMembers)

router
    .route('/:id')
    .get(membersController.findOneMember)

router
    .route('/login')
    .post(membersController.findByEmail)


module.exports = router