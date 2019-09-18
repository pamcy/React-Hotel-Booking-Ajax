import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { addDays, eachDayOfInterval, format } from 'date-fns';

import TotalAmount from './TotalAmount';
import { apiPostBookingData } from '../../api';

import 'react-datepicker/dist/react-datepicker.css';

export class BookingForm extends Component {
  static propTypes = {};

  state = {
    formData: {
      guestname: '',
      tel: '',
      startDate: '',
      endDate: '',
    },
    errorMessages: {
      // guestname: '',
      // tel: '',
      // dates: '',
      // startDate: '',
      // endDate: '',
    },
  };

  setNameAndTel = e => {
    const formData = {
      ...this.state.formData,
      [e.currentTarget.name]: e.currentTarget.value,
    };

    this.setState({ formData });
  };

  setStartDate = (startDate = this.state.formData.startDate) => {
    const formData = {
      ...this.state.formData,
      startDate,
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

    try {
      const content = await apiPostBookingData(roomID, data);
      console.log(content);
    } catch (e) {
      console.error(`🚫 Something went wrong posting data: ${e.response}`);
      console.error(e.response.data.message);
    }
  };

  submitForm = e => {
    e.preventDefault();

    const allValidated = this.validateForm();

    if (allValidated) {
      console.log('all passed');
      this.sendFormData();
      console.log('all sent');
    }
  };

  render() {
    const { formData, errorMessages } = this.state;
    const { startDate, endDate } = formData;

    return (
      <div className="booking-card__form">
        <form action="" className="form" onSubmit={this.submitForm}>
          <div className="form__field">
            <label htmlFor="guestname" className="form__label">
              Name
            </label>
            <input
              type="text"
              className="form__input"
              name="guestname"
              onChange={this.setNameAndTel}
            />
            <em className="form__error-text">{errorMessages.guestname}</em>
          </div>
          <div className="form__field">
            <label htmlFor="guestname" className="form__label">
              Tel
            </label>
            <input type="text" className="form__input" name="tel" onChange={this.setNameAndTel} />
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
                minDate={new Date()}
                maxDate={addDays(new Date(), 90)}
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
                dateFormat="yyyy-MM-dd"
                placeholderText="Check out"
              />
            </div>
            <em className="form__error-text">{errorMessages.dates}</em>
          </div>
          <TotalAmount />
          <div className="form__btn-wrapper">
            <button type="submit" className="form__submit-btn">
              Reserve
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
