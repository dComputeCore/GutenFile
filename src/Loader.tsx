import React from 'react';
import styled, { keyframes } from 'styled-components';

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Main = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: auto;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #2979FF transparent;
    animation: ${ring} 1.2s linear infinite;
  }
`;

const Loader: React.FC<{}> = () => {
  return (
    <Main />
  )
}

export default Loader;