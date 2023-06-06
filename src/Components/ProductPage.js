import React from 'react'
import '../App.scss'
import ProductImg from '../Assets/product-img.jpg'
import { ReactComponent as BackSvg } from '../Assets/back-arrow.svg'
import { ReactComponent as CartSvg } from '../Assets/shopping-icon.svg'
import { ReactComponent as DotsSvg } from '../Assets/dots.svg';
import { ReactComponent as FavSvg } from '../Assets/favorite-white.svg';
import { ReactComponent as StarSvg } from '../Assets/star.svg';

import { useState, useEffect} from 'react'


const ProductPage = () => {

    const [qtyNumber, setQtyNumber] = useState(5);
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    
    const decQty = () => {
        console.log("clicked")
        
        if(qtyNumber == 0)
        {
            setQtyNumber(0);
        }
        else
        {
            setQtyNumber(qtyNumber-1);
        }
    }

    const incQty = () =>{
        console.log("clicked")
        setQtyNumber(qtyNumber+1);

    }

  return (
    <div className='main'>
        <div className='navigation-bar'>
                <BackSvg/>
                <CartSvg/>
        </div>

        <div className='product-page-container'>
        
            <div className='product-img-container'>
                <img  src={ProductImg}/>
            </div>

            {/* <div className='dots-container'>
                <DotsSvg/>
            </div>

            <div className='fav-icon-container'>
                <FavSvg/>
            </div> */}

            <div className='details-container'>
                
                <div className='name-qty-container'>
                    <div className='name'>
                    <p className='brand-name'>Roller Rabbit</p>
                    <p className='product-name'>Vado Odelle dress</p>
                    </div>
                    
                    <div className='qty'>
                        <span onClick={decQty} >-</span>
                        <span>{qtyNumber}</span>
                        <span onClick={incQty}>+</span>
                    </div>    
                </div>
                
                <div className='review-stock-container'>
                    <div className='review'>
                        <div className='review-stars'>
                            <StarSvg/>
                            <StarSvg/>
                            <StarSvg/>
                            <StarSvg/>
                            <StarSvg/>
                        </div>
                        <div className='review-text'><span>(320 Reviews)</span></div>
                    </div>
                    
                    <div className='stock'><span>Available in stock</span></div>

                </div>

                <div className='size-container'> 
                    <h3>Size</h3>
                    <div className='size-icons'>
                        <button
                            onClick={() => handleSizeSelection('S')}
                            className={selectedSize === 'S' ? 'selected' : ''}
                            style={{ backgroundColor: selectedSize === 'S' ? 'black' : 'initial',
                                    color: selectedSize === 'S' ? 'white' : '#888888',
                                    borderColor: selectedSize === 'S' ? 'black' : 'initial'}}
                        >
                            S
                        </button>
                        <button
                            onClick={() => handleSizeSelection('M')}
                            className={selectedSize === 'M' ? 'selected' : ''}
                            style={{ backgroundColor: selectedSize === 'M' ? 'black' : 'initial',
                                    color: selectedSize === 'M' ? 'white' : '#888888' ,
                                    borderColor: selectedSize === 'M' ? 'black' : 'initial'}}
                        >
                            M
                        </button>
                        <button
                            onClick={() => handleSizeSelection('L')}
                            className={selectedSize === 'L' ? 'selected' : ''}
                            style={{ backgroundColor: selectedSize === 'L' ? 'black' : 'initial',
                                    color: selectedSize === 'L' ? 'white' : '#888888' ,
                                    borderColor: selectedSize === 'L' ? 'black' : 'initial'}}
                        >
                            L
                        </button>
                        <button
                            onClick={() => handleSizeSelection('XL')}
                            className={selectedSize === 'XL' ? 'selected' : ''}
                            style={{ backgroundColor: selectedSize === 'XL' ? 'black' : 'initial',
                                    color: selectedSize === 'XL' ? 'white' : '#888888' ,
                                    borderColor: selectedSize === 'XL' ? 'black' : 'initial'}}
                        >
                            XL
                        </button>

                        <button
                            onClick={() => handleSizeSelection('XXL')}
                            className={selectedSize === 'XXL' ? 'selected' : ''}
                            style={{ backgroundColor: selectedSize === 'XXL' ? 'black' : 'initial',
                                    color: selectedSize === 'XXL' ? 'white' : '#888888' ,
                                    borderColor: selectedSize === 'XXL' ? 'black' : 'initial'}}
                        >
                            XXL
                        </button>
                    </div>
                </div>

                <div className='description-container'>
                    <h3>Description</h3>
                    <p>Get a little lift from these Sam Edelman sandals featuring ruched straps and leather
                         lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>
                </div>

                <div className='buy-container'>
                    <div className='price'></div>
                    
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default ProductPage