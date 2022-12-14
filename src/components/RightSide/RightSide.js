import React from 'react';
import './RightSide.css'
import { useEffect } from 'react';
import { useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';

const RightSide = () => {
    const [courses,setCourses]=useState([]);

  useEffect(()=>{
    fetch('https://learning-server-khaki.vercel.app/courses')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])

    return (
        <div className='card-style'>
           {
            courses.map(course=><CardComponent course={course}></CardComponent>)
           }
        </div>
    );
};

export default RightSide;