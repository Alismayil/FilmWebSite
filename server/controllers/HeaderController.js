// import {Header} from "../models/HeaderModel.js"

import { HeaderInform } from "../models/HeaderModel.js"

export const GetHeader  = async (req, res) => {
    const data = await HeaderInform.find({})
    res.send(data)
}

export const GetByIdHeader = async (req, res) => {
    try {
        const { id } = req.params
        const data = await HeaderInform.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteHeader = async (req, res) => {
    try {
        const { id } = req.params
        const data = await HeaderInform.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostHeader = async (req, res) => {
    try {
        const data = new HeaderInform(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}

export const UpdateHeader = async (req, res) => {
    try {
        const data = await HeaderInform.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}