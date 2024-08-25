import React, { useState } from 'react'
import './Navbar.css'
import logo_light from '../images/logo_light1.jpg'
import logo_dark from '../images/logo_dark1.jpg'
import search_icon_light from '../images/search-w.png'
import search_icon_dark from '../images/search-b.png'
import toggle_light from '../images/night.png'
import toggle_dark from '../images/day.png'
import {Link} from 'react-router-dom';



const Navbar = ({theme,setTheme,isAuth}) => {

  const[menu,setMenu]=useState("Home");

const toggle_mode=()=>{
    theme==='light'? setTheme('dark'):setTheme('light');
  }
  
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".link");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    links.forEach(link => link.classList.toggle("active"));
  });
}

if (links) {
  links.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      links.forEach(link => link.classList.remove("active"));
    });
  });
}


  return (
    <div className='navbar'>
        <img src={theme==='light'?logo_light:logo_dark} alt="" className='logo'/>
        <div className="link">
        <Link className='navitem' to={"/"}>Home</Link>
        <Link className='navitem' to={"/about"}>About-Us</Link>
        <Link className='navitem' to={"/courses"}>Courses</Link>
        <Link className='navitem' to={"/contactus"}>Contact-Us</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link className='navitem' to={"/login"}>Login</Link>
        )}
        </div>
        <div className="hamburger" >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      <div className='search-box'>
        <input type='text' placeholder='Search'/>
        <img src={theme==='light'?search_icon_light:search_icon_dark} alt="" />
      </div>
      <img onClick={()=>{toggle_mode()}} src={theme==='light'?toggle_light:toggle_dark} alt="" className='toggle-id'/>
    </div>
  )
}

export default Navbar
