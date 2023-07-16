import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import { GoListOrdered, GoListUnordered } from 'react-icons/go';
import { BiImageAdd, BiVideoPlus, BiFile } from 'react-icons/bi';

import './editor.css';
import { Clipboard, FileBlot, ImageBlot, PollBlot, VideoBlot } from './helpers';

const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false;

const fontSizeArr = [
  '3px',
  '6px',
  '8px',
  '10px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '26px',
  '28px',
  '30px',
  '32px',
  '34px',
  '36px',
  '42px',
  '48px',
  '54px',
  '60px',
  '72px'
];
var Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

// Add fonts to whitelist
let Font = Quill.import('formats/font');
// We do not add Sans Serif since it is the default
Font.whitelist = ['inconsolata', 'roboto', 'inter', 'lato', 'poppins', 'arial'];
Quill.register(Font, true);

Quill.register('modules/clipboard', Clipboard, true);

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';
Quill.register(ImageBlot);

VideoBlot.blotName = 'video';
VideoBlot.tagName = 'video';
Quill.register(VideoBlot);

FileBlot.blotName = 'file';
FileBlot.tagName = 'p';
FileBlot.className = 'file-inner-post';
Quill.register(FileBlot);

PollBlot.blotName = 'poll';
PollBlot.tagName = 'p';
PollBlot.className = 'poll-inner-post';
Quill.register(PollBlot);

interface Props {
  onEditorChange: Function;
  onFilesChange: Function;
  onPollsChange?: Function;
  initialContent: string;
  placeholder?: string;
}

interface State {
  editorHtml: string;
  files: [File] | [];
}

class CustomEditor extends Component<Props, State> {
  // bandId;

  // placeholder;

  // onEditorChange;

  // onFilesChange;

  // onPollsChange;

  _isMounted = false;

