import React from 'react'
import './InformAdmin.scss'
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';

function InformAdmin() {
    const [inform, setInform] = useState([])
    const [openForm, setopenForm] = useState(false)
    const { t, i18n } = useTranslation();

    function handleOpenform() {
        setopenForm(!openForm)
    }

    async function getInformData() {
        const res = await axios.get("http://localhost:3000/aboutinformsection")
        setInform(res.data)
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
                    <th>{t("Edit")}</th>
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
                            <td><span onClick={handleOpenform}><FaRegEdit /></span></td>
                        </tr>
                    ))
                }
            </table>

    <div className={`informFormBox ${openForm ?"openForm":""}`}>
    <form action="">
                <div className="closeBtn" onClick={handleOpenform}>
                    <IoMdClose />
                </div>
                <label htmlFor="">{t("UpdateInform")}</label>
                <input type="text" placeholder={`${t("Image")}...`} />
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