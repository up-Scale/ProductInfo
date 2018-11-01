import React from 'react';
import styled, {css} from 'styled-components';

const TimeLeft = styled.span`
  box-sizing: border-box;
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.9px;
  margin-left: 40px
  text-transform: uppercase;

  ::before {
    content: '🕓 ';
  }
`

export default TimeLeft;