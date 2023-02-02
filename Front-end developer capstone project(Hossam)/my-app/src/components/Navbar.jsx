import React from 'react'
import './Navbar.css';



const Navbar = () => {
  return (
  <nav>
    <div className='navbar-logo'>
      <h2> Little Lemon</h2>
    
    </div>
    <div className='navbar-links'>
      
            <p><a href="#giftcard">Gift Card</a></p>
         
            <p><a href="#Home">Home</a></p>
          
            <p><a href="#menus">Menus</a></p>
          
            <p> <a href="#locations">Locations</a></p>
          
            <p><a href="#awards">Awards</a></p>
          
            <p><a href="#About">About</a></p>
         
            <p><a href="#order">Order</a></p>
          
      
    </div>
    
  </nav>
    
  )
}

export default Navbar