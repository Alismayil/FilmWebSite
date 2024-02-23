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
    const [search, setSearch] = useState('');

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
                            categories: Yup.array().required('Required'),
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

                                values.categories.forEach((categoryId, index) => {
                                    formData.append(`categories[${index}]`, categoryId);
                                });

                                console.log("values:", values);
                                console.log("formData:", formData);

                                axios.post("http://localhost:3000/moviecart", values, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                    },
                                }).then(response => {
                                    console.log('Movie added successfully:', response.data);
                                    alert("Movie added successfully!");
                                    setSubmitting(false);
                                }).catch(error => {
                                    console.error('Error adding movie:', error);
                                    alert(error.message);
                                    setSubmitting(false);
                                });
                            } catch (error) {
                                console.error('Error adding movie:', error);
                                alert("Failed to add movie!");
                                setSubmitting(false);
                            }
                        }}
                    >
                        <Form style={{ display: 'flex', justifyContent: "center", gap: "60px", alignItems: "center", flexDirection: 'column' }}>
                            <div div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                <div className="rightBox">
                                    <label htmlFor="cartposterimage">Cart Poster Image:</label>
                                    <Field name="cartposterimage" type="file" >
                                        {({ field, form }) => (
                                            <input
                                                id="cartposterimage"
                                                name="cartposterimage"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue('cartposterimage', event.currentTarget.files[0]);
                                                }}
                                            />
                                        )}

                                    </Field>
                                    <ErrorMessage name="cartposterimage" component="div" />


                                    <label htmlFor="moviegif">Movie Gif:</label>
                                    <Field name="moviegif" type="file" >
                                        {({ field, form }) => (
                                            <input
                                                id="moviegif"
                                                name="moviegif"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue('moviegif', event.currentTarget.files[0]);
                                                }}
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="moviegif" component="div" />

                                    <label htmlFor="popularcartimage">Popular Cart Image:</label>
                                    <Field name="popularcartimage" type="file" >
                                        {({ field, form }) => (
                                            <input
                                                id="popularcartimage"
                                                name="popularcartimage"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue('popularcartimage', event.currentTarget.files[0]);
                                                }}
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="popularcartimage" component="div" />

                                    <label htmlFor="detailbigimage">Detail Header Image:</label>
                                    <Field name="detailbigimage" type="file" >
                                        {({ field, form }) => (
                                            <input
                                                id="detailbigimage"
                                                name="detailbigimage"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue('detailbigimage', event.currentTarget.files[0]);
                                                }}
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="detailbigimage" component="div" />

                                    <label htmlFor="filmvideo">Film:</label>
                                    <Field name="filmvideo" type="file" >
                                        {({ field, form }) => (
                                            <input
                                                id="filmvideo"
                                                name="filmvideo"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue('filmvideo', event.currentTarget.files[0]);
                                                }}
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="filmvideo" component="div" />

                                    <label htmlFor="playlistImage">Playlist Image:</label>
                                    <Field name="playlistImage" type="file" >
                                        {({ field, form }) => (
                                            <input
                                                id="playlistImage"
                                                name="playlistImage"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue('playlistImage', event.currentTarget.files[0]);
                                                }}
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="playlistImage" component="div" />
                                </div>

                                <div className="leftBox">
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

                                    <Field as="select" name="categories" multiple>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Horror">Horror</option>
                                        <option value="Action">Action</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Romantic">Romantic</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Musical">Musical</option>
                                    </Field>
                                </div>
                            </div>

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>

            <div className="searchBox">
                <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => setOpenCreateBox(!openCreateBox)}>Create Film</button>
            </div>

            <table className='firstTable'>

                {
                    movie && movie
                        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                        .map((item) => (
                            <>
                                <tr style={{ margin: "50px 0px 10px 0px" }}>
                                    <th style={{ width: '70px' }}>Poster</th>
                                    <th>Movie Gif</th>
                                    <th style={{ width: '170px' }}>Popular Image</th>
                                    <th style={{ width: '250px' }}>Detail Header Image</th>
                                    <th>Playlist Image</th>
                                    <th>Film </th>
                                </tr>
                                <tr>
                                    <td style={{ width: '70px' }}><img style={{ transform: "scale(1)", aspectRatio: "1/2" }} src={item.cartposterimage} alt="" /></td>
                                    <td><img src={item.moviegif} alt="" /></td>
                                    <td style={{ width: '170px' }}><img style={{ aspectRatio: "1/0.6" }} src={item.popularcartimage} alt="" /></td>
                                    <td style={{ width: '250px' }}><img style={{ aspectRatio: "1/0.4" }} src={item.detailbigimage} alt="" /></td>
                                    <td><img src={item.playlistImage} alt="" /></td>
                                    <td><video src={item.filmvideo} loop={true} autoPlay={true} muted={true}></video></td>
                                </tr>

                                <tr>
                                    <th>Name</th>
                                    <th>Writter</th>
                                    <th>Director</th>
                                    <th style={{ width: "70px" }}>IMDB</th>
                                    <th>Hour / Day</th>
                                    <th>Trailer</th>
                                    <th>Type</th>
                                    <th>Categories</th>
                                </tr>
                                <tr style={{ margin: "10px 0px 50px 0px" }}>
                                    <td>{item.name}</td>
                                    <td>{item.writter}</td>
                                    <td>{item.director}</td>
                                    <td style={{ width: "70px" }}>{item.imdbpoint}</td>
                                    <td style={{ padding: "0px 10px" }}>{item.hourtime} / {item.daytime}</td>
                                    <td><p>{item.trailer}</p></td>
                                    <td>{item.movietype}</td>
                                    <td style={{ flexDirection: "column" }}>{item.categories &&
                                        item.categories.map((x) => <div>{x.category}</div>)}</td>
                                </tr>

                                <hr />

                            </>
                        ))
                }
                <tr>

                </tr>
            </table>

        </section>
    );
}

export default MovieAdd;
