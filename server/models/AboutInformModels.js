import mongoose, {Schema} from 'mongoose'

const AboutInformSchema = new Schema({
    image: String,
    comment:String,
    says:String,
    job:String

});

export const AboutInform = mongoose.model('AboutInform', AboutInformSchema);