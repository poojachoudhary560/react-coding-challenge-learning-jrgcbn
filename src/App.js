import React from 'react';

import CourseList from './components/CourseList';
import './style.css';

/**
 * 1.	Each course will display title and description of a course.
 * 2.	Each course will contain a “View Lessons” button which can be clicked to display
 *    lessons within a particular course.
 * 3.	Each lesson will display title and a “View” button which opens a YouTube video in new window.
 * 4.	(Optional) Write a few test cases if time is available.
 */

export default function App() {
  return (
    <div>
      <h1>Courses</h1>
      <CourseList />
    </div>
  );
}
