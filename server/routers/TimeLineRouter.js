import express from 'express'
import { DeleteTimeLine, GetByIdTimeLine, GetTimeLine, PostTimeLine, UpdateTimeLine } from '../controllers/TimeLineControllers.js'

const TimeLineRouter=express.Router()

TimeLineRouter.get('/timeline',GetTimeLine)

TimeLineRouter.get('/timeline/:id',GetByIdTimeLine)

TimeLineRouter.delete('/timeline/:id', DeleteTimeLine)

TimeLineRouter.post('/timeline',PostTimeLine)

TimeLineRouter.put('/timeline/:id',UpdateTimeLine)

export default TimeLineRouter 
