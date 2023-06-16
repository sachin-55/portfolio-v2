import React from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import { FaRegSun, FaSun, FaInfo } from 'react-icons/fa';
import { useCustomTheme } from '../../context/themeContext';
import { HeaderStyled, InfoTextStyled } from './styles';

type Props = {};

const Header = (props: Props) => {
  const { colors, changeColors } = useCustomTheme();
  return (
    <HeaderStyled colors={colors}>
      <InfoTextStyled colors={colors}>
        <Text className="name">Sachin Bhattarai</Text>
        <Text className="sub-text"> Web Developer </Text>
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
            <FaRegSun size={36} color={colors.primary} />
          </Button>
        )}
        <Button variant="unstyled">
          <FaInfo
            size={36}
            color={colors.name === 'main' ? colors.primary : colors.secondary}
          />
        </Button>
      </Box>
    </HeaderStyled>
  );
};

export default Header;
