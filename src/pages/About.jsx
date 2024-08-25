import React from 'react'
import { useRef } from 'react';
import './About.css';
import img1 from '../images/1.png'
import img2 from '../images/about.png'
import Moreabout from '../components/Moreabout';

const About = ({theme,setTheme}) => {
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
      const ref=useRef(null);
      const handleClick=()=>{
        ref.current?.scrollIntoView({behavior:'smooth'});
      }
  return (
    <div className='body'>
      <div className="heading">
        <h1>About Us</h1>
        <p>“A man's mind, stretched by new ideas, may never return to its original dimensions.”
        Oliver Wendell Holmes Jr.</p>
      </div>
      <div className="container">
        <section className='about'>
          <div className="about-image">
            <img src={theme==='light'?img1:img2} alt="" />
          </div>
          <div className="about-content">
            <h2>Welcome to EduVista</h2>
            <p>At EduVista, we believe that education should be accessible to everyone, regardless of their background or location. That's why we're dedicated to providing high-quality online education that empowers learners to achieve their goals and enrich their lives. Our team of experienced educators and innovators has come together to create a platform that's designed to make learning easy, engaging, and effective. With a focus on flexibility, affordability, and personalized support, we're committed to helping learners of all ages and skill levels unlock their full potential. Whether you're a student looking to supplement your traditional education, a professional seeking to upskill or reskill, or simply someone who loves to learn, we invite you to join the EduVista community and start achieving your dreams today.</p>
            <button onClick={handleClick} className='read-more'>Read More</button>
          </div>
        </section>
      </div>
      <Moreabout ref={ref} text="More About Us"/>
    </div>
  )
}

export default About
