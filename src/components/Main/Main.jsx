import React from 'react';
import { Link } from 'react-router-dom';

import videoBg from '../../assets/video/videoBg.mp4';
import qr from '../../assets/img/qr.svg';


const Main = () => {
  return (
    <div className="banner">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="videoBg"
      />

      <div className="container">
        <div className="qr">
          <div className="qr__header">
            <p>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО <br />МАЛЫША!<br /> ПОДАРИТЕ ЕМУ СОБАКУ!</p>
          </div>

          <div className="qr__code">
            <div className="qr__codePicture">
              <img src={qr} alt="QR" />
            </div>

            <span>Сканируйте QR-код или нажмите ОК</span>
          </div>

          <Link to="/promo" className="qr__okBtn">OK</Link>
        </div>
      </div>
    </div>
  )
}

export default Main