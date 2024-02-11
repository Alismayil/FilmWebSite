import express from 'express'
import { DeleteHeaderAndLogin, GetByIdHeaderAndLogin, GetHeaderAndLogin, PostHeaderAndLogin, UpdateHeaderAndLogin } from '../controllers/HeadersAndLoginController.js'


const HeaderAndLoginRouter=express.Router()

HeaderAndLoginRouter.get('/headerandlogin',GetHeaderAndLogin)

HeaderAndLoginRouter.get('/headerandlogin/:id',GetByIdHeaderAndLogin)

HeaderAndLoginRouter.delete('/headerandlogin/:id', DeleteHeaderAndLogin)

HeaderAndLoginRouter.post('/headerandlogin',PostHeaderAndLogin)

HeaderAndLoginRouter.put('/headerandlogin/:id',UpdateHeaderAndLogin)

export default HeaderAndLoginRouter 
