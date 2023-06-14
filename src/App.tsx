import React from 'react';
import { Route, Outlet, Routes } from 'react-router-dom';
import { renderRoutes, routes } from './routes';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  );
};

export default App;
