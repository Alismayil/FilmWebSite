import mongoose, {Schema} from 'mongoose'

const TimeLineSchema = new Schema({
    image: String,
    mainText:String,
    comment:String,
    headerText:String,
    time:Number,

});

export const TimeLine = mongoose.model('TimeLine', TimeLineSchema);