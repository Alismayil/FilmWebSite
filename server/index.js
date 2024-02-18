import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Reklam from "./routers/ReklamRouter.js";
import Personal from "./routers/PersonalRouter.js";
import AboutInform from "./routers/AboutInformRouter.js";
import Header from "./routers/HeaderRouter.js";
import TimeLine from "./routers/TimeLineRouter.js";
import FilmCategory from "./routers/FilmCategoryRouter.js";
import HeaderAndLogin from "./routers/HeadersAndLoginRouter.js";
import Login from "./routers/LoginRouter.js";
import dotenv from "dotenv";
import MovieCart from "./routers/MovieCartRouter.js";
import Patrner from "./routers/PartnerRouter.js";
import Category from "./routers/CategoryRouter.js";
import wishlist from "./routers/WishlistRouter.js";
import Rating from "./routers/RatingRouter.js";
// import Rating from './routers/RatingRouter.js';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import Price from "./routers/PriceRouter.js";
import { jwtDecode } from "jwt-decode";

const stripe = new Stripe(process.env.SECRET_KEY);
const { Schema } = mongoose;
const app = express();
dotenv.config();
const port = process.env.PORT;
const password = process.env.PASS;
const connectUrl = process.env.CONNECTION_URL.replace(`<password>`, password);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use("/", Reklam);
app.use("/", Personal);
app.use("/", AboutInform);
app.use("/", Header);
app.use("/", TimeLine);
app.use("/", FilmCategory);
app.use("/", HeaderAndLogin);
app.use("/", Login);
app.use("/", MovieCart);
app.use("/", Patrner);
app.use("/", Category);
app.use("/", wishlist);
app.use("/", Rating);
app.use("/", Price)

app.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});

mongoose.connect(connectUrl).then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
