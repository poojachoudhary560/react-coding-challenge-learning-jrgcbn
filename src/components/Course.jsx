import React, { useEffect, useState } from 'react';

const Course = (props) => {
 
  const {id, title, description} = props.data
  const [lessons, setLessons] = useState([]);

  const getLessons = () => {
   
    let lessonsUrl =
      'https://6091056250c2550017677756.mockapi.io/learning/lessons';

    fetch(lessonsUrl)
      .then(res => res.json())
      .then(res => {
        let courseLessons = res.filter(item => item.courseId == id)
        setLessons(courseLessons)
        //setCourses(res);
      });
 
  }
  return (
    <div className="course">
   
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={this.getLessons}>View Lessons</button>
      {
        JSON.stringify(lessons)
      }
    </div>
  );
};

export default Course;
