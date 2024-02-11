import {Reklam} from '../models/ReklamModel.js'

export const GetReklam  = async (req, res) => {
    const data = await Reklam.find({})
    res.send(data)
}

export const GetByIdReklam = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Reklam.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteReklam = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Reklam.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostReklam = async (req, res) => {
    try {
        const data = new Reklam(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}

export const UpdateReklam = async (req, res) => {
    try {
        const data = await Reklam.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}   