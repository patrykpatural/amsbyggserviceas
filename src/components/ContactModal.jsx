"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faX } from '@fortawesome/free-solid-svg-icons';
import '../app/globals.css';

function Button({ animationClass, setAnimationClass, openModal }){
  return (
    <button className={`contact-modal-button ${animationClass}`}
            onMouseEnter={() => setAnimationClass('animate-in')}
            onMouseLeave={() => setAnimationClass('animate-out')}
            onClick={openModal}
    >
      <FontAwesomeIcon icon={faPhone} />
    </button>
  );
}

function Modal({ isVisible, closeModal }){
  return (
    <div className={`modal-fullscreen ${isVisible ? "visible" : "hidden"}`} onKeyDown={(e) => {if(e.key === 'Escape') closeModal}}>
      <div className={`contact-modal`}>
        <h3>Skontaktuj się z nami już dziś!</h3>
        <button onClick={closeModal} className='btn contact-modal-close'>
          <FontAwesomeIcon icon={faX} />
        </button>
        <form onSubmit={closeModal}>
          <div className="field-grid">
            <label>Imię<input type="text" placeholder="Twoje imię" /></label>
            <label>Telefon<input type="tel" placeholder="+48 600 000 000" /></label>
          </div>
          <label>E-mail<input type="email" placeholder="mail@przyklad.pl" /></label>
          <label>Lokalizacja<input type="text" placeholder="np. Kraków / woj. małopolskie" /></label>
          <label>Treść wiadomości<textarea rows="4" placeholder="Opisz swój wymarzony projekt domu..."></textarea></label>
          <button type='submit' className="btn btn-primary">Wyślij zapytanie</button>
        </form>
      </div>
    </div>
  );
}

export default function ContactModal() {
  const [animationClass, setAnimationClass] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    if (modalVisibility) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalVisibility]);
  
  return (
    <>
    <Button
      animationClass={animationClass} 
      setAnimationClass={setAnimationClass} 
      openModal={() => setModalVisibility(true)}
    />
    <Modal
      isVisible={modalVisibility}
      closeModal={() => setModalVisibility(false)}
    />
    </>
  );
}