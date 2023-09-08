import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom"
import { Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div className='NavB'>
      <div className='logo'>
        <Heading style={{color:"brown",fontSize:"40px"}}>Shivam Gaur</Heading>
      </div>
      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
