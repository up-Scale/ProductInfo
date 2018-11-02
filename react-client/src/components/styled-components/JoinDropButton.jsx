import React from 'react';
import styled, {css} from 'styled-components';

const JoinDropButton = styled.button`
  background-color: rgb(20, 182, 173);
  border-color: rgb(20, 182, 173);
  border-bottom-color: rgb(20, 182, 173);
  border-left-color: rgb(20, 182, 173);
  border-right-color: rgb(20, 182, 173);
  border-top-color: rgb(20, 182, 173);
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
  color: rgb(255, 255, 255);
  height: 50px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  min-width: 90px;
  width: 250px;
  margin-right: 125px
  outline: none;
  text-transform: uppercase;
  vertical-align: center;

  :hover {
    background-color: rgb(24, 215, 204);
    border-bottom-color: rgb(24, 215, 204);
    border-left-color: rgb(24, 215, 204);
    border-right-color: rgb(24, 215, 204);
    border-top-color: rgb(24, 215, 204);
  }
`

export default JoinDropButton;