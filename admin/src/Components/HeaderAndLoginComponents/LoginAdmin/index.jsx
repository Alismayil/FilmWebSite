
import React from 'react'
import './LoginAdmin.scss'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';

function LoginAdmin() {
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
    <div id='loginAdmin'>
    <h1>{t("EditedLogin")}</h1>
    <div className={`gifFormBox ${openForm ? 'openForm' : ""}`}>
      <form action="" >
        <div className="closeBtn" onClick={handleOpenform}>
          <IoMdClose />
        </div>
        <label htmlFor="">{t("UpdateImage")}</label>
        <label style={{ fontSize: '14px' , color:"var(--mode-color-2)"}} htmlFor="">{t("Login")} {t("Images")}...</label>
          <input type="file" id="myfile" name="myfile" multiple class="hidden-file-input" />
      
        <button onClick={console.log("salam")}>{t("Add")}</button>
      </form>
    </div>
    <table >
      <tr>
        <th style={{width:'150px'}}>{t("Image")}</th>
        <th style={{width:'80px'}}>{t("Edit")}</th>
      </tr>
      {
        header && header.map((image) => (
          <>
            <tr>
              <td style={{width:'150px', height:"150px"}}><img src={image.loginimage}  alt="" /></td>
              <td style={{ padding: "0px 20px", width:'80px', height:"150px" }}><p onClick={handleOpenform}><FaRegEdit /></p>
               </td>
            </tr>
          </>
        ))
      }

    </table>
  </div>
  )
}

export default LoginAdmin