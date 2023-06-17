import React from 'react';
import { Outlet } from 'react-router-dom';
import { ILayoutProps } from '.';
import Menu from './Menu';
import { MainLayoutStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import Header from './MainHeader';

export interface ILandingPageLayoutProps extends ILayoutProps {}

const LandingPageLayout: React.FunctionComponent<ILandingPageLayoutProps> = ({
  children
}) => {
  const { colors } = useCustomTheme();

  return (
    <MainLayoutStyled colors={colors}>
      <Header />
      {children ? children : <Outlet />}
      <Menu />
    </MainLayoutStyled>
  );
};

export default LandingPageLayout;
