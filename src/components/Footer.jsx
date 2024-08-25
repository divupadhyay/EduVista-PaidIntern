import React from 'react'
import './Footer.css';
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram,
  } from "react-icons/ai";
  
const Footer = ({theme,setTheme}) => {
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 EduVista-A learning platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Divyansh Upadhyay</a>
        </p>
        <div className="social-links">
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillTwitterSquare />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
