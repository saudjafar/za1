import React from 'react'
import '../App.scss'
import MenuBtn from '../Assets/menu-btn.svg';
import UserEmoji from '../Assets/user-emoji.png';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {ReactComponent as SearchSvg} from '../Assets/search-icon.svg';
import {ReactComponent as FilterSvg} from '../Assets/filter-icon.svg';
import {ReactComponent as HeartSvg} from '../Assets/favorite-icon.svg';
import OfferImg from '../Assets/offer-img.png';
import Button from '@mui/material/Button';
import Product1 from '../Assets/product-1.png';
import Product2 from '../Assets/product-2.png';
import NavBar from '../Components/Navbar.js';
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <div className='home-container'>
      <div className="menu-bar">
        <img className='menu-btn' alt='menu-btn' src = {MenuBtn}/>
        <div className='user-emoji-container'>
          <img className='user-emoji' alt='user-emoji' src = {UserEmoji} width={50} height={50}/>
        </div>
      </div>
      
      <div className='welcome-header'>
        <p className='line-1'>Welcome,</p>
        <p className='line-2'>Our Fashions App</p>
      </div>

      <div className='search-filter-bar'>
        <TextField
        className='search-bar'
        variant="outlined"
        placeholder='Search...'

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchSvg/>
            </InputAdornment>
          ),
        }}
        />
        <FilterSvg style={{paddingLeft:'1rem'}}/>
      </div>

      <div className='offers-container'>
        {/* this part can be rendered efficiently by fetching data using api call that 
        returns the necessary data to display the "offer cards", which
        can be mapped using map() function */}

        {/* Here it is rendered manually */}
        
        <div className='offer offer-1'>
          <img src={OfferImg} width={260} height={160} alt='offer-img'/>
          <div className='offer-text'>
            <p className='line-1'>50% Off</p>
            <p className='line-2'>On everything today</p>
            <p className='offer-code'>With code: FSCREATION</p>
          </div>
          <button className='get-offer-btn'>Get now</button>
        </div>
        
        <div className='offer offer-2'>
          <img src={OfferImg} width={260} height={160} alt='offer-img'/>
          <div className='offer-text'>
            <p className='line-1'>70% Off</p>
            <p className='line-2'>On everything today</p>
            <p className='offer-code'>With code: FSCREATION</p>
          </div>
          <button className='get-offer-btn'>Get now</button>
        </div>

      </div>

      <div className='new-arrivals-container'>
        
        <div className='new-arrivals-header'>
          <h3 className='heading'>New Arrivals</h3>
          <Button 
          className='view-all-btn'

          >View All</Button>
        </div>

        <div className='new-arrivals-products'>
          
          <Link to='/product' style={{textDecoration:'none', color:'inherit'}}>
            <div className='product'>
                <img src={Product1} alt='traveler tote'/>
                <HeartSvg className='fav-icon'/>
                <div className='product-details'>
                <p className='product-brand'>The Marc Jacobs</p>
                <p className='product-name'>Traveler Tote</p>
                <p className='product-price'>$195.00</p>
                </div>
            </div>
          </Link>

          <Link to='/product' style={{textDecoration:'none', color:'inherit'}}>
          <div className='product'>
            <img src={Product2} alt='sneakers' style={{borderRadius:'14px'}}/>
            <HeartSvg className='fav-icon'/>
            <div className='product-details'>
              <p className='product-brand'>Axel Arigato</p>
              <p className='product-name'>Clean 90 Triple Sneakers</p>
              <p className='product-price'>$245.00</p>
            </div>
          </div>
          </Link>

          <Link to='/product' style={{textDecoration:'none', color:'inherit'}}>
          <div className='product'>
            <img src={Product1} alt='traveler tote'/>
            <HeartSvg className='fav-icon'/>
            <div className='product-details'>
              <p className='product-brand'>The Marc Jacobs</p>
              <p className='product-name'>Traveler Tote</p>
              <p className='product-price'>$195.00</p>
            </div>
          </div>
          </Link>

          <Link to='/product' style={{textDecoration:'none', color:'inherit'}}>
          <div className='product'>
            <img src={Product2} alt='sneakers' style={{borderRadius:'14px'}}/>
            <HeartSvg className='fav-icon'/>
            <div className='product-details'>
              <p className='product-brand'>Axel Arigato</p>
              <p className='product-name'>Clean 90 Triple Sneakers</p>
              <p className='product-price'>$245.00</p>
            </div>
          </div>
          </Link>

        </div>

      </div>

      <NavBar/>
      
        </div>

  )
}

export default Home