import React from 'react';
import { Outlet } from 'react-router-dom';
export interface IProtectedComponentProps {
  children: React.ReactNode;
}
const ProtectedComponent: React.FC<IProtectedComponentProps> = ({
  children
}) => {
  return <>{children ? children : <Outlet />}</>;
};

export default ProtectedComponent;
