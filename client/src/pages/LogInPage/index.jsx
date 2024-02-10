import React, { useState } from 'react'
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

function LogInPage() {
  const [leftBox, setleftBox] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [inputValueRegister, setInputValueRegister] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  
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
          <div className={`changeImageBox ${leftBox ? "changeBox":""}`}>
            <img src="https://i.pinimg.com/564x/d9/e5/39/d9e5397d7d084c4009889dfcdf0b5758.jpg" alt="" />
          </div>
          <div className="registerChangeBox">
            <h1>User Create</h1>
            <form action="">
              <div className="upBox">
                <div className="firstBox">
                  <div className="icon"><BiSolidUserCircle /></div>
                <input type="text" placeholder='First' />
                </div>
                <div className="lastBox">
                <div className="icon"><TbUserCircle /></div>
                <input type="text" placeholder='Last' />
                </div>

              </div>
              <div className="emailBox">
                <div className="icon"><MdEmail /></div>
              <input type="text" placeholder='Email' />
              </div>
              <div className="passwordBox">
                <div className="icon"> <RiLockPasswordFill /></div>
                <input   
                 type={showPasswordRegister ? 'text' : 'password'}
        value={inputValueRegister}
        onChange={handleInputChangeRegister} 
        placeholder='Password' />

                <div className="eyeIcon" onClick={togglePasswordVisibilityRegister}> {showPasswordRegister ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
                  </div>
              </div>
              <button><p>Create</p><div className="line"></div></button>
            </form>
            <button onClick={handleChangeLeftBox}><p >Back To Login</p><div className="line"></div></button>
          </div>
          <div className="loginChangeBox">
            <h1>Welcome</h1>
            <form action="">
              <div className="userNameBox">
                <div className="icon"><FaUserAlt /></div>
                <input type="text" placeholder='UserName' />
              </div>
              <div className="passwordBox">
                <div className="icon"><RiLockPasswordFill /></div>
                <input 
                  type={showPassword ? 'text' : 'password'}
         value={inputValue}
         onChange={handleInputChange} 
         placeholder='Password' />
                <div className="eyeIcon" onClick={togglePasswordVisibility}> {showPassword ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
                  </div>
              </div>
              <button><p>Log in</p><div className="line"></div></button>
              <div className="googleBox">
                <div className="image">
                <FcGoogle />
                </div>
                <span>Forgot password</span>
              </div>
            </form>
            <p>Don't have account? <span onClick={handleChangeLeftBox}>Register</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogInPage