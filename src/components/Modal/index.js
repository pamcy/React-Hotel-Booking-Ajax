import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import LineBreak from '../LineBreak/index';

class Modal extends Component {
  static propTypes = {};

  modalRef = React.createRef();

  state = {
    modalIsOpen: true,
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleClickOutside = e => {
    const modal = this.modalRef.current;

    if (modal && modal.contains(e.target)) {
      return;
    }

    this.closeModal();
  };

  render() {
    const { modalIsOpen } = this.state;

    return modalIsOpen ? (
      ReactDOM.createPortal(
        <div className="modal" onClick={this.handleClickOutside}>
          <div className="modal__area" ref={this.modalRef}>
            <div className="modal__content">
              <div className="modal__header">
                <button type="button" className="modal__close-btn" onClick={this.closeModal}>
                  ×
                </button>
                <h2 className="modal__header-title">Success</h2>
                <LineBreak location="inner-modal" />
              </div>
              <div className="modal__body">
                <p className="modal__text">
                  Thank you for booking with White Space, your room was booked successfully!
                </p>
                <img src="/images/success.svg" alt="" className="modal__success-icon" />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    ) : (
      <React.Fragment></React.Fragment>
    );
  }
}

export default Modal;

// import React from 'react';
// import PropTypes from 'prop-types';

// import LineBreak from '../LineBreak/index';

// const Modal = props => {
//   return (
//     <div className="modal">
//       <div className="modal__area">
//         <div className="modal__content">
//           <div className="modal__header">
//             <button type="button" className="modal__close-btn">
//               ×
//             </button>
//             <h2 className="modal__header-title">Success</h2>
//             <LineBreak location="inner-modal" />
//           </div>
//           <div className="modal__body">
//             <p className="modal__text">
//               Thank you for booking with White Space, your room was booked successfully!
//             </p>
//             <img src="/images/success.svg" alt="" className="modal__success-icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {};

// export default Modal;
