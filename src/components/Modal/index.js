import React from 'react';
import ReactDOM from 'react-dom';

import LineBreak from '../LineBreak/index';

const Modal = props => {
  const {
    modalRef,
    modalIsOpen,
    modalMessage,
    closeModal,
    handleClickOutside,
    bookingSuccess,
  } = props;

  const heading = bookingSuccess ? 'Welcome to White Space' : 'OOPS!';
  const icon = bookingSuccess ? 'success' : 'error';

  return modalIsOpen ? (
    ReactDOM.createPortal(
      <div className="modal" onClick={handleClickOutside}>
        <div className="modal__area" ref={modalRef}>
          <div className="modal__content">
            <div className="modal__header">
              <button type="button" className="modal__close-btn" onClick={closeModal}>
                ×
              </button>
              <h2 className="modal__header-title">{heading}</h2>
              <LineBreak location="inner-modal" />
            </div>
            <div className="modal__body">
              <p className="modal__text">{modalMessage}</p>
              <img src={`/images/${icon}.svg`} alt="" className="modal__success-icon" />
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Modal;
