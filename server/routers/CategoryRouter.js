import express from 'express'
import { DeleteCategory, GetByIdCategory, GetCategory, PostCategory, UpdateCategory } from '../controllers/CategoryController.js'

const CategoryRouter=express.Router()

CategoryRouter.get('/category',GetCategory)

CategoryRouter.get('/category/:id',GetByIdCategory)

CategoryRouter.delete('/category/:id', DeleteCategory)

CategoryRouter.post('/category',PostCategory)

CategoryRouter.put('/category/:id',UpdateCategory)

export default CategoryRouter 
