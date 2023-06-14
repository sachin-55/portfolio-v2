import React from 'react';
import { Outlet } from 'react-router-dom';
import { ILayoutProps } from '.';

export interface INoLayoutProps extends ILayoutProps {}

const NoLayout: React.FunctionComponent<INoLayoutProps> = ({ children }) => {
  return <>{children ? children : <Outlet />}</>;
};

export default NoLayout;
