import React, { useRef, useState } from 'react';
import {
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  convertToRaw
} from 'draft-js';
import { useCustomTheme } from '../../context/themeContext';
import { EditorWriterStyled } from './styles';
import { Box, Button, Flex } from '@chakra-ui/react';
import ColorPicker, { colorPickerPlugin } from 'draft-js-color-picker';

import {
  FaBold,
  FaCode,
  FaItalic,
  FaRedo,
  FaStrikethrough,
  FaSubscript,
  FaSuperscript,
  FaUnderline,
  FaUndo
} from 'react-icons/fa';
import {
  CUSTOM_STYLE_MAP,
  blockRenderMap,
  presetColors
} from './editor-helpers';

type Props = {};

// const HTMLTagToRawInlineStyleMap = new Map({
//   b: 'BOLD',
//   code: 'CODE',
//   del: 'STRIKETHROUGH',
//   em: 'ITALIC',
//   i: 'ITALIC',
//   s: 'STRIKETHROUGH',
//   strike: 'STRIKETHROUGH',
//   strong: 'BOLD',
//   u: 'UNDERLINE',
//   mark: 'HIGHLIGHT',
//   sup: 'SUPERSCRIPT',
//   sub: 'SUBSCRIPT'
// });

const EditorWriter = (props: Props) => {
  const { colors } = useCustomTheme();
  const editorRef = useRef(null);

  const [editorLocalState, setEditorLocalState] = useState<Draft.EditorState>(
    EditorState.createEmpty()
  );

  const getEditorState = () => editorLocalState;
  const picker = colorPickerPlugin(setEditorLocalState, getEditorState);

  const handleEditorChange = (editorState: Draft.EditorState) => {
    setEditorLocalState(editorState);
  };

  const _handleKeyCommand = (command: Draft.EditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorLocalState, command);
    if (newState) {
      setEditorLocalState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const handleInlineStyleToggle = (type: string) => {
    setEditorLocalState(RichUtils.toggleInlineStyle(editorLocalState, type));
  };

  const getClassNameCheckForSelectedInlineStyle = (type: string) => {
    return editorLocalState.getCurrentInlineStyle().has(type) ? 'selected' : '';
  };

  return (
    <EditorWriterStyled colors={colors}>
      <Box className="editor-menus">
        <Flex className="buttons-wrapper">
          <Button
            onClick={() =>
              setEditorLocalState(EditorState.undo(editorLocalState))
            }
          >
            <FaUndo className="icon" />
          </Button>
          <Button
            onClick={() =>
              setEditorLocalState(EditorState.redo(editorLocalState))
            }
          >
            <FaRedo className="icon" />
          </Button>
        </Flex>

        <Flex className="buttons-wrapper">
          <Button
            onClick={() => {
              handleInlineStyleToggle('BOLD');
            }}
            className={getClassNameCheckForSelectedInlineStyle('BOLD')}
          >
            <FaBold className="icon" />
          </Button>
          <Button
            onClick={() => {
              handleInlineStyleToggle('ITALIC');
            }}
            className={getClassNameCheckForSelectedInlineStyle('ITALIC')}
          >
            <FaItalic className="icon" />
          </Button>
          <Button
            onClick={() => {
              handleInlineStyleToggle('UNDERLINE');
            }}
            className={getClassNameCheckForSelectedInlineStyle('UNDERLINE')}
          >
            <FaUnderline className="icon" />
          </Button>
          <Button
            onClick={() => {
              handleInlineStyleToggle('STRIKETHROUGH');
            }}
            className={getClassNameCheckForSelectedInlineStyle('STRIKETHROUGH')}
          >
            <FaStrikethrough className="icon" />
          </Button>
          <Button
            onClick={() => {
              handleInlineStyleToggle('SUBSCRIPT');
            }}
            className={getClassNameCheckForSelectedInlineStyle('SUBSCRIPT')}
          >
            <FaSubscript className="icon" />
          </Button>
          <Button
            onClick={() => {
              handleInlineStyleToggle('SUPERSCRIPT');
            }}
            className={getClassNameCheckForSelectedInlineStyle('SUPERSCRIPT')}
          >
            <FaSuperscript className="icon" />
          </Button>
          <Button
            onClick={() => {
              handleInlineStyleToggle('CODE');
            }}
            className={getClassNameCheckForSelectedInlineStyle('CODE')}
          >
            <FaCode className="icon" />
          </Button>
        </Flex>
        <Flex className="buttons-wrapper">
          <ColorPicker
            toggleColor={(color: string) => picker.addColor(color)}
            presetColors={presetColors}
            color={picker.currentColor(editorLocalState) || '#000'}
          />
        </Flex>
      </Box>
      <Box className="editor-container">
        <Editor
          readOnly={false}
          ref={editorRef}
          editorState={editorLocalState}
          onChange={handleEditorChange}
          placeholder="Click here and start typing your contents here..."
          textAlignment="right"
          textDirectionality="LTR"
          spellCheck={true}
          stripPastedStyles={false}
          handleKeyCommand={_handleKeyCommand}
          customStyleMap={CUSTOM_STYLE_MAP}
          customStyleFn={picker.customStyleFn}
          blockRenderMap={blockRenderMap}
        />
      </Box>
    </EditorWriterStyled>
  );
};

export default EditorWriter;
