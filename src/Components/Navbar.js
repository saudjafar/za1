import React from 'react';
import '../App.scss';
import {ReactComponent as HomeSvg} from '../Assets/home.svg';
import {ReactComponent as CartSvg} from '../Assets/cart.svg';
import {ReactComponent as NotificationSvg} from '../Assets/notification.svg';
import {ReactComponent as ProfileSvg} from '../Assets/profile.svg';


const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div className='icons-container'>
      {/* "active" classname can be added conditionally to change 
      the icons in navbar, highlighting the current page */}
      <div className='active'>
        <HomeSvg/>
        <span>Home</span>
      </div>
      <CartSvg/>
      <NotificationSvg/>
      <ProfileSvg/>
    </div>
    
    
    </div>
  )
}

export default Navbar