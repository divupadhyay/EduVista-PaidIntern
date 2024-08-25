import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Study.css';

const Study3 = ({theme,setTheme}) => {
  const navigate = useNavigate();
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  const courseData = [
    {
      id: 1,
      name: "Physics for class 9",
      price: "Price-3.8$",
      image:
        "https://www.vedantu.com/seo/content-images/bc692335-2c03-4559-9cf0-dff766298eef.jpg",
    },
    {
      id: 2,
      name: "Physics for class 10",
      price: "Price-2.86$",
      image:
        "https://onlinesciencecampus.com/wp-content/uploads/2020/09/physics-school-subject-concept-scientist-explore-electricity-magnetism-light-wave-forces-theoretical-practical-study-course-193268158-1536x1030.jpg",
    },
    {
      id: 3,
      name: "History for class 9",
      price: "Price-5$",
      image:
        "https://c8.alamy.com/comp/W7PBK8/the-history-of-people-science-and-education-religion-and-travel-discoveries-and-old-ancient-symbols-retro-ship-chess-and-handshake-warrior-and-W7PBK8.jpg",
    },
    {
      id: 4,
      name: "Geography for class 9",
      price: "Price-4.2$",
      image:
        "https://images.creativemarket.com/0.1.0/ps/5702017/1820/1213/m1/fpnw/wm1/qattvxilpsnavloohfukxptztsrzrsphk1nn428g7mihnynx5zii29nl3n4lf4ha-.jpg?1547501093&s=fdb7f25ee906e0827e78e6bd173f1358",
    },
    {
        id: 5,
        name: "History for class 10",
        price: "Price-4.2$",
        image:
          "https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg",
    },
    {
        id: 6,
        name: "Geography for class 9",
        price: "Price-4.2$",
        image:
          "https://as1.ftcdn.net/v2/jpg/03/66/77/52/1000_F_366775227_6n6WV6muI5TaYWOrzc5eJJP6IKUYuZGr.jpg",
    },
    {
        id: 7,
        name: "Chemistry for class 10",
        price: "Price-4.2$",
        image:
          "https://4.bp.blogspot.com/-O2WxyxcP5Hs/Wz49InnLWpI/AAAAAAAAExg/3DAM1_5oFCwN3wrsrfRvmrEtMCf7cJ4QgCLcBGAs/s1600/chemistry_de4cb841-f860-4bad-bbfe-d2cc6aebc111_1024x1024.jpg",
      },
      {
        id: 8,
        name: "Chemistry for class 9",
        price: "Price-4.2$",
        image:
          "https://thumbs.dreamstime.com/z/chemistry-subject-web-banner-landing-page-scientific-experiment-chemistry-subject-web-header-scientific-experiment-176558737.jpg",
      },
      {
        id: 9,
        name: "Biology for class 10",
        price: "Price-4.2$",
        image:
          "https://th.bing.com/th/id/R.198a2a60e35e2ff0da465eb03fbd5251?rik=y2%2fSpEBG160vfw&riu=http%3a%2f%2fistudy7.com%2fwp-content%2fuploads%2f2019%2f05%2f7-1024x725.jpg&ehk=oPmh5rvd3xiscPZryHmefgw7naVfWVxHqf5Lq37bfd4%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 10,
        name: "Biology for class 9",
        price: "Price-4.2$",
        image:
          "https://thumbs.dreamstime.com/z/biology-icon-set-subjects-designating-school-discipline-biology-icon-set-subjects-designating-school-discipline-183359182.jpg",
      },
      {
        id: 11,
        name: "Maths for class 10",
        price: "Price-4.2$",
        image:
          "https://thumbs.dreamstime.com/z/math-school-subject-typographic-header-concept-learning-mathematics-idea-education-knowledge-science-technology-engineering-179015422.jpg",
      },
      {
        id: 12,
        name: "Maths for class 9",
        price: "Price-4.2$",
        image:
          "https://leverageedu.com/blog/wp-content/uploads/2020/07/Famous-Mathematicians-800x500.jpg",
      },
      {
        id: 13,
        name: "Hindi for class 10",
        price: "Price-4.2$",
        image:
          "https://media.istockphoto.com/id/1044119946/photo/learn-hindi-education-and-business-background.jpg?s=1024x1024&w=is&k=20&c=3OPMiGrd7Zt7phEBG2FkObFJO2aQ90BLFEAN6o_udCI=",
      },
      {
        id: 14,
        name: "Computer Applications for class 9",
        price: "Price-4.2$",
        image:
          "https://th.bing.com/th/id/R.95e43f8400e130e5c0c806ac581c9845?rik=vL6zItVD1WQ9bw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-UcLQ5tnagQE%2fTyRGhku9AhI%2fAAAAAAAABnI%2fDWq010NSPTw%2fs1600%2fComputer-Science.jpg&ehk=EfuWSBdLDIqNWdev%2b8jrqVvFfZYCsNBf2td%2bNF5fAi4%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 15,
        name: "Computer Applications for class 10",
        price: "Price-4.2$",
        image:
          "https://th.bing.com/th/id/OIP.SKM3haYkFCvHXl-kmP2t_gHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
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

export default Study3
