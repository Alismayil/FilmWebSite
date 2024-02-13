import express from 'express'
import { DeletePartner, GetByIdPartner, GetPartner, PostPartner, UpdatePartner } from '../controllers/PartnerController.js'

const PartnerRouter=express.Router()

PartnerRouter.get('/partner',GetPartner)

PartnerRouter.get('/partner/:id',GetByIdPartner)

PartnerRouter.delete('/partner/:id', DeletePartner)

PartnerRouter.post('/partner',PostPartner)

PartnerRouter.put('/partner/:id',UpdatePartner)


export default PartnerRouter 
