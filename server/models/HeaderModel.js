import mongoose,{Schema} from 'mongoose'

const HeaderSchema = new Schema({
    video: String,
});

export const HeaderInform = mongoose.model('HeaderInform', HeaderSchema);