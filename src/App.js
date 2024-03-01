import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ClassRoom from './components/ClassRoom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import FloatingBoxes from './FloatingBoxes';
import NewsletterForm from './components/NewsletterForm';
import CourseDetail from './components/CourseDetail'; // Import the CourseDetail component
import SignupForm from './components/SignupForm';


function App() {

  return (
    <Router>
      <div>
      <Content  />
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const [courseData, setCourseData] = useState(null);

  // Function to handle receiving course data from CourseCard
  const receiveCourseData = (course) => {
    
    setCourseData(course);

  };


  return (
    <div>
      {/* Navbar is always rendered */}
      <Navbar />

      {/* Render other components based on the current route */}
      <Routes>
        <Route  path="/classroom" element={<ClassRoom  onCourseClick={receiveCourseData} />} />
        <Route path="/courses/:id" element={<CourseDetail course={courseData}    />} /> {/* Add the course detail route */}
        <Route path="/signup" element={<SignupForm />} /> {/* Add the course detail route */}
        <Route path="/" element={<>
              <HomeScreen />
              <FloatingBoxes />
              <NewsletterForm />
            </>} />
        {/* Add other routes as needed */}
      </Routes>
      
      {/* Additional components */}

    </div>
  );
}

export default App;
