import upload from '../middleware/multer.js'
import { HeaderAndLogin } from '../models/HeadersAndLoginModel.js'
import cloudinary from '../utils/cloudinary.js'

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
        // Dosya yükleme işlemleri
        upload.fields([{ name:'headerfromHome'},{ name:'headerfromAbout'},{ name:'headerfromContact'},{ name:'headerfromPrice'},{ name:'headerfromMovie'},{ name:'headerfromFilms'},{ name:'headerfromAnimations'},{ name:'headerfromSeries'},{ name:'loginimage'}])
            (req, res, async function (err) {
                try {
                    if (err) {
                        console.error(err);
                        return res.status(400).json({ message: err.message });
                    }
                  
                    const headerfromHomeResult = req.files["headerfromHome"][0];
                    const headerfromHomeUpload = cloudinary.uploader.upload(headerfromHomeResult.path, { folder: "FromHeader",  resource_type: "video" });

                    const headerfromAboutResult = req.files["headerfromAbout"][0];
                    const headerfromAboutUpload = cloudinary.uploader.upload(headerfromAboutResult.path, { folder: "FromHeader" });

                    const headerfromContactResult = req.files["headerfromContact"][0];
                    const headerfromContactUpload = cloudinary.uploader.upload(headerfromContactResult.path, { folder: "FromHeader" });

                    const headerfromPriceResult = req.files["headerfromPrice"][0];
                    const headerfromPriceUpload = cloudinary.uploader.upload(headerfromPriceResult.path, { folder: "FromHeader" });

                    const headerfromMovieResult = req.files["headerfromMovie"][0];
                    const headerfromMovieUpload = cloudinary.uploader.upload(headerfromMovieResult.path, { folder: "FromHeader" });

                    const headerfromFilmsResult = req.files["headerfromFilms"][0];
                    const headerfromFilmsUpload = cloudinary.uploader.upload(headerfromFilmsResult.path, { folder: "FromHeader" });

                    const headerfromAnimationsResult = req.files["headerfromAnimations"][0];
                    const headerfromAnimationsUpload = cloudinary.uploader.upload(headerfromAnimationsResult.path, { folder: "FromHeader" });

                    const headerfromSeriesResult = req.files["headerfromSeries"][0];
                    const headerfromSeriesUpload = cloudinary.uploader.upload(headerfromSeriesResult.path, { folder: "FromHeader" });

                    const loginimageResult = req.files["loginimage"][0];
                    const loginimageUpload = cloudinary.uploader.upload(loginimageResult.path, { folder: "Login" });

                    const [headerfromHomeResponse,headerfromAboutResponse,headerfromContactResponse,headerfromPriceResponse,headerfromMovieResponse,headerfromFilmsResponse,headerfromAnimationsResponse,headerfromSeriesResponse,loginimageResponse] = await Promise.all([headerfromHomeUpload,headerfromAboutUpload,headerfromContactUpload,headerfromPriceUpload,headerfromMovieUpload, headerfromFilmsUpload,headerfromAnimationsUpload,headerfromSeriesUpload,loginimageUpload]);

                    const newHeaderAndLogin = new HeaderAndLogin({
                        headerfromHome: headerfromHomeResponse.secure_url,
                        headerfromAbout: headerfromAboutResponse.secure_url,
                        headerfromContact: headerfromContactResponse.secure_url,
                        headerfromPrice: headerfromPriceResponse.secure_url,
                        headerfromMovie: headerfromMovieResponse.secure_url,
                        headerfromFilms: headerfromFilmsResponse.secure_url,
                        headerfromAnimations: headerfromAnimationsResponse.secure_url,
                        headerfromSeries: headerfromSeriesResponse.secure_url,
                        loginimage: loginimageResponse.secure_url
                    });

                    await newHeaderAndLogin.save();

                    res.status(200).send("Yeni ürün oluşturuldu.");
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: error.message });
                }
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const UpdateHeaderAndLogin = async (req, res) => {
    try {
        upload.fields([{ name:'headerfromHome'},{ name:'headerfromAbout'},{ name:'headerfromContact'},{ name:'headerfromPrice'},{ name:'headerfromMovie'},{ name:'headerfromFilms'},{ name:'headerfromAnimations'},{ name:'headerfromSeries'},{ name:'loginimage'}])(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }

            try {
                const updatedİmage = await HeaderAndLogin.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});

                if(updatedİmage) {

                  const headerfromHomeResult = req.files["headerfromHome"] ? req.files["headerfromHome"][0] : null;
                  const headerfromAboutResult = req.files["headerfromAbout"] ? req.files["headerfromAbout"][0] : null;
                    const headerfromContactResult = req.files["headerfromContact"] ? req.files["headerfromContact"][0] : null;
                    const headerfromPriceResult = req.files["headerfromPrice"] ? req.files["headerfromPrice"][0] : null;
                    const headerfromMovieResult = req.files["headerfromMovie"] ? req.files["headerfromMovie"][0] : null;
                    const headerfromFilmsResult = req.files["headerfromFilms"] ? req.files["headerfromFilms"][0] : null;
                    const headerfromAnimationsResult = req.files["headerfromAnimations"] ? req.files["headerfromAnimations"][0] : null;
                    const headerfromSeriesResult = req.files["headerfromSeries"] ? req.files["headerfromSeries"][0] : null;
                    const loginimageResult = req.files["loginimage"] ? req.files["loginimage"][0] : null;

                    const headerfromHomeUpload = headerfromHomeResult ? cloudinary.uploader.upload(headerfromHomeResult.path, { folder: "FilmCategory", resource_type: "video" }) : null;
                    const headerfromAboutUpload = headerfromAboutResult ? cloudinary.uploader.upload(headerfromAboutResult.path, { folder: "FilmCategory" }) : null;
                    const headerfromContactUpload = headerfromContactResult ? cloudinary.uploader.upload(headerfromContactResult.path, { folder: "FilmCategory" }) : null;
                    const headerfromPriceUpload = headerfromPriceResult ? cloudinary.uploader.upload(headerfromPriceResult.path, { folder: "FilmCategory" }) : null;
                    const headerfromMovieUpload = headerfromMovieResult ? cloudinary.uploader.upload(headerfromMovieResult.path, { folder: "FilmCategory" }) : null;
                    const headerfromFilmsUpload = headerfromFilmsResult ? cloudinary.uploader.upload(headerfromFilmsResult.path, { folder: "FilmCategory" }) : null;
                    const headerfromAnimationsUpload = headerfromAnimationsResult ? cloudinary.uploader.upload(headerfromAnimationsResult.path, { folder: "FilmCategory" }) : null;
                    const headerfromSeriesUpload = headerfromSeriesResult ? cloudinary.uploader.upload(headerfromSeriesResult.path, { folder: "FilmCategory" }) : null;
                    const loginimageUpload = loginimageResult ? cloudinary.uploader.upload(loginimageResult.path, { folder: "FilmCategory" }) : null;

                    const [headerfromHomeResponse,headerfromAboutResponse,headerfromContactResponse,headerfromPriceResponse,headerfromMovieResponse,headerfromFilmsResponse,headerfromAnimationsResponse,headerfromSeriesResponse,loginimageResponse] = await Promise.all([headerfromHomeUpload,headerfromAboutUpload,headerfromContactUpload,headerfromPriceUpload,headerfromMovieUpload, headerfromFilmsUpload,headerfromAnimationsUpload,headerfromSeriesUpload,loginimageUpload]);

                    updatedİmage.headerfromHome = headerfromHomeResponse ? headerfromHomeResponse.secure_url : updatedİmage.headerfromHome;
                    updatedİmage.headerfromAbout = headerfromAboutResponse ? headerfromAboutResponse.secure_url : updatedİmage.headerfromAbout;
                    updatedİmage.headerfromContact = headerfromContactResponse ? headerfromContactResponse.secure_url : updatedİmage.headerfromContact;
                    updatedİmage.headerfromPrice = headerfromPriceResponse ? headerfromPriceResponse.secure_url : updatedİmage.headerfromPrice;
                    updatedİmage.headerfromMovie = headerfromMovieResponse ? headerfromMovieResponse.secure_url : updatedİmage.headerfromMovie;
                    updatedİmage.headerfromFilms = headerfromFilmsResponse ? headerfromFilmsResponse.secure_url : updatedİmage.headerfromFilms;
                    updatedİmage.headerfromAnimations = headerfromAnimationsResponse ? headerfromAnimationsResponse.secure_url : updatedİmage.headerfromAnimations;
                    updatedİmage.headerfromSeries = headerfromSeriesResponse ? headerfromSeriesResponse.secure_url : updatedİmage.headerfromSeries;
                    updatedİmage.loginimage = loginimageResponse ? loginimageResponse.secure_url : updatedİmage.loginimage;
                    
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