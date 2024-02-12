import mongoose, {Schema} from 'mongoose'

const MovieCartSchema = new Schema({
cartposterimage:String,
name:String,
writter:String,
director:String,
moviegif:String,
popularcartimage:String,
imdbpoint:String,
moviepoint:Number,
hourtime:Number,
daytime:String,
trailer:String,
detailbigimage:String,
filmvideo:String,
// series:String


// ---------------
// comment:String,
// category:String,


});

export const MovieCart = mongoose.model('MovieCart', MovieCartSchema);
