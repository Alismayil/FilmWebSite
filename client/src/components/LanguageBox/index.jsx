import React from 'react'
import './LanguageBox.scss'
import { useTranslation } from 'react-i18next';

function LanguageBox() {
  const { t, i18n } = useTranslation();

  function changeLang(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <div className='languageBox'>
     <div className="language" onClick={()=>changeLang("az")}>
        <img src="https://i.pinimg.com/564x/2b/39/cc/2b39cc56b922b70e7dcf194acb2a1d08.jpg" alt="" />
     </div>
     <div className="language" onClick={()=>changeLang("en")}>
        <img src="https://i.pinimg.com/564x/26/79/04/2679047a33c2f3d3a3ed6e676c65450d.jpg" alt="" />
     </div>
    </div>
  )
}

export default LanguageBox