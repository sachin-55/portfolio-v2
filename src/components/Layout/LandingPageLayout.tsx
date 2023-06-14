import React from 'react';
import { Outlet } from 'react-router-dom';
import { ILayoutProps } from '.';
import styled from 'styled-components';

export interface ILandingPageLayoutProps extends ILayoutProps {}

const LayoutStyled = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const LandingPageLayout: React.FunctionComponent<ILandingPageLayoutProps> = ({
  children
}) => {
  return <LayoutStyled>{children ? children : <Outlet />}</LayoutStyled>;
};

export default LandingPageLayout;
