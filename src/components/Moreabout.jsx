import { forwardRef } from "react"
import './Moreabout.css'
import vid from '../video/vid1.mp4'
import img7 from '../images/abo.jpg'
import img8 from '../images/abo1.jpg'

function Moreabout ({text}, ref) {
  return (
    <div>
    <div ref={ref} className="head1">
      <h1>{text}</h1>
      <p>What we actually do</p>
      </div>
      <div className="about1">
        <div className="about-content1">
            <h2>What we do?</h2>
            <p>At EduVista, we empower students in higher studies to achieve their academic goals and succeed in their future careers. We provide a comprehensive online learning platform that offers:
                <ul><li>In-depth Study Materials: Our team of experienced educators has crafted detailed lessons, notes, and study guides covering a wide range of subjects, from engineering, medicine, and law to commerce, arts, and science.</li>
                <li>Practice Exercises and Quizzes: Our platform offers a vast repository of practice exercises, quizzes, and assessments that help students reinforce their learning, identify knowledge gaps, and track their progress.</li>
                <li>Personalized Feedback and Support: Our certified teachers and subject matter experts provide personalized feedback, guidance, and support to students, helping them clarify doubts, overcome challenges, and improve their performance.</li>
                <li>Competitive Exam Preparation: We offer specialized courses and resources to help students prepare for competitive exams like JEE, NEET, CAT, UPSC, and more, with a focus on building their skills, confidence, and exam-taking strategies.</li>
                <li>Career Guidance and Mentorship: Our platform provides access to career guidance, mentorship, and industry insights, enabling students to make informed decisions about their future careers and stay ahead in the competitive job market.</li>
                </ul>
                By leveraging our online learning platform, students can learn at their own pace, anytime, and anywhere, and gain a competitive edge in their academic pursuits. Join EduVista today and unlock your full potential!</p>
            </div>
            <div className="about-video">
                <video src={vid} controls autoPlay loop></video>
            </div>
            </div>
            <div className="sep"></div>
            <div className="about1">
                <div className="about-image1">
                    <img src={img7} alt="" />
                </div>
                <div className="about-content1">
                    <h2>Our Mission</h2>
                    <p>At EduVista, our mission is to inspire, educate, and empower students of age 8-20 to become curious, creative, and confident learners, equipped to succeed in an ever-changing world
                        <ul>
                            <li>Ignite Curiosity: To spark a love for learning, encouraging students to explore, discover, and develop a passion for knowledge.</li>
                            <li>Build Confidence: To provide a supportive online learning environment that fosters self-belief, resilience, and a growth mindset.</li>
                            <li>Develop Skills: To equip students with essential skills, including critical thinking, problem-solving, communication, and collaboration, to thrive in academics and beyond.</li>
                            <li>Personalized Learning: To offer tailored learning experiences that cater to individual learning styles, abilities, and interests.</li>
                            <li>Fun and Engagement: To make learning fun, interactive, and engaging, using innovative technologies and pedagogies.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="sep"></div>
            <div className="about1">
            <div className="about-content1">
                <h2>Our Vision</h2>
                <p>At EduVista, we envision a future where every student has the opportunity to reach their full potential, regardless of their background or circumstances. We strive to create a community of curious, creative, and confident learners who will shape the future and make a positive impact on the world. In this future, every student has access to quality education, regardless of their geographical location, socio-economic background, or ability. Learning is a joyful, interactive, and personalized experience that fosters a love for knowledge and a desire to learn.</p>
                <p> We imagine a world where students are empowered to take ownership of their learning, set goals, and develop a growth mindset. Education is not limited to academics, but also includes essential life skills, such as critical thinking, problem-solving, communication, and collaboration. Students are prepared to succeed in an ever-changing world, with the skills and adaptability to thrive in a rapidly evolving job market. Moreover, education is a catalyst for social change, promoting empathy, tolerance, and understanding among students from diverse backgrounds and cultures.</p>
                <p>Our aspirations are ambitious. We aim to become a leading online education platform, recognized for its innovative approach to learning, its commitment to accessibility, and its impact on student outcomes. We envision a community of millions of students, teachers, and parents, working together to achieve academic excellence and personal growth. We plan to develop strategic partnerships with educational institutions, organizations, and governments, to further our mission and vision. By leveraging technology and data analytics, we will continuously improve our platform, content, and services, ensuring that they remain relevant, effective, and engaging.</p>
                </div>
                <div className="about-image1">
                    <img src={img8} alt="" />
                </div>
            </div>
    </div>
  )
}

export default forwardRef(Moreabout);
