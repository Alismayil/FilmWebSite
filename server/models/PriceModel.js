import mongoose, {Schema} from 'mongoose'

const PriceSchema = new Schema({
pricetype:String,
oldprice:Number,
newprice:Number,
sale:Number,
time:String,
plusside:[{type:String}],
minusside:[{type:String}]

});

export const Price = mongoose.model('Price', PriceSchema);