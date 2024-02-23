import './OpenSignIn.scss'
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

function OpenSignIn() {
  const { user } = useContext(userContext);
  const [leftBox, setleftBox] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [inputValueRegister, setInputValueRegister] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const { t, i18n } = useTranslation();
  const [login, setLogin] = useState([])
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
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)

    setloading(true)
  }, [])


  return (
    <div className='openSignIn'>
      <h1> Welcome Admin</h1>
      <form action=""  onSubmit={handleSubmitLogin}>

        <input type="text" onChange={(e) => handleChange(e, setUserName)} placeholder='UserName...' />
        <input type="text" onChange={(e) => handleChange(e, setPassword)} placeholder='Pass...' />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default OpenSignIn