import express from "express";
import { UpdateRating } from "../controllers/MovieCartController.js";
const RatingRouter = express.Router();

// const RatingRouter=express.Router()

// RatingRouter.get('/rating',GetRating)

// RatingRouter.get('/rating/:id',GetByIdRating)

// RatingRouter.delete('/rating/:id', DeleteRating)

// RatingRouter.post('/rating',PostRating)

RatingRouter.put("/rating/:userId", UpdateRating);

export default RatingRouter;
