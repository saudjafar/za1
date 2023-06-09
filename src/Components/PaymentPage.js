import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Card from '../Assets/credit-card.png';
import { ReactComponent as LockSvg } from '../Assets/lock-icon.svg'
import '../App.scss';
import PaymentProcessing from '../Components/PaymentProcessing';
import PaymentSuccess from '../Components/PaymentSuccess';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [numberError, setNumberError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const [expiryError, setExpiryError] = useState(false);

  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);


  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/ /g, ''); // Remove existing spaces
    const cardNumber = input
      .replace(/\D/g, '') // Remove non-numeric characters
      .replace(/(.{4})/g, '$1 ') // Insert space after every 4 characters
      .trim()
      .slice(0, 19); // Limit to a maximum of 19 characters (including spaces)

    setCardNumber(cardNumber);
  };

  const handleNameOnCardChange = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };





  const validateCardNumber = () => {
    const cardNumberRegex = /^[0-9]{16}$/;

    const input = cardNumber.replace(/ /g, ''); // Remove spaces
    const isValid = cardNumberRegex.test(input);

    setNumberError(isValid);
    console.log(numberError);

  };

  const validateNameOnCard = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;

    const isValid = nameRegex.test(nameOnCard);
    setNameError(isValid);


  };

  const validateExpiryDate = () => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    const isValid = expiryDateRegex.test(expiryDate);
    console.log(expiryError);
    setExpiryError(isValid);
  };

  const validateCVV = () => {
    const cvvRegex = /^[0-9]{3,4}$/;
    const isValid = cvvRegex.test(cvv);
    setCvvError(isValid);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateCardNumber();
    validateNameOnCard();
    validateExpiryDate();
    validateCVV();

    console.log(numberError);
    // Check if there are any errors
    if (
      nameError ||
      numberError ||
      cvvError ||
      expiryError
    ) {
      return; // Don't proceed if there are errors
    }


    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
    }, 3000);

  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
      <div className="payment-container">
        {processing ? (
          <PaymentProcessing />
        ) : paymentSuccess ? (
          <PaymentSuccess />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="textfield-container">
              <TextField
                label="Card Number"
                value={cardNumber}
                required
                onChange={handleCardNumberChange}
                fullWidth
                error={numberError}
                helperText={numberError && 'Invalid card number'}
                InputProps={{
                  endAdornment: (
                    <img src={Card} />
                  ),
                }}
              />
            </div>
            <div className="textfield-container">
              <TextField
                label="Name on Card"
                value={nameOnCard}
                required
                onChange={handleNameOnCardChange}
                fullWidth
                error={nameError}
                helperText={nameError && 'Invalid name on card'}
              />
            </div>
            <div className="textfield-container last">
              <TextField
                className='expiry-textfield'
                label="Expiry Date (MM/YY)"
                value={expiryDate}
                required
                onChange={handleExpiryDateChange}
                fullWidth
                error={expiryError}
                helperText={expiryError && 'Invalid expiry date'}
              />
              <TextField
                className='cvv-textfield'
                label="CVV"
                value={cvv}
                required
                onChange={handleCVVChange}
                fullWidth
                error={cvvError}
                helperText={cvvError && 'Invalid CVV'}
              />
            </div>
            <button type="submit"><LockSvg style={{ padding: '0 0.5rem ', marginBottom: '3px' }} /> <span>Pay Now</span></button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
