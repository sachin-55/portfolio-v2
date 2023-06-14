import React, { useState, useEffect } from 'react';
import { WeatherStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import { Text } from '@chakra-ui/react';

type Props = {};

const Weather = (props: Props) => {
  const { colors } = useCustomTheme();
  const [location, setLocation] = useState({});

  useEffect(() => {}, []);

  return (
    <WeatherStyled colors={colors}>
      <Text className="title">Today</Text>
    </WeatherStyled>
  );
};

export default Weather;
