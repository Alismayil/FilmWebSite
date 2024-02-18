import express from 'express'
import { DeletePrice, GetByIdPrice, GetPrice, PostPrice, UpdatePrice } from '../controllers/PriceController.js'

const PriceRouter=express.Router()

PriceRouter.get('/price',GetPrice)

PriceRouter.get('/price/:id',GetByIdPrice)

PriceRouter.delete('/price/:id', DeletePrice)

PriceRouter.post('/price',PostPrice)

PriceRouter.put('/price/:id',UpdatePrice)

export default PriceRouter 
