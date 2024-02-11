import mongoose, {Schema} from 'mongoose'

const HeaderAndLoginSchema = new Schema({
headerfromAbout:String,
headerfromContact:String,
headerfromPrice:String,
headerfromMovie:String,
headerfromFilms:String,
headerfromAnimations:String,
headerfromSeries:String,
loginimage:String
});

export const HeaderAndLogin = mongoose.model('HeaderAndLogin', HeaderAndLoginSchema);