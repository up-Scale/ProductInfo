import React from 'react';
import ListUl from './styled-components/Ul.jsx';
import ListLi from './styled-components/Li.jsx';

const Categories = ({categories}) => {
  return(
    <ListUl>
      {categories.map( (cat, i) => 
        <ListLi key={i}>{`${cat.name} > `}</ListLi>  
      )}
    </ListUl>
  )
}

export default Categories;