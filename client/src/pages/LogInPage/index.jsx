import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import './LogInPage.scss'
import NotMeanBox from '../../components/NotMeanBox';
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { BiSolidUserCircle } from "react-icons/bi";
import { TbUserCircle } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function LogInPage() {
  const [leftBox, setleftBox] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [inputValueRegister, setInputValueRegister] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const { t, i18n } = useTranslation();
  const [login, setLogin] = useState([])

  async function getLoginData() {
    const res = await axios.get("http://localhost:3000/headerandlogin")
    setLogin(res.data)
  }

  useEffect(() => {
    getLoginData()
  }, [])

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
    <>
      <NotMeanBox />
      <Helmet>
        <meta charSet="utf-8" />
        <title>LogIn</title>
      </Helmet>
      <div className="loginPage">
        <div className="loginBox">
      {
        login && login.map((item)=>(
          <div className={`changeImageBox ${leftBox ? "changeBox":""}`}>
          <img src={item.loginimage} alt="" />
        </div>
        ))
      }
          <div className="registerChangeBox">
            <h1>{t("RegisterText")}</h1>
            <form action="">
              <div className="upBox">
                <div className="firstBox">
                  <div className="icon"><BiSolidUserCircle /></div>
                <input type="text" placeholder={`${t("First")}`} />
                </div>
                <div className="lastBox">
                <div className="icon"><TbUserCircle /></div>
                <input type="text" placeholder={`${t("Last")}`} />
                </div>

              </div>
              <div className="emailBox">
                <div className="icon"><MdEmail /></div>
              <input type="text" placeholder={`${t("Email")}`} />
              </div>
              <div className="passwordBox">
                <div className="icon"> <RiLockPasswordFill /></div>
                <input   
                 type={showPasswordRegister ? 'text' : 'password'}
        value={inputValueRegister}
        onChange={handleInputChangeRegister} 
        placeholder={`${t("Password")}`} />

                <div className="eyeIcon" onClick={togglePasswordVisibilityRegister}> {showPasswordRegister ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
                  </div>
              </div>
              <button><p>{t("RegisterBtn")}</p><div className="line"></div></button>
            </form>
            <button onClick={handleChangeLeftBox}><p >{t("RegisterBackLogin")}</p><div className="line"></div></button>
          </div>
          <div className="loginChangeBox">
            <h1>{t("LoginText")}</h1>
            <form action="">
              <div className="userNameBox">
                <div className="icon"><FaUserAlt /></div>
                <input type="text" placeholder={`${t("UserName")}`} />
              </div>
              <div className="passwordBox">
                <div className="icon"><RiLockPasswordFill /></div>
                <input 
                  type={showPassword ? 'text' : 'password'}
         value={inputValue}
         onChange={handleInputChange} 
         placeholder={`${t("Password")}`} />
                <div className="eyeIcon" onClick={togglePasswordVisibility}> {showPassword ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
                  </div>
              </div>
              <button><p>{t("LoginBtn")}</p><div className="line"></div></button>
              <div className="googleBox">
                <div className="image">
                <FcGoogle />
                </div>
                <span>{t("ForgotText")}</span>
              </div>
            </form>
            <p>{t("LoginBackRegisterFirstText")}<span onClick={handleChangeLeftBox}> {t("LoginBackRegisterMainText")}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogInPage



