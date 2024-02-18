import {Price} from '../models/PriceModel.js'

export const GetPrice  = async (req, res) => {
    const data = await Price.find({})
    res.send(data)
}

export const GetByIdPrice = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Price.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeletePrice = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Price.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostPrice = async (req, res) => {
    try {
        const data = new Price(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send(error.message)

    }
}


export const UpdatePrice = async (req, res) => {
    try {
        const data = await Price.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}