import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';

const RightSide = () => {
    const [courses,setCourses]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/courses')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])

    return (
        <div >
           {
            courses.map(course=><CardComponent course={course}></CardComponent>)
           }
        </div>
    );
};

export default RightSide;