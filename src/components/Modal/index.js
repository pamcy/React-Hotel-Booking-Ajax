import React from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../LineBreak/index';

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__area">
        <div className="modal__content">
          <div className="modal__header">
            <button type="button" className="modal__close-btn">
              x
            </button>
            <h2 className="modal__header-title">Success</h2>
            <LineBreak location="room-info" />
          </div>
          <div className="modal__body">
            <img src="/images/success.svg" alt="" className="modal__success-icon" />
            <p className="modal__text">GOOD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
