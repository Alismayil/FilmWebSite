import upload from '../middleware/multer.js'
import {Reklam} from '../models/ReklamModel.js'
import cloudinary from '../utils/cloudinary.js'

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



export const PostReklam = (req, res) => {
    try {
      upload.fields([{name:'image'}])(req, res, async function (err) {
        if (err) {
          console.error(err);
          return res.status(400).json({ message: err.message });
        }
        const { name, writter, time, studio, directed } = req.body;

          const ReklamResult = req.files["image"][0];
          const ReklamUpload = cloudinary.uploader.upload(ReklamResult.path, { folder: "Reklam" });
  
          const [ReklamResponse] = await Promise.all([ReklamUpload]);
  
          const newReklam = new Reklam({
            name,
            writter,
            time,
            studio,
            directed,
            image: ReklamResponse.secure_url
          });
  
          await newReklam.save();
  
          res.status(200).send("Create New Product");
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

 

  export const UpdateReklam = async (req, res) => {
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedReklam = await Reklam.findByIdAndUpdate(req.params.id, {}, { new: true });

                if (updatedReklam) {
                    const { name, writter, time, studio, directed } = req.body;

                    if (req.files["image"]) {
                        const ReklamResult = req.files["image"][0];
                        const ReklamUpload = cloudinary.uploader.upload(ReklamResult.path, { folder: "Reklam" });
                        const [ReklamResponse] = await Promise.all([ReklamUpload]);
                        updatedReklam.image = ReklamResponse.secure_url;
                    }

                    if (name) updatedReklam.name = name;
                    if (writter) updatedReklam.writter = writter;
                    if (time) updatedReklam.time = time;
                    if (studio) updatedReklam.studio = studio;
                    if (directed) updatedReklam.directed = directed;

                    await updatedReklam.save();

                    res.status(200).json(updatedReklam); 
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