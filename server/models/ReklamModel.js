import mongoose, {Schema} from 'mongoose'

const ReklamSchema = new Schema({
    name: String,
    image: String,
    writter:String,
    time:Number,
    studio:String,
    directed:String

});

export const Reklam = mongoose.model('Reklam', ReklamSchema);