import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {LuSearch} from '../../../node_modules/react-icons/lu';
import {AiFillShop,AiOutlineShoppingCart } from '../../../node_modules/react-icons/ai';
import {PiUserDuotone} from '../../../node_modules/react-icons/pi';

const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='Head'>
          <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg' />
         <div className='inp'>
         <span className='input-group-text'><LuSearch size="30"/></span>
          <input type='search' className='' placeholder='Search for Products, Brands and More' />
         </div>
         <div className='link d-flex gap-5'>
         <div className='ml'><AiFillShop size="30" />
          <a href=''>Become a Seller</a></div>
          <div><PiUserDuotone size="30"/>
          <a href=''>Sign In</a></div>
          <div><AiOutlineShoppingCart size="30"/>
          <a href=''>Cart</a></div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Header