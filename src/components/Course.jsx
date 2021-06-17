import React, { useEffect, useState } from 'react';
import Lessons from './Lessons';

const Course = (props) => {
 
  const {id, title, description} = props.data
  const [lessons, setLessons] = useState([]);
  const [lessonsCount, setLessonsCount] = useState(0);

  const getLessons = () => {
   
    let lessonsUrl =
      'https://6091056250c2550017677756.mockapi.io/learning/lessons';

    fetch(lessonsUrl)
      .then(res => res.json())
      .then(res => {
        let courseLessons = res.filter(item => item.courseId == id)
        setLessons(courseLessons)
        setLessonsCount(courseLessons.length)
        //setCourses(res);
      });
 
  }
  return (
    <div className="course">
   
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={getLessons}>View Lessons</button>
      {
        JSON.stringify(lessons)
      }
      {
        lessonsCount>0 && <Lessons data={lessons}/>
      }
    </div>
  );
};

export default Course;
