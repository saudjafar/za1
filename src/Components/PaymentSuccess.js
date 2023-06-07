import React from 'react';
import '../App.scss';
import tickMark from '../Assets/ok-64.png'
const PaymentSuccess = () => {
  return (
    <div className='success-container'>
        <img src={tickMark} width={48} height={48} style={{padding:'0.75rem'}}/>
      <h3>Payment received!</h3>
      <p>Your order is on the way. Please check your email for the receipt.</p>
    </div>
  );
};

export default PaymentSuccess;