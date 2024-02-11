import { GetByIdReklam, DeleteReklam, GetReklam, PostReklam, UpdateReklam } from '../controllers/ReklamController.js'
import express from 'express'

const ReklamRouter=express.Router()

ReklamRouter.get('/reklam',GetReklam)

ReklamRouter.get('/reklam/:id',GetByIdReklam )

ReklamRouter.delete('/reklam/:id', DeleteReklam )

ReklamRouter.post('/reklam',PostReklam )

ReklamRouter.put('/reklam/:id', UpdateReklam )

export default ReklamRouter 

