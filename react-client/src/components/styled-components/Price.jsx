import React from 'react';
import styled, {css} from 'styled-components';

const Price = styled.span`
  box-sizing: border-box;
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  color: rgb(132, 148, 147);
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  text-decoration: line-through;

  ::before {
    content: '$'
  }
`

export default Price;