import { Route } from 'react-router-dom';
import ProtectedComponent from '../components/ProtectedComponent';
import { ILayoutProps } from '../components/Layout';

export interface IRoutesArgs {
  id: number;
  name: string;
  path: string;
  component: React.FC;
  layout: React.FunctionComponent<ILayoutProps>;
  isProtected: boolean;
  children?: [IRoutesArgs];
}
const renderNestedRoutes = (route: IRoutesArgs) => {
  if ('children' in route && Array.isArray(route.children)) {
    return route.children.map((child) => (
      <Route key={child.id} path={child.path} element={<child.component />}>
        {renderNestedRoutes(child)}
      </Route>
    ));
  } else {
    return null;
  }
};

const renderRoutes = (routes: Array<IRoutesArgs>) => {
  console.log({ routes });
  return routes.map((route) => {
    if (route.name === 'Not Found') {
      if (route.name === 'Not Found') {
        return (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        );
      }
    }
    return (
      <Route
        key={route.id}
        path={route.path}
        element={
          route.isProtected ? (
            <ProtectedComponent>
              <route.layout />
            </ProtectedComponent>
          ) : (
            <route.layout />
          )
        }
      >
        <Route index element={<route.component />} />
        {renderNestedRoutes(route)}
      </Route>
    );
  });
};

export default renderRoutes;
