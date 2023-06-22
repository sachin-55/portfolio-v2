import Immutable from 'immutable';

export const CUSTOM_STYLE_MAP = {
  SUBSCRIPT: { fontSize: '0.6em', verticalAlign: 'sub' },
  SUPERSCRIPT: { fontSize: '0.6em', verticalAlign: 'super' },
  CODE: {
    background: '#000',
    color: '#fcfcfc',
    display: 'inline-block',
    padding: '2px',
    letterSpacing: '2px'
  }
};

export const blockRenderMap = Immutable.Map({
  'header-one': {
    element: 'h1'
  },
  'header-two': {
    element: 'h2'
  },
  'header-three': {
    element: 'h3'
  },
  'header-four': {
    element: 'h4'
  },
  'header-five': {
    element: 'h5'
  },
  'header-six': {
    element: 'h6'
  },
  blockquote: {
    element: 'blockquote'
  },
  'code-block': {
    element: 'pre'
  },
  'unordered-list-item': {
    element: 'ul'
  },
  'ordered-list-item': {
    element: 'ol'
  },
  div: {
    element: 'div'
  },
  section: {
    element: 'section'
  },
  unstyled: {
    element: 'div'
  }
});

// Add preset colors to the picker
export const presetColors = [
  '#ff00aa',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF'
];
