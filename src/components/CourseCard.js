import React from 'react';

import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook

import './CourseCard.css'; // Import the CSS file
import { FaCrown } from "react-icons/fa6";


function CourseCard({ course , onCourseClick}) {
    console.log(course)
    const handleClick = () => {
        onCourseClick(course); // Pass course data to the parent component

      };
  
  return (
    <Link to={{ pathname: `/courses/${course.id}`}} className="course-card">
      <div onClick={handleClick(course)} className="course-header">
        <h3 className="course-title">{course.title}</h3>
        {course.isPremium ? (
          <span className="premium-label"><FaCrown />
          Premium</span>
        ) : (
          <span className="free-label">Free</span>
        )}
      </div>
      <div className="course-body">
        <img src={course.imageUrl} alt={course.title} className="course-image" />
        <p className="course-details">
          <span className="course-tag">{course.tag}</span>
          <span className="course-duration">{course.duration}</span>
        </p>
      </div>
    </Link>
  );
}

export default CourseCard;
