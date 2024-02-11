import express from 'express'
import { DeleteFilmCategory, GetByIdFilmCategory, GetFilmCategory, PostFilmCategory, UpdateFilmCategory } from '../controllers/FilmCategoryController.js'

const FilmCategoryRouter=express.Router()

FilmCategoryRouter.get('/filmcategory',GetFilmCategory)

FilmCategoryRouter.get('/filmcategory/:id',GetByIdFilmCategory)

FilmCategoryRouter.delete('/filmcategory/:id', DeleteFilmCategory)

FilmCategoryRouter.post('/filmcategory',PostFilmCategory)

FilmCategoryRouter.put('/filmcategory/:id',UpdateFilmCategory)

export default FilmCategoryRouter 
