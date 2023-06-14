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
export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  const { colors } = useCustomTheme();

  return (
    <LandingPageStyled isLandedOnEvenTime={false} colors={colors}>
      <Header />
      <ContainerStyled colors={colors}>
        <InfoTextStyled colors={colors}>
          <Text className="name">Sachin Bhattarai</Text>
          <Text className="sub-text"> Web Developer </Text>
        </InfoTextStyled>
        <Weather />
        <MenuStyled colors={colors}>
          <Link to="/">
            <FcSurvey className="icon" />
            CV
          </Link>
          <Link to="/">
            <FcReadingEbook className="icon" />
            Blogs
          </Link>
          <Link to="/">
            <FcCommandLine className="icon" />
            Projects
          </Link>
          <Link to="/">
            <FcContacts className="icon" />
            Contact
          </Link>
          <Link to="/">
            <FcServices className="icon" />
            API's
          </Link>
        </MenuStyled>
      </ContainerStyled>
    </LandingPageStyled>
  );
};

export default LandingPage;
