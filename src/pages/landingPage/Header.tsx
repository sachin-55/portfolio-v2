import React from 'react';
import { Button, Box, Text, Image } from '@chakra-ui/react';
import { FaRegSun, FaSun, FaInfo } from 'react-icons/fa';
import { useCustomTheme } from '../../context/themeContext';
import { HeaderStyled, InfoTextStyled } from './styles';
import Logo1 from '../../assets/logo/SB_LOGO_1.png';
import Logo2 from '../../assets/logo/SB_LOGO_2.png';

type Props = {};

const Header = (props: Props) => {
  const { colors, changeColors } = useCustomTheme();
  return (
    <HeaderStyled colors={colors}>
      <InfoTextStyled colors={colors}>
        <Image
          src={colors?.name === 'main' ? Logo1 : Logo2}
          height="40px"
          width="40px"
          mr="10px"
        />
        <Box className="text-wrapper">
          <Text className="name">Hey! I'm Sachin</Text>
          <Text className="sub-text"> I'm a Web Developer. </Text>
        </Box>
      </InfoTextStyled>
      <Box>
        {colors.name === 'light' && (
          <Button
            variant="unstyled"
            onClick={() => changeColors({ color: 'main' })}
            marginRight="15px"
          >
            <FaSun className="icon" color={colors.secondary} />
          </Button>
        )}
        {colors.name === 'main' && (
          <Button
            variant="unstyled"
            onClick={() => changeColors({ color: 'light' })}
            marginRight="15px"
          >
            <FaRegSun className="icon" color={colors.primary} />
          </Button>
        )}
        <Button variant="unstyled">
          <FaInfo
            className="icon"
            color={colors.name === 'main' ? colors.primary : colors.secondary}
          />
        </Button>
      </Box>
    </HeaderStyled>
  );
};

export default Header;
