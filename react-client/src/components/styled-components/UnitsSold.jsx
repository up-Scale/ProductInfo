import React from 'react';
import styled, {css} from 'styled-components';

const UnitsSold = styled.span`
  box-sizing: border-box;
  color: rgb(132, 148, 147);
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.9px;
  margin: 10px;
  text-transform: uppercase;

  ::before {
    content: '📦 ';
  }
`

export default UnitsSold;