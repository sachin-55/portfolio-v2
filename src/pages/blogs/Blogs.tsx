import React from 'react';
import { useCustomTheme } from '../../context/themeContext';
import { BlogsStyled } from './styles';
import { EditorWriter } from '../../components/Editor';

type Props = {};

function Blogs({}: Props) {
  const { colors } = useCustomTheme();
  return (
    <BlogsStyled colors={colors}>
      <EditorWriter />
    </BlogsStyled>
  );
}

export default Blogs;
