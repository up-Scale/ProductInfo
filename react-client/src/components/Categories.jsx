import React from 'react';
import ListUl from './styled-components/Ul.jsx';
import ListLi from './styled-components/Li.jsx';

const Categories = ({categories}) => {
  return(
    <ListUl>
      {categories.map( (cat, i) => 
        <ListLi key={i}>
          {i === categories.length - 1 ? `${cat.name}`: `${cat.name} > `}
        </ListLi>  
      )}
    </ListUl>
  )
}

export default Categories;