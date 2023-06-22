import { styled } from 'styled-components';
import { PageColorsStyledType } from '../../@types/landingPage';

export const EditorWriterStyled = styled.div<PageColorsStyledType>`
  position: relative;
  padding-top: 90px;
  // color: #000;
  & .editor-menus {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;

    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    & .buttons-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    & .buttons-wrapper + .buttons-wrapper {
      margin-left: 20px;
    }

    & button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      cursor: pointer;

      border: none;
      background: none;
      padding: 3px 5px;
      box-shadow: 0px 0px 1px 0px #000;
      border-radius: 5px;

      & .icon {
        height: 14px;
        width: 14px;
      }

      &.selected {
        background: ${(props) => props.colors.primary};
        color: #fcfcfc;
      }
      &:hover {
        background: #0001;
      }
    }
    & button + button {
      margin-left: 5px;
    }
  }
  & .editor-container {
    border: 3px solid #ccc;
    min-height: 300px;
    border-radius: 30px;
    margin: 20px 0px;
    padding: 30px 20px;

    & .DraftEditor-root {
      background: #fff;
      padding: 10px;
      &
        .public-DraftEditorPlaceholder-root
        .public-DraftEditorPlaceholder-inner {
        font-size: 1.6rem;
        font-style: italic;
      }

      & .DraftEditor-editorContainer .public-DraftEditor-content {
        min-height: 300px;
        max-height: calc(100vh - 350px);
        overflow-y: auto;
      }
    }
  }
`;
