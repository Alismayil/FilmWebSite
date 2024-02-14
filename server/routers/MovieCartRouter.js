import express from "express";
import {
  DeleteMovieCart,
  GetByIdMovieCart,
  GetMovieCart,
  PostMovieCart,
  UpdateMovieCart,
  UpdateRating,
} from "../controllers/MovieCartController.js";
import { CheckRating } from "../middleware/checkRating.js";

const MovieCartRouter = express.Router();

MovieCartRouter.get("/moviecart", GetMovieCart);

MovieCartRouter.get("/moviecart/:id", GetByIdMovieCart);

MovieCartRouter.delete("/moviecart/:id", DeleteMovieCart);

MovieCartRouter.post("/moviecart", PostMovieCart);

MovieCartRouter.put("/moviecart/:id", UpdateMovieCart);

MovieCartRouter.put("/moviecart/rating-update/:id", CheckRating, UpdateRating);

export default MovieCartRouter;
