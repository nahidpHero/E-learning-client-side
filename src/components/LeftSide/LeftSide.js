import React from 'react';
import './LeftSide.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const[categories,setCategories]=useState([])

useEffect(()=>{
    fetch("https://learning-server-khaki.vercel.app/course-category")
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[])

    return (
        <div className='leftside-style'>
            <h1>All courses</h1>
            {
                categories.map(category=><h4 className='mt-2' key={category.id}>
                    <Link to={`/course/${category.id}`}>{category.name}</Link>
                </h4>)
            }
        </div>
    );
};

export default LeftSide;