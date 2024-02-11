import mongoose, {Schema} from 'mongoose'

const PersonalSchema = new Schema({
    name: String,
    image: String,
    job:String,

});

export const Personal = mongoose.model('Personal', PersonalSchema);