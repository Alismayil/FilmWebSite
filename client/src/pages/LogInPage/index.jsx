import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { setCookie } from '../../../helpers/helpers';
import NotMeanBox from '../../components/NotMeanBox';
import { userContext } from '../../context/UserContext';
import RegisterPage from '../RegisterPage';
import toast, { Toaster } from 'react-hot-toast';

import './LogInPage.scss';
import { PlaylistContext } from '../../context/PlaylistContext';
import Loading from '../../components/Loading';

function LogInPage({ setloading, loading }) {
  const { user } = useContext(userContext);
  const [leftBox, setleftBox] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [inputValueRegister, setInputValueRegister] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const { t, i18n } = useTranslation();
  const [login, setLogin] = useState([])
  const [load, setload] = useState(true)



  // -----------------------------
  const { token, setUser, setToken } = useContext(userContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { fetchAllPlaylist } = useContext(PlaylistContext)

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
      fetchAllPlaylist()

      navigate("/movies");
      setCookie('token', token)
    } catch (error) {
      toast.error(`${t("NoSuchUser")}`)
      setleftBox(!leftBox)
      return
    }
  }



  function handleChange(e, handleChanger) {
    e.preventDefault();
    handleChanger(e.target.value);
  }
  // ---------------------------------
  async function getLoginData() {
    const res = await axios.get("http://localhost:3000/headerandlogin")
    setLogin(res.data)
    setload(false)

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
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)

    setloading(true)
  }, [])

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <NotMeanBox />
            <Helmet>
              <meta charSet="utf-8" />
              <title>LogIn</title>
            </Helmet>
            <div className="loginPage">
              <div className="loginBox">
              {
                load ?
                <div className='notMeanLogin'>
                  <div class="loader"></div>
                </div>
                 :
                <>
                  {
                  login && login.map((item) => (
                    <div className={`changeImageBox ${leftBox ? "changeBox" : ""}`}>
                      <img src={item.loginimage} alt="" />
                    </div>
                  ))
                }
                </>
              }
              
                <RegisterPage leftBox={leftBox} setleftBox={setleftBox} />
                <div className="loginChangeBox">
                  <h1>{t("LoginText")}</h1>
                  <form action="" onSubmit={handleSubmitLogin}>
                    <div className="userNameBox">
                      <div className="icon"><FaUserAlt /></div>
                      <input autoComplete="off" type="text" placeholder={`${t("UserName")}`} onChange={(e) => handleChange(e, setUserName)} />
                    </div>
                    <div className="passwordBox">
                      <div className="icon"><RiLockPasswordFill /></div>

                      <input autoComplete="off"
                        type={showPassword ? 'text' : 'password'}
                        value={inputValue}
                        onChange={(e) => {
                          handleInputChange(e);
                          setPassword(e.target.value);
                        }}
                        placeholder={`${t("Password")}`}
                      />

                      <div className="eyeIcon" onClick={togglePasswordVisibility}> {showPassword ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
                      </div>
                    </div>
                    <button type="submit"><p>{t("LoginBtn")}</p><div className="line"></div></button>
                    <div className="googleBox" style={{display:'none'}}> 
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
    </>
  )
}

export default LogInPage



