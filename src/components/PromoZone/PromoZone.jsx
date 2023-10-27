import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import videoBg from '../../assets/video/secondScreen.mp4';
import qr from '../../assets/img/qr.svg';

const PromoZone = () => {
  const [ dis, setDis ] = useState(false);
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const focusRef = useRef();

  let formatedNumber = "";
  const firstSymbol = phoneNumber[0] == "8" ? "8" : "+7";

  const numbersValue = (input) => {
    // return input.value.replace(/\D/g, '');
    return input.value.replace(/[a-zA-Z]\D/g, '');
  }

  // Handle key pad
  const handleKeyPad = (e) => {
    const test = e.target.value;


    setPhoneNumber(test);
  }

  // Handle num pad
  const handleNumPad = (e) => {
    const numBtn = e.target.closest('div[class="side__numBtn"]');
    const numFrame = e.currentTarget.contains(numBtn);
    const keyNumber = e.target.dataset.num;

    if (!numBtn) return;
    if (!numFrame) return;

    setPhoneNumber(phoneNumber + keyNumber);
  }

  const removePhoneNumber = (e) => {
    setPhoneNumber("");
    focusRef.current.focus();
  }

  useEffect(() => {
    if (phoneNumber && phoneNumber[0].match(/[^+0-9]/g)) {
      setPhoneNumber("");
    }

    if (["7", "8", "9"].includes(phoneNumber[0])) {
      if (phoneNumber[0] == "9") {
        formatedNumber += firstSymbol + " (" + phoneNumber;
        setPhoneNumber(formatedNumber);
      } else if (phoneNumber[0] == "7") {
        formatedNumber += firstSymbol + " (" + phoneNumber.slice(1, 4);
        setPhoneNumber(formatedNumber);
      } else if (phoneNumber[0] == "8") {
        formatedNumber += phoneNumber;
        setPhoneNumber(formatedNumber);
      } else {
        return;
      };
    }

    if (phoneNumber[0] == "8" && phoneNumber.length === 1) {
      setPhoneNumber(phoneNumber + " (");
    }

    if (phoneNumber[0] == "+" && phoneNumber.length === 7) {
      setPhoneNumber(phoneNumber + ") ");
    } else if (phoneNumber[0] == "8" && phoneNumber.length === 6) {
      setPhoneNumber(phoneNumber + ") ");
    }

    if (phoneNumber[0] == "+" && phoneNumber.length === 12) {
      setPhoneNumber(phoneNumber + "-");
    } else if (phoneNumber[0] == "8" && phoneNumber.length === 11) {
      setPhoneNumber(phoneNumber + "-");
    }

    if (phoneNumber[0] == "+" && phoneNumber.length === 15) {
      setPhoneNumber(phoneNumber + "-");
    } else if (phoneNumber[0] == "8" && phoneNumber.length === 14) {
      setPhoneNumber(phoneNumber + "-");
    }

    if (phoneNumber[0] == "+" && phoneNumber.length > 18) {
      setPhoneNumber(phoneNumber.slice(0, 18));
    } else if (phoneNumber[0] == "8" && phoneNumber.length > 17) {
      setPhoneNumber(phoneNumber.slice(0, 17));
    }
  }, [phoneNumber]);   



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
            <div className="side__input">
              <input
                ref={focusRef}
                autoFocus
                type="tel"
                value={phoneNumber}
                onChange={handleKeyPad}
                maxLength={18}
                placeholder='+7(___)___-__-__'
              />
              <span onClick={removePhoneNumber}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="2.06066" y1="1.93934" x2="22.3423" y2="22.2209" stroke="black" strokeWidth="3"/>
                  <line x1="1.37342" y1="22.2216" x2="21.655" y2="1.93996" stroke="black" strokeWidth="3"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="side__phoneText">
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </div>

          {/* Num frame */}
          <div onClick={handleNumPad} className="side__numFrame">
            <div className="side__numBtn" data-num="1">1</div>
            <div className="side__numBtn" data-num="2">2</div>
            <div className="side__numBtn" data-num="3">3</div>
            <div className="side__numBtn" data-num="4">4</div>
            <div className="side__numBtn" data-num="5">5</div>
            <div className="side__numBtn" data-num="6">6</div>
            <div className="side__numBtn" data-num="7">7</div>
            <div className="side__numBtn" data-num="8">8</div>
            <div className="side__numBtn" data-num="9">9</div>
            <div onClick={removePhoneNumber} className="side__numBtn remove">Стереть</div>
            <div className="side__numBtn" data-num="0">0</div>
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

export default PromoZone;