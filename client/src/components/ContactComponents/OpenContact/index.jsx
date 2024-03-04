import React, { useState } from 'react'
import './OpenContact.scss'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function OpenContact() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function handleSubmit(e) {
    e.preventDefault()

    const serviceId = "service_borshk5"
    const templateId = "template_x8tpksl"
    const publicKey = "C8kifP3xmE15Xpzm_"

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ali",
      message: message

    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      setName('')
      setEmail('')
      setMessage('')
      toast.success('Send Message 😉')
    })
      .catch((error) => {
        console.error("Error send email:", error)
      })

  }
  return (
    <section id='openContact'>
      <div className="leftBox">
        <h1>{t("ContactHeaderText")}</h1>
        <p>{t("ContactMainText")}</p>
        <ul>
          <Link to={'https://www.facebook.com/'} className='link'>
            <li>
              FB.
              <div className="line"></div>
            </li>
          </Link>
          <Link to={'https://vimeo.com/'} className='link'>
            <li>
              VI.
              <div className="line"></div>
            </li>
          </Link>
          <Link to={'https://www.youtube.com/'} className='link'>
            <li>
              YT.
              <div className="line"></div>
            </li>
          </Link>
          <Link to={'https://www.instagram.com/'} className='link'>
            <li>
              IN.
              <div className="line"></div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="rightBox">
        <form action="" onSubmit={handleSubmit}>
          <div className="upBox">
            <input type="text" placeholder={`${t("Name")}`} value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder={`${t("Email")}`} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <textarea type="text" placeholder={`${t("Message")}`} value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type='submit'><p>{t("ContactBtn")}</p><div className="link"></div></button>
        </form>
      </div>
    </section>
  )
}

export default OpenContact