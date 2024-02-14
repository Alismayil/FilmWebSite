// import {Rating} from '../models/RatingModel.js'

// export const GetRating  = async (req, res) => {
//     const data = await Rating.find({})
//     res.send(data)
// }

// export const GetByIdRating = async (req, res) => {
//     try {
//         const { id } = req.params
//         const data = await Rating.findById(id)
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(404).send(error)

//     }
// }

// export const DeleteRating = async (req, res) => {
//     try {
//         const { id } = req.params
//         const data = await Rating.findByIdAndDelete(id)
//         res.status(200).send("Product Delete")
//     } catch (error) {
//         res.status(404).send("Product Not Delete")

//     }
// }

// export const PostRating = async (req, res) => {
//     try {
//         const data = new Rating(req.body)
//         await data.save()
//         res.status(200).send("Create Product")
//     } catch (error) {
//         res.status(404).send("Not Create Product")

//     }
// }


// export const UpdateRating = async (req, res) => {
//     try {
//         const data = await Rating.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(404).send(error)

//     }
// }