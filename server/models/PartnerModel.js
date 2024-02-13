import mongoose, {Schema} from 'mongoose'

const PartnerSchema = new Schema({
    image1: String,
    image2: String,
    path1:String,
    path2:String
});

export const Partner = mongoose.model('Partner', PartnerSchema);