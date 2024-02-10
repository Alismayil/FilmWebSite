import React from 'react'
import './MostPopular.scss'
import image1 from '../../../../image/pandaa.jpg'
import { useTranslation } from 'react-i18next';
//img 900x500
function MostPopular() {
  const { t, i18n } = useTranslation();

  return (
    <section id='mostPopular'>
<div className="upBox">
<p><h1>{t("MostPopularHead")}</h1>{t("MostPopularMain")}</p>
</div>
<div className="downBox">
<div className="cart">
<div className="imgBox">
<img src={image1} alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://c4.wallpaperflare.com/wallpaper/191/419/670/sherlock-holmes-sherlock-actor-benedict-cumberbatch-wallpaper-preview.jpg" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/02/h1-port-list-1.jpg" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://www.geekgirlauthority.com/wp-content/uploads/2020/08/Tenet_Cover-1200x640.jpg" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://render.fineartamerica.com/images/rendered/default/poster/8/4.5/break/images/artworkimages/medium/3/kung-fu-panda-3-animation-po-logo-thelma-mackellar.jpg" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h1-port-list-5.jpg" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h1-port-list-5.jpg" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2911733/5910533/MOVIB93090__21543.1679564493.jpg?c=2" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>
<div className="cart">
<div className="imgBox">
<img src="https://c4.wallpaperflare.com/wallpaper/335/411/593/daredevil-charlie-cox-netflix-wallpaper-preview.jpg" alt="" />
<div className="hoverBox">
    <h1>DSFGVSDHB</h1>
    <p>adrama</p>
</div>
</div>
</div>

</div>
    </section>
  )
}

export default MostPopular