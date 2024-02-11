import { FilmCategory } from '../models/FilmCategoryModels.js'
import cloudinary from '../utils/cloudinary.js'
import upload from '../middleware/multer.js'

export const GetFilmCategory  = async (req, res) => {
    const data = await FilmCategory.find({})
    res.send(data)
}

export const GetByIdFilmCategory = async (req, res) => {
    try {
        const { id } = req.params
        const data = await FilmCategory.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteFilmCategory = async (req, res) => {
    try {
        const { id } = req.params
        const data = await FilmCategory.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostFilmCategory = (req, res) => {
  try {
    upload.fields([{name:'seriesgif'},{name:'animationgif'}, {name:'filmgif'},{name:'allmoviegif'}])(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(400).json({ message: err.message });
      }

        const seriesGifResult = req.files["seriesgif"][0];
        const seriesGifUpload = cloudinary.uploader.upload(seriesGifResult.path, { folder: "FilmCategory" });

        const animationGifResult = req.files["animationgif"][0];
        const animationGifUpload = cloudinary.uploader.upload(animationGifResult.path, { folder: "FilmCategory" });

        const filmGifResult = req.files["filmgif"][0];
        const filmGifUpload = cloudinary.uploader.upload(filmGifResult.path, { folder: "FilmCategory" });

        const allMovieGifResult = req.files["allmoviegif"][0];
        const allMovieGifUpload = cloudinary.uploader.upload(allMovieGifResult.path, { folder: "FilmCategory" });

        const [seriesGifResponse, animationGifResponse, filmGifResponse, allMovieGifResponse] = await Promise.all([seriesGifUpload, animationGifUpload, filmGifUpload, allMovieGifUpload]);

        const newFilmCategory = new FilmCategory({
          seriesgif: seriesGifResponse.secure_url,
          animationgif: animationGifResponse.secure_url,
          filmgif: filmGifResponse.secure_url,
          allmoviegif: allMovieGifResponse.secure_url
        });

        await newFilmCategory.save();

        res.status(200).send("Yeni ürün oluşturuldu.");
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const UpdateFilmCategory = async (req, res) => {
    try {
        upload.fields([{name:'seriesgif'},{name:'animationgif'}, {name:'filmgif'},{name:'allmoviegif'}])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }

            try {
                const updatedCategory = await FilmCategory.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});

                if(updatedCategory) {

                  const seriesGifResult = req.files["seriesgif"] ? req.files["seriesgif"][0] : null;
                    const animationGifResult = req.files["animationgif"] ? req.files["animationgif"][0] : null;
                    const filmGifResult = req.files["filmgif"] ? req.files["filmgif"][0] : null;
                    const allMovieGifResult = req.files["allmoviegif"] ? req.files["allmoviegif"][0] : null;

                    const seriesGifUpload = seriesGifResult ? cloudinary.uploader.upload(seriesGifResult.path, { folder: "FilmCategory" }) : null;
                    const animationGifUpload = animationGifResult ? cloudinary.uploader.upload(animationGifResult.path, { folder: "FilmCategory" }) : null;
                    const filmGifUpload = filmGifResult ? cloudinary.uploader.upload(filmGifResult.path, { folder: "FilmCategory" }) : null;
                    const allMovieGifUpload = allMovieGifResult ? cloudinary.uploader.upload(allMovieGifResult.path, { folder: "FilmCategory" }) : null;

                    const [seriesGifResponse, animationGifResponse, filmGifResponse, allMovieGifResponse] = await Promise.all([seriesGifUpload, animationGifUpload, filmGifUpload, allMovieGifUpload]);

                    updatedCategory.seriesgif = seriesGifResponse ? seriesGifResponse.secure_url : updatedCategory.seriesgif;
                    updatedCategory.animationgif = animationGifResponse ? animationGifResponse.secure_url : updatedCategory.animationgif;
                    updatedCategory.filmgif = filmGifResponse ? filmGifResponse.secure_url : updatedCategory.filmgif;
                    updatedCategory.allmoviegif = allMovieGifResponse ? allMovieGifResponse.secure_url : updatedCategory.allmoviegif;
                    
                    await updatedCategory.save();

                    res.status(200).json(updatedCategory); 
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
