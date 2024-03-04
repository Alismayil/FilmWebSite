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
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function RegisterPage({ leftBox, setleftBox }) {
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
      toast.success(`${t("UserCreated")}🎉` )
    } catch (error) {

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

      <Formik
  initialValues={{ username: '', password: '', email: '' }}
  validationSchema={Yup.object({
    username: Yup.string()
      .min(3, `${t("Yournamecannotbelessthanletters")}`)
      .matches(/^[A-Z][a-z]*$/, `${t("Enteryournamecorrectly")}`)
      .required(`${t("Required")}`),
    password: Yup.string()
    .min(5, `${t("Passcannotbelessthanletters")}`)
      .required(`${t("Required")}`),
    email: Yup.string()
    .email(`${t("Invalidemailaddress")}`)
    .required(`${t("Required")}`),
  })}
  onSubmit={async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await axios.post("http://localhost:3000/register", values);
      const token = res.data;
      const decoded = jwtDecode(token);
      setUser(decoded);
      setToken(token);
      resetForm();
      navigate("/movies");
      toast.success('User Created 🎉');
    } catch (error) {
      // toast.error("Bütün inputları doldurun");
    } finally {
      setSubmitting(false);
    }
  }}
>
{({ isSubmitting }) => (
        <Form >
           <div className="upBox">
          <div className="firstBox" onChange={(e) => handleChange(e, setUserName)} >
            <div className="up">
            <div className="icon"><BiSolidUserCircle /></div>
            <Field className='input' name="username" type="text" placeholder={`${t("UserName")}...`}/>
            </div>
          <div className="error"><ErrorMessage name="username" onChange={(e) => handleChange(e, setUserName)} /></div>
          </div>
        </div>
         
        <div className="emailBox">
         <div className="up">
         <div className="icon"><MdEmail /></div>
          <Field className='input' name="email" type="email" placeholder={`${t("Email")}`} />
         </div>
          <div className="error"><ErrorMessage name="email" onChange={(e) => handleChange(e, setEmail)} /></div>
        </div>


        <div className="passwordBox">
    <div className="up">
    <div className="icon"> <RiLockPasswordFill /></div>
          <Field className='input' name="password"  type={showPasswordRegister ? 'text' : 'password'} placeholder={`${t("Password")}...`}/>
          <div className="eyeIcon" onClick={togglePasswordVisibilityRegister}> {showPasswordRegister ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
          </div>
    </div>
          <div className="error"><ErrorMessage name="password" onChange={(e) => handleChange(e, setPassword)}   /></div>
</div>

          


          <button type="submit"><p>{t("RegisterBtn")}</p><div className="line"></div></button>
        </Form>
        )}
      </Formik>


      
      {/* <form action="" onSubmit={handleSubmitRegister}>
       
      
        <div className="passwordBox">
          <div className="icon"> <RiLockPasswordFill /></div>
          <input
            type={showPasswordRegister ? 'text' : 'password'}
            value={inputValueRegister}
            onChange={(e) => {
              handleInputChangeRegister(e);
              setPassword(e.target.value);
            }}
            
          />
          <div className="eyeIcon" onClick={togglePasswordVisibilityRegister}> {showPasswordRegister ? <h5><IoEyeOutline /></h5> : <h5><IoEyeOffOutline /></h5>}
          </div>
        </div>
        <button type="submit"><p>{t("RegisterBtn")}</p><div className="line"></div></button>
      </form> */}


      <button onClick={handleChangeLeftBox}><p >{t("RegisterBackLogin")}</p><div className="line"></div></button>
    </div>

  )
}

export default RegisterPage