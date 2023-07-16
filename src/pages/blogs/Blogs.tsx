import React, { useState } from 'react';
import { useCustomTheme } from '../../context/themeContext';
import { BlogsStyled } from './styles';
import Editor from '../../components/Editor';

type Props = {};

const Blogs = ({}: Props) => {
  const { colors } = useCustomTheme();
  const [editorState, setEditorState] = useState<string>('');
  const [files, setFiles] = useState<[any] | []>([]);
  const [initialContent, setInitialContent] = useState('');

  const handleEditorChange = (edits: string) => {
    setEditorState(edits);
  };

  const onFilesChange = (files: [any] | null) => {
    if (files && Array.isArray(files) && files.length > 0) {
      setFiles(files);
    }
  };
  return (
    <BlogsStyled colors={colors}>
      <Editor
        onEditorChange={handleEditorChange}
        onFilesChange={onFilesChange}
        initialContent={initialContent}
        placeholder="Start Typing Here ..."
      />
    </BlogsStyled>
  );
};

export default Blogs;
