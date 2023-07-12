import React from 'react';
import {LuSearch} from '../../../node_modules/react-icons/lu';
import {AiOutlineShop,AiOutlineShoppingCart } from '../../../node_modules/react-icons/ai';
import {PiUser} from '../../../node_modules/react-icons/pi';
import {BsThreeDotsVertical} from '../../../node_modules/react-icons/bs';
import Logo from '../../flipkart.jpg'

const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='Head'>
          <div className='flip'>
          <img className='logo' src={Logo} />
            <div><span className='ex'><b>Explore</b></span>
            <span className='plus'>Plus</span>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"/></div>
          </div>
         <div className='inp'>
         <span className='input-group-text'><LuSearch size="22"/></span>
          <input type='search' className='' placeholder='Search for Products, Brands and More' />
         </div>
         <div className='link d-flex gap-5'>
         <div className='ml'>
          <a href=''><AiOutlineShop size="25" />Become a Seller</a></div>
          <div>
          <a href=''><PiUser size="25"/>Sign In</a></div>
          <div>
          <a href=''><AiOutlineShoppingCart size="25"/>Cart</a></div>
          <div><a href=''><BsThreeDotsVertical size="20"/></a></div>
         </div>
        </div>
      </div>
      
    </>
  )
}

export default Header