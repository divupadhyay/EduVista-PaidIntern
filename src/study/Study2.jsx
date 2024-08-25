import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Study.css';

const Study2 = ({theme,setTheme}) => {
  const navigate = useNavigate();
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  const courseData = [
    {
      id: 1,
      name: "Science for class 6",
      price: "Price-3$",
      image:
        "https://static.vecteezy.com/system/resources/previews/000/299/163/original/school-subject-for-science-with-many-equipments-in-lab-vector.jpg",
    },
    {
      id: 2,
      name: "Science for class 7",
      price: "Price-4$",
      image:
        "https://th.bing.com/th/id/OIP.ChnRxRYfKEjEYn08vd199wHaFP?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Science for class 8",
      price: "Price-5$",
      image:
        "https://ezpzlearn.com/CMS/Content/flashcard/Subjects%20School/Subjects%20Words/science%20subject%20flashcard%20words.jpg",
    },
    {
      id: 4,
      name: "Maths for class 6",
      price: "Price-4.2$",
      image:
        "https://thumbs.dreamstime.com/b/math-school-subject-learning-mathematics-idea-education-knowledge-set-colorful-icons-isolated-flat-vector-illustration-156388066.jpg",
    },
    {
        id: 5,
        name: "Maths for class 7",
        price: "Price-4.2$",
        image:
          "https://th.bing.com/th/id/OIP.wV2oQyfxhz77dXfmkvAIVAHaEW?rs=1&pid=ImgDetMain",
      },
      {
        id: 6,
        name: "Maths for class 8",
        price: "Price-6.2$",
        image:
          "https://th.bing.com/th/id/OIP.dcAjHEOiDHTYBiinfJTtFQHaEK?rs=1&pid=ImgDetMain",
      },
      {
        id: 7,
        name: "Computer Application for class 8",
        price: "Price-4.9$",
        image:
          "https://th.bing.com/th/id/OIP.h1omY0m4qHBAqkgg6aoj9QHaEK?rs=1&pid=ImgDetMain",
      },
      {
        id: 8,
        name: "Hindi for class 6",
        price: "Price-4.7$",
        image:
          "https://anamikamishra.com/wp-content/uploads/2021/09/hindi.jpeg",
      },
      {
        id: 9,
        name: "English for class 6",
        price: "Price-3.2$",
        image:
          "https://images.vexels.com/media/users/3/169938/raw/f02b599d55c05825554ded12f0e84af0-english-subject-illustration.jpg",
      },
      {
        id: 10,
        name: "English for class 7",
        price: "Price-5.2$",
        image:
          "https://www.fpacademy.co.in/blog/wp-content/uploads/2022/09/How-to-Learn-English-Speaking-at-Home-960x540-1.jpg",
      },
      {
        id: 11,
        name: "Social-Science for class 8",
        price: "Price-4.8$",
        image:
          "https://www.getmyuni.com/assets/images/articles/1121250608623.jpeg",
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

export default Study2
