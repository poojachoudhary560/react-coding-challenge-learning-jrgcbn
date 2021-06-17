import React, { useEffect, useState } from 'react';

const Lessons = (props) => {
 
  const allLessons = props.data
  return (
    <div className="course">
   
      <p>lessons</p>
      {
        allLessons.map((lesson, index) => {
          return <>
          <p>Lesson {index+1}: {' '} 
          <a href={lesson.videoUrl} target="_blank">
            {lesson.title}
          </a>
          </p>
          
          </>
        })
      }
    </div>
  );
};

export default Lessons;
