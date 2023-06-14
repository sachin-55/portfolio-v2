import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useCustomTheme } from '../../context/themeContext';

type Props = {
  type: 'small' | 'tiny' | 'large';
};

const Loader = (props: Props) => {
  const { type } = props;
  const { colors } = useCustomTheme();
  return (
    <Box position="relative">
      <Spinner
        boxSize={
          type === 'tiny'
            ? '10px'
            : type === 'small'
            ? '20px'
            : type === 'large'
            ? '30px'
            : '40px'
        }
        thickness={type === 'tiny' ? '2px' : '3px'}
        speed="0.65s"
        color={colors.primary}
      />
    </Box>
  );
};

export default Loader;
