import React from "react";
import {useNavigate} from "react-router-dom";
import './Header.css'

const Header = ({theme,setTheme}) => {
    const navigate = useNavigate();
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  const testimonialsData = [
    {
      id: 1,
      name: "Plan for students in classes 1-5",
      message:
        "Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings.",
    
    },
    {
      id: 2,
      name: "Plan for students in classes 6-8",
      message:
        "Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings.",
    },
    {
      id: 3,
      name: "Plan for students in classes 9-10",
      message:
        "Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings.",
     
    },
    {
      id: 4,
      name: "Plan for students in classes 11-12",
      message:
        "Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings",
      
    },
    {
        id: 5,
        name: "Plan for students in higher classes",
        message:
          "Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings",
        
      },
  ];
  return (
    <section className="headers">
      <div className="headers-cards">
        {testimonialsData.map((e) => (
          <div className="header-card" key={e.id}>
            <div className="info">
              <p className="name">{e.name}</p>
            </div>
            <p className="message">{e.message}</p>
            <button id="1" onClick={() => navigate("/courses")}>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;