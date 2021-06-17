import React, { useEffect, useState } from 'react';
import Lessons from './Lessons';

const Course = (props) => {
 
  const {id, title, description} = props.data
  const [lessons, setLessons] = useState([]);
  const [lessonsNotFound, setLessonsNotFound] = useState(false);
  const [displayLessons, setDisplayLessons] = useState(false);

  const getLessons = () => {
   
    let lessonsUrl =
      'https://6091056250c2550017677756.mockapi.io/learning/lessons';

    fetch(lessonsUrl)
      .then(res => res.json())
      .then(res => {
        let courseLessons = res.filter(item => item.courseId == id)
        // let courseLessons = []
        setLessons(courseLessons)
        setDisplayLessons(true)
        if(courseLessons.length === 0) {
          setLessonsNotFound(true)
        } else {
          setLessonsNotFound(false)
        }
      });
 
  }
  return (
    <div className="course">
   
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={getLessons}>View Lessons</button>
      {
        // JSON.stringify(lessons)
      }
      {
        displayLessons && <Lessons data={lessons}
        lessonsNotFound={ lessonsNotFound }
        />
      }
     
    </div>
  );
};

export default Course;
