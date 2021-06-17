import React, { useEffect, useState } from 'react';

const Lessons = (props) => {
 
  const allLessons = props.data
  return (
    <div className="course lesson">
   
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
       {
        props.lessonsNotFound && <p>No Lessons available for this course.</p>
      }
    </div>
  );
};

export default Lessons;
