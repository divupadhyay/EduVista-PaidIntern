import React,{useEffect} from 'react'
import './Header2.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import Courses from './../pages/Courses';
import tail from '../images/women.png'
import oc from '../images/oc.webp'
import cert from '../images/cert1.png';
import lwe from '../images/lwe1.png'


const Header2 = ({theme,setTheme}) => {
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
      <div className="linked1">  
      <div className="contents-1">
            <div className="contents1-img" data-aos="zoom-in" data-aos-duration="1400">
                <img src={tail} alt="" />
            </div>
            <div className="contents1-about">
                <h2 data-aos="fade-right" data-aos-duration="1400">Benefits about online Expertise</h2>
                  <p className='para1' data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300" >Online Courses <img src={oc} alt="" className='para-img' width="100px" height="100px"  /></p>
                  <p className='para2' data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">Get Your Certificate<img src={cert} alt="" className='para-img' width="70px" height="70px"  /></p>
                  <p className='para3' data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">Learn with Experts<img src={lwe} alt=""  className='para-img' width="80px" height="80px" /></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header2
