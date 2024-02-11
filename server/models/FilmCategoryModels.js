import mongoose, {Schema} from 'mongoose'

const FilmCategorySchema = new Schema({
seriesgif:String,
animationgif:String,
filmgif:String,
allmoviegif:String

});

export const FilmCategory = mongoose.model('FilmCategory', FilmCategorySchema);