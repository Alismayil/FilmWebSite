import { MovieCart } from '../models//MovieCartModel.js'
import cloudinary from '../utils/cloudinary.js'
import upload from '../middleware/multer.js'

export const GetMovieCart  = async (req, res) => {
    const data = await MovieCart.find({})
    res.send(data)
}

export const GetByIdMovieCart = async (req, res) => {
    try {
        const { id } = req.params
        const data = await MovieCart.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)

    }
}

export const DeleteMovieCart = async (req, res) => {
    try {
        const { id } = req.params
        const data = await MovieCart.findByIdAndDelete(id)
        res.status(200).send("Product Delete")
    } catch (error) {
        res.status(404).send("Product Not Delete")

    }
}

export const PostMovieCart = (req, res) => {
  try {
      upload.fields([{ name: 'cartposterimage' }, { name: 'moviegif' }, { name: 'popularcartimage' }, { name: 'detailbigimage' }, { name: 'filmvideo' }])(req, res, async function (err) {
          if (err) {
              console.error(err);
              return res.status(400).json({ message: err.message });
          }
          const { name, writter, director, imdbpoint, moviepoint, hourtime, daytime, trailer } = req.body;

          const cartposterimageResult = req.files["cartposterimage"][0];
          const moviegifResult = req.files["moviegif"][0];
          const popularcartimageResult = req.files["popularcartimage"][0];
          const detailbigimageResult = req.files["detailbigimage"][0];
          const filmvideoResult = req.files["filmvideo"][0];

          const uploadPromises = [
              cloudinary.uploader.upload(cartposterimageResult.path, { folder: "MovieCart" }),
              cloudinary.uploader.upload(moviegifResult.path, { folder: "MovieCart" }),
              cloudinary.uploader.upload(popularcartimageResult.path, { folder: "MovieCart" }),
              cloudinary.uploader.upload(detailbigimageResult.path, { folder: "MovieCart" }),
              cloudinary.uploader.upload(filmvideoResult.path, { folder: "MovieCart", resource_type: "video" })
          ];

          const [cartposterimageResponse, moviegifResponse, popularcartimageResponse, detailbigimageResponse, filmvideoResponse] = await Promise.all(uploadPromises);

          const newMovieCart = new MovieCart({
              name,
              writter,
              director,
              imdbpoint,
              moviepoint,
              hourtime,
              daytime,
              trailer,
              cartposterimage: cartposterimageResponse.secure_url,
              moviegif: moviegifResponse.secure_url,
              popularcartimage: popularcartimageResponse.secure_url,
              detailbigimage: detailbigimageResponse.secure_url,
              filmvideo: filmvideoResponse.secure_url,
          });

          await newMovieCart.save();

          res.status(200).send("Yeni ürün oluşturuldu.");
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
  }
};

export default MovieCart;

export const UpdateMovieCart = async (req, res) => {
    try {
      upload.fields([{ name: 'cartposterimage' }, { name: 'moviegif' }, { name: 'popularcartimage' } ,{ name: 'detailbigimage' }, { name: 'filmvideo' }])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }

            try {
                const updatedMovieCart = await MovieCart.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});
                const { name, writter, director, imdbpoint, moviepoint, hourtime, daytime, trailer } = req.body;

                if(updatedMovieCart) {

                  const cartposterimageResult = req.files["cartposterimage"] ? req.files["cartposterimage"][0] : null;
                    const moviegifResult = req.files["moviegif"] ? req.files["moviegif"][0] : null;
                    const popularcartimageResult = req.files["popularcartimage"] ? req.files["popularcartimage"][0] : null;
                    const detailbigimageResult = req.files["detailbigimage"] ? req.files["detailbigimage"][0] : null;
                    const filmvideoResult = req.files["filmvideo"] ? req.files["filmvideo"][0] : null;

                    const cartposterimageUpload = cartposterimageResult ? cloudinary.uploader.upload(cartposterimageResult.path, { folder: "MovieCart" }) : null;
                    const moviegifUpload = moviegifResult ? cloudinary.uploader.upload(moviegifResult.path, { folder: "MovieCart" }) : null;
                    const popularcartimageUpload = popularcartimageResult ? cloudinary.uploader.upload(popularcartimageResult.path, { folder: "MovieCart" }) : null;
                    const detailbigimageUpload = detailbigimageResult ? cloudinary.uploader.upload(detailbigimageResult.path, { folder: "MovieCart" }) : null;
                    const filmvideoUpload = filmvideoResult ? cloudinary.uploader.upload(filmvideoResult.path, { folder: "MovieCart" , resource_type: "video"}) : null;

                    const [cartposterimageResponse, moviegifResponse, popularcartimageResponse , detailbigimageResponse,filmvideoResponse] = await Promise.all([cartposterimageUpload, moviegifUpload, popularcartimageUpload,detailbigimageUpload,filmvideoUpload]);

                    updatedMovieCart.cartposterimage = cartposterimageResponse ? cartposterimageResponse.secure_url : updatedMovieCart.cartposterimage;
                    updatedMovieCart.moviegif = moviegifResponse ? moviegifResponse.secure_url : updatedMovieCart.moviegif;
                    updatedMovieCart.popularcartimage = popularcartimageResponse ? popularcartimageResponse.secure_url : updatedMovieCart.popularcartimage;
                    updatedMovieCart.detailbigimage = detailbigimageResponse ? detailbigimageResponse.secure_url : updatedMovieCart.detailbigimage;
                    updatedMovieCart.filmvideo = filmvideoResponse ? filmvideoResponse.secure_url : updatedMovieCart.filmvideo;
                 
                    if (name) updatedMovieCart.name = name;
                    if (writter) updatedMovieCart.writter = writter;
                    if (director) updatedMovieCart.director = director;
                    if (imdbpoint) updatedMovieCart.imdbpoint = imdbpoint;
                    if (moviepoint) updatedMovieCart.moviepoint = moviepoint;
                    if (hourtime) updatedMovieCart.hourtime = hourtime;
                    if (daytime) updatedMovieCart.daytime = daytime;
                    if (trailer) updatedMovieCart.trailer = trailer;

                    await updatedMovieCart.save();

                    res.status(200).json(updatedMovieCart); 
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
