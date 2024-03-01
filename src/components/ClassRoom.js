import React, { useState } from 'react';
import './ClassRoom.css'; // Import the CSS file
import CourseCard from './CourseCard'; // Import the CourseCard component

// Sample course data array
const courses = [
    { 
      id: 1, 
      title: 'Course 1', 
      tag: 'Tag A', 
      duration: '4 weeks', 
      imageUrl:  require("../images/courses/course_[1].jpg"), // Example image URL for Course 1
      isPremium: true, // Example premium course
    },
    { 
      id: 2, 
      title: 'Course 2', 
      tag: 'Tag B', 
      duration: '6 weeks', 
      imageUrl:  require("../images/courses/course_[2].jpg"), // Example image URL for Course 2
      isPremium: false, // Example free course
    },
    { 
      id: 3, 
      title: 'Course 3', 
      tag: 'Tag A', 
      duration: '8 weeks', 
      imageUrl:  require("../images/courses/course_[3].jpg"), // Example image URL for Course 3
      isPremium: true, // Example premium course
    },
    { 
      id: 4, 
      title: 'Course 4', 
      tag: 'Tag C', 
      duration: '5 weeks', 
      imageUrl: require("../images/courses/course_[4].jpg"), // Example image URL for Course 4
      isPremium: false, // Example free course
    },
    { 
      id: 5, 
      title: 'Course 5', 
      tag: 'Tag B', 
      duration: '10 weeks', 
      imageUrl:  require("../images/courses/course_[5].jpg"), // Example image URL for Course 5
      isPremium: true, // Example premium course
    },
    { 
      id: 6, 
      title: 'Course 6', 
      tag: 'Tag A', 
      duration: '7 weeks', 
      imageUrl:  require("../images/courses/course_[6].jpg"), // Example image URL for Course 6
      isPremium: false, // Example free course
    },
    { 
      id: 7, 
      title: 'Course 7', 
      tag: 'Tag C', 
      duration: '9 weeks', 
      imageUrl: require("../images/courses/course_[7].jpg"), // Example image URL for Course 7
      isPremium: true, // Example premium course
    },
    { 
      id: 8, 
      title: 'Course 8', 
      tag: 'Tag B', 
      duration: '3 weeks', 
      imageUrl:  require("../images/courses/course_[8].jpg"), // Example image URL for Course 8
      isPremium: false, // Example free course
    }
  ];
  
function ClassRoom(props) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter courses based on selected tag
  const filteredCourses = selectedFilter === 'All' ? courses : courses.filter(course => course.tag === selectedFilter);

  return (
    <div className="classroom-container">
      <h2 className="classroom-header">Classroom</h2>

      {/* Filter bar with tags */}
      <div className="filter-bar">
        <button className={selectedFilter === 'All' ? 'filter-btn active' : 'filter-btn'} onClick={() => setSelectedFilter('All')}>All</button>
        <button className={selectedFilter === 'Tag A' ? 'filter-btn active' : 'filter-btn'} onClick={() => setSelectedFilter('Tag A')}>Tag A</button>
        <button className={selectedFilter === 'Tag B' ? 'filter-btn active' : 'filter-btn'} onClick={() => setSelectedFilter('Tag B')}>Tag B</button>
        {/* Add more filter buttons as needed */}
      </div>

      {/* Courses grid */}
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course}  onCourseClick={props.onCourseClick} />
        ))}
      </div>
    </div>
  );
}

export default ClassRoom;
