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

function FilmCategoryAdmin() {
    const [gif, setGif] = useState([])
    const [openForm, setopenForm] = useState(false)
    const { t, i18n } = useTranslation();

    function handleOpenform() {
        setopenForm(!openForm)
    }

    async function getGifData() {
        const res = await axios.get("http://localhost:3000/filmcategory")
        setGif(res.data)
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
                <form action="" >
                    <div className="closeBtn" onClick={handleOpenform}>
                        <IoMdClose />
                    </div>
                    <label htmlFor="">{t("UpdateGif")}</label>
                    <label className='gifLabel' htmlFor="">{`${t("Series")} Gif...`}</label>
                    <Button
                    className='uploadBtn'
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <label className='gifLabel' htmlFor="">{`${t("Animation")} Gif...`}</label>
                    <Button
                    className='uploadBtn'
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <label className='gifLabel' htmlFor="">{`${t("Film")} Gif...`}</label>
                    <Button
                    className='uploadBtn'
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <label className='gifLabel' htmlFor="">{`${t("AllMovie")} Gif...`}</label>
                    <Button
                    className='uploadBtn'
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <button onClick={console.log("salam")}>{t("Add")}</button>
                </form>
            </div>
            <table >
                <tr>
                    <th>Gif</th>
                    <th>{t("Edit")}</th>
                </tr>
                {
                    gif && gif.map((gif) => (
                        <>
                            <tr>
                                <td><img src={gif.seriesgif} alt="" /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p>
                                    <span>{t("Series")}</span></td>
                            </tr>
                            <tr>
                                <td><img src={gif.animationgif} alt="" /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Animation")}</span></td>

                            </tr>
                            <tr>
                                <td><img src={gif.filmgif} alt="" /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Film")}</span></td>

                            </tr>
                            <tr>
                                <td><img src={gif.allmoviegif} alt="" /></td>
                                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("AllMovie")}</span></td>

                            </tr>

                        </>
                    ))
                }

            </table>
        </section>
    )
}

export default FilmCategoryAdmin