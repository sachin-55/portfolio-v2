import React from 'react';
import {
  ContainerStyled,
  InfoTextStyled,
  LandingPageStyled,
  MenuStyled
} from './styles';
import { useCustomTheme } from '../../context/themeContext';
import Header from './Header';
import Weather from './Weather';
import Menu from './Menu';

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  const { colors } = useCustomTheme();

  return (
    <LandingPageStyled isLandedOnEvenTime={false} colors={colors}>
      <Header />
      <ContainerStyled colors={colors}>
        <Weather />
        <Menu />
      </ContainerStyled>
    </LandingPageStyled>
  );
};

export default LandingPage;
