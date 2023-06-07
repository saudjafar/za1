import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import '../App.scss';

const PaymentProcessing = () => {
  return (
    <div className='processing-container'>
      <CircularProgress color="inherit" style={{padding:'2rem'}} />
      
      <h3>Payment Processing...</h3>
      <p>Please wait, do not close this screen</p>
    </div>
  );
};

export default PaymentProcessing;