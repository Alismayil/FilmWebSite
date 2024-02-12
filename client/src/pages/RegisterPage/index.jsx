import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiSolidUserCircle } from "react-icons/bi";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbUserCircle } from "react-icons/tb";
import './RegisterPage.scss';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserContext';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function RegisterPage({leftBox,setleftBox}) {
  const [inputValue, setInputValue] = useState('');
  const [inputValueRegister, setInputValueRegister] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const { t, i18n } = useTranslation();
  const [login, setLogin] = useState([])

  const { token, setUser, setToken } = useContext(userContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleChange(e, handleChanger) {
    e.preventDefault();
    handleChanger(e.target.value);

  }

  async function handleSubmitRegister(e) {
    e.preventDefault();
    if (userName.length === 0 || password.length === 0) {
      alert('imput must not be empty')
      return
    }
   try {
    const res = await axios.post("http://localhost:3000/register", {
      username: userName,
      password: password,
      email: email,
    });

    const token = res.data;
    const decoded = jwtDecode(token);
    setUser(decoded)
    setToken(token)
    navigate("/movies");
   } catch (error) {
    toast.error("Bütün iniputları doldur")
    
   }
  }



  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChangeRegister = (event) => {
    setInputValueRegister(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibilityRegister = () => {
    setShowPasswordRegister(!showPasswordRegister);
  };


  function handleChangeLeftBox() {
    setleftBox(!leftBox)
  }

  function handleEyeBox() {
    seteyeCursor(!eyeCursor)
  }
  return (
          <div className="registerChangeBox">
            <h1>{t("RegisterText")}</h1>
            <form action="" onSubmit={handleSubmitRegister}>
              <div className="upBox">
                <div className="firstBox" onChange={(e) => handleChange(e, setUserName)} >
                  <div className="icon"><BiSolidUserCircle /></div>
                  <input type="text" placeholder={`${t("UserName")}...`} />
                </div>
                

              </div>
              <div className="emailBox">
                <div className="icon"><MdEmail /></div>
                <input type="text" placeholder={`${t("Email")}`} onChange={(e) => handleChange(e, setEmail)} />
              </div>
              <div className="passwordBox">
                <div className="icon"> <RiLockPasswordFill /></div>
                <input
                  type={showPasswordRegister ? 'text' : 'password'}
                  value={inputValueRegister}
                  onChange={(e) => {
                    handleInputChangeRegister(e);
                    setPassword(e.target.value);
                  }}
                  placeholder={`${t("Password")}`}
                />


                <div className="eyeIcon" onClick={togglePasswordVisibilityRegister}> {showPasswordRegister ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
                </div>
              </div>
              <button type="submit"><p>{t("RegisterBtn")}</p><div className="line"></div></button>
            </form>
            <button onClick={handleChangeLeftBox}><p >{t("RegisterBackLogin")}</p><div className="line"></div></button>
          </div>

  )
}

export default RegisterPage