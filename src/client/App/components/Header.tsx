import * as React from 'react';
import * as StyledComponents from 'styled-components';

const logo = require('./logo.png');

const { default: styled } = StyledComponents;

const HeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  margin-top: 1rem;
  border-top: 0.3rem solid #3080e8;
  border-bottom: 0.3rem solid #3080e8;
`;

const Heading = styled.h1`
  text-align: center;
  color: ${({ color = '#3080e8' }) => color};
`;

const Img = styled.img`
  max-height: 25%;
  min-height: 25%;
  border: 0.15rem solid black;
  border-radius: 7%;
`;

interface HeaderProps {
  greetings?: string;
  color?: string;
}

export const Header = ({ greetings, color }: HeaderProps) => (
  <HeaderBox>
    <Heading color={color}>{greetings}</Heading>
    <Img src={logo} className="App-logo" alt="logo" />
  </HeaderBox>
);
