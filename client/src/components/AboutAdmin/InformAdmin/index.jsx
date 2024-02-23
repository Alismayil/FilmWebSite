import React, { useContext } from 'react'
import './InformAdmin.scss'
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineDelete } from "react-icons/ai";
import { userContext } from '../../../context/UserContext';

function InformAdmin() {
    const [inform, setInform] = useState([])
    const [openForm, setopenForm] = useState(false)
    const { t, i18n } = useTranslation();
    const { token } = useContext(userContext)

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

    function handleOpenform() {
        setopenForm(!openForm)
    }

    async function getInformData() {
        const res = await axios.get("http://localhost:3000/aboutinformsection")
        setInform(res.data)
    }

    async function handleDelete(id, token) {
        try {
            await axios.delete(`http://localhost:3000/aboutinformsection/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            toast.success(`İnform Deleted`)
            getHeaderData()
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

    useEffect(() => {
        getInformData()
    }, [])

    return (
        <section id='informAdmin'>
            <h1>{t("EditedInform")}</h1>
            <table>
                <tr>
                    <th>{t("Image")}</th>
                    <th>{t("Comment")}</th>
                    <th>{t("Says")}</th>
                    <th>{t("Job")}</th>
                    <th>Delete</th>
                </tr>
                {
                    inform && inform.map((inform) => (
                        <tr>
                            <td>
                                <img src={inform.image} alt="" />
                            </td>
                            <td><p>{inform.comment}</p></td>
                            <td><p>{inform.says}</p></td>
                            <td><p>{inform.job}</p></td>
                            <td>
                            <button className='deleteBtn' onClick={() => handleDelete(item._id, token)}><AiOutlineDelete /></button>
                                </td>
                        </tr>
                    ))
                }
            </table>

            <div className={`informFormBox ${openForm ? "openForm" : ""}`}>
                <form action="">
                    <div className="closeBtn" onClick={handleOpenform}>
                        <IoMdClose />
                    </div>
                    <label htmlFor="">{t("UpdateInform")}</label>
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
                    <input type="text" placeholder={`${t("Comment")}...`} />
                    <input type="text" placeholder={`${t("Says")}...`} />
                    <input type="text" placeholder={`${t("Job")}...`} />
                    <button>{t("Add")}</button>
                </form>
            </div>
        </section>
    )
}

export default InformAdmin