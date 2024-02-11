import express from 'express'
import { DeleteAboutInform, GetAboutInform, GetByIdAboutInform, PostAboutInform, UpdateAboutInform } from '../controllers/AboutInformController.js'

const AboutInformRouter=express.Router()

AboutInformRouter.get('/aboutinformsection',GetAboutInform)

AboutInformRouter.get('/aboutinformsection/:id',GetByIdAboutInform)

AboutInformRouter.delete('/aboutinformsection/:id', DeleteAboutInform)

AboutInformRouter.post('/aboutinformsection',PostAboutInform)

AboutInformRouter.put('/aboutinformsection/:id',UpdateAboutInform)

export default AboutInformRouter 
