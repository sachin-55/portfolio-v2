import React from 'react';
import { Button, Box, Text, Image } from '@chakra-ui/react';
import { FaRegSun, FaSun, FaInfo } from 'react-icons/fa';
import { useCustomTheme } from '../../context/themeContext';
import { HeaderStyled, InfoTextStyled } from './styles';
import Logo1 from '../../assets/logo/SB_LOGO_1.png';
import Logo2 from '../../assets/logo/SB_LOGO_2.png';

type Props = {};

const MainHeader = (props: Props) => {
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
        <Text className="name">Hey! I'm Sachin</Text>
      </InfoTextStyled>
      <Box>
        {colors.name === 'light' && (
          <Button
            variant="unstyled"
            onClick={() => changeColors({ color: 'main' })}
            marginRight="15px"
          >
            <FaSun size={36} color={colors.secondary} />
          </Button>
        )}
        {colors.name === 'main' && (
          <Button
            variant="unstyled"
            onClick={() => changeColors({ color: 'light' })}
            marginRight="15px"
          >
            <FaRegSun size={36} color={colors.secondary} />
          </Button>
        )}
        <Button variant="unstyled">
          <FaInfo size={36} color={colors.secondary} />
        </Button>
      </Box>
    </HeaderStyled>
  );
};

export default MainHeader;
