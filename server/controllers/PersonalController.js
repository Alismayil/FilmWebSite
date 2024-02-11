import upload from '../middleware/multer.js'
import {Personal} from '../models/PersonalModels.js'
import cloudinary from '../utils/cloudinary.js'

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



export const PostPersonal = (req, res) => {
    try {
      upload.fields([{name:'image'}])(req, res, async function (err) {
        if (err) {
          console.error(err);
          return res.status(400).json({ message: err.message });
        }
        const { name, job } = req.body;

          const PersonalResult = req.files["image"][0];
          const PersonalUpload = cloudinary.uploader.upload(PersonalResult.path, { folder: "Reklam" });
  
          const [PersonalResponse] = await Promise.all([PersonalUpload]);
  
          const newPersonal = new Personal({
            name,
            job,
            image: PersonalResponse.secure_url
          });
  
          await newPersonal.save();
  
          res.status(200).send("Create New Product");
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

  export const UpdatePersonal = async (req, res) => {
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedPersonal = await Personal.findByIdAndUpdate(req.params.id, {}, { new: true });

                if (updatedPersonal) {
                    const { name, job } = req.body;

                    if (req.files["image"]) {
                        const PersonalResult = req.files["image"][0];
                        const PersonalUpload = cloudinary.uploader.upload(PersonalResult.path, { folder: "Reklam" });
                        const [PersonalResponse] = await Promise.all([PersonalUpload]);
                        updatedPersonal.image = PersonalResponse.secure_url;
                    }

                    if (name) updatedPersonal.name = name;
                    if (job) updatedPersonal.job = job;
                    await updatedPersonal.save();

                    res.status(200).json(updatedPersonal); 
                } else {
                    res.status(404).json({ message: "Güncellenmek istenen reklam bulunamadı." });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 

