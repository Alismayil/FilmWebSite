import {TimeLine} from '../models/TimeLineModel.js'

export const GetTimeLine  = async (req, res) => {
    const data = await TimeLine.find({})
    res.send(data)
}

export const GetByIdTimeLine = async (req, res) => {
    try {
        const { id } = req.params
        const data = await TimeLine.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteTimeLine = async (req, res) => {
    try {
        const { id } = req.params
        const data = await TimeLine.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostTimeLine = async (req, res) => {
    try {
        const data = new TimeLine(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}


export const UpdateTimeLine = async (req, res) => {
    try {
        const data = await TimeLine.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}