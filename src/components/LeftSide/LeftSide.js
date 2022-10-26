import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const[categories,setCategories]=useState([])

useEffect(()=>{
    fetch("http://localhost:5000/course-category")
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[])

    return (
        <div>
            <h1>All courses</h1>
            {
                categories.map(category=><h4 key={category.id}>
                    <Link to={`/course/${category.id}`}>{category.name}</Link>
                </h4>)
            }
        </div>
    );
};

export default LeftSide;