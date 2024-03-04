
import React from 'react'
import './LoginAdmin.scss'
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

function LoginAdmin() {
    const [header, setHeader] = useState([])
    const [openForm, setopenForm] = useState(false)
    const { t, i18n } = useTranslation();


    const AddTeam = () => {
      async function addTeam(values) {
        try {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("position", values.position);
          formData.append("image", values.image);
    
          const res = await axios.post("http://localhost:5000/team", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
    
          toast.success("Successfully added!");
        } catch (error) {
          console.error("Error adding Spa Category:", error);
          toast.error("Failed to add Spa Category");
        }
      }

    }
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
    <div id='loginAdmin'>
    <h1>{t("EditedLogin")}</h1>
    <div className={`gifFormBox ${openForm ? 'openForm' : ""}`}>
      <form action="" >
        <div className="closeBtn" onClick={handleOpenform}>
          <IoMdClose />
        </div>
        <label htmlFor="">{t("UpdateImage")}</label>
        <label style={{ fontSize: '14px' , color:"var(--mode-color-2)"}} htmlFor="">{t("Login")} {t("Images")}...</label>
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
        <th style={{width:'150px'}}>{t("Image")}</th>
        <th style={{width:'80px'}}>{t("Edit")}</th>
      </tr>
      {
        header && header.map((image) => (
          <>
            <tr>
              <td style={{width:'150px', height:"150px"}}><img src={image.loginimage}  alt="" /></td>
              <td style={{ padding: "0px 20px", width:'80px', height:"150px" }}><p onClick={handleOpenform}><CiEdit /></p>
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