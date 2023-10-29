import { Link } from 'react-router-dom';

import videoBg from '../../assets/video/secondScreen.mp4';
import qr from '../../assets/img/qr.svg';

const FinalScreen = () => {
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
          <div className="side__final">
            ЗАЯВКА <br />ПРИНЯТА
            <p>Держите телефон под рукой. <br />Скоро с Вами свяжется наш менеджер. </p>
          </div>
        </div>

        {/* QR Information */}
        <div className="promo__info">
          <Link to="/" className="promo__cross">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line className="promo__svgLine" x1="2.06066" y1="1.93934" x2="22.3423" y2="22.2209" stroke="black" strokeWidth="3"/>
              <line className="promo__svgLine" x1="1.37342" y1="22.2216" x2="21.655" y2="1.93996" stroke="black" strokeWidth="3"/>
            </svg>
          </Link>
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

export default FinalScreen;