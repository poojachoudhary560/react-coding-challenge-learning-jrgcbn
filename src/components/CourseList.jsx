import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Course from './Course';
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    let coursesUrl =
      'https://6091056250c2550017677756.mockapi.io/learning/courses';
    /* axios.get('coursesUrl', {
  responseType: 'application/json'
}).then(res => {
      console.log(res);
    }); */

    fetch(coursesUrl)
      .then(res => res.json())
      .then(res => {
        setCourses(res);
      });
  }, []);
  const data = {
    id: '1',
    title: 'ReactJS',
    description:
      'One of the simplest frameworks to learn – React – was developed at Facebook to fix code maintainability issues due to the constant addition of features in the app.'
  };

  return (
    <div>
      
      <h3>Course List</h3>
      {courses.length}
      {courses.map(courseItem => {
        return <Course data={courseItem}/>;
      })}
    </div>
  );
};

export default CourseList;