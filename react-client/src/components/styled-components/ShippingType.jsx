import React from 'react';
import styled, {css} from 'styled-components';

const ShippingType = styled.span`
  box-sizing: border-box;
  color: rgb(24, 215, 204);
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.9px;
  margin: 0px;
  text-transform: uppercase;

  ::before {
    content: '🚚 ';
  }
`

export default ShippingType;