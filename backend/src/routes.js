const express = require('express')
const cors = require('cors')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')

/**
 * User
 */
routes.get('/users', cors(), UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

module.exports = routes
