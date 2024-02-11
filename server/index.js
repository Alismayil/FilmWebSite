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

const {Schema} = mongoose;
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use("/", Reklam)
app.use("/", Personal)
app.use("/", AboutInform)
app.use("/", Header)
app.use("/",TimeLine)
app.use("/", FilmCategory)
app.use("/", HeaderAndLogin)

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})