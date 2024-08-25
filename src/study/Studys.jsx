import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Study.css';

const Studys = ({theme,setTheme}) => {
  const navigate = useNavigate();
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  const courseData = [
    {
      id: 1,
      name: "GK for class 1-2",
      price: "Price-3.8$",
      image:
        "https://www.ncertbooks.guru/wp-content/uploads/2021/03/GK-General-Knowledge.png",
    },
    {
      id: 2,
      name: "EVS for class 1-3",
      price: "Price-2.86$",
      image:
        "https://th.bing.com/th/id/OIP.yL-vIn8zcuHfDIUWVR8BPAHaE-?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Social Studies for class 5",
      price: "Price-5$",
      image:
        "https://images.vexels.com/media/users/3/197058/raw/15626d7a0d8a12c8d255da606cade743-social-studies-elements-illustration-set.jpg",
    },
    {
      id: 4,
      name: "Maths for class 4",
      price: "Price-4.2$",
      image:
        "https://thumbs.dreamstime.com/b/math-school-subject-learning-mathematics-idea-education-knowledge-set-colorful-icons-isolated-flat-vector-illustration-156388066.jpg",
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

export default Studys
