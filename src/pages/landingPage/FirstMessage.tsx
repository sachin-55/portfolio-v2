import React from 'react';
import { FirstMessageStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';

type Props = {};

const FirstMessage = (props: Props) => {
  const { colors } = useCustomTheme();

  return (
    <FirstMessageStyled colors={colors}>
      <div className="heading">Hello There!</div>
      <div>Let's explore my journey. </div>
    </FirstMessageStyled>
  );
};

export default FirstMessage;
