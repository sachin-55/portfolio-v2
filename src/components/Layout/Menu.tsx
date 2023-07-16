import React, { useState, useEffect } from 'react';
import { useCustomTheme } from '../../context/themeContext';
import { MenuStyled } from './styles';
import { Link } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import {
  FcCommandLine,
  FcContacts,
  FcReadingEbook,
  FcServices,
  FcSurvey
} from 'react-icons/fc';
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';
import {
  APIS_PAGE,
  BLOG_PAGE,
  CONTACT_PAGE,
  LANDING_PAGE,
  My_BIO_PAGE,
  PROJECTS_PAGE
} from '../../constants/routePaths';
import { FaHome } from 'react-icons/fa';
type Props = {};

const docElmWithBrowsersFullScreenFunctions =
  document.documentElement as HTMLElement & {
    mozRequestFullScreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;
  };

const docWithBrowsersExitFunctions = document as Document & {
  mozCancelFullScreen(): Promise<void>;
  webkitExitFullscreen(): Promise<void>;
  msExitFullscreen(): Promise<void>;
  fullscreen: any;
  mozFullscreen: any;
  webkitIsFullscreen: any;
};

const Menu = (props: Props) => {
  const { colors } = useCustomTheme();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    docElmWithBrowsersFullScreenFunctions.addEventListener(
      'fullscreenchange',
      () => {
        const fullScreenMode =
          docWithBrowsersExitFunctions.fullscreen ||
          docWithBrowsersExitFunctions.mozFullscreen ||
          docWithBrowsersExitFunctions.webkitIsFullscreen;
        fullScreenMode ? setIsFullScreen(true) : setIsFullScreen(false);
      }
    );

    return () => {
      docElmWithBrowsersFullScreenFunctions.removeEventListener(
        'fullscreenchange',
        () => {
          const fullScreenMode =
            docWithBrowsersExitFunctions.fullscreen ||
            docWithBrowsersExitFunctions.mozFullscreen ||
            docWithBrowsersExitFunctions.webkitIsFullscreen;
          fullScreenMode ? setIsFullScreen(true) : setIsFullScreen(false);
        }
      );
    };
  }, []);

  const enterFullScreen = () => {
    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) {
      /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) {
      /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
      /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) {
      /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
  };

  const toggleFullScreen = () => {
    const fullScreenMode =
      docWithBrowsersExitFunctions.fullscreen ||
      docWithBrowsersExitFunctions.mozFullscreen ||
      docWithBrowsersExitFunctions.webkitIsFullscreen;

    fullScreenMode ? exitFullScreen() : enterFullScreen();
    // fullScreenMode ? setIsFullScreen(false) : setIsFullScreen(true);
  };

  return (
    <MenuStyled colors={colors}>
      <Link to={LANDING_PAGE}>
        <FaHome className="icon" />
      </Link>
      <Link to={My_BIO_PAGE}>
        <FcSurvey className="icon" />
        <Text className="icon-text">Bio</Text>
      </Link>
      <Link to={BLOG_PAGE}>
        <FcReadingEbook className="icon" />
        <Text className="icon-text">Blogs</Text>
      </Link>
      <Link to={PROJECTS_PAGE}>
        <FcCommandLine className="icon" />
        <Text className="icon-text">Projects</Text>
      </Link>
      <Link to={CONTACT_PAGE}>
        <FcContacts className="icon" />
        <Text className="icon-text">Contact</Text>
      </Link>
      <Link to={APIS_PAGE}>
        <FcServices className="icon" />
        <Text className="icon-text">API's</Text>
      </Link>
      <Button
        as="a"
        border="none"
        bg="none"
        cursor="pointer"
        padding="0px"
        mx="10px"
        onClick={toggleFullScreen}
      >
        {!isFullScreen ? (
          <RxEnterFullScreen
            className="icon"
            color={
              colors?.name === 'main' ? colors?.lightText : colors?.textDark
            }
          />
        ) : (
          <RxExitFullScreen
            className="icon"
            color={
              colors?.name === 'main' ? colors?.lightText : colors?.textDark
            }
          />
        )}
      </Button>
    </MenuStyled>
  );
};

export default Menu;
