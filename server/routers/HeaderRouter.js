import express from 'express'
import { DeleteHeader, GetByIdHeader, GetHeader, PostHeader, UpdateHeader } from '../controllers/HeaderController.js'

const HeaderRouter=express.Router()

HeaderRouter.get('/header',GetHeader)

HeaderRouter.get('/header/:id',GetByIdHeader)

HeaderRouter.delete('/header/:id', DeleteHeader)

HeaderRouter.post('/header',PostHeader)

HeaderRouter.put('/header/:id',UpdateHeader)

export default HeaderRouter 