  private reactQuillRef: React.RefObject<ReactQuill | null> | null;
  private inputOpenImageRef: React.RefObject<HTMLInputElement>;
  private inputOpenVideoRef: React.RefObject<HTMLInputElement>;
  private inputOpenFileRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      editorHtml: __ISMSIE__ ? '<p>&nbsp;</p>' : this.props.initialContent,
      files: []
    };

    this.reactQuillRef = React.createRef();
    this.inputOpenImageRef = React.createRef();
    this.inputOpenVideoRef = React.createRef();
    this.inputOpenFileRef = React.createRef();
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = (html: string) => {
    this.setState(
      {
        editorHtml: html
      },
      () => {
        this.props.onEditorChange(this.state.editorHtml);
      }
    );
  };

  imageHandler = () => {
    if (this.inputOpenImageRef?.current) this.inputOpenImageRef.current.click();
  };

  videoHandler = () => {
    if (this.inputOpenVideoRef?.current) this.inputOpenVideoRef.current.click();
  };

  fileHandler = () => {
    if (this.inputOpenFileRef?.current) this.inputOpenFileRef.current.click();
  };

  pollHandler = () => {
    // if (this.inputOpenPollRef?.current) this.inputOpenPollRef.current.click();
  };

  insertImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0
    ) {
      const file = e.currentTarget.files[0];

      let formData = new FormData();
      const url = process.env.API_URL;
      const token = localStorage.getItem('jwtToken');

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          authorization: `Bearer ${token}`
        }
      };
      formData.append('file', file);

      axios
        .post(`${url}/api/v1/uploadImage`, formData, config)
        .then((response) => {
          console.log();

          if (response.data.status === 'success') {
            if (this.reactQuillRef) {
              //@ts-ignores-ignore
              const quill = this.reactQuillRef.getEditor();
              quill.focus();

              let range = quill.getSelection();
              let position = range ? range.index : 0;

              quill.insertEmbed(position, 'image', {
                src: response.data.result.secure_url,
                alt: 'Test Image'
              });

              quill.setSelection(position + 1);

              if (this._isMounted) {
                this.setState(
                  {
                    //@ts-ignores-ignore
                    files: [...this.state.files, file]
                  },
                  () => {
                    this.props.onFilesChange(this.state.files);
                  }
                );
              }
            }
          } else {
            return alert('failed to upload file');
          }
        });
    }
  };

  insertVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0
    ) {
      const file = e.currentTarget.files[0];

      let formData = new FormData();
      const url = process.env.API_URL;
      const token = localStorage.getItem('jwtToken');

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          authorization: `Bearer ${token}`
        }
      };
      formData.append('file', file);

      axios
        .post(`${url}/api/v1/uploadVideo`, formData, config)
        .then((response) => {
          console.log();

          if (response.data.status === 'success') {
            if (this.reactQuillRef) {
              //@ts-ignores-ignore
              const quill = this.reactQuillRef.getEditor();
              quill.focus();

              let range = quill.getSelection();
              let position = range ? range.index : 0;

              quill.insertEmbed(position, 'video', {
                src: response.data.result.secure_url,
                title: 'Test videos'
              });

              quill.setSelection(position + 1);

              if (this._isMounted) {
                this.setState(
                  {
                    //@ts-ignore
                    files: [...this.state.files, file]
                  },
                  () => {
                    this.props.onFilesChange(this.state.files);
                  }
                );
              }
            }
          } else {
            return alert('failed to upload file');
          }
        });
    }
  };

  insertFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0
    ) {
      const file = e.currentTarget.files[0];

      let formData = new FormData();
      const url = process.env.API_URL;
      const token = localStorage.getItem('jwtToken');

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          authorization: `Bearer ${token}`
        }
      };
      formData.append('file', file);

      axios
        .post(`${url}/api/v1/uploadFile`, formData, config)
        .then((response) => {
          console.log();

          if (response.data.status === 'success') {
            if (this.reactQuillRef) {
              //@ts-ignore
              const quill = this.reactQuillRef.getEditor();
              quill.focus();

              let range = quill.getSelection();
              let position = range ? range.index : 0;

              quill.insertEmbed(
                position,
                'file',
                response.data.result.secure_url
              );

              quill.setSelection(position + 1);

              if (this._isMounted) {
                this.setState(
                  {
                    //@ts-ignore
                    files: [...this.state.files, file]
                  },
                  () => {
                    this.props.onFilesChange(this.state.files);
                  }
                );
              }
            }
          } else {
            return alert('failed to upload file');
          }
        });
    }
  };

  render() {
    return (
      <div style={{ width: '75%', margin: '0 auto' }}>
        <div id="toolbar">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
          <button className="ql-script" value="sub" />
          <button className="ql-script" value="super" />

          <select
            className="ql-font"
            defaultValue="Sans Serif"
            onChange={(e) => e.persist()}
          >
            <option selected>Sans Serif</option>
            <option value="inconsolata">Inconsolata</option>
            <option value="roboto">Roboto</option>
            <option value="inter">Inter</option>
            <option value="lato">Lato</option>
            <option value="poppins">Poppins</option>
            <option value="arial">Arial</option>
          </select>
          {/* <select
            className="ql-header"
            defaultValue=""
            onChange={e => e.persist()}
          >
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
            <option value="6" />
            <option value="" />

          </select> */}
          <select
            className="ql-size"
            defaultValue="12px"
            onChange={(e) => e.persist()}
          >
            {fontSizeArr.map((val) => (
              <option value={val}>{val.split('px')[0]}</option>
            ))}
          </select>
          {/* <select
            className="ql-size"
            defaultValue="false"
            onChange={(e) => e.persist()}
          >
            <option value="small" />
            <option value="false" />
            <option value="large" />
            <option value="huge" />
          </select> */}

          <select
            className="ql-align"
            defaultValue=""
            onChange={(e) => e.persist()}
          >
            <option value="" />
            <option value="center" />
            <option value="justify" />
            <option value="right" />
          </select>
          <button className="ql-list" value="bullet">
            <GoListUnordered />
          </button>
          <button className="ql-list" value="ordered">
            <GoListOrdered />
          </button>
          <select
            className="ql-color"
            defaultValue="black"
            onChange={(e) => e.persist()}
          >
            <option value="red" />
            <option value="green" />
            <option value="blue" />
            <option value="yellow" />
            <option value="cyan" />
            <option value="black" />
            <option value="white" />
          </select>
          <select
            className="ql-background"
            defaultValue="white"
            onChange={(e) => e.persist()}
          >
            <option value="red" />
            <option value="green" />
            <option value="blue" />
            <option value="yellow" />
            <option value="cyan" />
            <option value="white" />
            <option value="black" />
          </select>
          <button className="ql-insertImage">
            <BiImageAdd />
          </button>
          <button className="ql-insertVideo">
            <BiVideoPlus />
          </button>
          <button className="ql-insertFile">
            {' '}
            <BiFile />
          </button>
          <button className="ql-link" />
          <button className="ql-code-block" />
          <button className="ql-video" />
          <button className="ql-blockquote" />
          <button className="ql-indent" value="-1" />
          <button className="ql-indent" value="+1" />

          {/* <button className="ql-clean" /> */}
        </div>
        <ReactQuill
          ref={(el) => {
            //@ts-ignore
            this.reactQuillRef = el;
          }}
          theme="snow"
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
          value={this.state.editorHtml}
          placeholder={this.props.placeholder}
        />
        <input
          type="file"
          accept="image/*"
          ref={this.inputOpenImageRef}
          style={{ display: 'none' }}
          onChange={this.insertImage}
        />
        <input
          type="file"
          accept="video/*"
          ref={this.inputOpenVideoRef}
          style={{ display: 'none' }}
          onChange={this.insertVideo}
        />
        <input
          type="file"
          accept="*"
          ref={this.inputOpenFileRef}
          style={{ display: 'none' }}
          onChange={this.insertFile}
        />
      </div>
    );
  }

  modules = {
    // syntax: true,
    toolbar: {
      container: '#toolbar',
      handlers: {
        insertImage: this.imageHandler,
        insertVideo: this.videoHandler,
        insertFile: this.fileHandler,
        insertPoll: this.pollHandler
      }
    }
  };

  formats = [
    // 'header',
    'size',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'script',
    'script',
    'align',
    'list',
    'list',
    'color',
    'background',
    'image',
    'video',
    'file',
    'link',
    'code-block',
    'video',
    'blockquote',
    'indent',
    'indent'
  ];
}

// CustomEditor.prototype = {
//   onEditorChange: PropTypes.func.isRequired,
//   onFilesChange: PropTypes.func.isRequired,
//   initialContent: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired
// };

export default CustomEditor;
