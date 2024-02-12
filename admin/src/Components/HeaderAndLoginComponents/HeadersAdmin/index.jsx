import React from 'react'
import './HeadersAdmin.scss'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';

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
  return (
    <div id='headersAdmin'>
    <h1>Edited Header</h1>
    <div className={`gifFormBox ${openForm ? 'openForm' : ""}`}>
      <form action="" >
        <div className="closeBtn" onClick={handleOpenform}>
          <IoMdClose />
        </div>
        <label htmlFor="">{t("EditedHeader")}</label>
        <input type="text" placeholder={`${t("About")}${t("Images")}...`} />
        <input type="text" placeholder={`${t("Contact")}${t("Images")}...`} />
        <input type="text" placeholder={`${t("Price")}${t("Images")}...`} />
        <input type="text" placeholder={`${t("Movie")}${t("Images")}...`} />
        <input type="text" placeholder={`${t("Film")}${t("Images")}...`} />
        <input type="text" placeholder={`${t("Animation")}${t("Images")}...`} />
        <input type="text" placeholder={`${t("Series")}${t("Images")}...`} />
        <button onClick={console.log("salam")}>{t("Add")}</button>
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
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p>
                <span>{t("About")}</span></td>
            </tr>
            <tr>
              <td><img src={image.headerfromContact} alt="" /></td>
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Contact")}</span></td>

            </tr>
            <tr>
              <td><img src={image.headerfromPrice} alt="" /></td>
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Price")}</span></td>

            </tr>
            <tr>
              <td><img src={image.headerfromMovie} alt="" /></td>
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Movie")}</span></td>

            </tr>
            <tr>
              <td><img src={image.headerfromFilms} alt="" /></td>
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Film")}</span></td>

            </tr>
            <tr>
              <td><img src={image.headerfromAnimations} alt="" /></td>
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Animation")}</span></td>

            </tr>
            <tr>
              <td><img src={image.headerfromSeries} alt="" /></td>
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Series")}</span></td>
            </tr>
            <tr>
              <td><video src={image.headerfromHome} autoPlay muted loop alt="" /></td>
              <td style={{ padding: "0px 20px" }}><p onClick={handleOpenform}><FaRegEdit /></p> <span>{t("Series")}</span></td>
            </tr>



          </>
        ))
      }

    </table>
  </div>
  )
}

export default HeadersAdmin