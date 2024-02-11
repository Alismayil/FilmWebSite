import upload from '../middleware/multer.js'
import {AboutInform} from '../models/AboutInformModels.js'
import cloudinary from '../utils/cloudinary.js'

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


export const PostAboutInform = (req, res) => {
    try {
      upload.fields([{name:'image'}])(req, res, async function (err) {
        if (err) {
          console.error(err);
          return res.status(400).json({ message: err.message });
        }
        const { job ,comment ,says } = req.body;

          const AboutInformResult = req.files["image"][0];
          const AboutInformUpload = cloudinary.uploader.upload(AboutInformResult.path, { folder: "AboutInform" });
  
          const [AboutInformResponse] = await Promise.all([AboutInformUpload]);
  
          const newAboutInform = new AboutInform({
            job,
            comment,
            says,
            image:AboutInformResponse.secure_url
          });
  
          await newAboutInform.save();
  
          res.status(200).send("Create New Product");
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

// export const UpdateAboutInform = async (req, res) => {
//     try {
//         const data = await AboutInform.findByIdAndUpdate(req.params.id, {...req.body}, {new:true})
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(404).send(error)

//     }
// }

export const UpdateAboutInform = async (req, res) => {
    try {
        upload.fields([{ name: 'image' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }
            try {
                const updatedAboutInform = await AboutInform.findByIdAndUpdate(req.params.id, {}, { new: true });

                if (updatedAboutInform) {
                    const { job ,comment ,says } = req.body;

                    if (req.files["image"]) {
                        const AboutInformResult = req.files["image"][0];
                        const AboutInformUpload = cloudinary.uploader.upload(AboutInformResult.path, { folder: "Reklam" });
                        const [AboutInformResponse] = await Promise.all([AboutInformUpload]);
                        updatedAboutInform.image = AboutInformResponse.secure_url;
                    }

                    if (comment) updatedAboutInform.comment = comment;
                    if (job) updatedAboutInform.job = job;
                    if (says) updatedAboutInform.says = says;
                    await updatedAboutInform.save();

                    res.status(200).json(updatedAboutInform); 
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