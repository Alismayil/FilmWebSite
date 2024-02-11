import { HeaderAndLogin } from '../models/HeadersAndLoginModel.js'

export const GetHeaderAndLogin  = async (req, res) => {
    const data = await HeaderAndLogin.find({})
    res.send(data)
}

export const GetByIdHeaderAndLogin = async (req, res) => {
    try {
        const { id } = req.params
        const data = await HeaderAndLogin.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteHeaderAndLogin = async (req, res) => {
    try {
        const { id } = req.params
        const data = await HeaderAndLogin.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostHeaderAndLogin = async (req, res) => {
    try {
        const data = new HeaderAndLogin(req.body)
        await data.save()
        res.status(200).send("Create Product")
    } catch (error) {
        res.status(404).send("Not Create Product")

    }
}


export const UpdateHeaderAndLogin = async (req, res) => {
    try {
        const data = await HeaderAndLogin.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}