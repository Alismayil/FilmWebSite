import express from 'express'
import { DeletePersonal, GetByIdPersonal, GetPersonal, PostPersonal, UpdatePersonal } from '../controllers/PersonalController.js'

const PersonalRouter=express.Router()

PersonalRouter.get('/personal',GetPersonal)

PersonalRouter.get('/personal/:id',GetByIdPersonal)

PersonalRouter.delete('/personal/:id', DeletePersonal)

PersonalRouter.post('/personal',PostPersonal)

PersonalRouter.put('/personal/:id',UpdatePersonal)


export default PersonalRouter 
