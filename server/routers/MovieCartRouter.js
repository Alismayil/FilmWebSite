import express from 'express'
import { DeleteMovieCart, GetByIdMovieCart, GetMovieCart, PostMovieCart, UpdateMovieCart } from '../controllers/MovieCartController.js'

const MovieCartRouter=express.Router()

MovieCartRouter.get('/moviecart',GetMovieCart)

MovieCartRouter.get('/moviecart/:id',GetByIdMovieCart)

MovieCartRouter.delete('/moviecart/:id', DeleteMovieCart)

MovieCartRouter.post('/moviecart',PostMovieCart)

MovieCartRouter.put('/moviecart/:id',UpdateMovieCart)

export default MovieCartRouter 
