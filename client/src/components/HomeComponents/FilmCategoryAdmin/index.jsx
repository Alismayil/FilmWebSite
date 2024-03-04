import React from 'react'
import './FilmCategoryAdmin.scss'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CiEdit } from "react-icons/ci";

function FilmCategoryAdmin() {
    const [gif, setGif] = useState([])
    const [openForm, setOpenForm] = useState(false)
    const { t, i18n } = useTranslation();
    const [seriesgif, setseriesgif] = useState(null)
    const [animationgif, setanimationgif] = useState(null)
    const [filmgif, setfilmgif] = useState(null)
    const [allmoviegif, setallmoviegif] = useState(null)

    function handleChangePutFilm(type, e) {
        const selectedFilmCategory = e.target.files[0]
         if (type === 'filmgif') setfilmgif(selectedFilmCategory)
         getGifData()

    }

    function handleChangePutSeries(type, e) {
        const selectedFilmCategory = e.target.files[0]
        if (type === 'seriesgif') setseriesgif(selectedFilmCategory)
        getGifData()

    }

    function handleChangePutAnimation(type, e) {
        const selectedFilmCategory = e.target.files[0]
         if (type === 'animationgif') setanimationgif(selectedFilmCategory)
         getGifData()

    }

    function handleChangePutMovie(type, e) {
        const selectedFilmCategory = e.target.files[0]
        if (type === 'allmoviegif') setallmoviegif(selectedFilmCategory)
        getGifData()

    }

    async function handlePutFilmCategory(id) {
        try {
            const formData = new FormData()
            formData.append("seriesgif", seriesgif)
            formData.append("animationgif", animationgif)
            formData.append("filmgif", filmgif)
            formData.append("allmoviegif", allmoviegif)

            const res = await axios.put(`http://localhost:3000/filmcategory/${id}`, formData)
            setseriesgif(null)
            setanimationgif(null)
            setfilmgif(null)
            setanimationgif(null)
            getGifData()

        } catch (error) {
            console.error("Error while updating film category:", error)
        }
    }

    function handleOpenForm() {
        setOpenForm(!openForm)
    }

    async function getGifData() {
        try {
            const res = await axios.get("http://localhost:3000/filmcategory")
            setGif(res.data)
        } catch (error) {
            console.error("Error while fetching gif data:", error)
        }
    }

    useEffect(() => {
        getGifData()
    }, [])

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
        <section id='filmCategoryAdmin'>
            <h1>{t("EditedFilmCategory")}</h1>
            <div className={`gifFormBox ${openForm ? 'openForm' : ""}`}>
                <form action="">
                    <div className="closeBtn" onClick={handleOpenForm}>
                        <IoMdClose />
                    </div>
                    <label htmlFor="">{t("UpdateGif")}</label>
                    <label className='gifLabel' htmlFor="">{`${t("Series")} Gif...`}</label>
                    <input type="file" onChange={(e) => handleChangePutSeries('seriesgif', e)} />
                    <label className='gifLabel' htmlFor="">{`${t("Animation")} Gif...`}</label>
                    <input type="file" onChange={(e) => handleChangePutAnimation('animationgif', e)} />
                    <label className='gifLabel' htmlFor="">{`${t("Film")} Gif...`}</label>
                    <input type="file" onChange={(e) => handleChangePutFilm('filmgif', e)} />
                    <label className='gifLabel' htmlFor="">{`${t("AllMovie")} Gif...`}</label>
                    <input type="file" onChange={(e) => handleChangePutMovie('allmoviegif', e)} />
                    <button onClick={() => handlePutFilmCategory(gif.map(item => item._id))}>{t("Add")}</button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Gif</th>
                        <th>{t("Edit")}</th>
                    </tr>
                </thead>
                <tbody>
                    {gif && gif.map((gifItem, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td><img src={gifItem.seriesgif} alt={`${t("Series")} Gif`} /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenForm}><CiEdit /></p>
                                    <span>{t("Series")}</span></td>
                            </tr>
                            <tr>
                                <td><img src={gifItem.animationgif} alt={`${t("Animation")} Gif`} /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenForm}><CiEdit /></p> <span>{t("Animation")}</span></td>
                            </tr>
                            <tr>
                                <td><img src={gifItem.filmgif} alt={`${t("Film")} Gif`} /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenForm}><CiEdit /></p> <span>{t("Film")}</span></td>
                            </tr>
                            <tr>
                                <td><img src={gifItem.allmoviegif} alt={`${t("AllMovie")} Gif`} /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenForm}><CiEdit /></p> <span>{t("AllMovie")}</span></td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default FilmCategoryAdmin
