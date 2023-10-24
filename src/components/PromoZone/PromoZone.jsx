import React, { useState } from 'react';
import cn from 'classnames';

import videoBg from '../../assets/video/secondScreen.mp4';
import qr from '../../assets/img/qr.svg';

const PromoZone = () => {
  const [ dis, setDis ] = useState(false);

  const handleForm = () => {
    console.log("OK")
  }

  return (
    <div className="promo">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="promo__videoBg"
      />

      <div className="promo__container">
        {/* Side key board */}
        <div className="promo__side side">
          {/* Header */}
          <div className="side__header">
            Введите ваш номер<br />
            мобильного телефона
          </div>

          {/* Phone number */}
          <div className="side__phoneNumber">
            +7(___)___-__-__
          </div>

          {/* Text */}
          <div className="side__phoneText">
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </div>

          {/* Num frame */}
          <div className="side__numFrame">
            <div className="side__numBtn">1</div>
            <div className="side__numBtn">2</div>
            <div className="side__numBtn">3</div>
            <div className="side__numBtn">4</div>
            <div className="side__numBtn">5</div>
            <div className="side__numBtn">6</div>
            <div className="side__numBtn">7</div>
            <div className="side__numBtn">8</div>
            <div className="side__numBtn">9</div>
            <div className="side__numBtn remove">Стереть</div>
            <div className="side__numBtn">0</div>
          </div>

          {/* Check personal data */}
          <div className="side__check">
            <label>
              <input type="checkbox" />
              <div className="fancyCheck"></div>
              Согласие на обработку<br /> персональных данных
            </label>
          </div>

          {/* Confirm number */}
          <button
            onClick={handleForm}
            className={cn("side__confirmBtn", {
              "dis": !dis
            })}
            disabled={!dis}
          >Подтвердить номер</button>
        </div>

        {/* QR Information */}
        <div className="promo__info">
          <div className="promo__cross">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.06066" y1="1.93934" x2="22.3423" y2="22.2209" stroke="black" strokeWidth="3"/>
              <line x1="1.37342" y1="22.2216" x2="21.655" y2="1.93996" stroke="black" strokeWidth="3"/>
            </svg>
          </div>
          <div className="promo__qr">
            <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
            <div className="promo__qrCode">
              <img src={qr} alt="QR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromoZone;