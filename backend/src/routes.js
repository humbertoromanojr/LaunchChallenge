const express = require('express')
const cors = require('cors')
const routes = express.Router()

routes.use(cors())

const UserController = require('./app/controllers/UserController')

/**
 * User
 */
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', cors(UserController.store))
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

module.exports = routes
