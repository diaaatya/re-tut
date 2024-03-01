import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './CourseDetail.css';
import course1Image from '../images/courses/course_[1].jpg';
import course2Image from '../images/courses/course_[2].jpg';
import course3Image from '../images/courses/course_[3].jpg';
import course4Image from '../images/courses/course_[4].jpg';
import course5Image from '../images/courses/course_[5].jpg';
import course6Image from '../images/courses/course_[6].jpg';
import course7Image from '../images/courses/course_[7].jpg';
import course8Image from '../images/courses/course_[8].jpg';
function CourseDetail() {
  const { id } = useParams();

  // Sample course data
  const courses = [
    { 
      id: 1, 
      title: 'Course 1', 
      tag: 'Tag A', 
      duration: '4 weeks', 
      imageUrl: course1Image,
      isPremium: true,
    },
    { 
      id: 2, 
      title: 'Course 2', 
      tag: 'Tag B', 
      duration: '6 weeks', 
      imageUrl: course2Image,
      isPremium: false,
    },
    { 
      id: 3, 
      title: 'Course 3', 
      tag: 'Tag A', 
      duration: '8 weeks', 
      imageUrl: course3Image,
      isPremium: true,
    },
    { 
      id: 4, 
      title: 'Course 4', 
      tag: 'Tag C', 
      duration: '5 weeks', 
      imageUrl: course4Image,
      isPremium: false,
    },
    { 
      id: 5, 
      title: 'Course 5', 
      tag: 'Tag B', 
      duration: '10 weeks', 
      imageUrl: course5Image,
      isPremium: true,
    },
    { 
      id: 6, 
      title: 'Course 6', 
      tag: 'Tag A', 
      duration: '7 weeks', 
      imageUrl: course6Image,
      isPremium: false,
    },
    { 
      id: 7, 
      title: 'Course 7', 
      tag: 'Tag C', 
      duration: '9 weeks', 
      imageUrl: course7Image,
      isPremium: true,
    },
    { 
      id: 8, 
      title: 'Course 8', 
      tag: 'Tag B', 
      duration: '3 weeks', 
      imageUrl: course8Image,
      isPremium: false,
    },
    // Add more courses with their respective images
  ];
  const [expandedChapters, setExpandedChapters] = useState([]);

  // Function to toggle chapter expansion
  const toggleChapter = (chapterId) => {
    if (expandedChapters.includes(chapterId)) {
      setExpandedChapters(expandedChapters.filter(id => id !== chapterId));
    } else {
      setExpandedChapters([...expandedChapters, chapterId]);
    }
  };

  // Find the course with the matching id
  const selectedCourse = courses.find(course => course.id === parseInt(id));
  console.log(selectedCourse)
  if (!selectedCourse) {
    return <div>Loading...</div>; // Add loading indicator if course is not found
  }
  const fakeChapters = [
    {
      id: 1,
      title: 'Chapter 1: Introduction',
      lessons: [
        { id: 1, title: 'Lesson 1: Getting Started', completed: true },
        { id: 2, title: 'Lesson 2: Basic Concepts', completed: true },
        { id: 3, title: 'Lesson 3: Advanced Topics', completed: true },
        { id: 4, title: 'Lesson 4: Case Studies', completed: true },
        { id: 5, title: 'Lesson 5: Final Project', completed: true }
      ]
    },
    {
      id: 2,
      title: 'Chapter 2: Intermediate',
      lessons: [
        { id: 6, title: 'Lesson 1: Advanced Techniques', completed: true },
        { id: 7, title: 'Lesson 2: Practical Examples', completed: false },
        { id: 8, title: 'Lesson 3: Real-world Applications', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Chapter 3: Advanced',
      lessons: [
        { id: 9, title: 'Lesson 1: Advanced Algorithms', completed: false },
        { id: 10, title: 'Lesson 2: Optimization Techniques', completed: false },
        { id: 11, title: 'Lesson 3: Machine Learning', completed: false }
      ]
    }
    // Add more chapters as needed
  ];

  // State to keep track of expanded chapters

  return (
    <div className="course-detail-container">
      <div className="course-detail-header">
        <img src={selectedCourse.imageUrl} alt={selectedCourse.title} />
        <h2 className="course-title">{selectedCourse.title}</h2>
        <p className="course-duration">Duration: {selectedCourse.duration}</p>
      </div>
      <div className="course-detail-chapters">
        {fakeChapters.map(chapter => (
          <div key={chapter.id} className={`chapter ${expandedChapters.includes(chapter.id) ? 'expanded' : ''}`}>
            <div className="chapter-title" onClick={() => toggleChapter(chapter.id)}>
              {chapter.title}
            </div>
            <div className="chapter-lessons">
              {chapter.lessons.map(lesson => (
                <div key={lesson.id} className={`lesson ${lesson.completed ? 'completed' : ''}`}>
                  {lesson.title}
                  {lesson.completed ? <span className="lesson-icon">&#10004;</span> : <span className="lesson-icon">&#10008;</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}

export default CourseDetail;
