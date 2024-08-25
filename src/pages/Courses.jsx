import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Courses.css'
import class1 from '../images/class1.jpg'
import class2 from '../images/class21.png'
import class3 from '../images/class3.jpg'
import class4 from '../images/class4.webp'
import class5 from '../images/class51.png'
import AOS from 'aos';
import "aos/dist/aos.css";

const Courses = () => {
    useEffect(() => {
        AOS.init({
          offset:1,
        });
      }, []);
  return (
    <div>
        <div className="first">
            <h1>Our Categories</h1>
            <p>We have wide range of Courses categories for every student</p>
        </div>
      <div className="linked">
        <section className="content-1">
            <div className="content1-img" data-aos="zoom-in" data-aos-duration="1400">
                <img src={class1} alt="" />
            </div>
            <div className="content1-about">
                <h2 data-aos="fade-right" data-aos-duration="1400">Students in Classes 1-5</h2>
                <p data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300" >Welcome to EduVista, where learning is an adventure! We believe that every child deserves a strong foundation in education, and that's why we're committed to providing a fun and interactive online learning experience for students of classes 1-5. Our team of experienced teachers and educators has carefully crafted engaging lessons and activities that make learning easy and enjoyable for young minds. With EduVista, your child can learn at their own pace, anytime and anywhere, and develop essential skills in subjects like math, language, science, and social studies. Our goal is to inspire a love of learning in every child, and to help them build a strong foundation for future success. Join the EduVista community today and watch your child thrive!</p>
                <Link className='link' to={"/study1"}>View Courses</Link>
            </div>
        </section>
        <div class="separations"></div>
        <section className='content-2'>
            <div className="content2-about">
                <h2 data-aos="fade-right" data-aos-duration="1400">Students in Classes 6-8</h2>
                <p data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300" >At EduVista, we understand that middle school is a critical phase in a student's educational journey. That's why we're dedicated to providing a comprehensive online learning platform that helps students in classes 6-8 build a strong foundation in core subjects like math, science, English, and social studies. Our team of experienced educators has designed interactive lessons, quizzes, and activities that make learning engaging, fun, and easy to understand. With EduVista, students can learn at their own pace, review difficult concepts, and get ahead in their studies. Our platform also provides personalized feedback, progress tracking, and support from certified teachers to help students overcome challenges and achieve their academic goals. Join the EduVista community today and empower your child to succeed in middle school and beyond!</p>
        <Link className='link1' to={"/study2"}>View Courses</Link>
        </div>
        <div className="content2-img" data-aos="zoom-in" data-aos-duration="1400">
                <img src={class2} alt="" />
            </div>
        </section>
        <div class="separations"></div>
        <section className="content-3">
        <div className="content2-img" data-aos="zoom-in" data-aos-duration="1400">
                <img src={class3} alt="" />
            </div>
            <div className="content3-about">
                <h2 data-aos="fade-right" data-aos-duration="1400">Students in Classes 9-10</h2>
                <p data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">As students enter the crucial years of classes 9 and 10, they need a strong foundation in core subjects to excel in their board exams and beyond. At EduVista, we're committed to providing a comprehensive online learning platform that helps students build a deep understanding of complex concepts in math, science, English, and social studies. Our team of experienced educators has crafted engaging lessons, practice exercises, and quizzes that cater to the specific needs of students in these critical years. With EduVista, students can review and reinforce their learning, clarify doubts, and develop essential skills in problem-solving, critical thinking, and time management. Our platform also provides personalized feedback, progress tracking, and support from certified teachers to help students achieve their academic goals and prepare for their future careers. Join the EduVista community today and empower your child to succeed in classes 9 and 10, and set them up for success in their future endeavors!</p>
                <Link className='link2' to={"/study3"}>View Courses</Link>
            </div>
        </section>
        <div class="separations"></div>
        <section className='content-4'>
          <div className="content4-about">
            <h2 data-aos="fade-right" data-aos-duration="1400">Students in Classes 11-12</h2>
            <p data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">As students enter the final years of their school education, they need a strong foundation in their chosen subjects to excel in their board exams and competitive entrance exams. At EduVista, we're dedicated to providing a comprehensive online learning platform that helps students in classes 11 and 12 master complex concepts, develop critical thinking skills, and build a strong foundation for their future careers. Our team of experienced educators has crafted in-depth lessons, practice exercises, and quizzes that cater to the specific needs of students in these critical years. With EduVista, students can review and reinforce their learning, clarify doubts, and develop essential skills in problem-solving, analysis, and time management. Our platform also provides personalized feedback, progress tracking, and support from certified teachers to help students achieve their academic goals, prepare for competitive exams like JEE, NEET, and CBSE, and make informed decisions about their future careers. Join the EduVista community today and empower your child to succeed in classes 11 and 12, and set them up for success in their future endeavors!</p>  
        <Link className='link3' to={"/study4"}>View Courses</Link>
        </div>
        <div className="content4-img" data-aos="zoom-in" data-aos-duration="1400">
            <img src={class4} alt="" />
        </div>
        </section>
        <div class="separations"></div>
        <section className="content-5">
        <div className="content5-img" data-aos="zoom-in" data-aos-duration="1400">
            <img src={class5} alt="" />
        </div>
        <div className="content5-about">
            <h2 data-aos="fade-right" data-aos-duration="1400">Students in Higher Classes</h2>
            <p data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">Welcome to EduVista, your trusted online learning partner for higher studies! After completing 12th, students embark on a new journey, pursuing undergraduate and postgraduate degrees, diplomas, and professional courses. At this critical stage, it's essential to have a strong foundation in your chosen subject to excel in academics, crack competitive exams, and build a successful career. Our online learning platform is designed to support students in higher studies, providing comprehensive study materials, practice exercises, and quizzes that cater to their specific needs. Our team of experienced educators has crafted in-depth lessons covering a wide range of subjects, from engineering, medicine, and law to commerce, arts, and science. With EduVista, students can review and reinforce their learning, clarify doubts, and develop essential skills in critical thinking, problem-solving, and research.</p>
        <Link className='link4' to={"/study5"}>View Courses</Link>
        </div>
        </section>
        </div>
    </div>
  )
}

export default Courses
