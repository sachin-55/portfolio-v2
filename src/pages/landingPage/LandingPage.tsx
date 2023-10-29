import React from 'react';
import { ContainerStyled, InfoTextStyled, LandingPageStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import Header from './Header';
import Weather from './Weather';
import FirstMessage from './FirstMessage';

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  const { colors } = useCustomTheme();

  return (
    <LandingPageStyled isLandedOnEvenTime={false} colors={colors}>
      <Header />
      <ContainerStyled colors={colors}>
        <FirstMessage />
        <Weather />
      </ContainerStyled>
    </LandingPageStyled>
  );
};

export default LandingPage;
