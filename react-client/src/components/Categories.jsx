import React from 'react';

const Categories = ({categories}) => {
  return(
    <ul>
      {categories.map( (cat, i) => 
        <li key={i}>{cat.name}</li>  
      )}
    </ul>
  )
}

export default Categories;