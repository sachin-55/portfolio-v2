import React from 'react';
import { ContainerStyled, LandingPageStyled, MenuStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import Header from './Header';
import Weather from './Weather';

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  const { colors, changeColors } = useCustomTheme();

  return (
    <LandingPageStyled isLandedOnEvenTime={false} colors={colors}>
      <Header />
      <ContainerStyled>
        <Weather />
        <MenuStyled>Menus</MenuStyled>
      </ContainerStyled>
    </LandingPageStyled>
  );
};

export default LandingPage;
