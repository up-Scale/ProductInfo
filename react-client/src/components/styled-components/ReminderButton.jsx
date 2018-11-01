import React from 'react';
import styled, {css} from 'styled-components';

const ReminderButton = styled.button`
  float: right;
  background: none;
  outline: none;
  border: 0;
  padding: 5px;
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.9px;
  margin-right: 200px
  text-align: right;
  text-transform: uppercase;
  
  color: ${props => props.reminder ? "rgb(255, 114, 118)" : "rgb(132, 148, 147)"};

  ::before {
    content: '🔔';
  }
  :hover {
    color: rgb(24, 215, 204);
  }
`
export default ReminderButton;
