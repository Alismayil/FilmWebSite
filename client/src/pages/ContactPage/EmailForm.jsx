import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

function EmailForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const serviceId="service_borshk5"
        const templateId="template_x8tpksl"
const publicKey="C8kifP3xmE15Xpzm_"
        
const templateParams={
    from_name:name,
    from_email:email,
    to_name:"Ali",
    message:message

}

emailjs.send(serviceId, templateId , templateParams, publicKey).then((response)=>{
    setEmail('')
    setMessage('')
    setMessage('')
})
.catch((error)=>{
    console.error("Error send email:", error)
})

    }



  return (
   <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <textarea cols="30" rows="10" type="message" placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
    <button type='submit'>Send</button>
   </form>
  )
}

export default EmailForm