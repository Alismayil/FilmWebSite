import React from 'react'
import './PersonalAdmin.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function PersonalAdmin() {
  const [personal, setPersonal] = useState([])
  const [openForm, setopenForm] = useState(false)
  const { t, i18n } = useTranslation();

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
  async function getPersonalData() {
    const res = await axios.get("http://localhost:3000/personal")
    setPersonal(res.data)
  }

  useEffect(() => {
    getPersonalData()
  }, [])
  return (
    <section id='personalAdmin'>
      <h1>{t("EditedPersonal")}</h1>
      <table >
        <tr>
          <th style={{ width: "200px" }}>{t("Image")}</th>
          <th>{t("Says")}</th>
          <th>{t("Job")}</th>
          <th>{t("Edit")}</th>
        </tr>
        {
          personal && personal.map((personal) => (
            <tr>
              <td style={{ width: "200px", padding: "0px" }}>
                <img src={personal.image} alt="" />
              </td>
              <td><p>{personal.name}</p></td>
              <td><p>{personal.job}</p></td>
              <td><span onClick={handleOpenform}><FaRegEdit /></span></td>
            </tr>
          ))
        }
      </table>
      <div className={`personalFormBox ${openForm ? 'openForm' : ""}`}>
        <form action="">
          <div className="closeBtn" onClick={handleOpenform}>
            <IoMdClose />
          </div>
          <label htmlFor="">{t("UpdatePersonal")}</label>
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
          <input type="text" placeholder={`${t("Says")}...`} />
          <input type="text" placeholder={`${t("Job")}...`} />
          <button>{t("Add")}</button>
        </form>
      </div>
    </section>
  )
}

export default PersonalAdmin

// placeholder={`${t("Image")}...`}