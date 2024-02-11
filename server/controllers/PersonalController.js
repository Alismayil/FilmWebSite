import {Personal} from '../models/PersonalModels.js'

export const GetPersonal  = async (req, res) => {
    const data = await Personal.find({})
    res.send(data)
}

export const GetByIdPersonal = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Personal.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeletePersonal = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Personal.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostPersonal = async (req, res) => {
    try {
        const data = new Personal(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}

export const UpdatePersonal = async (req, res) => {
    try {
        const data = await Personal.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}