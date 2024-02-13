import upload from "../middleware/multer.js"
import { Partner } from "../models/PartnerModel.js"
import cloudinary from "../utils/cloudinary.js"

export const GetPartner  = async (req, res) => {
    const data = await Partner.find({})
    res.send(data)
}

export const GetByIdPartner = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Partner.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeletePartner = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Partner.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostPartner = async (req, res) => {
    try {
        upload.fields([{name:'image1'}, {name:'image2'}])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            const { path1, path2 } = req.body;

            const Partner1Result = req.files["image1"][0];
            const Partner1Upload = await cloudinary.uploader.upload(Partner1Result.path, { folder: "Partner" });

            const Partner2Result = req.files["image2"][0];
            const Partner2Upload = await cloudinary.uploader.upload(Partner2Result.path, { folder: "Partner" });

            const Partner1Response = Partner1Upload;
            const Partner2Response = Partner2Upload;

            const newPartner = new Partner({
                path1,
                path2,
                image1: Partner1Response.secure_url,
                image2: Partner2Response.secure_url
            });

            await newPartner.save();

            res.status(200).send("Create New Product");
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


export const UpdatePartner = async (req, res) => {
    try {
        upload.fields([{name:'image1'}, {name:'image2'}])(req, res, async function(err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }

            try {
                const updatedİmage = await Partner.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});

                if(updatedİmage) {
                    const {  path1, path2 } = req.body;

                    const image1Result = req.files["image1"] ? req.files["image1"][0] : null;
                    const image2Result = req.files["image2"] ? req.files["image2"][0] : null;

                    const image1Upload = image1Result ? cloudinary.uploader.upload(image1Result.path, { folder: "FilmCategory" }) : null;
                    const image2Upload = image2Result ? cloudinary.uploader.upload(image2Result.path, { folder: "FilmCategory" }) : null;

                    const [image1Response,image2Response] = await Promise.all([image1Upload,image2Upload]);

                    updatedİmage.image1 = image1Response ? image1Response.secure_url : updatedİmage.image1;
                    updatedİmage.image2 = image2Response ? image2Response.secure_url : updatedİmage.image2;

                    if (path1) updatedİmage.path1 = path1;
                    if (path2) updatedİmage.path2 = path2;

                    await updatedİmage.save();

                    res.status(200).json(updatedİmage); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen kategori bulunamadı." });
                }
            } catch (error) {

              res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



