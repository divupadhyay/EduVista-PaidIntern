import React, { useEffect } from 'react'
import './Header1.css'
import {useNavigate} from "react-router-dom";
import heads from '../images/heads.png'
import AOS from 'aos';
import "aos/dist/aos.css";

const Header1 = ({theme,setTheme}) => {
    const navigate = useNavigate();
    useEffect(() => {
      AOS.init({
        offset:1,
      });
    }, []);
    const toggle_mode=()=>{
      theme==='light'? setTheme('dark'):setTheme('light');
    }
  return (
    <div>
      <section1 className="hero">
        <div className="hero-text">
            <h1 data-aos="zoom-in-left" data-aos-duration="1400" data-aos-delay="200"><span>Welcome to our EduVista</span> - Learn At Your Own Pace</h1>
            <h4 data-aos="fade-right" data-aos-duration="1400">“The function of education is to teach one to think intensively and to think critically. … Intelligence plus character—that is the goal of true education.” —Martin Luther King Jr.</h4>
            <p data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">Learn, Grow, Excel</p>
            <button data-aos="flip-down" data-aos-duration="1400" data-aos-delay="400" onClick={() => navigate("/courses")} className="common-btn1">
            Get Started
          </button>
        </div>
        <div className="hero-img" data-aos="zoom-in" data-aos-duration="1400" >
            <img src={heads} alt="" />
        </div>
      </section1>
      <div className="scroll">
        <a href="#">
            <i className="ri-scroll-to-bottom-line">
                Scroll Down
            </i>
        </a>
      </div>
    </div>
  )
}

export default Header1
