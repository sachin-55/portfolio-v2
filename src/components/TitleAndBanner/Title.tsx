import React from 'react';
import { TitleHeaderStyled } from './styles';

type Props = {
  title: string;
};

const Title = ({ title = 'Title Placeholder' }: Props) => {
  return <TitleHeaderStyled>{title}</TitleHeaderStyled>;
};

export default Title;
