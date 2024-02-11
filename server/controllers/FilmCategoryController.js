import { FilmCategory } from '../models/FilmCategoryModels.js'

export const GetFilmCategory  = async (req, res) => {
    const data = await FilmCategory.find({})
    res.send(data)
}

export const GetByIdFilmCategory = async (req, res) => {
    try {
        const { id } = req.params
        const data = await FilmCategory.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteFilmCategory = async (req, res) => {
    try {
        const { id } = req.params
        const data = await FilmCategory.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostFilmCategory = async (req, res) => {
    try {
        const data = new FilmCategory(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}


export const UpdateFilmCategory = async (req, res) => {
    try {
        const data = await FilmCategory.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}