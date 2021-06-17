import React, { useEffect, useState } from 'react';
import Course from './Course';
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    let coursesUrl =
      'https://6091056250c2550017677756.mockapi.io/learning/courses';

    fetch(coursesUrl)
      .then(res => res.json())
      .then(res => {
        setCourses(res);
      });
  }, []);

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
