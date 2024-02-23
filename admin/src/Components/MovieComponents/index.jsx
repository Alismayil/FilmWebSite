import React from 'react'
import './MovieComponents.scss'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect } from 'react';
import axios from 'axios'
import { useTranslation } from 'react-i18next';

function MovieComponents() {
    const [movie, setMovie] = useState([])
    const [openForm, setopenForm] = useState(false)
    const { t, i18n } = useTranslation();
    const [openCreateBox, setopenCreateBox] = useState(false)

    function  handleOpenCreateBox() {
     setopenCreateBox(!openCreateBox)   
    }
    function handleOpenform() {
        setopenForm(!openForm)
    }
    async function getReklamData() {
        const res = await axios.get("http://localhost:3000/moviecart")
        setMovie(res.data)
    }

    useEffect(() => {
        getReklamData()
    }, [])
    const index = 0

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
            <div className={`createMovieBox ${openCreateBox ? "openBox":''}`}>
                <div className="allMovieCartFormBox">
                    <form action="" className='firstForm'>
                        <div className="leftForm">
                            <label htmlFor="">Cart Poster Image :</label>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <label htmlFor="">Movie Gif :</label>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <label htmlFor="">Popular Cart Image :</label>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <label htmlFor="">Detail Header Image :</label>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <label htmlFor="">Playlist Image :</label>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <label htmlFor="">Film :</label>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </div>
                        <div className="rightForm">
                            <input type="text" placeholder='Name...' />
                            <input type="text" placeholder='Writter...' />
                            <input type="text" placeholder='Director...' />
                            <input type="text" placeholder='Imdb Point...' />
                            <input type="text" placeholder='Hour...' />
                            <input type="text" placeholder='Day...' />
                            <input type="text" placeholder='Trailer Link...' />
                            <input type="text" placeholder='Movie Type...' />
                            <select name="" id="">
                                <option value="">Comedy</option>
                                <option value="">Horror</option>
                                <option value="">Action</option>
                                <option value="">Drama</option>
                                <option value="">Romantic</option>
                                <option value="">Adventure</option>
                                <option value="">Fantasy</option>
                                <option value="">Sports</option>
                                <option value="">Musical</option>
                            </select>
                        </div>
                    </form>
                    <button>Send</button>
                </div>
            </div>
            <div className="searchBox">
                <input type="text" placeholder='Search...' />
                <button onClick={handleOpenCreateBox}>Create Film</button>
            </div>
            <table className='firstTable'>

                {
                    movie && movie.map((item) => (
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
    )
}

export default MovieComponents