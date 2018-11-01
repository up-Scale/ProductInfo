import React from 'react';
import styled, {css} from 'styled-components';

const SalePrice = styled.span`
  box-sizing: border-box;
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  color: rgb(4, 43, 40);
  font-size: 24px;
  font-weight: 500
  margin-left: 40px;

  ::before {
    content: '$'
  }
`

export default SalePrice;