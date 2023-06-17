import { LandingPageLayout, MainLayout, NoLayout } from '../components/Layout';
import {
  APIS_PAGE,
  BLOG_PAGE,
  CONTACT_PAGE,
  LANDING_PAGE,
  My_BIO_PAGE,
  PROJECTS_PAGE
} from '../constants/routePaths';
import { Blogs } from '../pages/blogs';
import { ContactInfo } from '../pages/contactInfo';
import { ExtraFun } from '../pages/extraFun';
import { LandingPage } from '../pages/landingPage';
import { MyBio } from '../pages/myBio';
import { NotFound } from '../pages/notFound';
import { Projects } from '../pages/projects';

const routes = [
  {
    id: 10,
    name: 'Landing Page',
    path: LANDING_PAGE,
    component: LandingPage,
    layout: LandingPageLayout,
    isProtected: false
  },
  {
    id: 20,
    name: 'My Bio Page',
    path: My_BIO_PAGE,
    component: MyBio,
    layout: MainLayout,
    isProtected: false
  },
  {
    id: 30,
    name: 'Blogs Page',
    path: BLOG_PAGE,
    component: Blogs,
    layout: MainLayout,
    isProtected: false
  },
  {
    id: 40,
    name: 'Projects Page',
    path: PROJECTS_PAGE,
    component: Projects,
    layout: MainLayout,
    isProtected: false
  },
  {
    id: 50,
    name: 'Contacts Page',
    path: CONTACT_PAGE,
    component: ContactInfo,
    layout: MainLayout,
    isProtected: false
  },
  {
    id: 60,
    name: 'Open APIs Page',
    path: APIS_PAGE,
    component: ExtraFun,
    layout: MainLayout,
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
