import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from 'react';
import './OpenSignIn.scss';
import { useTranslation } from 'react-i18next';
import { setCookie } from '../../../helpers/helpers';
import toast from 'react-hot-toast';
import axios from "axios"
import { userContext } from "../../../../client/src/context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function OpenSignIn() {
  const [leftBox, setleftBox] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [inputValueRegister, setInputValueRegister] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const { t, i18n } = useTranslation();
  const [login, setLogin] = useState([])
  const { token, setUser, setToken, user } = useContext(userContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  async function handleSubmitLogin(e) {
    e.preventDefault();
    if (userName.length === 0 || password.length === 0) {
      toast(`${t("PleaseEntered")}`, {
        icon: '🙏',
      });
      return
    }



    try {
      const res = await axios.post("http://localhost:3000/login", {
        username: userName,
        password: password,

      });

      const token = res.data;
      const decoded = jwtDecode(token);
      setUser(decoded)
      setToken(token)

      
      
      setCookie('token', token)
      navigate("/home");
     

    } catch (error) {
      console.log(error.message);
      if (error.message ==="Request failed with status code 500") {
        alert("sefdi")
        
        return
      }
     
      // res.status === 500 ? alert("sefdi") : alert("duzdu")
      // toast.error(`${t("NoSuchUser")}`)
      // setleftBox(!leftBox)
      // res.status=== "Internal Server Error" ? alert("vay"):alert("islemir")
      return
    }
  }

  function handleChange(e, handleChanger) {
    e.preventDefault();
    handleChanger(e.target.value);
  }

  async function getLoginData() {
    const res = await axios.get("http://localhost:3000/headerandlogin")
    setLogin(res.data)
  }
  useEffect(() => {
    getLoginData()
  }, [])




  return (
    <div className='openSignIn'>
      <h1> Welcome Admin</h1>
      <form action="" onSubmit={handleSubmitLogin}>
        <input type="text" onChange={(e) => handleChange(e, setUserName)} placeholder='UserName...' />
        <input type="text" onChange={(e) => handleChange(e, setPassword)} placeholder='Pass...' />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default OpenSignIn