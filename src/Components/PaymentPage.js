import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import  Card from '../Assets/credit-card.png';
import {ReactComponent as LockSvg} from '../Assets/lock-icon.svg'
import '../App.scss';
import PaymentProcessing from '../Components/PaymentProcessing';
import PaymentSuccess from '../Components/PaymentSuccess';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [errors, setErrors] = useState({});
  
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [form,  setForm] = useState(true);
    
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
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      cardNumber: !isValid,
    }));
  };
  
  const validateNameOnCard = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
  
    if (!nameRegex.test(nameOnCard)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameOnCard: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameOnCard: false,
      }));
    }
  };
  
  const validateExpiryDate = () => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  
    if (!expiryDateRegex.test(expiryDate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        expiryDate: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        expiryDate: false,
      }));
    }
  };
  
  const validateCVV = () => {
    const cvvRegex = /^[0-9]{3,4}$/;
  
    if (!cvvRegex.test(cvv)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvv: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvv: false,
      }));
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    validateCardNumber();
    validateNameOnCard();
    validateExpiryDate();
    validateCVV();

    setProcessing(true);
    setTimeout(() => {
        setProcessing(false);
        setPaymentSuccess(true);
      }, 3000);
  };

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'2%'}}>
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
            onChange={handleCardNumberChange}
            fullWidth
            error={errors.cardNumber}
            helperText={errors.cardNumber && 'Invalid card number'}
            InputProps={{
              endAdornment: (
                <img src={Card}/>
              ),
            }}
          />
        </div>
        <div className="textfield-container">
          <TextField
            label="Name on Card"
            value={nameOnCard}
            onChange={handleNameOnCardChange}
            fullWidth
            error={errors.nameOnCard}
            helperText={errors.nameOnCard && 'Invalid name on card'}
          />
        </div>
        <div className="textfield-container last">
          <TextField
            className='expiry-textfield'
            label="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            fullWidth
            error={errors.expiryDate}
            helperText={errors.expiryDate && 'Invalid expiry date'}
          />
          <TextField
            className='cvv-textfield'
            label="CVV"
            value={cvv}
            onChange={handleCVVChange}
            fullWidth
            error={errors.cvv}
            helperText={errors.cvv && 'Invalid CVV'}
          />
        </div>
        <button type="submit"><LockSvg style={{padding:'0 0.5rem ', marginBottom:'3px'}}/> <span>Pay Now</span></button>
      </form>
      )}
    </div>
    </div>
  );
};

export default PaymentPage;
