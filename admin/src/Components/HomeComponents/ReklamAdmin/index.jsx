import React from 'react'
import './ReklamAdmin.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ReklamAdmin() {
    const [reklam, setReklam] = useState([])
    const [openForm, setopenForm] = useState(false)
    const { t, i18n } = useTranslation();

    function handleOpenform() {
        setopenForm(!openForm)
    }
    async function getReklamData() {
        const res = await axios.get("http://localhost:3000/reklam")
        setReklam(res.data)
    }

    useEffect(() => {
        getReklamData()
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
        <section id='reklamAdmin'>
            <h1>{t("EditedReklamPoster")}</h1>
            {
                reklam && reklam.map((reklam) => (
                    <table>
                        <tr>
                            <th style={{ height: "200px", flexDirection: 'column' }}>
                                <p>{t("Poster")}</p>
                                <img src={reklam.image} alt="" />
                            </th>

                        </tr>
                        <tr>
                            <th>
                                <p>{t("Name")}:</p>
                                <span>{reklam.name}</span>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <p>{t("Writter")}:</p>
                                <span>{reklam.writter}</span>
                            </th>

                        </tr>
                        <tr>
                            <th>
                                <p>{t("Directed")}:</p>
                                <span>{reklam.directed}</span>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <p>{t("Studio")}:</p>
                                <span>{reklam.studio}</span>
                            </th>

                        </tr>
                        <tr>
                            <th>
                                <p>{t("Time")}:</p>
                                <span>{reklam.time}</span>
                            </th>

                        </tr>
                        <button onClick={handleOpenform}>{t("Edit")}</button>
                    </table>
                ))
            }

            <div className={`reklamFormBox ${openForm ? "openForm" : ""}`}>
                <form action="">
                    <div className="closeBtn" onClick={handleOpenform}>
                        <IoMdClose />
                    </div>
                    <label htmlFor="">{t("UpdateReklam")}</label>
                    <label htmlFor="" className='posterLabel'>{`${t("Poster")}...`}</label>
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
                    <input type="text" placeholder={`${t("Name")}...`} />
                    <input type="text" placeholder={`${t("Writter")}...`} />
                    <input type="text" placeholder={`${t("Directed")}...`} />
                    <input type="text" placeholder={`${t("Studio")}...`} />
                    <input type="text" placeholder={`${t("Time")}...`} />
                    <button>{t("Add")}</button>
                </form>
            </div>
        </section>
    )
}

export default ReklamAdmin