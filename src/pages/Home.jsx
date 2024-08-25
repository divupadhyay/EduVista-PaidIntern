import React from 'react'
import './Home.css';
import Testimonial from '../components/Testimonial';
import Header from '../components/Header';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';

const Home = ({theme,setTheme}) => {
  const toggle_mode=()=>{
    theme==='light'? setTheme('dark'):setTheme('light');
  }
  return (
    <div>
      <Header1/>
      <div class="separation"></div>
      <Header2/>
      <div class="separation"></div>
      <div className="home-main">
        <div className="home-main-content">
          <h1>Our Learning Library Includes</h1>
          <p>We Have 5 different libraries</p>
          </div>
          </div>
        <Header/>
        <div class="separation"></div>
        <Testimonial/>
    </div>
  )
}

export default Home
