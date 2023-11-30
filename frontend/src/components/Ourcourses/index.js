import React, { useEffect, useState } from "react";
import index from "./index.css";
import c1 from '../../assets/c1.jpeg'
import c2 from '../../assets/c2.jpeg'
import c3 from '../../assets/c3.jpeg'
import { SlCalender } from "react-icons/sl";
import { CiTimer } from "react-icons/ci";
import s1 from "../../assets/s11.jpg";
import s2 from "../../assets/s22.jpg";
import s3 from "../../assets/s3.webp";
import { FaStar } from "react-icons/fa";

export const Ourcourses = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show'); // Add 'show' class when in viewport
            }
          });
        }, { threshold: 0.1 }); // Adjust the threshold as needed
    
        const elements = document.querySelectorAll('.course');
        elements.forEach(element => observer.observe(element));
    
        return () => {
          elements.forEach(element => observer.unobserve(element)); // Cleanup on unmount
        };
      }, []);
   
    var coursesData = [
        {
          id: 1,
          name: 'Course 1',
          mode: 'Online',
          date: '2023-12-01',
          time: '10:00 AM',
          totalUsers: 400,
          rating: 5,
          description: 'Description of Course 1',
          isvisible:true
        },
        {
          id: 2,
          name: 'Course 2',
          mode: 'Offline',
          date: '2023-12-15',
          time: '2:30 PM',
          totalUsers: 250,
          rating: 4,
          description: 'Description of Course 2',
          isvisible:true
        },
        {
          id: 3,
          name: 'Course 3',
          mode: 'Online',
          date: '2023-12-10',
          time: '9:00 AM',
          totalUsers: 800,
          rating: 4.5,
          description: 'Description of Course 3',
          isvisible:true
        },
        
    
        {
            id: 4,
            name: 'Course 4',
            mode: 'Offline',
            date: '2023-11-25',
            time: '11:00 AM',
            totalUsers: 600,
            rating: 4.8,
            description: 'Description of Course 4',
            isvisible:true
          },
          {
            id: 5,
            name: 'Course 5',
            mode: 'Online',
            date: '2023-12-05',
            time: '3:45 PM',
            totalUsers: 300,
            rating: 3.7,
            description: 'Description of Course 5',
            isvisible:true
          },
      ]
      const showmore=()=>{
        
        
      }
     
  return (
    <>
      <div className="ourcourses">
        <div className="ourcourse-heading">Our Courses</div>
        <div className="course-flexbox">
      {coursesData.map(course => (
        course.isvisible && (<div className="course" key={course.id}>
          <div style={{ position: 'relative' }}>
            <div style={{overflow:'hidden'}}>
            <img src={c1} className="course-img" alt={`Course ${course.id}`} />
            </div>
            <div className="course-mode">{course.mode}</div>
          </div>
          <div className="course-div">
            <div className="course-details">
              <div className="course-name">{course.name}</div>
              <div className="date-time">
                <div><SlCalender style={{ color: 'rgba(207, 96, 96, 1)' }} /> Date: {course.date}</div>
                <div><CiTimer style={{ color: 'rgba(207, 96, 96, 1)' }} /> Time: {course.time}</div>
              </div>
              <div className="total-users">
                <img src={s1} alt="star" />
                <img src={s2} alt="star" />
                <img src={s3} alt="star" />
                <div style={{ color: 'rgba(85, 85, 85, 1)', position: 'absolute', right: '0', fontSize: '20px' }}>
                  {course.totalUsers > 1000 ? `${(course.totalUsers / 1000).toFixed(1)}k+` : `${course.totalUsers}+`}
                </div>
              </div>
              <div className="rating">
                {Array.from({ length: course.rating }, (_, index) => (
                  <FaStar key={index} style={{ color: 'rgba(240, 181, 34, 1)' }} />
                ))}
              </div>
            </div>
            <div className="course-desc">{course.description}</div>
            <div className="enroll-btn">Enroll Now</div>
          </div>
          
        </div>
        )
      ))}
      
    </div>
    <div style={{display:'flex',justifyContent:'center'}} ><span onClick={showmore}  className="ourcourse-footer">View All Courses</span></div>
      </div>
    </>
  );
};
