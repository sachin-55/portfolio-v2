import { LandingPageLayout, NoLayout } from '../components/Layout';
import { LANDING_PAGE } from '../constants/routePaths';
import { LandingPage } from '../pages/landingPage';
import { NotFound } from '../pages/notFound';

const routes = [
  {
    id: 1,
    name: 'Landing Page',
    path: LANDING_PAGE,
    component: LandingPage,
    layout: LandingPageLayout,
    isProtected: false
  },

  {
    id: 9999,
    name: 'Not Found',
    path: '*',
    component: NotFound,
    layout: NoLayout,
    isProtected: false
  }
];

export default routes;
