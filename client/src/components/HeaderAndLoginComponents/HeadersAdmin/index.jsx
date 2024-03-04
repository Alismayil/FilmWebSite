import React from 'react'
import './HeadersAdmin.scss'
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

function HeadersAdmin() {
  const [header, setHeader] = useState([])
  const [openForm, setopenForm] = useState(false)
  const { t, i18n } = useTranslation();

  function handleOpenform() {
    setopenForm(!openForm)
  }

  async function getHeaderData() {
    const res = await axios.get("http://localhost:3000/headerandlogin")
    setHeader(res.data)
  }

  useEffect(() => {
    getHeaderData()
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
    <div id='headersAdmin'>
      <h1>Edited Header</h1>
      <div className={`gifFormBox ${openForm ? 'openForm' : ""}`}>
        <form action="" >
          <div className="closeBtn" onClick={handleOpenform}>
            <IoMdClose />
          </div>
          <label htmlFor="">{t("EditedHeader")}</label>
          <label style={{ fontSize: '14px', color: "var(--mode-color-2)" }} htmlFor="">{t("About")} {t("Images")}...</label>
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
          <label style={{ fontSize: '14px', color: "var(--mode-color-2)" }} htmlFor="">{t("Contact")} {t("Images")}...</label>
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
          <label style={{ fontSize: '14px', color: "var(--mode-color-2)" }} htmlFor="">{t("Price")} {t("Images")}...</label>
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
          <label style={{ fontSize: '14px', color: "var(--mode-color-2)" }} htmlFor="">{t("Movie")} {t("Images")}...</label>
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
          <label style={{ fontSize: '14px', color: "var(--mode-color-2)" }} htmlFor="">{t("Film")} {t("Images")}...</label>
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
          <label style={{ fontSize: '14px', color: "var(--mode-color-2)" }} htmlFor="">{t("Animation")} {t("Images")}...</label>
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
          <label style={{ fontSize: '14px', color: "var(--mode-color-2)" }} htmlFor="">{t("Series")} {t("Images")}...</label>
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

          <button>{t("Add")}</button>
        </form>
      </div>
      <table >
        <tr>
          <th>Image</th>
          <th>Edit</th>
        </tr>
        {
          header && header.map((image) => (
            <>
              <tr>
                <td><img src={image.headerfromAbout} alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p>
                  <span>{t("About")}</span></td>
              </tr>
              <tr>
                <td><img src={image.headerfromContact} alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p> <span>{t("Contact")}</span></td>

              </tr>
              <tr>
                <td><img src={image.headerfromPrice} alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p> <span>{t("Price")}</span></td>

              </tr>
              <tr>
                <td><img src={image.headerfromMovie} alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p> <span>{t("Movie")}</span></td>

              </tr>
              <tr>
                <td><img src={image.headerfromFilms} alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p> <span>{t("Film")}</span></td>

              </tr>
              <tr>
                <td><img src={image.headerfromAnimations} alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p> <span>{t("Animation")}</span></td>

              </tr>
              <tr>
                <td><img src={image.headerfromSeries} alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p> <span>{t("Series")}</span></td>
              </tr>
              <tr>
                <td><video src={image.headerfromHome} autoPlay muted loop alt="" /></td>
                <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><CiEdit /></p> <span>{t("Home")}</span></td>
              </tr>



            </>
          ))
        }

      </table>
    </div>
  )
}

export default HeadersAdmin