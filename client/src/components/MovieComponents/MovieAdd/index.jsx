import React, { useState, useEffect } from 'react';
import './MovieAdd.scss';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function MovieAdd() {
    const [movie, setMovie] = useState([]);
    const [openCreateBox, setOpenCreateBox] = useState(false);
    const { t, i18n } = useTranslation();

    async function getReklamData() {
        try {
            const res = await axios.get("http://localhost:3000/moviecart");
            setMovie(res.data);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }

    useEffect(() => {
        getReklamData();
    }, []);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <section id='movieCart'>
            <h1>Movies</h1>
            <div className={`createMovieBox ${openCreateBox ? "openBox" : ''}`}>
                <div className="allMovieCartFormBox">
                    <Formik
                        initialValues={{
                            cartposterimage: '',
                            name: '',
                            writter: '',
                            director: '',
                            moviegif: '',
                            popularcartimage: '',
                            imdbpoint: '',
                            hourtime: '',
                            daytime: '',
                            trailer: '',
                            detailbigimage: '',
                            filmvideo: '',
                            playlistImage: '',
                            movietype: '',
                            categories: ''
                        }}
                        validationSchema={Yup.object({
                            cartposterimage: Yup.mixed().required('Required'),
                            name: Yup.string().required('Required'),
                            writter: Yup.string().required('Required'),
                            director: Yup.string().required('Required'),
                            moviegif: Yup.mixed().required('Required'),
                            popularcartimage: Yup.mixed().required('Required'),
                            imdbpoint: Yup.string().required('Required'),
                            hourtime: Yup.number().required('Required'),
                            daytime: Yup.string().required('Required'),
                            trailer: Yup.string().required('Required'),
                            detailbigimage: Yup.mixed().required('Required'),
                            filmvideo: Yup.mixed().required('Required'),
                            playlistImage: Yup.mixed().required('Required'),
                            movietype: Yup.string().required('Required'),
                            categories: Yup.string().required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            try {
                                const formData = new FormData();
                                formData.append('cartposterimage', values.cartposterimage);
                                formData.append('moviegif', values.moviegif);
                                formData.append('popularcartimage', values.popularcartimage);
                                formData.append('detailbigimage', values.detailbigimage);
                                formData.append('filmvideo', values.filmvideo);
                                formData.append('playlistImage', values.playlistImage);
                                formData.append('name', values.name);
                                formData.append('writter', values.writter);
                                formData.append('director', values.director);
                                formData.append('imdbpoint', values.imdbpoint);
                                formData.append('hourtime', values.hourtime);
                                formData.append('daytime', values.daytime);
                                formData.append('trailer', values.trailer);
                                formData.append('movietype', values.movietype);

                                // Assuming you have a category array in values
                                values.categories.forEach((categoryId, index) => {
                                    formData.append(`category[${index}]`, categoryId);
                                });

                                axios.post("http://localhost:3000/moviecart", formData, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                    },
                                });

                                alert("Movie added successfully!");
                                setSubmitting(false);
                            } catch (error) {
                                console.error('Error adding movie:', error);
                                alert("Failed to add movie!");
                                setSubmitting(false);
                            }
                        }}
                    >
                        <Form style={{ display: 'flex', flexDirection: "column" }}>
                            <label htmlFor="cartposterimage">Cart Poster Image:</label>
                            <Field name="cartposterimage" type="file" />
                            <ErrorMessage name="cartposterimage" component="div" />

                            <label htmlFor="moviegif">Movie Gif:</label>
                            <Field name="moviegif" type="file" />
                            <ErrorMessage name="moviegif" component="div" />

                            <label htmlFor="popularcartimage">Popular Cart Image:</label>
                            <Field name="popularcartimage" type="file" />
                            <ErrorMessage name="popularcartimage" component="div" />

                            <label htmlFor="detailbigimage">Detail Header Image:</label>
                            <Field name="detailbigimage" type="file" />
                            <ErrorMessage name="detailbigimage" component="div" />

                            <label htmlFor="filmvideo">Film:</label>
                            <Field name="filmvideo" type="file" />
                            <ErrorMessage name="filmvideo" component="div" />

                            <label htmlFor="playlistImage">Playlist Image:</label>
                            <Field name="playlistImage" type="file" />
                            <ErrorMessage name="playlistImage" component="div" />

                            <label htmlFor="name">Name:</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="div" />

                            <label htmlFor="writter">Writter:</label>
                            <Field name="writter" type="text" />
                            <ErrorMessage name="writter" component="div" />

                            <label htmlFor="director">Director:</label>
                            <Field name="director" type="text" />
                            <ErrorMessage name="director" component="div" />

                            <label htmlFor="imdbpoint">IMDB Point:</label>
                            <Field name="imdbpoint" type="text" />
                            <ErrorMessage name="imdbpoint" component="div" />

                            <label htmlFor="hourtime">Hour:</label>
                            <Field name="hourtime" type="number" />
                            <ErrorMessage name="hourtime" component="div" />

                            <label htmlFor="daytime">Day:</label>
                            <Field name="daytime" type="text" />
                            <ErrorMessage name="daytime" component="div" />

                            <label htmlFor="trailer">Trailer:</label>
                            <Field name="trailer" type="text" />
                            <ErrorMessage name="trailer" component="div" />

                            <label htmlFor="movietype">Movie Type:</label>
                            <Field name="movietype" type="text" />
                            <ErrorMessage name="movietype" component="div" />

                            {/* Assuming categories is an array */}
                            <Field as="select" name="categories" multiple>
                                <option value="Comedy">Comedy</option>
                                <option value="Horror">Horror</option>
                                <option value="Action">Action</option>
                                {/* Other options */}
                            </Field>

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>

            <div className="searchBox">
                <input type="text" placeholder='Search...' />
                <button onClick={() => setOpenCreateBox(!openCreateBox)}>Create Film</button>
            </div>

            <table className='firstTable'>
                <thead>
                    <tr>
                        <th>Poster</th>
                        <th>Movie Gif</th>
                        <th>Popular Image</th>
                        <th>Detail Header Image</th>
                        <th>Playlist Image</th>
                        <th>Film</th>
                        <th>Name</th>
                        <th>Writter</th>
                        <th>Director</th>
                        <th>IMDB</th>
                        <th>Hour / Day</th>
                        <th>Trailer</th>
                        <th>Type</th>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {movie.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.cartposterimage} alt="" /></td>
                            <td><img src={item.moviegif} alt="" /></td>
                            <td><img src={item.popularcartimage} alt="" /></td>
                            <td><img src={item.detailbigimage} alt="" /></td>
                            <td><img src={item.playlistImage} alt="" /></td>
                            <td><video src={item.filmvideo} loop autoPlay muted /></td>
                            <td>{item.name}</td>
                            <td>{item.writter}</td>
                            <td>{item.director}</td>
                            <td>{item.imdbpoint}</td>
                            <td>{item.hourtime} / {item.daytime}</td>
                            <td><a href={item.trailer}>Watch Trailer</a></td>
                            <td>{item.movietype}</td>
                            <td>
                                {item.categories && item.categories.map(category => (
                                    <div key={category.id}>{category.name}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default MovieAdd;
