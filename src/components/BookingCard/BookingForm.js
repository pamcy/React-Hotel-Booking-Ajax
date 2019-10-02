import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, eachDayOfInterval, format, parseISO } from 'date-fns';

import TotalAmount from './TotalAmount';
import Modal from '../Modal/index';
import { apiPostBookingData } from '../../api';

import 'react-datepicker/dist/react-datepicker.css';

export class BookingForm extends Component {
  static propTypes = {};

  formRef = React.createRef();

  modalRef = React.createRef();

  state = {
    formData: {
      guestname: '',
      tel: '',
      startDate: null,
      endDate: null,
    },
    errorMessages: {},
    modalIsOpen: false,
    modalMessage: '',
    bookingSuccess: false,
  };

  setNameAndTel = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  setStartDate = (startDate = this.state.formData.startDate) => {
    let endDate = '';

    if (startDate > this.state.formData.endDate) {
      endDate = addDays(startDate, 1);
    }

    const formData = {
      ...this.state.formData,
      startDate,
      endDate,
    };

    this.setState({ formData });
  };

  setEndDate = (endDate = this.state.formData.endDate) => {
    const formData = {
      ...this.state.formData,
      endDate,
    };

    this.setState({ formData });
  };

  excludeDates = () => {
    const { bookingData } = this.props;

    return bookingData.map(data => parseISO(data.date));
  };

  validateForm = () => {
    const { formData, errorMessages } = this.state;
    const { guestname, tel, startDate, endDate } = formData;
    const newErrorMessages = { ...errorMessages };
    const regPattern = /^\d+$/;

    newErrorMessages.guestname = guestname ? '' : 'Name must be filled in';

    newErrorMessages.tel = tel && regPattern.test(tel) ? '' : 'Phone number must be filled in';

    newErrorMessages.dates = startDate && endDate ? '' : 'Dates should be selected';

    this.setState({
      errorMessages: newErrorMessages,
    });

    for (const message of Object.values(newErrorMessages)) {
      if (message.length > 0) {
        return false;
      }
    }

    return true;
  };

  formatDate = (startDate, endDate) => {
    return eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    }).map(date => format(new Date(date), 'yyyy-MM-dd'));
  };

  createFormData = () => {
    const { formData } = this.state;
    const { guestname, tel, startDate, endDate } = formData;
    const date = this.formatDate(startDate, endDate);

    const data = {
      name: guestname,
      tel,
      date,
    };

    return data;
  };

  sendFormData = async () => {
    const { roomID } = this.props;
    const data = this.createFormData();
    let modalMessage;

    try {
      await apiPostBookingData(roomID, data);

      modalMessage = 'Thank you for booking with White Space, your room was booked successfully!';

      this.setState({
        modalMessage,
        bookingSuccess: true,
      });
      this.openModal();
      this.clearFormInputs();
    } catch (e) {
      if (!e.response) return;

      modalMessage = e.response.data.message;

      this.setState({
        modalMessage,
        bookingSuccess: false,
      });
      this.openModal();

      console.error(`🚫 Something went wrong posting data: ${e.response.data.message}`);
    }
  };

  clearFormInputs = () => {
    this.setState({
      formData: {
        guestname: '',
        tel: '',
        startDate: null,
        endDate: null,
      },
    });
  };

  submitForm = e => {
    e.preventDefault();

    const allValidated = this.validateForm();

    if (allValidated) {
      this.sendFormData();
    }
  };

  updateStyleToBody = () => {
    document.body.classList.toggle('modal-is-open');
  };

  openModal = () => {
    this.setState({ modalIsOpen: true }, this.updateStyleToBody);
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false }, this.updateStyleToBody);
  };

  handleClickOutside = e => {
    const modal = this.modalRef.current;

    if (modal && modal.contains(e.target)) {
      return;
    }

    this.closeModal();
  };

  render() {
    const { formData, errorMessages, modalIsOpen, modalMessage, bookingSuccess } = this.state;
    const { guestname, tel, startDate, endDate } = formData;
    const { normalDayPrice, holidayPrice } = this.props;

    return (
      <>
        <div className="booking-card__form">
          <form className="form" ref={this.formRef} onSubmit={this.submitForm}>
            <div className="form__field">
              <label htmlFor="guestname" className="form__label">
                Name
              </label>
              <input
                type="text"
                className="form__input"
                name="guestname"
                value={guestname}
                onChange={this.setNameAndTel}
              />
              <em className="form__error-text">{errorMessages.guestname}</em>
            </div>
            <div className="form__field">
              <label htmlFor="guestname" className="form__label">
                Tel
              </label>
              <input
                type="text"
                className="form__input"
                name="tel"
                value={tel}
                onChange={this.setNameAndTel}
              />
              <em className="form__error-text">{errorMessages.tel}</em>
            </div>
            <div className="form__field">
              <label htmlFor="guestname" className="form__label">
                Dates
              </label>
              <div className="form__dates-wrapper">
                <DatePicker
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={this.setStartDate}
                  minDate={addDays(new Date(), 1)}
                  maxDate={addDays(new Date(), 90)}
                  excludeDates={this.excludeDates()}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Check in"
                />
                &#8594;
                <DatePicker
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  onChange={this.setEndDate}
                  minDate={addDays(startDate, 1)}
                  maxDate={addDays(new Date(), 90)}
                  excludeDates={this.excludeDates()}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Check out"
                />
              </div>
              <em className="form__error-text">{errorMessages.dates}</em>
            </div>
            <TotalAmount
              normalDayPrice={normalDayPrice}
              holidayPrice={holidayPrice}
              startDate={startDate}
              endDate={endDate}
            />
            <div className="form__btn-wrapper">
              <button type="submit" className="form__submit-btn">
                Reserve
              </button>
            </div>
          </form>
        </div>
        {modalIsOpen && (
          <Modal
            modalRef={this.modalRef}
            modalIsOpen={modalIsOpen}
            modalMessage={modalMessage}
            closeModal={this.closeModal}
            handleClickOutside={this.handleClickOutside}
            bookingSuccess={bookingSuccess}
          />
        )}
      </>
    );
  }
}

export default BookingForm;
