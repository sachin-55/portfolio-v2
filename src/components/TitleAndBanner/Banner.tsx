import React from 'react';
import { useCustomTheme } from '../../context/themeContext';
import { TitleBannerStyled } from './styles';

type Props = {
  children: React.ReactNode;
};

function Banner({ children }: Props) {
  const { colors } = useCustomTheme();
  return <TitleBannerStyled colors={colors}>{children}</TitleBannerStyled>;
}

export default Banner;
