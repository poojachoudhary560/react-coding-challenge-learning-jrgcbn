import React, { useEffect, useState } from 'react';
import Course from './Course';
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [coursesNotFound, setCoursesNotFound] = useState(false);

  useEffect(() => {
    let coursesUrl =
      'https://6091056250c2550017677756.mockapi.io/learning/courses';

    fetch(coursesUrl)
      .then(res => res.json())
      .then(res => {
        setCourses(res);
        if(res.length === 0) {
          setCoursesNotFound(true)
        } else {
          setCoursesNotFound(false)
        }
      });
  }, []);

  return (
    <div>
      {courses.map(courseItem => {
        return <Course data={courseItem}/>;
      })}
      {coursesNotFound && <p
       style={{textAlign: 'center'}}>No courses found.</p>}
    </div>
  );
};

export default CourseList;
