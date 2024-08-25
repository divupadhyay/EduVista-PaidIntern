import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Study.css';

const Study4 = ({theme,setTheme}) => {
  const navigate = useNavigate();
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  const courseData = [
    {
        id: 1,
        name: "Physics for class 11",
        price: "Price-3.8$",
        image:
          "https://thumbs.dreamstime.com/z/physics-subject-back-to-school-background-education-banner-97995203.jpg",
      },
      {
        id: 2,
        name: "Physics for class 12",
        price: "Price-2.86$",
        image:
          "https://c8.alamy.com/comp/H90XF5/physics-study-science-atom-energy-concept-H90XF5.jpg",
      },
      {
        id: 3,
        name: "Commerce for class 11",
        price: "Price-5$",
        image:
          "https://www.pw.live/files/repository001/1688013003-commerce.png",
      },
      {
        id: 4,
        name: "Commerce for class 10",
        price: "Price-4.2$",
        image:
          "https://www.oceanik.in/wp-content/uploads/2022/12/Commerce.jpg",
      },
      {
          id: 5,
          name: "Accounts for class 11",
          price: "Price-4.2$",
          image:
            "https://th.bing.com/th/id/OIP.Esi-StPtqlrmX97O7pmNDAAAAA?rs=1&pid=ImgDetMain",
      },
      {
          id: 6,
          name: "Accounts for class 12",
          price: "Price-4.2$",
          image:
            "https://th.bing.com/th/id/OIP.pazQSRCrsQLg4Y2_QsfzXAAAAA?rs=1&pid=ImgDetMain",
      },
      {
          id: 7,
          name: "Chemistry for class 11",
          price: "Price-4.2$",
          image:
            "https://th.bing.com/th/id/OIP.qVjQBHt4flnkHWp752gxgAHaEK?w=800&h=449&rs=1&pid=ImgDetMain",
        },
        {
          id: 8,
          name: "Chemistry for class 12",
          price: "Price-4.2$",
          image:
            "https://th.bing.com/th/id/OIP.PxNpGvJ6GkWw6u46k7YPhgHaEU?rs=1&pid=ImgDetMain",
        },
        {
          id: 9,
          name: "Biology for class 11",
          price: "Price-4.2$",
          image:
            "https://i.ytimg.com/vi/6aN29uRJ4mY/maxresdefault.jpg",
        },
        {
          id: 10,
          name: "Biology for class 12",
          price: "Price-4.2$",
          image:
            "https://th.bing.com/th/id/OIP.KkS3HWXArw5kojtB4qZpmwHaEK?rs=1&pid=ImgDetMain",
        },
        {
          id: 11,
          name: "Maths for class 11",
          price: "Price-4.2$",
          image:
            "https://th.bing.com/th/id/R.fdb866aade1d473a4c8b57bd71b57fd9?rik=2ALPv7NFB9g48g&riu=http%3a%2f%2fs3-ap-south-1.amazonaws.com%2fricedigitals3bucket%2fAUPortalContent%2f2020%2f05%2f08122047%2fimgmath.jpg&ehk=bAiCLvQijmsrVmmVEdQFwbpgdqcnOTz2DRhhj2mUCYw%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          id: 12,
          name: "Maths for class 12",
          price: "Price-4.2$",
          image:
            "https://thevikasasainikschool.edu.in/wp-content/uploads/2023/01/maths-lab1.jpg",
        },
        {
          id: 13,
          name: "Economics for class 11",
          price: "Price-4.2$",
          image:
            "https://th.bing.com/th/id/OIP.j3Oon_bPnjJfcRZuxf43SgAAAA?rs=1&pid=ImgDetMain",
        },
        {
          id: 14,
          name: "Computer Applications for class 11",
          price: "Price-4.2$",
          image:
            "https://leverageedu.com/blog/wp-content/uploads/2019/12/pxfuel.com-1.jpg",
        },
        {
          id: 15,
          name: "Computer Applications for class 12",
          price: "Price-4.2$",
          image:
            "https://2.bp.blogspot.com/-kXuPtFyJvAs/U0wwO9xvg4I/AAAAAAAAA8M/ZPuICa1Nz_U/s1600/Computer-Science-1.jpg",
        },
        {
            id: 16,
            name: "English for class 11",
            price: "Price-4.2$",
            image:
              "https://esdubai.com/wp-content/uploads/2023/03/1.jpg",
          },
          {
            id: 17,
            name: "English for class 12",
            price: "Price-4.2$",
            image:
              "https://th.bing.com/th/id/OIP.zwZ2ukjpnpU2CkTBz51wewHaEz?w=988&h=640&rs=1&pid=ImgDetMain",
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

export default Study4
