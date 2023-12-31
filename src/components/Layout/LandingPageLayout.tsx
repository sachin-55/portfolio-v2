import React from 'react';
import { Outlet } from 'react-router-dom';
import { ILayoutProps } from '.';
import styled from 'styled-components';
import Menu from './Menu';
import { LandingPageLayoutStyled } from './styles';

export interface ILandingPageLayoutProps extends ILayoutProps {}

const LandingPageLayout: React.FunctionComponent<ILandingPageLayoutProps> = ({
  children
}) => {
  return (
    <LandingPageLayoutStyled>
      {children ? children : <Outlet />}
      <Menu />
    </LandingPageLayoutStyled>
  );
};

export default LandingPageLayout;
