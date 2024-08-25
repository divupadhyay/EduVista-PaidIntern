import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Study.css';

const Study5 = ({theme,setTheme}) => {
  const navigate = useNavigate();
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  const courseData = [
    {
      id: 1,
      name: "JEE Preparation Kit",
      price: "Price-10$",
      image:
        "https://images.careerindia.com/img/2022/11/jee-mains-16575267861-1669100564.jpg",
    },
    {
      id: 2,
      name: "NEET Preparation Kit",
      price: "Price-10$",
      image:
        "https://i0.wp.com/mdmsenquiry.com/wp-content/uploads/2017/11/neet-ug.jpg?resize=600%2C400&ssl=1",
    },
    {
      id: 3,
      name: "CA Preparation Kit",
      price: "Price-15$",
      image:
        "https://logos-download.com/wp-content/uploads/2019/01/The_Institute_of_Chartered_Accountants_Logo_full.png",
    },
    {
      id: 4,
      name: "NDA Preparation Kit",
      price: "Price-15$",
      image:
        "https://www.coachingselect.com/public/blogs/blog-16470057328.jpg",
    },
  ];
  return (
    <section className="courses">
      <h2>Here are some of the courses</h2>
      <div className="course-cards">
        {courseData.map((props) => (
            <div className="courseList">
          <div key={props.id} className='courseCard'>
          <img src={props.image} alt="course-img" className='courseImage'/>
          <div className="courseCard_content">
              <h3 className='coursename'>{props.name}</h3>
              <div className="displayStack-1">
                  <div className="coursePrice">{props.price}</div>
              </div>
              <div className="displayStack-2">
                  <button onClick={() => navigate("/login")} className="btn">Enroll Now</button>
              </div>
          </div>
      </div>
      </div>
        ))}
      </div>
    </section>
  );
};

export default Study5
