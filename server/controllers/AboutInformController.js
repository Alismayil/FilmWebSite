import {AboutInform} from '../models/AboutInformModels.js'

export const GetAboutInform  = async (req, res) => {
    const data = await AboutInform.find({})
    res.send(data)
}

export const GetByIdAboutInform = async (req, res) => {
    try {
        const { id } = req.params
        const data = await AboutInform.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteAboutInform = async (req, res) => {
    try {
        const { id } = req.params
        const data = await AboutInform.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostAboutInform = async (req, res) => {
    try {
        const data = new AboutInform(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}

export const UpdateAboutInform = async (req, res) => {
    try {
        const data = await AboutInform.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}