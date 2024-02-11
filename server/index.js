import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Reklam from './routers/ReklamRouter.js';
import Personal from './routers/PersonalRouter.js'
import AboutInform  from './routers/AboutInformRouter.js';
import Header from './routers/HeaderRouter.js';
import TimeLine from './routers/TimeLineRouter.js';
import FilmCategory from './routers/FilmCategoryRouter.js';
import HeaderAndLogin from './routers/HeadersAndLoginRouter.js';
import dotenv  from  "dotenv"

const {Schema} = mongoose;
const app = express()
dotenv.config()
const port = process.env.PORT
const password= process.env.PASS
const connectUrl= process.env.CONNECTION_URL.replace(`<password>` , password)


app.use(express.json())
app.use(cors())
app.use("/", Reklam)
app.use("/", Personal)
app.use("/", AboutInform)
app.use("/", Header)
app.use("/",TimeLine)
app.use("/", FilmCategory)
app.use("/", HeaderAndLogin)

mongoose.connect(connectUrl)
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})