import React from 'react';
import {
  ContainerStyled,
  InfoTextStyled,
  LandingPageStyled,
  MenuStyled
} from './styles';
import { useCustomTheme } from '../../context/themeContext';
import Header from './Header';
import Weather from './Weather';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  FcCommandLine,
  FcContacts,
  FcReadingEbook,
  FcServices,
  FcSurvey
} from 'react-icons/fc';
import {
  APIS_PAGE,
  BLOG_PAGE,
  CONTACT_PAGE,
  My_CV_PAGE,
  PROJECTS_PAGE
} from '../../constants/routePaths';
export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  const { colors } = useCustomTheme();

  return (
    <LandingPageStyled isLandedOnEvenTime={false} colors={colors}>
      <Header />
      <ContainerStyled colors={colors}>
        <Weather />
        <MenuStyled colors={colors}>
          <Link to={My_CV_PAGE}>
            <FcSurvey className="icon" />
            CV
          </Link>
          <Link to={BLOG_PAGE}>
            <FcReadingEbook className="icon" />
            Blogs
          </Link>
          <Link to={PROJECTS_PAGE}>
            <FcCommandLine className="icon" />
            Projects
          </Link>
          <Link to={CONTACT_PAGE}>
            <FcContacts className="icon" />
            Contact
          </Link>
          <Link to={APIS_PAGE}>
            <FcServices className="icon" />
            API's
          </Link>
        </MenuStyled>
      </ContainerStyled>
    </LandingPageStyled>
  );
};

export default LandingPage;
