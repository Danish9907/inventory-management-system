import express from 'express'
import * as Controller from '../Controllers/Controller.js'
const router = express.Router()

router.post('/create', Controller.createItem)

router.get('/fetchAll', Controller.getItems)

router.get('/singleItem/:id', Controller.getSingleItem)

router.put('/updateItem/:id', Controller.updateItem)

router.delete('/deleteItem/:id', Controller.deleteItem)


export default router